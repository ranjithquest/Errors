import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-[12px] text-[var(--text-tertiary)] mb-4">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-40">›</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
