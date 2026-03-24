import type { DiagnosticIssue, HealthStatus } from '@/lib/types';
import PriorityCard from './PriorityCard';
import HealthSummaryCard from './HealthSummaryCard';

interface HealthPanelProps {
  issues: DiagnosticIssue[];
  healthStatus?: HealthStatus;
  blockerCount?: number;
  warningCount?: number;
  suggestionCount?: number;
  lastSyncAt?: string;
  lastSyncStatus?: 'success' | 'partial' | 'failed' | 'running';
}

export default function HealthPanel({
  issues,
  healthStatus,
  blockerCount,
  warningCount,
  suggestionCount,
  lastSyncAt,
  lastSyncStatus,
}: HealthPanelProps) {
  const showSummary = healthStatus !== undefined;

  if (!showSummary && issues.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-[13px] text-[var(--green-text)] font-medium mb-1">All clear</div>
        <div className="text-[11.5px] text-[var(--text-secondary)]">No issues detected for this connector.</div>
      </div>
    );
  }

  return (
    <div>
      {showSummary && (
        <HealthSummaryCard
          healthStatus={healthStatus!}
          blockerCount={blockerCount ?? 0}
          warningCount={warningCount ?? 0}
          suggestionCount={suggestionCount ?? 0}
          lastSyncAt={lastSyncAt}
          lastSyncStatus={lastSyncStatus}
        />
      )}

      {issues.length === 0 ? (
        <div className="text-center py-6">
          <div className="text-[13px] text-[var(--green-text)] font-medium mb-1">All clear</div>
          <div className="text-[11.5px] text-[var(--text-secondary)]">No issues detected for this connector.</div>
        </div>
      ) : (
        <div>
          <div className="text-[10.5px] font-medium text-[var(--text-tertiary)] uppercase tracking-[0.06em] mb-2 font-mono">
            {issues.length} issue{issues.length !== 1 ? 's' : ''} found
          </div>
          {issues.map((issue) => (
            <PriorityCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
}
