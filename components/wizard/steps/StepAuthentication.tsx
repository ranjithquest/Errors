'use client';

import Select from '@/components/ui/Select';
import type { AuthMethod } from '@/lib/types';

interface StepAuthenticationProps {
  value: AuthMethod;
  onChange: (v: AuthMethod) => void;
}

const options = [
  { value: 'basic', label: 'Basic Auth' },
  { value: 'oauth2', label: 'OAuth 2.0' },
];

export default function StepAuthentication({ value, onChange }: StepAuthenticationProps) {
  return (
    <div>
      <div className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.02em] mb-[5px]">Authentication type</div>
      <Select
        options={options}
        placeholder="Select a method"
        value={value === 'none' ? '' : value}
        onChange={(v) => onChange((v || 'none') as AuthMethod)}
      />
      <p className="mt-[10px] text-[11.5px] text-[var(--text-tertiary)] bg-[var(--bg)] border border-[var(--border)] rounded-lg px-[13px] py-[10px] leading-[1.6] italic">
        By using the Federated Credential Authentication feature of this connector, you authorise Microsoft to create an index of publicly available data in your Microsoft 365 tenant. Your use of third party data is at your own risk.
      </p>
    </div>
  );
}
