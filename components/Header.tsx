import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfaf7]/85 backdrop-blur-md border-b border-[#e8e4db]">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-emerald-700 hover:text-emerald-500 transition-colors">
            Annella
          </Link>
          <div className="flex gap-8">
            <Link href="/blog" className="text-stone-500 hover:text-emerald-600 transition-colors">
              博客
            </Link>
            <Link href="/about" className="text-stone-500 hover:text-emerald-600 transition-colors">
              关于
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
