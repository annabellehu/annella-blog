export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-stone-800">
        <span className="text-emerald-500">&#9670;</span> 关于我
      </h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-stone-800">你好</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            我是 Annella，这里是我的个人网站，分享优质内容。
          </p>
          <p className="text-stone-600 leading-relaxed">
            在这个博客里，我会分享我在技术领域的探索与实践，记录对生活的思考和感悟，
            希望这些文字能够帮助到你，也欢迎与我交流讨论。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-stone-800">技术栈</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-stone-800">联系方式</h2>
          <ul className="space-y-2 text-stone-600">
            <li>
              <span className="font-medium text-stone-800">Email:</span>{' '}
              <a href="mailto:annabellehu88@gmail.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">
                annabellehu88@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium text-stone-800">GitHub:</span>{' '}
              <a
                href="https://github.com/annabellehu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 transition-colors"
              >
                @Annella
              </a>
            </li>
            <li>
              <span className="font-medium text-stone-800">Twitter:</span>{' '}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 transition-colors"
              >
                @Annella
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-stone-800">关于本站</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            本站使用 Next.js 构建，采用静态生成方式，托管在 GitHub Pages / Vercel 上。
          </p>
          <p className="text-stone-600 leading-relaxed">
            所有文章使用 Markdown 编写。
          </p>
        </section>
      </div>
    </div>
  );
}
