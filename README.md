# WaytoAGI Tokyo 2026 峰会官方网站

该项目是为 **WaytoAGI Tokyo 2026 峰会有打造的沉浸式、多语言化、响应式的现代化官方落地页。
项目采用了 Apple WWDC 级别的极简黑金高科技质感设计，并完全由 React + Next.js 构建，配合 Framer Motion 实现了页面滚动时顺滑的视差和弹性动效。

## ✨ 核心特性

- **100% 像素级还原**：精确还原了多达 17 个复杂的专属异形布局版块（包含购票、会场指引、动态相册展示、历史峰会网格等）。
- **顶级交互动效**：基于 `framer-motion` 实现了极具流畅感的文字浮现、图片滚动差值（Parallax）、弹性下拉及物理阻尼微交互。
- **全站多语言 (i18n)**：通过严谨的底层 `LanguageContext` Context 抽象树，实现了中、英、日三国语言的【0 延迟瞬间无刷新热切】。并配有毛玻璃（Glassmorphism）质感的 Apple 级全局层级悬浮下拉菜单。
- **极致字体与排版**：全面切入 `SF Pro` 操作系统级抗锯齿字体栈以及 `Oswald` 磅礴标题字体，配合各种混合模式（Mix-blend）、网格阵列等高级排版审美。
- **高可维护性组件化架构**：彻底剥离静态与动态元素。包含从正文模块到独立抽离的巨型参数 JSON 多语言映射树，拥有极高的工程整洁度。

## 🚀 如何运行本项目

### 1. 环境依赖
请确保你的电脑环境上安装了 [Node.js](https://nodejs.org/) (推荐版本 v18+)。

### 2. 安装依赖包
克隆该项目后，在根目录下打开终端，安装运行必备包：
```bash
npm install
```

### 3. 启动本地开发服务
安装完成后，执行以下命令来启动带热更新的开发环境服务器：
```bash
npm run dev
```
成功启动后，请在浏览器中访问：`http://localhost:3000` 即可沉浸预览全站效果。

### 4. 生产环境构建打包
如果你需要将该页面部署到线上服务器（如 Vercel, AWS 等），请执行极其轻量的 Next.js 静态文件级编译：
```bash
npm run build
npm run start
```

## 🛠 核心技术栈
- **核心框架**: [Next.js](https://nextjs.org/) (App Router 最新特性)
- **UI & 样式网格**: React, [Tailwind CSS](https://tailwindcss.com/) (无头无侵入)
- **动效库与弹簧物理仿真**: [Framer Motion](https://www.framer.com/motion/)
- **响应图标组件**: [Lucide React](https://lucide.dev/)

---
*Powered by Next.js & meticulously crafted with advanced AI Agentic workflows.*
