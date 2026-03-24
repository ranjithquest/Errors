'use client';

import { useState, useEffect } from 'react';
import { X, Settings2, Search, Info, CheckCircle2 } from 'lucide-react';
import type { Connector, AuthMethod, UserCriteriaType } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import RailTabs from '@/components/rail/RailTabs';
import Select from '@/components/ui/Select';

interface ConnectorPanelProps {
  connector: Connector | null;
  onClose: () => void;
  onSave: (id: string, patch: Partial<Connector>) => void;
}

const AUTH_OPTIONS = [
  { value: 'basic', label: 'Basic Auth' },
  { value: 'oauth2', label: 'OAuth 2.0' },
];

const SETUP_TABS = ['Setup', 'Users', 'Content', 'Sync'] as const;

function inputCls() {
  return 'w-full px-3 py-[9px] text-[13px] border border-[var(--border-mid)] rounded-lg bg-[var(--surface)] text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--text-tertiary)]';
}

function ValidMark({ show }: { show: boolean }) {
  if (!show) return null;
  return <CheckCircle2 size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3d7a25] pointer-events-none" />;
}

export default function ConnectorPanel({ connector, onClose, onSave }: ConnectorPanelProps) {
  const [visible, setVisible] = useState(false);

  // Form state
  const [displayName, setDisplayName] = useState('');
  const [instanceUrl, setInstanceUrl] = useState('');
  const [authMethod, setAuthMethod] = useState<AuthMethod>('none');
  const [criteria, setCriteria] = useState<UserCriteriaType>('simple');
  const [dirty, setDirty] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (connector) {
      setDisplayName(connector.displayName);
      setInstanceUrl(connector.instanceUrl);
      setAuthMethod(connector.authMethod);
      setCriteria(connector.userCriteriaType);
      setDirty(false);
      setSaved(false);
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [connector?.id]);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 220);
  }

  function handleSave() {
    if (!connector) return;
    onSave(connector.id, { displayName, instanceUrl, authMethod, userCriteriaType: criteria });
    setDirty(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function mark() { setDirty(true); setSaved(false); }

  if (!connector) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal — two-column wizard layout */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center p-6 transition-all duration-220 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
        }`}
        style={{ pointerEvents: visible ? 'auto' : 'none' }}
      >
        <div className="w-full max-w-[1040px] h-[760px] bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden flex shadow-[0_8px_40px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.08)]">

          {/* ── Left: settings form ── */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-[var(--border)]">

            {/* Header */}
            <div className="px-6 py-[15px] border-b border-[var(--border)] flex items-center gap-3 flex-shrink-0">
              <img src="/servicenow-logo.svg" alt="ServiceNow" className="w-9 h-9 rounded-lg flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold text-[var(--text-primary)] tracking-[-0.01em] truncate">
                    {connector.displayName}
                  </span>
                  <Badge variant={connector.healthStatus} />
                </div>
                <div className="text-[11px] text-[var(--text-tertiary)] mt-[1px]">Advanced setup</div>
              </div>
              <button className="flex items-center gap-[5px] px-3 py-[6px] text-[11.5px] font-medium text-[var(--text-secondary)] border border-[var(--border-mid)] rounded-lg hover:bg-[var(--bg)] transition-colors flex-shrink-0">
                <Settings2 size={12} />
                Advanced setup
              </button>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--text-tertiary)] hover:bg-[var(--bg)] hover:text-[var(--text-primary)] transition-colors flex-shrink-0"
              >
                <X size={15} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[var(--border)] px-6 flex-shrink-0">
              {SETUP_TABS.map((tab, i) => (
                <button
                  key={tab}
                  disabled={i > 0}
                  className={`py-[11px] px-[2px] mr-6 text-[12.5px] font-medium border-b-2 -mb-px transition-colors ${
                    i === 0
                      ? 'text-[var(--text-primary)] border-[var(--text-primary)]'
                      : 'text-[var(--text-tertiary)] border-transparent cursor-not-allowed'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

              {/* Source name */}
              <div>
                <p className="text-[12.5px] text-[var(--text-secondary)] mb-3 leading-[1.5]">
                  Provide a unique name that will be displayed to users in results
                </p>
                <label className="block text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.04em] mb-[5px]">
                  Source name <span className="text-[var(--red-mid)]">*</span>
                </label>
                <div className="relative">
                  <input
                    className={inputCls() + ' pr-8'}
                    value={displayName}
                    onChange={(e) => { setDisplayName(e.target.value); mark(); }}
                  />
                  <ValidMark show={displayName.trim().length > 0} />
                </div>
              </div>

              {/* User criteria */}
              <div>
                <p className="text-[12.5px] text-[var(--text-secondary)] mb-3 leading-[1.5]">
                  User criteria setup in ServiceNow
                </p>
                <div className="flex gap-6">
                  {(['simple', 'advanced'] as const).map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer select-none">
                      <div
                        onClick={() => { setCriteria(v); mark(); }}
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors cursor-pointer ${
                          criteria === v ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-[var(--border-mid)] bg-[var(--surface)]'
                        }`}
                      >
                        {criteria === v && <div className="w-[6px] h-[6px] rounded-full bg-white" />}
                      </div>
                      <span className="text-[13px] text-[var(--text-primary)] capitalize">{v}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Instance URL */}
              <div>
                <p className="text-[12.5px] text-[var(--text-secondary)] mb-3 leading-[1.5]">
                  Provide basic information about your ServiceNow instance
                </p>
                <label className="block text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.04em] mb-[5px]">
                  ServiceNow instance URL <span className="text-[var(--red-mid)]">*</span>
                </label>
                <div className="flex items-center border border-[var(--border-mid)] rounded-lg overflow-hidden focus-within:border-[var(--accent)] transition-colors">
                  <span className="px-3 py-[9px] text-[13px] text-[var(--text-tertiary)] bg-[var(--bg)] border-r border-[var(--border-mid)] select-none flex-shrink-0">
                    https://
                  </span>
                  <input
                    className="flex-1 px-3 py-[9px] text-[13px] bg-[var(--surface)] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
                    value={instanceUrl.replace(/^https?:\/\//, '')}
                    onChange={(e) => { setInstanceUrl(e.target.value ? `https://${e.target.value}` : ''); mark(); }}
                    placeholder="example.servicenow.com"
                  />
                </div>
              </div>

              {/* Auth */}
              <div>
                <p className="text-[12.5px] text-[var(--text-secondary)] mb-3 leading-[1.5]">
                  Authenticate your ServiceNow instance
                </p>
                <label className="block text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.04em] mb-[5px]">
                  Authentication type <span className="text-[var(--red-mid)]">*</span>
                </label>
                <Select
                  options={AUTH_OPTIONS}
                  placeholder="Select"
                  value={authMethod === 'none' ? '' : authMethod}
                  onChange={(v) => { setAuthMethod((v || 'none') as AuthMethod); mark(); }}
                />
              </div>

              {/* Staged rollout */}
              <div>
                <p className="text-[12.5px] text-[var(--text-secondary)] mb-3 leading-[1.5]">Staged rollout</p>
                <label className="flex items-center gap-[5px] text-[11px] font-medium text-[var(--text-secondary)] uppercase tracking-[0.04em] mb-[5px]">
                  Select users and user groups <Info size={11} className="text-[var(--text-tertiary)]" />
                </label>
                <div className="relative">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-8 pr-3 py-[9px] text-[13px] border border-[var(--border-mid)] rounded-lg bg-[var(--surface)] text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--text-tertiary)]"
                  />
                </div>
              </div>

              {/* Meta */}
              <div className="pt-1 border-t border-[var(--border)] flex justify-between">
                <span className="text-[11.5px] text-[var(--text-tertiary)]">Created</span>
                <span className="text-[11.5px] text-[var(--text-secondary)]">
                  {new Date(connector.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[var(--border)] flex justify-between items-center flex-shrink-0">
              <button
                onClick={handleSave}
                disabled={!dirty}
                className={`px-5 py-[9px] text-[13px] font-medium rounded-lg transition-all ${
                  dirty
                    ? 'bg-[var(--accent)] text-white hover:opacity-85'
                    : 'bg-[var(--bg)] border border-[var(--border-mid)] text-[var(--text-tertiary)] cursor-not-allowed'
                }`}
              >
                {saved ? 'Saved!' : 'Save and close'}
              </button>
              <button
                onClick={handleClose}
                className="px-5 py-[9px] text-[13px] font-medium border border-[var(--border-mid)] text-[var(--text-secondary)] rounded-lg hover:bg-[var(--bg)] transition-all"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* ── Right rail ── */}
          <div className="w-[300px] min-w-[300px] flex flex-col bg-[var(--rail-bg)] overflow-hidden">
            <RailTabs connector={connector} />
          </div>
        </div>
      </div>
    </>
  );
}
