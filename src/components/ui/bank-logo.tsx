import React from "react";

interface BankLogoProps {
  id: string;
  className?: string;
}

export function BankLogo({ id, className = "h-9 w-auto" }: BankLogoProps) {
  switch (id) {
    case "sbi":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="State Bank of India">
          {/* SBI Trademark Blue Disc with Keyhole Cutout */}
          <circle cx="24" cy="24" r="19" fill="#00539c" />
          <circle cx="24" cy="24" r="6.2" fill="white" />
          <rect x="22" y="24" width="4" height="19" fill="white" />
          {/* Official Typography */}
          <text x="54" y="24" fill="#00539c" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.04em">SBI</text>
          <text x="54" y="38" fill="#475569" fontSize="9" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.05em">GLOBAL ED-VANTAGE</text>
        </svg>
      );

    case "hdfc-credila":
      return (
        <svg viewBox="0 0 205 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HDFC Credila">
          {/* HDFC Interlocking Box Geometry */}
          <rect x="6" y="8" width="32" height="32" rx="3" fill="#004c8f" />
          <rect x="11" y="13" width="22" height="22" fill="#ed1c24" />
          <rect x="19" y="8" width="6" height="32" fill="white" />
          <rect x="6" y="21" width="32" height="6" fill="white" />
          <rect x="11" y="13" width="8" height="8" fill="#ed1c24" />
          <rect x="25" y="13" width="8" height="8" fill="#ed1c24" />
          <rect x="11" y="27" width="8" height="8" fill="#ed1c24" />
          <rect x="25" y="27" width="8" height="8" fill="#ed1c24" />
          {/* HDFC in Navy, CREDILA in Red */}
          <text x="48" y="24" fill="#004c8f" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.02em">HDFC</text>
          <text x="96" y="24" fill="#ed1c24" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.02em">CREDILA</text>
          <text x="48" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">The Education Loan Specialist</text>
        </svg>
      );

    case "avanse":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Avanse Financial Services">
          <defs>
            <linearGradient id="avanse-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e5007d" />
              <stop offset="100%" stopColor="#b80060" />
            </linearGradient>
          </defs>
          {/* Avanse Dynamic Magenta Ribbon and Orange Core */}
          <path d="M10 36C10 21 20 10 36 10C26 19 21 28 21 36H10Z" fill="url(#avanse-grad)" />
          <path d="M21 36C21 25 28 17 38 17C30 23 27 29 27 36H21Z" fill="#e5007d" opacity="0.85" />
          <circle cx="30" cy="17" r="4.5" fill="#f37021" />
          {/* Typography */}
          <text x="48" y="24" fill="#1e293b" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.06em">AVANSE</text>
          <text x="48" y="38" fill="#e5007d" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em">FINANCIAL SERVICES</text>
        </svg>
      );

    case "prodigy":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Prodigy Finance">
          <defs>
            <linearGradient id="prodigy-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4c216d" />
              <stop offset="100%" stopColor="#2e0f47" />
            </linearGradient>
          </defs>
          {/* Prodigy Modern Purple Tile with Glowing Mint Core */}
          <rect x="7" y="8" width="32" height="32" rx="8" fill="url(#prodigy-grad)" />
          <circle cx="23" cy="24" r="8" fill="#00d4b2" />
          <circle cx="26" cy="21" r="3.5" fill="#3a1d5c" />
          {/* Typography */}
          <text x="48" y="23" fill="#3a1d5c" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.01em">Prodigy</text>
          <text x="112" y="23" fill="#0f766e" fontSize="15" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Finance</text>
          <text x="48" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Global USD / GBP Loans</text>
        </svg>
      );

    case "icici":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ICICI Bank">
          <defs>
            <linearGradient id="icici-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f37021" />
              <stop offset="100%" stopColor="#c73812" />
            </linearGradient>
          </defs>
          {/* ICICI Corporate Vermilion Medallion with Sweeping 'i' Flame */}
          <circle cx="24" cy="24" r="18" fill="url(#icici-grad)" />
          <path d="M19 14C23 18 29 17 31 31C26 27 22 26 19 14Z" fill="white" />
          <circle cx="27" cy="14" r="2.5" fill="white" />
          {/* Typography */}
          <text x="52" y="24" fill="#990000" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.01em">ICICI Bank</text>
          <text x="52" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">i-Process Education Loan</text>
        </svg>
      );

    case "axis":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Axis Bank">
          {/* Axis Signature Burgundy Inverted Chevron 'A' Monogram */}
          <path d="M24 7L38 37H30L24 23L20 31H12L24 7Z" fill="#97124B" />
          <path d="M9 37L15 27L19 35L17.5 37H9Z" fill="#97124B" opacity="0.95" />
          {/* Typography */}
          <text x="48" y="24" fill="#97124B" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.05em">AXIS BANK</text>
          <text x="48" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Prime Overseas Loan</text>
        </svg>
      );

    case "incred":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="InCred">
          {/* InCred Red Badge with Dual White Fast-Forward Chevrons */}
          <rect x="7" y="8" width="32" height="32" rx="7" fill="#e51b24" />
          <path d="M15 16L23 24L15 32" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 16L31 24L23 32" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Typography */}
          <text x="48" y="24" fill="#e51b24" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">In</text>
          <text x="66" y="24" fill="#172b43" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">Cred</text>
          <text x="48" y="38" fill="#e51b24" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em">EDUCATION LOANS</text>
        </svg>
      );

    case "auxilo":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Auxilo Finserve">
          {/* Auxilo Dual Saffron & Emerald Infinity Partnership Rings */}
          <circle cx="18" cy="24" r="12" fill="#ff6f00" fillOpacity="0.9" />
          <circle cx="30" cy="24" r="12" fill="#00897b" fillOpacity="0.9" />
          {/* Typography */}
          <text x="50" y="23" fill="#1e293b" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.06em">AUXILO</text>
          <text x="50" y="38" fill="#ff6f00" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em">FINSERVE SPECIALIST</text>
        </svg>
      );

    case "mpower":
      return (
        <svg viewBox="0 0 205 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="MPOWER Financing">
          {/* MPOWER Collegiate Navy 'M' with Golden Graduation Star */}
          <path d="M10 36L10 14L20 27L30 14L30 36" stroke="#1b365d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polygon points="20,6 22,11 27,11 23,14 25,19 20,16 15,19 17,14 13,11 18,11" fill="#f59e0b" />
          {/* Typography */}
          <text x="48" y="23" fill="#1b365d" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.04em">MPOWER</text>
          <text x="48" y="38" fill="#d97706" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.04em">FINANCING · NO CO-SIGNER</text>
        </svg>
      );

    case "baroda":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Bank of Baroda">
          <defs>
            <linearGradient id="baroda-sun" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f05a22" />
              <stop offset="100%" stopColor="#d94411" />
            </linearGradient>
          </defs>
          {/* The Baroda Sun Emblem with Radiant Corona Rays */}
          <circle cx="24" cy="24" r="17" fill="url(#baroda-sun)" />
          <path d="M24 10V38M10 24H38M14 14L34 34M14 34L34 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="6.5" fill="#f05a22" stroke="white" strokeWidth="2" />
          {/* Typography */}
          <text x="50" y="23" fill="#f05a22" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.01em">Bank of Baroda</text>
          <text x="50" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Baroda Scholar Scheme</text>
        </svg>
      );

    case "idfc":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="IDFC FIRST Bank">
          {/* IDFC FIRST Maroon Tile with Architectural Line Monogram */}
          <rect x="7" y="8" width="32" height="32" rx="5" fill="#881337" />
          <path d="M13 14V34M13 14H19C22 14 23 16 23 19C23 22 22 24 19 24H13M25 14H33M25 23H31M25 14V34M25 34H32" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Typography */}
          <text x="48" y="23" fill="#881337" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.02em">IDFC FIRST</text>
          <text x="136" y="23" fill="#1e293b" fontSize="14" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">Bank</text>
          <text x="48" y="38" fill="#475569" fontSize="9" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">Education Financing</text>
        </svg>
      );

    case "flywire":
      return (
        <svg viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Flywire">
          {/* Flywire Midnight Navy Globe with Dual Mint Currency Orbits */}
          <circle cx="24" cy="24" r="17" fill="#002855" />
          <path d="M14 24C14 18 22 13 32 20C24 23 19 25 14 24Z" fill="#00c988" />
          <path d="M34 24C34 30 26 35 16 28C24 25 29 23 34 24Z" fill="#00a887" />
          <circle cx="24" cy="24" r="4" fill="white" />
          {/* Typography */}
          <text x="48" y="24" fill="#002855" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.02em">flywire</text>
          <text x="48" y="38" fill="#00a887" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.08em">TUITION & FOREX</text>
        </svg>
      );

    default:
      return (
        <div className="flex items-center gap-2 text-xs font-bold text-[#172b43]">
          <span className="w-6 h-6 rounded bg-[#1a56db] text-white grid place-items-center text-[10px]">₹</span>
          <span>{id.toUpperCase()}</span>
        </div>
      );
  }
}
