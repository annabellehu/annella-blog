export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Annella. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              Twitter
            </a>
            <a 
              href="mailto:annabellehu88@gmail.com"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
