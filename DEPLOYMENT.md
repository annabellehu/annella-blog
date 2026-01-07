# 部署指南

本博客支持两种部署方式：Vercel 和 GitHub Pages。

## 方案一：Vercel 部署（推荐）

Vercel 是 Next.js 的创建者，提供最佳支持和性能。

### 步骤：

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/annella-blog.git
   git push -u origin main
   ```

2. **部署到 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "Import Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **配置自定义域名**
   - 在 Vercel 项目设置中，进入 "Domains"
   - 添加你的域名：`annella.site`
   - 按照提示配置 DNS 记录：
     - 添加 A 记录指向 `76.76.21.21`
     - 或添加 CNAME 记录指向 `cname.vercel-dns.com`
   - 等待 DNS 生效（可能需要几分钟到几小时）

### 优势：
- ✅ 自动部署（推送代码即部署）
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 支持服务端渲染
- ✅ 免费额度充足

---

## 方案二：GitHub Pages 部署

适合静态站点，完全免费。

### 步骤：

1. **配置静态导出**（已配置）
   
   `next.config.ts` 已设置：
   ```typescript
   output: 'export'
   ```

2. **构建静态文件**
   ```bash
   npm run build
   ```
   
   构建产物在 `out` 目录。

3. **部署到 GitHub Pages**

   **方法 A：使用 GitHub Actions（推荐）**
   
   创建 `.github/workflows/deploy.yml`：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '20'
             
         - name: Install dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

   **方法 B：手动部署**
   ```bash
   # 构建
   npm run build
   
   # 安装 gh-pages
   npm install -D gh-pages
   
   # 添加到 package.json scripts:
   # "deploy": "gh-pages -d out"
   
   # 部署
   npm run deploy
   ```

4. **配置 GitHub Pages**
   - 进入 GitHub 仓库设置
   - 找到 "Pages" 选项
   - Source 选择 `gh-pages` 分支
   - 保存

5. **配置自定义域名**
   
   在项目根目录创建 `public/CNAME`：
   ```
   annella.site
   ```
   
   在域名提供商处配置 DNS：
   - 添加 CNAME 记录：`www` 指向 `your-username.github.io`
   - 添加 A 记录指向 GitHub Pages IP：
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

### 优势：
- ✅ 完全免费
- ✅ 不限流量
- ✅ 与代码同仓库

---

## 域名配置详细说明

### 在域名提供商处配置 DNS

1. **登录你的域名提供商**（如阿里云、腾讯云、GoDaddy 等）

2. **添加 DNS 记录**

   **对于 Vercel：**
   ```
   类型    名称    值
   A       @       76.76.21.21
   CNAME   www     cname.vercel-dns.com
   ```

   **对于 GitHub Pages：**
   ```
   类型    名称    值
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     your-username.github.io
   ```

3. **等待 DNS 生效**
   - 通常需要 10 分钟到 48 小时
   - 使用 `nslookup annella.site` 检查是否生效

---

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

---

## 添加新文章

1. 在 `posts` 目录创建新的 `.md` 文件
2. 添加 Front Matter：
   ```markdown
   ---
   title: 文章标题
   date: 2026-01-07
   excerpt: 文章摘要
   tags: [标签1, 标签2]
   ---
   
   文章正文...
   ```
3. 保存后自动生成新页面

---

## 常见问题

### 1. 构建失败
- 检查是否所有依赖都已安装：`npm install`
- 确保 Node.js 版本 >= 18

### 2. 域名无法访问
- 检查 DNS 配置是否正确
- 等待 DNS 生效时间
- 使用 `dig annella.site` 或 `nslookup annella.site` 检查

### 3. 样式不正确
- 确保已安装 `@tailwindcss/typography`
- 清除缓存重新构建：`rm -rf .next && npm run build`

---

## 技术支持

如有问题，欢迎：
- 查看 [Next.js 文档](https://nextjs.org/docs)
- 查看 [Vercel 文档](https://vercel.com/docs)
- 查看 [GitHub Pages 文档](https://docs.github.com/pages)
