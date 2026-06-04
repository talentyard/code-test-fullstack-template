import { describe, expect, test } from "@jest/globals";
import { dailyLogin, PlayerLoginState } from "../src/daily-login";

function makeState(overrides: Partial<PlayerLoginState> = {}): PlayerLoginState {
  return {
    userId: "test-user",
    coins: 0,
    // TODO: add your new fields here with sensible defaults
    ...overrides,
  };
}

describe("Daily Login Reward", () => {
  test("first login grants 1 coin (stage 1)", () => {
    const state = makeState();
    const { reward } = dailyLogin(state, "2026-04-01");
    expect(reward).toBe(1);
  });

  test("consecutive login increases stage reward", () => {
    let state = makeState();
    ({ updatedState: state } = dailyLogin(state, "2026-04-01")); // day 1 → 1 coin
    const { reward } = dailyLogin(state, "2026-04-02");           // day 2 → 2 coins
    expect(reward).toBe(2);
  });

  test("missed day resets streak to stage 1", () => {
    let state = makeState();
    ({ updatedState: state } = dailyLogin(state, "2026-04-01")); // day 1
    ({ updatedState: state } = dailyLogin(state, "2026-04-02")); // day 2
    // skip 2026-04-03
    const { reward } = dailyLogin(state, "2026-04-04");           // reset → 1 coin
    expect(reward).toBe(1);
  });

  test("same-day login returns 0 (already claimed)", () => {
    let state = makeState();
    ({ updatedState: state } = dailyLogin(state, "2026-04-01"));
    const { reward } = dailyLogin(state, "2026-04-01"); // second call same day
    expect(reward).toBe(0);
  });

  test("cumulative reward triggers at 5 days", () => {
    let state = makeState();
    let totalReward = 0;
    const dates = [
      "2026-04-01", "2026-04-02", "2026-04-04",
      "2026-04-05", "2026-04-06",
    ];
    for (const date of dates) {
      const result = dailyLogin(state, date);
      totalReward += result.reward;
      state = result.updatedState;
    }
    // 5th cumulative day in period → +5 bonus coins
    // total = 1+2+1+2+3+5 = 14
    expect(totalReward).toBe(14);
  });

  test("cumulative count resets after 30-day period", () => {
    // TODO: test that cumulative days reset after LOGIN_GIFT_PERIOD_DAYS
  });

  test("stage reward wraps back to 1 after 7 consecutive days", () => {
    // TODO: login 8 consecutive days, day 8 should give 1 coin again
  });
});
