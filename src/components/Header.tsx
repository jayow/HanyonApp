import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-neutral-100">
      <nav className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <Image
            src="/icon.png"
            alt="Hanyon Analytics"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-lg font-semibold tracking-tight">
            Hanyon Analytics
          </span>
        </Link>
        <div className="flex gap-8 text-sm text-neutral-600">
          <Link
            href="/research"
            className="hover:text-neutral-900 transition-colors"
          >
            Research
          </Link>
          <Link
            href="/apps"
            className="hover:text-neutral-900 transition-colors"
          >
            Apps
          </Link>
          <a
            href="https://dune.com/jayow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            Dune
          </a>
          <a
            href="https://github.com/jayow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
