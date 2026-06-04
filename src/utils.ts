// S1: Define your own RPC function here and register it in index.ts

export const exampleRpc: nkruntime.RpcFunction = function (
  _ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  _nk: nkruntime.Nakama,
  payload: string,
) {
  logger.info("exampleRpc called with payload: %s", payload);
  // TODO: implement your own RPC logic
  return JSON.stringify({ success: true });
};
