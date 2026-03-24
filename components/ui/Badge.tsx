import type { HealthStatus, Severity } from '@/lib/types';

type BadgeVariant = HealthStatus | Severity | 'idle';

const styles: Record<string, string> = {
  healthy: 'bg-[var(--green-bg)] border-[var(--green-border)] text-[var(--green-text)]',
  error: 'bg-[var(--red-bg)] border-[var(--red-border)] text-[var(--red-text)]',
  degraded: 'bg-[var(--amber-bg)] border-[var(--amber-border)] text-[var(--amber-text)]',
  pending: 'bg-[var(--rail-bg)] border-[var(--border-mid)] text-[var(--text-tertiary)]',
  unknown: 'bg-[var(--rail-bg)] border-[var(--border-mid)] text-[var(--text-tertiary)]',
  blocker: 'bg-[var(--red-bg)] border-[var(--red-border)] text-[var(--red-text)]',
  warning: 'bg-[var(--amber-bg)] border-[var(--amber-border)] text-[var(--amber-text)]',
  suggestion: 'bg-[var(--green-bg)] border-[var(--green-border)] text-[var(--green-text)]',
  idle: 'bg-[var(--rail-bg)] border-[var(--border-mid)] text-[var(--text-tertiary)]',
};

const labels: Record<string, string> = {
  healthy: 'Healthy',
  error: 'Error',
  degraded: 'Degraded',
  pending: 'Pending sync',
  unknown: 'Unknown',
  blocker: 'Blocker',
  warning: 'Warning',
  suggestion: 'Suggested',
  idle: 'Idle',
};

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
  className?: string;
}

export default function Badge({ variant, label, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block text-[11px] font-medium font-mono px-[10px] py-1 rounded-full border leading-none ${styles[variant] ?? styles.idle} ${className}`}>
      {label ?? labels[variant] ?? variant}
    </span>
  );
}
