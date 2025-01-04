# 目录
.umi: 不要提交该目录至 git 仓库，这是 dev 时的临时文件目录，如入口文件、路由文件等，会临时生成到该目录
.umi-production: 不要提交该目录至 git 仓库，这是 build 时的临时文件目录，如入口文件、路由文件等，会临时生成到该目录
app.[tx|tsx]: 运行时配置文件，扩展运行时能力，如修改路由，修改 render 等
layout/index.ts: 全局布局，默认在所有路由下生效
pages: 
    - 约定式路由：默认以 pages/* 文件夹的文件层级结构来生成路由（与umi的约定）；
    - 配置式路由：component 若写为相对路径，将从该文件夹为起点开始寻找文件；
pages/404.tsx: 使用约定式路由，该文件会自动注册为全局 404 的 fallback 页面
global.(jlt)sx?: 全局前置脚本文件
global.(css|less|sass|scss): 全局样式文件
overrides.(css|less|sass|scss): 高优先级全局样式文件，用于覆盖第三方库样式，所有样式文件都会附加 body 前缀以抬高优先级
loading.(tsx|jsx): 全局加载组件
plugin.ts: 项目级 Umi 插件
favicon: 站点图标文件，当存在src/favicon.(ico|gif|png|jpg|jpge|svg|avif|webp)文件时，见会自动在产物中添加站点 favicon
