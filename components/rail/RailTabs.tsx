'use client';

import { useState } from 'react';
import type { Connector, DiagnosticIssue, GuideStepData } from '@/lib/types';
import HealthPanel from './HealthPanel';
import GuidePanel from './GuidePanel';

interface RailTabsProps {
  connector: Connector;
}

export default function RailTabs({ connector }: RailTabsProps) {
  const [active, setActive] = useState<'health' | 'guide'>('health');

  const lastSync = connector.syncHistory[0];

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-[var(--border)] bg-[var(--surface)] flex-shrink-0">
        {(['health', 'guide'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex-1 py-[14px] px-2 text-[12px] font-medium text-center cursor-pointer transition-all leading-[1.3] select-none border-b-2 -mb-px ${
              active === tab
                ? 'text-[var(--text-primary)] border-[var(--text-primary)]'
                : 'text-[var(--text-tertiary)] border-transparent hover:text-[var(--text-secondary)]'
            }`}
          >
            {tab === 'health' ? 'Connection health' : 'Setup guide'}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-[14px]">
        {active === 'health' ? (
          <HealthPanel
            issues={connector.issues}
            healthStatus={connector.healthStatus}
            blockerCount={connector.blockerCount}
            warningCount={connector.warningCount}
            suggestionCount={connector.suggestionCount}
            lastSyncAt={connector.lastSyncAt}
            lastSyncStatus={lastSync?.status}
          />
        ) : (
          <GuidePanel
            steps={connector.guideSteps}
            intro="Follow these steps to complete setup. Each one maps to a section of the form on the left."
          />
        )}
      </div>
    </div>
  );
}
