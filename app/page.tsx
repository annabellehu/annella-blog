import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-6 text-stone-800">
          <span className="text-emerald-600 mr-3">&#10052;</span>
          你好，我是 Annella
        </h1>
        <p className="text-xl text-stone-500 leading-relaxed max-w-2xl">
          欢迎来到我的个人博客。这里记录着我在技术领域的探索、对生活的思考，以及一些个人的见解。
        </p>
      </section>

      {/* Latest Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-stone-800">
            <span className="text-emerald-500">&#9670;</span> 最新文章
          </h2>
          <Link
            href="/blog"
            className="text-emerald-600 hover:text-emerald-500 transition-colors font-medium"
          >
            查看全部 &rarr;
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 bg-[#f6f3ed] rounded-2xl">
            <p className="text-stone-400 mb-4">暂无文章</p>
            <p className="text-sm text-stone-300">
              在 <code className="bg-white px-2 py-1 rounded">posts</code> 目录下添加 .md 文件即可开始创作
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.slice(0, 5).map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="border-l-[3px] border-emerald-200 pl-6 py-3 rounded-r-lg hover:border-emerald-500 hover:bg-[#f6f3ed]/80 transition-all duration-200">
                    <h3 className="text-xl font-semibold mb-2 text-stone-800 group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-500 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-stone-400">
                      <time dateTime={post.date}>{post.date}</time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-emerald-500">
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
      </section>
    </div>
  );
}
