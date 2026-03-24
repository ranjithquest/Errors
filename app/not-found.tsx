import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-10 text-center max-w-sm w-full shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="text-[13px] font-mono text-[var(--text-tertiary)] mb-2">404</div>
        <h1 className="text-[18px] font-medium text-[var(--text-primary)] mb-2 tracking-tight">Page not found</h1>
        <p className="text-[13px] text-[var(--text-secondary)] mb-6">The connector or page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/connectors" className="inline-block px-5 py-[9px] text-[13px] font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-85 transition-all">
          Back to connectors
        </Link>
      </div>
    </div>
  );
}
