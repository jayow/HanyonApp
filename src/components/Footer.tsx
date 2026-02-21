export function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-20">
      <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-neutral-400 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Hanyon Analytics</p>
        <a
          href="https://x.com/jayowtrades"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-600 transition-colors"
        >
          @jayowtrades
        </a>
      </div>
    </footer>
  );
}
