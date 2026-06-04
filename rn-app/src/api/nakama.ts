import { Client, Session } from "@heroiclabs/nakama-js";

// TODO: update host if needed (use your machine's LAN IP when testing on a real device)
const NAKAMA_HOST = "localhost";
const NAKAMA_PORT = "7350";
const NAKAMA_USE_SSL = false;
const SERVER_KEY = "defaultkey";

export const client = new Client(SERVER_KEY, NAKAMA_HOST, NAKAMA_PORT, NAKAMA_USE_SSL);

/**
 * Authenticate with Nakama using device ID.
 * Call this once on app start to get a session.
 */
export async function authenticate(deviceId: string): Promise<Session> {
  // TODO: implement authentication
  // Hint: client.authenticateDevice(deviceId, true, deviceId)
  throw new Error("Not implemented");
}

/**
 * Call the daily_login RPC on the Nakama server.
 * @param session  active Nakama session
 * @param date     optional date override "YYYY-MM-DD" (leave undefined for today)
 * @returns reward coins earned this login
 */
export async function callDailyLogin(
  session: Session,
  date?: string,
): Promise<number> {
  // TODO: call the "daily_login" RPC via client.rpc(session, "daily_login", payload)
  // Parse the response and return the reward value
  throw new Error("Not implemented");
}
