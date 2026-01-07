import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Annella
          </Link>
          <div className="flex gap-8">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              博客
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              关于
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
