import Noodjs, { RuntimeConfig } from "components/apps/NoodJs";
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { MessageEventHandler } from "hooks/usePostMessage";
import { useCallback, type FC } from "react";
import WorkerEnvSource from './dist-worker-env-bundle.js.raw';
import { RpcMessage } from "./util";
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore

// no SSR
let daemonWebWorker: Worker;
if (typeof window !== 'undefined') {
  daemonWebWorker = new Worker(new URL('./daemon.ts', import.meta.url));
}

const Browser: FC<ComponentProcessProps> = (props) => {
  const libs: string[] = [];
  // const runtime = WorkerEnvSource;
  const runtime = `
  ${WorkerEnvSource}

  const channel = new MessageChannel();
  window.parent.postMessage({ type: 'HELLO_PORT' }, '*', [channel.port2]);
  const connection = makePortConnection(channel.port1);
  const { closed: capTpClosed, getBootstrap } = connect(connection)
  globalThis.capTpClosed = capTpClosed;
  globalThis.getBootstrap = getBootstrap;

  globalThis.loadApp = (exports) => {
    exports.make(getBootstrap())
  }
  `

  const runtimeConfig: RuntimeConfig = {
    libs,
    runtime,
  };

  const onMessage = useCallback<MessageEventHandler>(
    (event) => {
      console.log('onMessage', event);
      if (typeof event.data !== "object") return;
      /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
      const message = event.data as RpcMessage;
      if (message.type === "HELLO_PORT") {
        const port = event.ports[0];
        console.log('app HELLO PORT', port);
        daemonWebWorker.postMessage({ type: 'HELLO_PORT' }, [port]);
      }
    },
    [daemonWebWorker]
  );

  return (
    <Noodjs {...props} onMessage={onMessage} runtimeConfig={runtimeConfig} />
  );
};

export default Browser;
