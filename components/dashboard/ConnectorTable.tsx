import Link from 'next/link';
import type { Connector } from '@/lib/types';
import Badge from '@/components/ui/Badge';

function formatDate(iso?: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const authLabels: Record<string, string> = {
  basic: 'Basic Auth',
  oauth2: 'OAuth 2.0',
  none: 'None',
};

interface ConnectorTableProps {
  connectors: Connector[];
}

export default function ConnectorTable({ connectors }: ConnectorTableProps) {
  if (connectors.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-[15px] font-medium text-[var(--text-primary)] mb-2">No connectors yet</div>
        <div className="text-[13px] text-[var(--text-secondary)] mb-6">Set up your first connector to start indexing external content.</div>
        <Link
          href="/connectors/new"
          className="inline-block px-5 py-[9px] text-[13px] font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-85 transition-all"
        >
          Add connector
        </Link>
      </div>
    );
  }

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-[var(--border)]">
          {['Name', 'Health', 'Auth', 'Blockers', 'Last sync', ''].map((col) => (
            <th key={col} className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-[0.02em] pb-3 pr-4 font-mono">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {connectors.map((c) => (
          <tr key={c.id} className="border-b border-[var(--border)] hover:bg-[var(--bg)] transition-colors">
            <td className="py-3 pr-4">
              <div className="text-[13px] font-medium text-[var(--text-primary)]">{c.displayName}</div>
              <div className="text-[11px] text-[var(--text-tertiary)]">{c.connectorType}</div>
            </td>
            <td className="py-3 pr-4">
              <Badge variant={c.healthStatus} />
            </td>
            <td className="py-3 pr-4 text-[12px] text-[var(--text-secondary)]">{authLabels[c.authMethod]}</td>
            <td className="py-3 pr-4">
              {c.blockerCount > 0 ? (
                <span className="text-[12px] font-medium text-[var(--red-text)]">{c.blockerCount}</span>
              ) : (
                <span className="text-[12px] text-[var(--text-tertiary)]">—</span>
              )}
            </td>
            <td className="py-3 pr-4 text-[12px] text-[var(--text-secondary)]">{formatDate(c.lastSyncAt)}</td>
            <td className="py-3">
              <Link
                href={`/connectors/${c.id}`}
                className="text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                View →
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
