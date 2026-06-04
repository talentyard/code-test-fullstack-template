# Playwind — AI Full Stack Developer Code Test

**Duration:** 7 days  
**Questions?** Contact xin@playwindgames.com

---

## Overview

This test evaluates your ability to **use AI tools to build across an unfamiliar stack**.
You are not expected to already know Nakama or React Native — you are expected to learn them
efficiently with AI assistance and deliver working software.

We assess: correctness, code quality, test coverage, and **how you use AI** (documented in `AI_USAGE.md`).

---

## Getting Started

### Backend (Nakama TypeScript)

```bash
npm install
npm test          # run Jest tests
npm run build     # compile TypeScript bundle
npm run lint      # ESLint check
```

### Start Nakama locally

```bash
docker compose up
```

Nakama console: http://localhost:7351 (admin / admin)

### Frontend (React Native / Expo)

```bash
cd rn-app
npm install
npm start         # starts Expo — scan QR with Expo Go on your phone
```

> The RN app connects to `localhost:7350` by default.  
> If testing on a **real device**, replace `localhost` in `rn-app/src/api/nakama.ts` with your machine's LAN IP.

---

## Tasks

### S1 — Backend Project Setup

Reference: [Nakama TypeScript Runtime](https://heroiclabs.com/docs/nakama/server-framework/typescript-runtime/)  
Reference: [nakama-project-template](https://github.com/heroiclabs/nakama-project-template)

Requirements:
1. Use Rollup as the bundler (already configured).
2. Write TypeScript following ESLint rules.
3. Define **at least one RPC** in `src/utils.ts` and register it in `src/index.ts`.
4. Write **at least 2 Jest tests** for your RPC in `tests/utils.test.ts` — one passing, one failing.

---

### S2 — Daily Login Reward System

Implement the game daily login reward system in `src/daily-login.ts`.

**Rules:**
1. A player can claim today's reward only on their **first login of the day**.
2. Daily reward has **7 stages** (1–7 coins); missing a day resets streak to stage 1.
3. **Cumulative reward**: within a 30-day period, reaching **5 / 10 / 20 / 25** cumulative logins grants bonus coins equal to that milestone number.
4. After 30 days in a period, cumulative count resets.

**Example:**

| Date   | Action    | Stage Reward | Cumulative Bonus |
|--------|-----------|-------------|-----------------|
| Apr 1  | Login     | 1 coin      | —               |
| Apr 2  | Login     | 2 coins     | —               |
| Apr 3  | No login  | —           | —               |
| Apr 4  | Login     | 1 coin      | — (reset)       |
| Apr 5  | Login     | 2 coins     | —               |
| Apr 6  | Login     | 3 coins     | +5 (day 5)      |
| Apr 11 | Login     | 1 coin      | +10 (day 10)    |
| Apr 21 | Login     | 4 coins     | +20 (day 20)    |
| Apr 26 | Login     | 2 coins     | +25 (day 25)    |
| May 1  | Login     | 7 coins     | reset           |

Requirements:
1. Implement `dailyLogin(state, currentDate)` in `src/daily-login.ts`.
2. Implement the Nakama RPC handler `dailyLoginRpc` (loads/saves state via Nakama Storage API).
3. Write comprehensive Jest tests in `tests/daily-login.test.ts`.

---

### S3 — React Native Frontend

Build a minimal Expo mobile app in `rn-app/` that consumes the `daily_login` RPC.

Requirements:
1. Authenticate with Nakama on app start.
2. Display: total coins, last reward earned, a "Claim Daily Reward" button.
3. Pressing the button calls the `daily_login` RPC and updates the UI.
4. Handle loading and error states.

**Submission:** record a **screen recording (30–60 seconds)** showing:
- The RN app running on a simulator or real device
- A terminal window showing `docker compose logs -f nakama` alongside

Upload the recording to the repo (or Google Drive and link in this README).

---

### S4 — Knowledge Questions

Answer directly below each question.

**Q1.** Explain `keyof`, `typeof`, and `in` in TypeScript with examples.

> *Your answer here*

**Q2.** What are TypeScript Generics? Describe a practical use case.

> *Your answer here*

**Q3.** What are Protocol Buffers? What are their pros and cons?

> *Your answer here*

**Q4.** What is the Command Pattern? Implement it in TypeScript using a game character's "attack" and "defend" actions. Requirements:
- A `Command` interface
- The character can execute and undo commands
- An `Invoker` that stores command history and supports undo

```typescript
// Your implementation here
```

---

## Submission

1. Push your work to this repository.
2. Open a **Pull Request** to `main` and set **`xinatcg`** as reviewer.
3. Make sure GitHub Actions (Jest) pass — check the Actions tab.
4. Ensure `AI_USAGE.md` is fully filled in.

---

## Screen Recording

<!-- Link or embed your screen recording here after completing S3 -->

Recording: (add link)
