'use client';

import RadioGroup from '@/components/ui/RadioGroup';
import type { UserCriteriaType } from '@/lib/types';

interface StepUserCriteriaProps {
  value: UserCriteriaType;
  onChange: (v: UserCriteriaType) => void;
}

const options = [
  { value: 'simple', label: 'Simple', description: 'Standard role-based access control' },
  { value: 'advanced', label: 'Advanced', description: 'Scripted ACLs and custom criteria' },
];

export default function StepUserCriteria({ value, onChange }: StepUserCriteriaProps) {
  return (
    <RadioGroup
      name="criteria"
      options={options}
      value={value}
      onChange={(v) => onChange(v as UserCriteriaType)}
    />
  );
}
