export default function TopNav() {
  return (
    <header className="h-12 bg-[#1b1a19] flex items-center flex-shrink-0 z-50 relative">
      {/* Left: hamburger + title */}
      <div className="flex items-center gap-2 pl-2 w-12 justify-center flex-shrink-0">
        <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded transition-colors flex-shrink-0">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M0 1h16M0 6h16M0 11h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <span className="text-[16px] font-semibold text-white whitespace-nowrap pl-2 pr-6">
        Microsoft 365 admin center
      </span>

      {/* Center: search */}
      <div className="flex-1 flex justify-center px-4">
        <div className="w-[468px] h-8 bg-[#333] rounded-sm flex items-center gap-2 px-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#479ef5] flex-shrink-0">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-[14px] text-[#d6d6d6]">Search</span>
        </div>
      </div>

      {/* Right: actions */}
      <div className="flex items-center flex-shrink-0">
        {/* Copilot button */}
        <button className="flex items-center gap-1.5 h-12 px-4 hover:bg-white/10 transition-colors">
          <img src="/copilot-icon-32.png" alt="Copilot" width={16} height={16} style={{ objectFit: 'contain', mixBlendMode: 'multiply' }} />
          <span className="text-[14px] font-semibold text-white">Copilot</span>
        </button>

        {/* Avatar */}
        <button className="w-10 h-12 flex items-center justify-center hover:bg-white/10 transition-colors mr-1">
          <div className="w-8 h-8 rounded-full bg-[#5c2d91] flex items-center justify-center text-white text-[13px] font-semibold">
            K
          </div>
        </button>
      </div>
    </header>
  );
}
