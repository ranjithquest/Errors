'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Connector } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import ConnectorPanel from './ConnectorPanel';

function formatDate(iso?: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const authLabels: Record<string, string> = {
  basic: 'Basic Auth',
  oauth2: 'OAuth 2.0',
  none: 'None',
};

interface ConnectorListViewProps {
  initialConnectors: Connector[];
}

export default function ConnectorListView({ initialConnectors }: ConnectorListViewProps) {
  const [connectors, setConnectors] = useState<Connector[]>(initialConnectors);
  const [selected, setSelected] = useState<Connector | null>(null);

  function handleSave(id: string, patch: Partial<Connector>) {
    setConnectors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...patch } : c))
    );
    setSelected((prev) => (prev?.id === id ? { ...prev, ...patch } : prev));
  }

  return (
    <>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            {['Name', 'Health', 'Auth', 'Blockers', 'Last sync', ''].map((col) => (
              <th
                key={col}
                className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-[0.02em] pb-3 pr-4 font-mono"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {connectors.map((c) => (
            <tr
              key={c.id}
              onClick={() => setSelected(c)}
              className={`border-b border-[var(--border)] cursor-pointer transition-colors ${
                selected?.id === c.id ? 'bg-[var(--bg)]' : 'hover:bg-[var(--bg)]'
              }`}
            >
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
                <span className="text-[12px] text-[var(--text-secondary)]">View →</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConnectorPanel
        connector={selected}
        onClose={() => setSelected(null)}
        onSave={handleSave}
      />
    </>
  );
}
