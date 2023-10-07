// import "./dist-daemon-web-bundle.js";
import "../../../../endo/packages/daemon/dist-daemon-web-bundle";
import { type RpcMessage } from "./util";

main();

async function main () {
  const { connectGuestPort } = await globalThis.startDaemon({
    makeWebWorker () {
      console.log('making endo worker in subworker')
      const worker = new Worker(new URL('./worker.ts', import.meta.url));
      return worker;
    }
  })
  
  console.log('hello from daemon!')
  
  addEventListener("message", (event) => {
    console.log('message in daemon', event);
    if (typeof event.data !== "object") return;
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */
    const message = event.data as RpcMessage;
    if (message.type === "HELLO_PORT") {
      const port = event.ports[0];
      console.log('daemon HELLO PORT', port);
      connectGuestPort(port);
    }
  });
}
