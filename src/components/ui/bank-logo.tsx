import React from "react";

interface BankLogoProps {
  id: string;
  className?: string;
}

export function BankLogo({ id, className = "h-8 w-auto" }: BankLogoProps) {
  switch (id) {
    case "sbi":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="22" cy="22" r="18" fill="#003399" />
          <circle cx="22" cy="22" r="6" fill="white" />
          <rect x="20" y="22" width="4" height="18" fill="white" />
          <text x="50" y="22" fill="#003399" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.05em">SBI</text>
          <text x="50" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Global Ed-Vantage</text>
        </svg>
      );

    case "hdfc-credila":
      return (
        <svg viewBox="0 0 170 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="4" y="8" width="28" height="28" rx="4" fill="#004c8f" />
          <rect x="10" y="14" width="16" height="16" fill="#ed1c24" />
          <rect x="15" y="10" width="6" height="24" fill="white" />
          <rect x="10" y="19" width="16" height="6" fill="white" />
          <text x="40" y="21" fill="#004c8f" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">HDFC</text>
          <text x="82" y="21" fill="#ed1c24" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">CREDILA</text>
          <text x="40" y="34" fill="#64748b" fontSize="8" fontWeight="600" fontFamily="sans-serif">The Education Loan Specialist</text>
        </svg>
      );

    case "avanse":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M12 32C12 20 22 10 32 10C24 18 20 26 20 34H12Z" fill="#e5007d" />
          <circle cx="26" cy="18" r="4" fill="#ff6600" />
          <text x="44" y="23" fill="#172b43" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.08em">AVANSE</text>
          <text x="44" y="34" fill="#e5007d" fontSize="8" fontWeight="600" fontFamily="sans-serif">Financial Services</text>
        </svg>
      );

    case "prodigy":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="6" y="8" width="28" height="28" rx="7" fill="#502c7d" />
          <circle cx="20" cy="22" r="7" fill="#00d2c6" />
          <text x="42" y="22" fill="#502c7d" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">PRODIGY</text>
          <text x="42" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Global USD/GBP Loans</text>
        </svg>
      );

    case "icici":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="20" cy="22" r="15" fill="#f37021" />
          <path d="M16 14C20 18 24 16 26 28C22 24 18 24 16 14Z" fill="white" />
          <text x="44" y="22" fill="#b02a30" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">ICICI Bank</text>
          <text x="44" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">i-Process Education Loan</text>
        </svg>
      );

    case "axis":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <polygon points="20,8 34,34 6,34" fill="#97144d" />
          <polygon points="20,18 28,34 12,34" fill="white" />
          <text x="44" y="23" fill="#97144d" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.05em">AXIS BANK</text>
          <text x="44" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Prime Overseas Loan</text>
        </svg>
      );

    case "incred":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="6" y="8" width="28" height="28" rx="6" fill="#d32f2f" />
          <path d="M13 15L21 22L13 29" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 15L29 22L21 29" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="42" y="22" fill="#172b43" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">InCred</text>
          <text x="42" y="34" fill="#d32f2f" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Education Loans</text>
        </svg>
      );

    case "auxilo":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="16" cy="22" r="10" fill="#ff6f00" opacity="0.9" />
          <circle cx="26" cy="22" r="10" fill="#00897b" opacity="0.9" />
          <text x="44" y="22" fill="#172b43" fontSize="14" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.06em">AUXILO</text>
          <text x="44" y="34" fill="#ff6f00" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Finserve Specialist</text>
        </svg>
      );

    case "mpower":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M8 32L16 12L24 22L32 12L40 32" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="8" r="3" fill="#f59e0b" />
          <text x="48" y="22" fill="#1a365d" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.04em">MPOWER</text>
          <text x="48" y="34" fill="#f59e0b" fontSize="8" fontWeight="700" fontFamily="sans-serif">No-Cosigner Financing</text>
        </svg>
      );

    case "baroda":
      return (
        <svg viewBox="0 0 165 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="20" cy="22" r="15" fill="#f05a22" />
          <path d="M12 22H28M20 14V30M14 16L26 28M14 28L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <text x="44" y="21" fill="#f05a22" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">Bank of Baroda</text>
          <text x="44" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Baroda Scholar Loan</text>
        </svg>
      );

    case "idfc":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="6" y="8" width="28" height="28" rx="4" fill="#9b1c2e" />
          <text x="10" y="26" fill="white" fontSize="10" fontWeight="900" fontFamily="sans-serif">IDFC</text>
          <text x="42" y="21" fill="#9b1c2e" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.02em">IDFC FIRST</text>
          <text x="42" y="34" fill="#64748b" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Education Financing</text>
        </svg>
      );

    case "flywire":
      return (
        <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="20" cy="22" r="15" fill="#003b71" />
          <path d="M13 22C13 18 20 14 27 22C20 26 16 26 13 22Z" fill="#00a887" />
          <text x="44" y="22" fill="#003b71" fontSize="15" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.03em">flywire</text>
          <text x="44" y="34" fill="#00a887" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Tuition & Forex</text>
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
