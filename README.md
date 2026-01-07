# Annella's Blog

一个简约、优雅的个人博客网站，使用 Next.js 构建。

## ✨ 特性

- 📝 Markdown 写作支持
- 🎨 简约现代的设计风格
- 📱 完全响应式布局
- ⚡ 静态生成，访问速度快
- 🔍 SEO 友好
- 🎯 代码语法高亮
- 🚀 支持 Vercel / GitHub Pages 部署

## 🛠️ 技术栈

- **框架**: [Next.js 16](https://nextjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **排版**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Markdown**: [gray-matter](https://github.com/jonschlinkert/gray-matter) + [remark](https://remark.js.org/)

## 🚀 快速开始

## Getting Started

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

静态文件将生成在 `out` 目录。

## 📝 写作指南

在 `posts` 目录下创建 `.md` 文件，使用 Front Matter 定义元数据：

```markdown
---
title: 文章标题
date: 2026-01-07
excerpt: 文章摘要
tags: [标签1, 标签2]
---

# 文章内容

你的文章内容...
```

## 🚀 部署

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

### Vercel （推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成

### GitHub Pages

使用 GitHub Actions 自动部署，只需推送到 main 分支。

## 📚 项目结构

```
annella-blog/
├── app/                  # Next.js 应用目录
│   ├── layout.tsx       # 全局布局
│   ├── page.tsx         # 首页
│   ├── blog/            # 博客目录
│   │   ├── page.tsx     # 文章列表
│   │   └── [id]/
│   │       └── page.tsx # 文章详情
│   └── about/           # 关于页面
├── components/          # React 组件
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                 # 工具函数
│   └── posts.ts         # Markdown 处理
├── posts/               # Markdown 文章
│   ├── welcome.md
│   └── *.md
├── public/              # 静态资源
└── .github/workflows/   # GitHub Actions
```

## 💬 联系方式

- **网站**: [annella.site](https://annella.site)
- **Email**: annabellehu88@gmail.com

## 📝 License

MIT License
