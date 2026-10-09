import Link from 'next/link';
import { getSortedPostsData, type PostData } from '@/lib/posts';

const UNTAGGED = '未分类';

interface TagGroup {
  tag: string;
  posts: PostData[];
}

// frontmatter 里的 tags 可能缺省、写成字符串或混入非字符串值，统一规整成字符串数组
function normalizeTags(post: PostData): string[] {
  const raw = post.tags ?? [];
  return raw.map((tag) => String(tag).trim()).filter((tag) => tag.length > 0);
}

// 带多个标签的文章会在每个标签下各出现一次；没有标签的归入「未分类」
function groupPostsByTag(posts: PostData[]): TagGroup[] {
  const groups = new Map<string, PostData[]>();

  for (const post of posts) {
    const tags = normalizeTags(post);
    const keys = tags.length > 0 ? tags : [UNTAGGED];

    for (const key of keys) {
      const group = groups.get(key);
      if (group) {
        group.push(post);
      } else {
        groups.set(key, [post]);
      }
    }
  }

  return [...groups.entries()]
    .map(([tag, groupPosts]) => ({ tag, posts: groupPosts }))
    .sort((a, b) => {
      // 文章多的标签优先；数量相同则按该组最新文章日期倒序；再相同按标签名排序
      if (a.posts.length !== b.posts.length) {
        return b.posts.length - a.posts.length;
      }
      const aDate = a.posts[0]?.date ?? '';
      const bDate = b.posts[0]?.date ?? '';
      if (aDate !== bDate) {
        return aDate < bDate ? 1 : -1;
      }
      return a.tag.localeCompare(b.tag, 'zh-Hans-CN');
    });
}

export default function BlogPage() {
  const posts = getSortedPostsData();
  const groups = groupPostsByTag(posts);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-stone-800">
        <span className="text-emerald-500">&#9670;</span> 所有文章
      </h1>
      <p className="text-stone-400 mb-12">
        共 {posts.length} 篇 · {groups.length} 个标签
      </p>

      {groups.length === 0 ? (
        <div className="text-center py-16 bg-[#f6f3ed] rounded-2xl">
          <p className="text-stone-400 mb-4">暂无文章</p>
          <p className="text-sm text-stone-300">
            在 <code className="bg-white px-2 py-1 rounded">posts</code> 目录下添加 .md 文件即可开始创作
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {groups.map((group) => (
            <section key={group.tag}>
              <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-stone-200">
                <h2 className="text-2xl font-semibold text-stone-800">
                  <span className="text-emerald-500">&#9670;</span>{' '}
                  {group.tag === UNTAGGED ? group.tag : `#${group.tag}`}
                </h2>
                <span className="text-sm text-stone-400 shrink-0">
                  {group.posts.length} 篇
                </span>
              </div>

              <div className="space-y-6">
                {group.posts.map((post) => (
                  <article key={`${group.tag}-${post.id}`} className="group">
                    <Link href={`/blog/${post.id}`}>
                      <div className="border-l-[3px] border-emerald-200 pl-6 py-3 rounded-r-lg hover:border-emerald-500 hover:bg-[#f6f3ed]/80 transition-all duration-200">
                        <h3 className="text-2xl font-semibold mb-2 text-stone-800 group-hover:text-emerald-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-stone-500 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-stone-400">
                          <time dateTime={post.date}>{post.date}</time>
                          {normalizeTags(post).length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                              {normalizeTags(post).map((tag) => (
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
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
