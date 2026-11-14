"use client";

import React from "react";
import Link from "next/link";
import { LOAN_PARTNERS_12 } from "@/data/new-project-data";
import { BankLogo } from "@/components/ui/bank-logo";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface LoanMarqueeHomeProps {
  onOpenModal: (topic?: string) => void;
}

export function LoanMarqueeHome({ onOpenModal }: LoanMarqueeHomeProps) {
  // Duplicate partners array so marquee loops seamlessly
  const marqueePartners = [...LOAN_PARTNERS_12, ...LOAN_PARTNERS_12];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-b border-[#dce4ef] overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="eyebrow-accent">
              <span className="w-4 h-[1.5px] bg-[#1a56db]" />
              <span>Ancillary financial ecosystem</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#172b43] leading-tight">
              Pre-approved education loans with 12+ trusted partners.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Fast collateral and non-collateral sanctions with dedicated application assistance. Click any partner below to compare schemes, interest rates, and calculate your monthly EMI.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/services#loan-hub"
              className="btn-primary"
            >
              <span>Explore all loan schemes & EMI</span>
              <span>↗</span>
            </Link>
            <button
              onClick={() => onOpenModal("Education Loan Pre-Assessment")}
              className="btn-secondary cursor-pointer"
            >
              <span>Check loan eligibility</span>
            </button>
          </div>
        </div>

        {/* 4 Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#edf2f7]">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#172b43]">
            <CheckCircle2 className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
            <span>Up to ₹60L Non-Collateral</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#172b43]">
            <CheckCircle2 className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
            <span>Lowest ROI from 8.65%</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#172b43]">
            <CheckCircle2 className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
            <span>Pre-Visa Embassy Sanctions</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#172b43]">
            <CheckCircle2 className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
            <span>Section 80E Tax Benefits</span>
          </div>
        </div>
      </div>

      {/* Infinite Running Logo Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-4 bg-[#f7f9fc]/80 border-y border-[#e2e8f0]">
        {/* Left & Right Gradient Scrims for smooth fading */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-5 px-4 items-center">
          {marqueePartners.map((partner, idx) => (
            <Link
              key={`${partner.id}-${idx}`}
              href="/services#loan-hub"
              className="flex-shrink-0 bg-white border border-[#dce4ef] hover:border-[#1a56db] hover:shadow-md px-5 py-3 rounded-md transition-all flex items-center gap-4 group cursor-pointer"
              title={`${partner.name} - Click to view detailed scheme in Our Support`}
            >
              <div className="h-9 flex items-center">
                <BankLogo id={partner.id} className="h-8 w-auto object-contain" />
              </div>
              
              <div className="border-l border-[#e2e8f0] pl-3.5 space-y-0.5 text-left">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#1a56db]">
                  {partner.maxAmount}
                </div>
                <div className="text-[11px] font-semibold text-[#172b43] group-hover:text-[#1a56db] transition-colors flex items-center gap-1">
                  <span>{partner.rateEstimate}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Micro Redirection Note */}
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 mt-6 flex items-center justify-between text-xs text-[#64748b]">
        <span>
          *Hover over any logo to pause. Click to view complete details, document checklist, and EMI calculator in Our Support.
        </span>
        <Link
          href="/services#loan-hub"
          className="text-[#1a56db] font-bold hover:underline hidden sm:inline-flex items-center gap-1"
        >
          <span>Open full loan hub</span>
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
