// S2: Daily Login Reward System

const DAILY_REWARDS = [1, 2, 3, 4, 5, 6, 7]; // coins for day 1-7
const CUMULATIVE_REWARDS = new Map<number, number>([
  [5, 5],
  [10, 10],
  [20, 20],
  [25, 25],
]);
const LOGIN_GIFT_PERIOD_DAYS = 30;

const STORAGE_COLLECTION = "player_data";
const STORAGE_KEY = "login_state";

export interface PlayerLoginState {
  userId: string;
  coins: number;
  // TODO: add fields necessary to track the daily login reward process
  // Consider: last login date, current streak, cumulative days in period, etc.
}

/**
 * Core daily login logic — pure function, no Nakama dependency, fully testable.
 * @param state  current player login state (loaded from storage before calling)
 * @param currentDate  date string "YYYY-MM-DD", injectable for testing
 * @returns { reward, updatedState }
 */
export function dailyLogin(
  state: PlayerLoginState,
  currentDate: string,
): { reward: number; updatedState: PlayerLoginState } {
  // TODO: implement the daily login reward logic
  // Rules:
  //   1. Player can claim today's reward only on first login of the day.
  //   2. Daily reward has 7 stages (1-7 coins); resets to stage 1 after a missed day.
  //   3. Cumulative reward: every 5/10/20/25 days in a 30-day period grants bonus coins.
  //   4. After 30 days in a period, cumulative count resets.

  return { reward: 0, updatedState: state };
}

/**
 * Nakama RPC handler — loads state from storage, calls dailyLogin, saves back.
 * Payload: { "date": "YYYY-MM-DD" }  (optional, defaults to today for production)
 */
export const dailyLoginRpc: nkruntime.RpcFunction = function (
  ctx: nkruntime.Context,
  logger: nkruntime.Logger,
  nk: nkruntime.Nakama,
  payload: string,
) {
  // TODO: implement RPC handler
  // 1. Parse payload (date is optional, for test purposes)
  // 2. Load PlayerLoginState from Nakama storage
  // 3. Call dailyLogin(state, date)
  // 4. Save updatedState back to storage
  // 5. Return reward as JSON

  logger.info("daily_login called for user: %s", ctx.userId);
  return JSON.stringify({ reward: 0 });
};

export { DAILY_REWARDS, CUMULATIVE_REWARDS, LOGIN_GIFT_PERIOD_DAYS, STORAGE_COLLECTION, STORAGE_KEY };
