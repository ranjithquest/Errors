import { CheckCircle, AlertCircle, AlertTriangle, Loader } from 'lucide-react';
import type { SyncEvent } from '@/lib/types';

const statusConfig = {
  success: { icon: CheckCircle, color: 'text-[var(--green-mid)]', label: 'Success' },
  partial: { icon: AlertTriangle, color: 'text-[var(--amber-mid)]', label: 'Partial' },
  failed: { icon: AlertCircle, color: 'text-[var(--red-mid)]', label: 'Failed' },
  running: { icon: Loader, color: 'text-[var(--text-tertiary)]', label: 'Running' },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

interface SyncTimelineProps {
  events: SyncEvent[];
}

export default function SyncTimeline({ events }: SyncTimelineProps) {
  if (events.length === 0) {
    return (
      <div>
        <h2 className="text-[13px] font-medium text-[var(--text-primary)] tracking-[-0.01em] mb-4">Sync history</h2>
        <p className="text-[12px] text-[var(--text-secondary)]">No sync events yet. First sync will start automatically.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[13px] font-medium text-[var(--text-primary)] tracking-[-0.01em] mb-4">Sync history</h2>
      <div className="space-y-2">
        {events.map((ev) => {
          const cfg = statusConfig[ev.status];
          const Icon = cfg.icon;
          return (
            <div key={ev.id} className="flex items-center gap-3 py-2 border-b border-[var(--border)] last:border-0">
              <Icon size={14} className={`flex-shrink-0 ${cfg.color}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-medium font-mono ${cfg.color}`}>{cfg.label}</span>
                  {ev.itemsIndexed > 0 && (
                    <span className="text-[11px] text-[var(--text-tertiary)]">{ev.itemsIndexed.toLocaleString()} items</span>
                  )}
                  {ev.errorCount > 0 && (
                    <span className="text-[11px] text-[var(--red-mid)]">{ev.errorCount} error{ev.errorCount > 1 ? 's' : ''}</span>
                  )}
                </div>
                <div className="text-[11px] text-[var(--text-tertiary)]">{formatDate(ev.startedAt)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
