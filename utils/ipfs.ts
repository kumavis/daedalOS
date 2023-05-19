import HTTPRequest, { HTTPRequestOptions } from "browserfs/dist/node/backend/HTTPRequest";
import type { BFSCallback } from "browserfs/dist/node/core/file_system";

// import * as BrowserFS from "public/System/BrowserFS/browserfs.min.js";
import * as BrowserFS from "browserfs";

import {
  HIGH_PRIORITY_REQUEST,
  IPFS_GATEWAY_URLS,
  MILLISECONDS_IN_SECOND,
  ONE_TIME_PASSIVE_EVENT,
} from "utils/constants";

const {
  FileSystem: { HTTPRequest: HTTPRequestFS },
} = BrowserFS;
type FileSystemOptions = typeof HTTPRequestFS.prototype.options;

let IPFS_GATEWAY_URL = "";

const isIpfsGatewayAvailable = (gatewayUrl: string): Promise<boolean> =>
  new Promise((resolve) => {
    const timeoutId = window.setTimeout(
      () => resolve(false),
      MILLISECONDS_IN_SECOND
    );
    const img = new Image();

    img.addEventListener(
      "load",
      () => {
        window.clearTimeout(timeoutId);
        resolve(true);
      },
      ONE_TIME_PASSIVE_EVENT
    );
    img.addEventListener(
      "error",
      () => {
        window.clearTimeout(timeoutId);
        resolve(false);
      },
      ONE_TIME_PASSIVE_EVENT
    );

    img.src = `${gatewayUrl.replace(
      "<CID>",
      // https://github.com/ipfs/public-gateway-checker/blob/master/src/constants.ts
      "bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe"
    )}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`;
  });

// found inconsistent results parsing ipfs:// urls with URL constructor across platforms
export const parseIpfsUrl = (ipfsUrl: string) => {
  const regex = /^([^:]+:)\/\/([^?]*)(\?.*)?$/;
  const match = ipfsUrl.match(regex);

  if (match) {
    return {
      pathname: match[2],
      protocol: match[1],
      search: match[3] || "",
    };
  }
  throw new Error(`Failed to parse IPFS url: "${ipfsUrl}"`);
};

export const getIpfsGatewayUrl = async (
  ipfsUrl: string,
  notCurrent?: boolean
): Promise<string> => {
  if (!IPFS_GATEWAY_URL || notCurrent) {
    const urlList = notCurrent
      ? IPFS_GATEWAY_URLS.filter((url) => url !== IPFS_GATEWAY_URL)
      : IPFS_GATEWAY_URLS;

    for (const url of urlList) {
      // eslint-disable-next-line no-await-in-loop
      if (await isIpfsGatewayAvailable(url)) {
        IPFS_GATEWAY_URL = url;
        break;
      }
    }

    if (!IPFS_GATEWAY_URL) return "";
  }

  const { pathname, protocol, search } = parseIpfsUrl(ipfsUrl);

  if (protocol !== "ipfs:") return "";

  const [cid = "", ...path] = pathname.split("/").filter(Boolean);
  const { CID } = await import("multiformats");

  return `${IPFS_GATEWAY_URL.replace(
    "<CID>",
    CID.parse(cid).toV1().toString()
  )}${path.join("/")}${search}`;
};

export const getIpfsFileName = async (
  ipfsUrl: string,
  ipfsData: Buffer
): Promise<string> => {
  const { pathname, searchParams } = new URL(ipfsUrl);
  const fileName = searchParams.get("filename");

  if (fileName) return fileName;

  const { fileTypeFromBuffer } = await import("file-type");
  const { ext = "" } = (await fileTypeFromBuffer(ipfsData)) || {};

  return `${pathname.split("/").filter(Boolean).join("_")}${
    ext ? `.${ext}` : ""
  }`;
};

export const getIpfsResource = async (ipfsUrl: string): Promise<Buffer> => {
  let response: Response | undefined;
  const requestOptions = {
    ...HIGH_PRIORITY_REQUEST,
    cache: "no-cache",
    credentials: "omit",
    keepalive: false,
    mode: "cors",
    referrerPolicy: "no-referrer",
    // eslint-disable-next-line unicorn/no-null
    window: null,
  } as RequestInit;

  try {
    response = await fetch(await getIpfsGatewayUrl(ipfsUrl), requestOptions);
  } catch (error) {
    if ((error as Error).message === "Failed to fetch") {
      response = await fetch(
        await getIpfsGatewayUrl(ipfsUrl, true),
        requestOptions
      );
    }
  }

  return response instanceof Response
    ? Buffer.from(await response.arrayBuffer())
    : Buffer.from("");
};

type IpfsLsResponse = {
  Objects: {
    Links: {
      Name: string;
    }[];
  }[];
}

const buildIpfsIndex = async (ipfsCid: string) => {
  const url = `https://dweb.link/api/v0/ls?arg=${ipfsCid}`;
  const response = await fetch(url);
  const data = await response.json() as IpfsLsResponse;
  const index = {} as Record<string, null>;
  // this seems to be sufficient info for a single folder
  // nested folders may need more work
  for (const object of data.Objects) {
    for (const link of object.Links) {
      index[link.Name] = null;
    }
  }

  return index;
};

export class IPFSGatewayFS extends HTTPRequestFS {
  public static readonly Name = "IPFSGatewayFS";

  public static readonly Options: FileSystemOptions = {
    cidPath: {
      description:
        "Used as the URL prefix for fetched files. Default: Fetch files relative to the index.",
      type: "string",
    },
  };

  /**
   * Construct an HTTPRequest file system backend with the given options.
   */

  public static Create(
    opts: FileSystemOptions,
    cb: BFSCallback<HTTPRequest>
  ): void {
    (async function (): Promise<HTTPRequestOptions> {
      const { cidPath } = opts;
      const gatewayUrl = await getIpfsGatewayUrl(`ipfs://${cidPath}`);
      const index = await buildIpfsIndex(cidPath);
      const config = {
        baseUrl: gatewayUrl,
        index,
      };
      return config;
    })()
    .then((config) => {
      HTTPRequest.Create(config, cb);
    })
    .catch((error) => {
      cb(error);
    });
  }
}
