#!/bin/bash

# 快速部署脚本
# 使用方法: ./deploy.sh "提交信息"

if [ -z "$1" ]; then
  echo "错误: 请提供提交信息"
  echo "使用方法: ./deploy.sh \"你的提交信息\""
  exit 1
fi

echo "📝 添加文件到 Git..."
git add .

echo "💾 提交更改..."
git commit -m "$1"

echo "🚀 推送到 GitHub..."
git push origin main

echo "✅ 完成！Vercel 将自动部署你的更新。"
echo "🌐 查看部署状态: https://vercel.com/dashboard"
