'use client';

interface StepInstanceUrlProps {
  value: string;
  onChange: (v: string) => void;
}

export default function StepInstanceUrl({ value, onChange }: StepInstanceUrlProps) {
  return (
    <div>
      <div className="text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.02em] mb-[5px]">ServiceNow URL</div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://contoso.service-now.com"
        className="w-full px-3 py-[9px] text-[13px] font-sans border border-[var(--border-mid)] rounded-lg bg-[var(--surface)] text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--text-tertiary)]"
      />
    </div>
  );
}
