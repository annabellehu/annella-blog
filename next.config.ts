import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 启用静态导出，支持 GitHub Pages
  images: {
    unoptimized: true,  // 静态导出时需要禁用图片优化
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
