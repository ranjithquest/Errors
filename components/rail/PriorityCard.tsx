'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { DiagnosticIssue } from '@/lib/types';

const styles = {
  blocker: {
    card: 'bg-[var(--red-bg)] border-[var(--red-border)] hover:border-[var(--red-border-hover)]',
    rank: 'bg-[var(--red-bg)] border-[var(--red-border)] text-[var(--red-mid)]',
    title: 'text-[var(--red-text)]',
    tag: 'bg-[#F7C1C1] text-[var(--red-text)]',
    chevron: 'text-[var(--red-mid)]',
    divider: 'border-[var(--red-border)]',
    desc: 'text-[var(--red-mid)]',
    action: 'bg-[var(--red-action-bg)] border-l-[var(--red-mid)] text-[var(--red-text)]',
    actionLabel: 'text-[var(--red-mid)]',
    tagLabel: 'Blocker',
  },
  warning: {
    card: 'bg-[var(--amber-bg)] border-[var(--amber-border)] hover:border-[var(--amber-border-hover)]',
    rank: 'bg-[var(--amber-bg)] border-[var(--amber-border)] text-[var(--amber-mid)]',
    title: 'text-[var(--amber-text)]',
    tag: 'bg-[#FAC775] text-[var(--amber-text)]',
    chevron: 'text-[var(--amber-mid)]',
    divider: 'border-[var(--amber-border)]',
    desc: 'text-[var(--amber-mid)]',
    action: 'bg-[var(--amber-action-bg)] border-l-[var(--amber-mid)] text-[var(--amber-text)]',
    actionLabel: 'text-[var(--amber-mid)]',
    tagLabel: 'Workaround needed',
  },
  suggestion: {
    card: 'bg-[var(--green-bg)] border-[var(--green-border)] hover:border-[var(--green-border-hover)]',
    rank: 'bg-[var(--green-bg)] border-[var(--green-border)] text-[var(--green-mid)]',
    title: 'text-[var(--green-text)]',
    tag: 'bg-[#C0DD97] text-[var(--green-text)]',
    chevron: 'text-[var(--green-mid)]',
    divider: 'border-[var(--green-border)]',
    desc: 'text-[var(--green-mid)]',
    action: 'bg-[var(--green-action-bg)] border-l-[var(--green-mid)] text-[var(--green-text)]',
    actionLabel: 'text-[var(--green-mid)]',
    tagLabel: 'Suggested',
  },
};

const actionLabels: Record<string, string> = {
  blocker: 'To resolve',
  warning: 'Workaround',
  suggestion: 'How to',
};

interface PriorityCardProps {
  issue: DiagnosticIssue;
}

export default function PriorityCard({ issue }: PriorityCardProps) {
  const [open, setOpen] = useState(false);
  const s = styles[issue.severity];

  return (
    <div
      className={`rounded-[10px] border mb-2 last:mb-0 cursor-pointer transition-transform hover:-translate-y-px overflow-hidden ${s.card}`}
      onClick={() => setOpen(!open)}
    >
      <div className="px-3 py-[10px] flex items-center gap-2">
        <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[9.5px] font-medium font-mono flex-shrink-0 border ${s.rank}`}>
          {issue.rank}
        </div>
        <div className="flex-1">
          <div className={`text-[12px] font-medium leading-[1.3] mb-0.5 ${s.title}`}>{issue.title}</div>
          <span className={`text-[9px] font-medium font-mono px-1.5 py-px rounded-full inline-block ${s.tag}`}>{s.tagLabel}</span>
        </div>
        <div className={`w-[14px] h-[14px] flex-shrink-0 flex items-center justify-center transition-transform ${open ? 'rotate-180' : ''} ${s.chevron}`}>
          <ChevronDown size={10} strokeWidth={1.5} />
        </div>
      </div>

      {open && (
        <div className="px-3 pb-[10px]">
          <div className={`border-t pt-2 ${s.divider}`}>
            <p className={`text-[11px] leading-[1.55] mb-[7px] ${s.desc}`}>{issue.description}</p>
            <div className={`text-[11px] leading-[1.5] px-[9px] py-[6px] rounded-md border-l-2 ${s.action}`}>
              <div className={`text-[9px] font-medium font-mono tracking-[0.07em] uppercase mb-0.5 ${s.actionLabel}`}>
                {actionLabels[issue.severity]}
              </div>
              {issue.resolution}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
