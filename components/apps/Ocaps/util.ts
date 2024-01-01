const { freeze } = Object;
const harden = freeze;

export type RpcMessage = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  params: Record<string, any>;
  type: string;
};

export type HelloPortMessage = RpcMessage & {
  type: "HELLO_PORT";
  params: {
    appId: string;
  };
};
