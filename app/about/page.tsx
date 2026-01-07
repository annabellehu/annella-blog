export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">关于我</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">👋 你好</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            我是 Annella，一名热爱技术和思考的开发者。
          </p>
          <p className="text-gray-700 leading-relaxed">
            在这个博客里，我会分享我在技术领域的探索与实践，记录对生活的思考和感悟，
            希望这些文字能够帮助到你，也欢迎与我交流讨论。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">💻 技术栈</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Git'].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">📬 联系方式</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:annabellehu88@gmail.com" className="text-blue-600 hover:underline">
                annabellehu88@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">GitHub:</span>{' '}
              <a 
                href="https://github.com/annabellehu/"    
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @Annella
              </a>
            </li>
            <li>
              <span className="font-medium">Twitter:</span>{' '}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @Annella
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">🎯 关于本站</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            本站使用 Next.js 构建，采用静态生成方式，托管在 GitHub Pages / Vercel 上。
          </p>
          <p className="text-gray-700 leading-relaxed">
            所有文章使用 Markdown 编写，简洁、高效、专注于内容本身。
          </p>
        </section>
      </div>
    </div>
  );
}
