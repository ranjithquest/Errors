import type { GuideStepData } from '@/lib/types';

const dotStyles = {
  ok: 'bg-[var(--green-bg)] border-[var(--green-border)] text-[var(--green-text)]',
  warn: 'bg-[var(--amber-bg)] border-[var(--amber-border)] text-[var(--amber-text)]',
  idle: 'bg-[var(--surface)] border-[var(--border-mid)] text-[var(--text-tertiary)]',
};

interface GuidePanelProps {
  steps: GuideStepData[];
  intro?: string;
}

export default function GuidePanel({ steps, intro }: GuidePanelProps) {
  return (
    <div>
      {intro && (
        <p className="text-[11.5px] text-[var(--text-secondary)] leading-[1.6] mb-[14px] pb-3 border-b border-[var(--border)]">
          {intro}
        </p>
      )}
      {steps.map((step, i) => (
        <div key={step.step} className="flex gap-3">
          <div className="flex flex-col items-center flex-shrink-0">
            <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center text-[10px] font-medium font-mono border ${dotStyles[step.status]}`}>
              {step.step}
            </div>
            {i < steps.length - 1 && <div className="w-px flex-1 min-h-3 bg-[var(--border)] my-[3px]" />}
          </div>
          <div className={`flex-1 ${i < steps.length - 1 ? 'pb-4' : ''}`}>
            <div className="text-[12.5px] font-medium text-[var(--text-primary)] mb-[3px] tracking-[-0.01em]">{step.title}</div>
            <div className="text-[11.5px] text-[var(--text-secondary)] leading-[1.55]">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
