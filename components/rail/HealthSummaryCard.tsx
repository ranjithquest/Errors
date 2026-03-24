import type { HealthStatus } from '@/lib/types';

interface HealthSummaryCardProps {
  healthStatus: HealthStatus;
  blockerCount: number;
  warningCount: number;
  suggestionCount: number;
  lastSyncAt?: string;
  lastSyncStatus?: 'success' | 'partial' | 'failed' | 'running';
}

const statusConfig: Record<HealthStatus, { label: string; dot: string; bg: string; border: string; text: string }> = {
  error:    { label: 'Critical',    dot: 'bg-[var(--red-mid)]',   bg: 'bg-[var(--red-bg)]',   border: 'border-[var(--red-border)]',   text: 'text-[var(--red-text)]' },
  degraded: { label: 'Degraded',   dot: 'bg-[var(--amber-mid)]', bg: 'bg-[var(--amber-bg)]', border: 'border-[var(--amber-border)]', text: 'text-[var(--amber-text)]' },
  healthy:  { label: 'Healthy',    dot: 'bg-[var(--green-mid)]', bg: 'bg-[var(--green-bg)]', border: 'border-[var(--green-border)]', text: 'text-[var(--green-text)]' },
  pending:  { label: 'Setting up', dot: 'bg-[var(--text-tertiary)]', bg: 'bg-[var(--bg)]', border: 'border-[var(--border)]', text: 'text-[var(--text-secondary)]' },
  unknown:  { label: 'Unknown',    dot: 'bg-[var(--text-tertiary)]', bg: 'bg-[var(--bg)]', border: 'border-[var(--border)]', text: 'text-[var(--text-secondary)]' },
};

const syncStatusConfig = {
  success: { label: 'Succeeded', color: 'text-[var(--green-text)]' },
  partial: { label: 'Partial',   color: 'text-[var(--amber-text)]' },
  failed:  { label: 'Failed',    color: 'text-[var(--red-text)]' },
  running: { label: 'Running',   color: 'text-[var(--text-secondary)]' },
};

function formatSyncTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const todayStr = now.toDateString();
  const syncStr = d.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const time = d.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });
  if (syncStr === todayStr) return `Today · ${time}`;
  if (syncStr === yesterday.toDateString()) return `Yesterday · ${time}`;
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric' }) + ` · ${time}`;
}

export default function HealthSummaryCard({
  healthStatus,
  blockerCount,
  warningCount,
  suggestionCount,
  lastSyncAt,
  lastSyncStatus,
}: HealthSummaryCardProps) {
  const s = statusConfig[healthStatus] ?? statusConfig.unknown;

  const metrics = [
    { value: blockerCount,    label: blockerCount === 1 ? 'blocker'   : 'blockers',   color: 'text-[var(--red-text)]',   show: true },
    { value: warningCount,    label: warningCount === 1 ? 'warning'   : 'warnings',   color: 'text-[var(--amber-text)]', show: true },
    { value: suggestionCount, label: suggestionCount === 1 ? 'tip'    : 'tips',       color: 'text-[var(--green-text)]', show: true },
  ];

  return (
    <div className={`rounded-xl border mb-4 overflow-hidden ${s.border} ${s.bg}`}>
      {/* Status row */}
      <div className="px-[13px] pt-[11px] pb-[9px] flex items-center gap-[7px]">
        <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${s.dot}`} />
        <span className={`text-[12.5px] font-semibold tracking-[-0.01em] ${s.text}`}>{s.label}</span>
      </div>

      {/* Metrics row */}
      <div className={`px-[13px] pb-[11px] flex gap-3 border-t ${s.border}`}>
        {metrics.map((m) => (
          <div key={m.label} className="pt-[9px] flex flex-col items-start">
            <span className={`text-[18px] font-semibold leading-none tracking-tight ${m.color}`}>{m.value}</span>
            <span className="text-[10.5px] text-[var(--text-tertiary)] mt-[2px]">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Last sync row */}
      {lastSyncAt && lastSyncStatus && (
        <div className={`px-[13px] py-[8px] border-t ${s.border} flex items-center justify-between`}>
          <span className="text-[11px] text-[var(--text-secondary)]">{formatSyncTime(lastSyncAt)}</span>
          <span className={`text-[10.5px] font-medium ${syncStatusConfig[lastSyncStatus]?.color ?? 'text-[var(--text-tertiary)]'}`}>
            {syncStatusConfig[lastSyncStatus]?.label}
          </span>
        </div>
      )}
    </div>
  );
}
