import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostData, getAllPostIds } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.params.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const postData = await getPostData(id);

    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="text-emerald-600 hover:text-emerald-500 transition-colors inline-flex items-center mb-8 font-medium"
        >
          &larr; 返回博客列表
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">
              {postData.title}
            </h1>
            <div className="flex items-center gap-4 text-stone-400">
              <time dateTime={postData.date}>{postData.date}</time>
              {postData.tags && postData.tags.length > 0 && (
                <div className="flex gap-2">
                  {postData.tags.map((tag) => (
                    <span key={tag} className="text-emerald-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-stone-800 prose-p:text-stone-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-500 prose-strong:text-stone-800 prose-code:text-emerald-700 prose-code:bg-[#f6f3ed] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-[#2d2a26] prose-pre:text-[#e8e4db] prose-pre:rounded-xl prose-pre:shadow-sm prose-blockquote:border-emerald-400 prose-blockquote:text-stone-600"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
          />
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
