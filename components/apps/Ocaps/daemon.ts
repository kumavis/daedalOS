// build from https://github.com/endojs/endo/pull/1806
import "./dist/dist-daemon-web-bundle.js";
// import "../../../../endo/packages/daemon/dist-daemon-web-bundle";

import { HelloPortMessage, type RpcMessage } from "./util";

main();

async function main () {
  // @ts-ignore
  const { connectGuestPort } = await globalThis.startDaemon({
    makeWebWorker () {
      console.log('making endo worker in subworker')
      const worker = new Worker(new URL('./worker.ts', import.meta.url));
      return worker;
    }
  })

  console.log('hello from daemon!')
  
  addEventListener("message", (event) => {
    if (typeof event.data !== "object") return;
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
    const { type } = event.data as RpcMessage;
    if (type === "HELLO_PORT") {
      const message = event.data as HelloPortMessage;
      const { appId } = message.params;
      const port = event.ports[0];
      console.log('daemon HELLO PORT', port, appId);
      connectGuestPort(port, appId);
    }
  });
}
