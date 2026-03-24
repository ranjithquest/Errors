interface StepIndicatorProps {
  number: number;
  active?: boolean;
  showLine?: boolean;
}

export default function StepIndicator({ number, active, showLine = true }: StepIndicatorProps) {
  return (
    <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
      <div
        className={`w-6 h-6 rounded-full border-[1.5px] flex items-center justify-center text-[11px] font-medium font-mono flex-shrink-0 transition-all ${
          active
            ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
            : 'border-[var(--border-mid)] text-[var(--text-tertiary)]'
        }`}
      >
        {number}
      </div>
      {showLine && <div className="w-px flex-1 min-h-5 bg-[var(--border)] mt-1" />}
    </div>
  );
}
