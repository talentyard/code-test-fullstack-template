import { createMock } from "ts-auto-mock";
import { describe, expect, beforeEach, test } from "@jest/globals";
import { exampleRpc } from "../src/utils";

type Mock<T extends object> = ReturnType<typeof createMock<T>>;

// S1: Write at least 2 tests for your own RPC — one passing, one failing.
describe("S1 — exampleRpc", () => {
  let mockCtx: Mock<nkruntime.Context>;
  let mockLogger: Mock<nkruntime.Logger>;
  let mockNk: Mock<nkruntime.Nakama>;

  beforeEach(() => {
    mockCtx = createMock<nkruntime.Context>({ userId: "mock-user" });
    mockLogger = createMock<nkruntime.Logger>();
    mockNk = createMock<nkruntime.Nakama>();
  });

  test("returns success for valid payload", () => {
    const result = exampleRpc(mockCtx, mockLogger, mockNk, "{}");
    const parsed = JSON.parse(result as string);
    expect(parsed.success).toBe(true);
  });

  test("TODO: write a failing test case", () => {
    // Replace this with a meaningful failing test for your RPC implementation
    expect(true).toBe(false);
  });
});
