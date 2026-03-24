import type { Connector } from '@/lib/types';

interface SummaryBarProps {
  connectors: Connector[];
}

export default function SummaryBar({ connectors: cs }: SummaryBarProps) {
  const total      = cs.length;
  const healthy    = cs.filter((c) => c.healthStatus === 'healthy').length;
  const critical   = cs.filter((c) => c.blockerCount > 0).length;
  const attention  = cs.filter((c) => c.blockerCount === 0 && c.warningCount > 0).length;
  const pending    = cs.filter((c) => c.healthStatus === 'pending').length;

  const totalBlockers  = cs.reduce((s, c) => s + c.blockerCount, 0);
  const totalWarnings  = cs.reduce((s, c) => s + c.warningCount, 0);

  // Overall fleet status label
  const fleetLabel  = critical > 0 ? 'Needs action' : attention > 0 ? 'Some warnings' : 'All healthy';
  const fleetColor  = critical > 0 ? 'text-[var(--red-text)]'   : attention > 0 ? 'text-[var(--amber-text)]' : 'text-[var(--green-text)]';
  const fleetDot    = critical > 0 ? 'bg-[var(--red-mid)]'      : attention > 0 ? 'bg-[var(--amber-mid)]'    : 'bg-[var(--green-mid)]';
  const fleetBg     = critical > 0 ? 'bg-[var(--red-bg)] border-[var(--red-border)]'
                    : attention > 0 ? 'bg-[var(--amber-bg)] border-[var(--amber-border)]'
                    : 'bg-[var(--green-bg)] border-[var(--green-border)]';

  const stats = [
    { value: total,     label: 'Total',           color: 'text-[var(--text-primary)]',   border: 'border-[var(--border-mid)]',         bg: 'bg-[var(--surface)]' },
    { value: healthy,   label: 'Healthy',          color: 'text-[var(--green-text)]',     border: 'border-[var(--green-border)]',       bg: 'bg-[var(--green-bg)]' },
    { value: attention, label: 'Needs attention',  color: 'text-[var(--amber-text)]',     border: 'border-[var(--amber-border)]',       bg: 'bg-[var(--amber-bg)]' },
    { value: critical,  label: 'Critical',         color: 'text-[var(--red-text)]',       border: 'border-[var(--red-border)]',         bg: 'bg-[var(--red-bg)]' },
  ];

  return (
    <div className="mb-6 space-y-3">
      {/* Fleet status banner */}
      <div className={`flex items-center justify-between rounded-xl border px-4 py-3 ${fleetBg}`}>
        <div className="flex items-center gap-[8px]">
          <span className={`w-[8px] h-[8px] rounded-full flex-shrink-0 ${fleetDot}`} />
          <span className={`text-[13px] font-semibold ${fleetColor}`}>{fleetLabel}</span>
          {(totalBlockers > 0 || totalWarnings > 0) && (
            <span className="text-[11.5px] text-[var(--text-secondary)] ml-1">
              {[
                totalBlockers > 0 && `${totalBlockers} blocker${totalBlockers !== 1 ? 's' : ''}`,
                totalWarnings > 0 && `${totalWarnings} warning${totalWarnings !== 1 ? 's' : ''}`,
              ].filter(Boolean).join(' · ')} across {critical + attention} connector{(critical + attention) !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <span className="text-[11px] text-[var(--text-tertiary)] font-mono">{total} connector{total !== 1 ? 's' : ''}</span>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`rounded-xl border px-4 py-3 ${s.bg} ${s.border}`}
          >
            <div className={`text-[24px] font-semibold tracking-tight leading-none ${s.color}`}>{s.value}</div>
            <div className="text-[11.5px] text-[var(--text-secondary)] mt-[5px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
