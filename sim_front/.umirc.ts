/**
 * 配置文件
 * UMI 所有非运行时的配置
 *
 * 运行时配置一般位于 app.ts
 */

import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
  mock: false,
});
