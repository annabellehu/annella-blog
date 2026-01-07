import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">所有文章</h1>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">暂无文章</p>
          <p className="text-sm text-gray-400">
            在 <code className="bg-gray-100 px-2 py-1 rounded">posts</code> 目录下添加 .md 文件即可开始创作
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`}>
                <div className="border-l-2 border-gray-200 pl-6 py-2 hover:border-gray-900 transition-colors">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <time dateTime={post.date}>{post.date}</time>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-gray-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
