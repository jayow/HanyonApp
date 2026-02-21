export function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-20">
      <div className="max-w-2xl mx-auto px-6 py-8 text-sm text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Hanyon Analytics</p>
      </div>
    </footer>
  );
}
