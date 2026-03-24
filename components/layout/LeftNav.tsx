'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  ContactIcon,
  Devices2Icon,
  GroupIcon,
  SecurityGroupIcon,
  PaymentCardIcon,
  LifesaverIcon,
  HeartIcon,
  SettingsIcon,
  ReportDocumentIcon,
  LockIcon,
  AccountManagementIcon,
  MoreIcon,
  AllAppsIcon,
  PeopleIcon,
} from '@fluentui/react-icons-mdl2';

function CopilotIcon() {
  return <img src="/copilot-icon-32.png" alt="Copilot" width={16} height={16} style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />;
}

// Nav divider — Figma DividerLine/Primary #C8C8C8
function NavDivider() {
  return (
    <div className="w-full py-1 flex-shrink-0">
      <div className="mx-[10px] h-px bg-[#c8c8c8]" />
    </div>
  );
}

// Connectors is a sub-feature of Copilot — Copilot item is active for both paths
const NAV_SECTIONS = [
  [
    { href: '/',          label: 'Home',           Icon: HomeIcon,              activeFor: ['/'] },
    { href: '/connectors',label: 'Copilot',        Icon: null /* Copilot */,    activeFor: ['/copilot', '/connectors'] },
    { href: '/users',     label: 'Users',          Icon: ContactIcon,           activeFor: ['/users'] },
    { href: '/devices',   label: 'Devices',        Icon: Devices2Icon,          activeFor: ['/devices'] },
    { href: '/groups',    label: 'Teams & groups', Icon: GroupIcon,             activeFor: ['/groups'] },
    { href: '/resources', label: 'Resources',      Icon: AllAppsIcon,           activeFor: ['/resources'] },
    { href: '/billing',   label: 'Billing',        Icon: PaymentCardIcon,       activeFor: ['/billing'] },
    { href: '/support',   label: 'Support',        Icon: LifesaverIcon,         activeFor: ['/support'] },
    { href: '/health',    label: 'Health',         Icon: HeartIcon,             activeFor: ['/health'] },
    { href: '/settings',  label: 'Settings',       Icon: SettingsIcon,          activeFor: ['/settings'] },
    { href: '/roles',     label: 'Roles',          Icon: AccountManagementIcon, activeFor: ['/roles'] },
    { href: '/reports',   label: 'Reports',        Icon: ReportDocumentIcon,    activeFor: ['/reports'] },
  ],
  [
    { href: '/security',  label: 'Security',       Icon: SecurityGroupIcon,     activeFor: ['/security'] },
    { href: '/identity',  label: 'Identity',       Icon: LockIcon,              activeFor: ['/identity'] },
  ],
  [
    { href: '/all-admin', label: 'All admin centers', Icon: PeopleIcon,         activeFor: ['/all-admin'] },
  ],
];

export default function LeftNav() {
  const pathname = usePathname();

  function isActive(activeFor: string[]) {
    return activeFor.some((p) =>
      p === '/' ? pathname === '/' : pathname.startsWith(p)
    );
  }

  return (
    <nav
      className="w-12 flex-shrink-0 flex flex-col overflow-y-auto overflow-x-hidden"
      style={{ backgroundColor: '#E9E9E9' }}
    >
      {/* Hamburger */}
      <div className="w-full h-10 flex items-center justify-center flex-shrink-0 text-[#323130]">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Nav sections */}
      <div className="flex flex-col flex-1 pb-2">
        {NAV_SECTIONS.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {sectionIndex > 0 && <NavDivider />}
            {section.map((item) => {
              const active = isActive(item.activeFor);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.label}
                  className={`relative w-full h-10 flex items-center justify-center flex-shrink-0 transition-colors ${
                    active
                      ? 'bg-white/60 text-[#323130]'
                      : 'text-[#323130] hover:bg-black/[0.06]'
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0078d4] rounded-r-[2px]" />
                  )}
                  <span className="flex items-center justify-center w-5 h-5">
                    {item.Icon === null
                      ? <CopilotIcon />
                      : <item.Icon style={{ fontSize: 16 }} />
                    }
                  </span>
                </Link>
              );
            })}
          </div>
        ))}

        {/* More — pinned to bottom */}
        <div className="mt-auto">
          <NavDivider />
          <button
            title="More"
            className="w-full h-10 flex items-center justify-center text-[#323130] hover:bg-black/[0.06] transition-colors"
          >
            <MoreIcon style={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
