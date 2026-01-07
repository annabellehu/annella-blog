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
          className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center mb-8"
        >
          ← 返回博客列表
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {postData.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <time dateTime={postData.date}>{postData.date}</time>
              {postData.tags && postData.tags.length > 0 && (
                <div className="flex gap-2">
                  {postData.tags.map((tag) => (
                    <span key={tag} className="text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
          />
        </article>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
