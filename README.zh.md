# Playwind — AI 全栈开发者代码测试

**完成时限：** 7 天  
**有问题？** 联系 xin@playwindgames.com

---

## 概述

本测试考察你**使用 AI 工具在陌生技术栈中快速上手并交付可用软件**的能力。  
我们不要求你事先熟悉 Nakama 或 React Native——我们考察的是你能否借助 AI 高效学习并完成开发。

**评估维度：** 逻辑正确性、代码质量、测试覆盖率，以及**你如何使用 AI**（记录在 `AI_USAGE.md` 中）。

---

## 快速开始

### 后端（Nakama TypeScript）

```bash
npm install
npm test          # 运行 Jest 测试
npm run build     # 编译 TypeScript bundle
npm run lint      # ESLint 检查
```

### 本地启动 Nakama

```bash
docker compose up
```

Nakama 控制台：http://localhost:7351（账号 / 密码：admin / admin）

### 前端（React Native / Expo）

```bash
cd rn-app
npm install
npm start         # 启动 Expo，用手机上的 Expo Go 扫码运行
```

> 默认连接 `localhost:7350`。  
> 如在**真机**上测试，请将 `rn-app/src/api/nakama.ts` 中的 `localhost` 改为你电脑的局域网 IP。

---

## 任务说明

### S1 — 后端项目初始化

参考文档：
- [Nakama TypeScript Runtime](https://heroiclabs.com/docs/nakama/server-framework/typescript-runtime/)
- [nakama-project-template](https://github.com/heroiclabs/nakama-project-template)

要求：
1. 使用 Rollup 作为打包工具（已配置好）。
2. 使用 TypeScript 开发，符合 ESLint 规范。
3. 在 `src/utils.ts` 中至少定义**一个 RPC 函数**，并在 `src/index.ts` 中注册。
4. 在 `tests/utils.test.ts` 中至少编写 **2 个 Jest 测试用例**——一个通过，一个失败。

---

### S2 — 每日登录奖励系统

在 `src/daily-login.ts` 中实现游戏每日登录奖励系统。

**规则：**
1. 玩家每日**首次登录**可领取当日奖励。
2. 每日奖励分 **7 个阶段**（1–7 枚金币），连续登录奖励递增；中断后从第 1 阶段重新计算。
3. **累计奖励**：以 30 天为周期，累计登录达到 **5 / 10 / 20 / 25 天**时，额外奖励对应数量的金币。
4. 30 天周期结束后，累计天数重置。

**示例：**

| 日期   | 操作     | 阶段奖励 | 累计奖励       |
|--------|----------|---------|---------------|
| 4月1日 | 登录     | 1 枚金币 | 无            |
| 4月2日 | 登录     | 2 枚金币 | 无            |
| 4月3日 | 未登录   | —       | —             |
| 4月4日 | 登录     | 1 枚金币 | 无（阶段重置）|
| 4月5日 | 登录     | 2 枚金币 | 无            |
| 4月6日 | 登录     | 3 枚金币 | 累计 5 天，+5 枚金币 |
| 4月11日| 登录     | 1 枚金币 | 累计 10 天，+10 枚金币 |
| 4月21日| 登录     | 4 枚金币 | 累计 20 天，+20 枚金币 |
| 4月26日| 登录     | 2 枚金币 | 累计 25 天，+25 枚金币 |
| 5月1日 | 登录     | 7 枚金币 | 累计天数重置  |

**实现要求：**
1. 在 `src/daily-login.ts` 中实现 `dailyLogin(state, currentDate)` 纯函数。
2. 实现 Nakama RPC handler `dailyLoginRpc`（通过 Nakama Storage API 读写玩家数据）。
3. 在 `tests/daily-login.test.ts` 中编写尽可能全面的 Jest 单元测试。

---

### S3 — React Native 前端

在 `rn-app/` 目录下，用 Expo 开发一个极简 mobile 应用，调用 `daily_login` RPC 并可视化展示结果。

**要求：**
1. App 启动时完成 Nakama 身份认证。
2. 界面展示：当前金币总数、上次获得的奖励、「领取每日奖励」按钮。
3. 点击按钮调用 `daily_login` RPC，更新界面数据。
4. 处理加载中和错误状态。

**提交方式：** 录制一段 **30–60 秒的录屏**，同时展示：
- 手机（模拟器或真机）上运行的 RN app，完整演示登录奖励流程
- 终端窗口显示 `docker compose logs -f nakama`（证明后端真实响应）

将录屏上传到本仓库或 Google Drive，并在下方填写链接。

---

### S4 — 知识问答

请直接在下方对应问题下填写答案。

**Q1.** 请解释 TypeScript 中 `keyof`、`typeof`、`in` 关键字的作用，并举例说明。

> *请在此填写*

**Q2.** 请解释 TypeScript 泛型（Generic）及其应用场景。

> *请在此填写*

**Q3.** 请解释 Protocol Buffers 是什么？优缺点是什么？

> *请在此填写*

**Q4.** 请解释命令模式（Command Pattern）是什么？  
并用 TypeScript 实现命令模式，以游戏角色的「攻击」和「防御」操作为例。要求：
- 需要有 `Command` 接口
- 角色可以执行命令并撤销命令
- 需要一个 `Invoker` 来存储命令历史并支持撤销功能

```typescript
// 请在此实现
```

---

## 提交方式

1. 将所有代码推送到本仓库。
2. 向 `main` 分支发起 **Pull Request**，并将 **`xinatcg`** 设为 Reviewer。
3. 确认 GitHub Actions（Jest 测试）已通过——在仓库的 Actions 标签页查看。
4. 确保 `AI_USAGE.md` 已完整填写。

---

## 录屏链接

<!-- 完成 S3 后在此填写录屏链接 -->

录屏：（填写链接）
