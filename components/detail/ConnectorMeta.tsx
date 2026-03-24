import Link from 'next/link';
import type { Connector } from '@/lib/types';

const authLabels: Record<string, string> = { basic: 'Basic Auth', oauth2: 'OAuth 2.0', none: 'Not configured' };
const criteriaLabels: Record<string, string> = { simple: 'Simple (role-based)', advanced: 'Advanced (scripted ACLs)' };

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-3 border-b border-[var(--border)] last:border-0">
      <div className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-[0.02em] font-mono w-32 flex-shrink-0 pt-px">{label}</div>
      <div className="text-[13px] text-[var(--text-primary)] flex-1">{value || '—'}</div>
    </div>
  );
}

interface ConnectorMetaProps {
  connector: Connector;
}

export default function ConnectorMeta({ connector }: ConnectorMetaProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[13px] font-medium text-[var(--text-primary)] tracking-[-0.01em]">Configuration</h2>
        <Link
          href={`/connectors/new?step=1&displayName=${encodeURIComponent(connector.displayName)}&criteria=${connector.userCriteriaType}&url=${encodeURIComponent(connector.instanceUrl)}&auth=${connector.authMethod}`}
          className="text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Edit settings →
        </Link>
      </div>
      <div>
        <Row label="Display name" value={connector.displayName} />
        <Row label="Instance URL" value={connector.instanceUrl} />
        <Row label="Auth method" value={authLabels[connector.authMethod]} />
        <Row label="User criteria" value={criteriaLabels[connector.userCriteriaType]} />
        <Row label="Created" value={new Date(connector.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
      </div>
    </div>
  );
}
