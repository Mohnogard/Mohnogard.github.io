export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)]">
      © {new Date().getFullYear()} Mohammad Ishaqat. Built with React, TypeScript &amp; Tailwind CSS.
    </footer>
  );
}
