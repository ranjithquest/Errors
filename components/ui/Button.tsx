import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger';
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'px-5 py-[9px] text-[13px] font-medium font-sans rounded-lg cursor-pointer transition-all tracking-[-0.01em] leading-none';
  const variants = {
    primary: 'bg-[var(--accent)] border border-[var(--accent)] text-white hover:opacity-85',
    ghost: 'bg-transparent border border-[var(--border-mid)] text-[var(--text-secondary)] hover:bg-[var(--bg)] hover:text-[var(--text-primary)]',
    danger: 'bg-[var(--red-bg)] border border-[var(--red-border)] text-[var(--red-text)] hover:border-[var(--red-border-hover)]',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
