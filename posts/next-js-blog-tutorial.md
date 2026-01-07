---
title: 使用 Next.js 搭建个人博客完整指南
date: 2026-01-06
excerpt: 详细介绍如何使用 Next.js 和 Markdown 搭建一个现代化的个人博客网站。
tags: [Next.js, 教程, React]
---

# 使用 Next.js 搭建个人博客完整指南

在这篇文章中，我将分享如何从零开始使用 Next.js 搭建一个现代化的个人博客。

## 为什么选择 Next.js？

Next.js 是一个强大的 React 框架，它提供了：

- 🚀 **静态生成（SSG）** - 构建时生成 HTML，速度快，SEO 友好
- 📱 **响应式路由** - 基于文件系统的路由，简单直观
- ⚡ **快速刷新** - 开发时即时看到修改效果
- 🎨 **CSS 支持** - 内置对 CSS Modules、Tailwind CSS 的支持
- 📦 **零配置** - 开箱即用，无需复杂配置

## 快速开始

### 1. 创建项目

```bash
npx create-next-app@latest my-blog --typescript --tailwind
cd my-blog
```

### 2. 安装依赖

```bash
npm install gray-matter remark remark-html
npm install -D @tailwindcss/typography
```

### 3. 项目结构

```
my-blog/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── blog/
│       ├── page.tsx
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── posts.ts
├── posts/
│   ├── first-post.md
│   └── second-post.md
└── public/
```

## 核心功能实现

### Markdown 文件处理

创建 `lib/posts.ts` 来处理 Markdown 文件：

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}
```

### 博客文章格式

每篇文章使用 Front Matter 定义元数据：

```markdown
---
title: 文章标题
date: 2026-01-06
excerpt: 文章摘要
tags: [标签1, 标签2]
---

文章正文内容...
```

## 部署选项

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动部署完成！

### GitHub Pages

1. 修改 `next.config.ts`：

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. 构建并部署：

```bash
npm run build
# 将 out 目录推送到 gh-pages 分支
```

## 性能优化技巧

### 1. 图片优化

使用 Next.js 的 Image 组件：

```typescript
import Image from 'next/image';

<Image
  src="/my-image.jpg"
  alt="描述"
  width={800}
  height={600}
/>
```

### 2. 代码分割

Next.js 自动进行代码分割，每个页面只加载必要的代码。

### 3. 预渲染

使用 `generateStaticParams` 在构建时生成所有文章页面：

```typescript
export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.params.id,
  }));
}
```

## 自定义域名

在项目根目录创建 `public/CNAME` 文件：

```
yourdomain.com
```

然后在域名提供商处添加 DNS 记录。

## 总结

通过 Next.js，我们可以快速搭建一个功能完整、性能优秀的个人博客。主要优势包括：

- ✅ 静态生成，访问速度快
- ✅ SEO 友好
- ✅ 开发体验好
- ✅ 部署简单
- ✅ 免费托管

现在就开始搭建你的博客吧！
