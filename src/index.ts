import { dailyLoginRpc } from "./daily-login";

function InitModule(
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  initializer: nkruntime.Initializer,
) {
  logger.info("Fullstack code test module loaded.");
  initializer.registerRpc("daily_login", dailyLoginRpc);

  // S1: Register your own RPC here
  // initializer.registerRpc("your_rpc_id", yourRpcFunction);
}

!InitModule && InitModule.bind(null); // eslint-disable-line
