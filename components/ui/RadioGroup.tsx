'use client';

interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({ name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-[10px] px-3 py-[9px] border rounded-lg cursor-pointer transition-all ${
            value === opt.value
              ? 'border-[var(--accent)] bg-[var(--bg)]'
              : 'border-[var(--border)] hover:border-[var(--border-mid)] hover:bg-[var(--bg)]'
          }`}
          onClick={() => onChange(opt.value)}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="w-[14px] h-[14px] accent-[var(--accent)]"
          />
          <div>
            <div className="text-[13px] text-[var(--text-primary)]">{opt.label}</div>
            {opt.description && (
              <div className="text-[11px] text-[var(--text-tertiary)] mt-px">{opt.description}</div>
            )}
          </div>
        </label>
      ))}
    </div>
  );
}
