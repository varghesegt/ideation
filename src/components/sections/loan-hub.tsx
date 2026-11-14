"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOAN_PARTNERS_12, LOAN_PILLARS, LoanPartner } from "@/data/new-project-data";
import { BankLogo } from "@/components/ui/bank-logo";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Calculator,
  Building2,
} from "lucide-react";

interface LoanHubProps {
  onOpenModal: (topic?: string) => void;
  isDetailed?: boolean;
}

export function LoanHub({ onOpenModal, isDetailed = false }: LoanHubProps) {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(30); // in Lakhs
  const [loanTenure, setLoanTenure] = useState<number>(10); // in Years
  const [interestRate, setInterestRate] = useState<number>(9.5); // in %

  // Monthly EMI calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const principal = loanAmount * 100000;
  const estimatedEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  return (
    <section id="loan-hub" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-b border-[#dce4ef] relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0f172a] leading-tight">
              Education loan & financial assistance hub.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Funding your international master’s or bachelor’s shouldn’t hold you back. Through Ideation’s verified partnerships with 12+ national banks and global NBFCs, students receive pre-visa sanction letters, non-collateral approvals up to ₹60 Lakhs, and dedicated application guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenModal("Education Loan Pre-Assessment")}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <span>Check loan eligibility</span>
              <span>↗</span>
            </button>
            <a
              href="#loan-calculator"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <span>Estimate monthly EMI</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {LOAN_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="p-5 sm:p-6 bg-white rounded-xl border border-[#dce4ef] hover:border-[#1a56db] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-display font-extrabold text-xs text-[#1a56db] bg-[#eaf1ff] px-2.5 py-1 rounded-md w-fit block">
                  {pillar.step}
                </span>
                <h3 className="font-display font-bold text-base text-[#0f172a] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 12+ Partner Banks & NBFCs Header */}
        <div className="mb-8 pb-4 border-b border-[#dce4ef]">
          <div className="flex items-center gap-2.5">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0f172a]">
              12+ Verified Banking & NBFC Partners
            </h3>
            <span className="bg-[#1a56db] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              12 Partners
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#64748b] mt-1">
            Pre-approved tie-ups for fast sanction letters and dedicated application processing.
          </p>
        </div>

        {/* Highly Designed Partner Cards Grid (12 Institutions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {LOAN_PARTNERS_12.map((partner) => (
            <article
              key={partner.id}
              className="relative rounded-2xl bg-white border border-[#dce4ef] hover:border-[#1a56db]/50 hover:shadow-[0_16px_36px_-12px_rgba(26,86,219,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Subtle Top Accent Hairline */}
              <div className="h-1 w-full bg-gradient-to-r from-[#1a56db]/10 via-[#1a56db] to-[#1a56db]/10 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-5 sm:p-6 space-y-4">
                {/* Top Header: Official Bank Logo */}
                <div className="h-11 flex items-center">
                  <BankLogo id={partner.id} className="h-9 sm:h-10 w-auto object-contain" />
                </div>

                {/* Micro-Dashboard Numbers Box */}
                <div className="bg-[#f8fafc] rounded-xl p-3.5 border border-[#e2e8f0] space-y-2.5">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#64748b] block font-semibold">
                        Max Loan Amount
                      </span>
                      <strong className="text-[#0f172a] font-display font-extrabold text-[15px] sm:text-[16px] block mt-0.5">
                        {partner.maxAmount}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#64748b] block font-semibold">
                        Indicative Rate
                      </span>
                      <strong className="text-[#15803d] font-display font-extrabold text-[15px] sm:text-[16px] block mt-0.5">
                        {partner.rateEstimate}
                      </strong>
                    </div>
                  </div>

                  <div className="border-t border-[#edf2f7] pt-2 flex items-center justify-between text-[11px] text-[#475569]">
                    <span className="truncate">
                      <strong>Moratorium:</strong> {partner.moratorium}
                    </span>
                    <span className="flex-shrink-0 ml-2">
                      <strong>Tenure:</strong> {partner.tenure}
                    </span>
                  </div>
                </div>

                {/* Collateral Trust Indicator */}
                <div className="text-xs text-[#0f172a] font-semibold flex items-center gap-2 bg-[#f1f5f9]/70 px-3 py-1.5 rounded-lg border border-[#e2e8f0]">
                  <ShieldCheck className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
                  <span>{partner.collateral}</span>
                </div>

                {/* Core Value Statement */}
                <p className="text-xs text-[#475569] leading-relaxed">
                  {partner.highlight}
                </p>

                {/* Key Features Bullet Chips */}
                <div className="space-y-1.5 pt-1">
                  {partner.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1a56db] flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-5 sm:px-6 py-3.5 bg-[#f8fafc] border-t border-[#edf2f7] flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#64748b]">
                  <Building2 className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span className="truncate max-w-[120px] sm:max-w-[150px]">{partner.type}</span>
                </div>

                <button
                  onClick={() => onOpenModal(`Education Loan Application via ${partner.name}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1a56db] hover:bg-[#1243b4] px-3.5 py-2 rounded-lg shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Apply with Ideation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Loan EMI Estimator Box */}
        <div id="loan-calculator" className="bg-[#edf3ff] rounded-2xl border border-[#cadbfa] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1a56db] flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Planning Tool</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0f172a]">
                  Estimate your education loan repayment
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b]">
                  Adjust the sliders to calculate indicative monthly EMI post your course moratorium period.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-5 pt-1">
                {/* Slider 1: Loan Amount */}
                <div className="bg-white p-4 rounded-xl border border-[#cadbfa]">
                  <div className="flex justify-between items-center text-xs font-semibold text-[#0f172a] mb-2">
                    <span className="text-[#64748b]">Loan Amount Needed</span>
                    <span className="text-[#1a56db] font-display font-extrabold text-base sm:text-lg">
                      ₹{loanAmount} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#1a56db] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-[#64748b] font-medium mt-1.5">
                    <span>₹5L</span>
                    <span>₹50L (Unsecured Max)</span>
                    <span>₹1 Cr+ (Secured)</span>
                  </div>
                </div>

                {/* Slider 2 & 3: Tenure and Interest Rate */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-[#cadbfa]">
                    <div className="flex justify-between items-center text-xs font-semibold text-[#0f172a] mb-2">
                      <span className="text-[#64748b]">Repayment Tenure</span>
                      <span className="text-[#1a56db] font-display font-bold text-sm">
                        {loanTenure} Years
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="15"
                      step="1"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full accent-[#1a56db] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-[#64748b] mt-1">
                      <span>5 Yrs</span>
                      <span>10 Yrs</span>
                      <span>15 Yrs</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#cadbfa]">
                    <div className="flex justify-between items-center text-xs font-semibold text-[#0f172a] mb-2">
                      <span className="text-[#64748b]">Indicative Interest Rate</span>
                      <span className="text-[#1a56db] font-display font-bold text-sm">
                        {interestRate}% p.a.
                      </span>
                    </div>
                    <input
                      type="range"
                      min="8.5"
                      max="13"
                      step="0.25"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-[#1a56db] cursor-pointer h-2 bg-[#e2e8f0] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-[#64748b] mt-1">
                      <span>8.5% (SBI)</span>
                      <span>9.75% (Avg)</span>
                      <span>13%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-[#cadbfa] p-6 sm:p-8 shadow-sm space-y-5 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#64748b]">
                  Estimated Monthly EMI
                </span>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a56db] mt-1.5 tracking-tight">
                  ₹{estimatedEmi.toLocaleString("en-IN")}
                  <span className="text-xs font-medium text-[#64748b]"> /month</span>
                </div>
                <span className="text-[11px] text-[#64748b] mt-1.5 block">
                  Starts after course completion + 6 to 12 months grace period.
                </span>
              </div>

              <div className="border-t border-[#edf2f7] pt-4 text-xs text-[#334155] space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] flex-shrink-0" />
                  <span>100% Tax deduction on interest under Section 80E</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] flex-shrink-0" />
                  <span>Pre-visa disbursement letter included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] flex-shrink-0" />
                  <span>Zero pre-payment penalties on leading private schemes</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Education Loan Pre-Assessment (₹${loanAmount} Lakhs at ${interestRate}%)`)}
                className="btn-primary w-full justify-center text-xs py-3"
              >
                <span>Request pre-approval assessment</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
