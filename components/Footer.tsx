export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-gray-text text-sm">
          Built with Next.js & Tailwind — Yash Rawat © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
