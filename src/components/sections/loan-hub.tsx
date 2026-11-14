"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOAN_PARTNERS_12, LOAN_PILLARS, LoanPartner } from "@/data/new-project-data";
import { BankLogo } from "@/components/ui/bank-logo";
import { CheckCircle2, ShieldCheck, ArrowUpRight, Percent, Building, FileText, Calculator } from "lucide-react";

interface LoanHubProps {
  onOpenModal: (topic?: string) => void;
  isDetailed?: boolean;
}

export function LoanHub({ onOpenModal, isDetailed = false }: LoanHubProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [loanAmount, setLoanAmount] = useState<number>(30); // in Lakhs
  const [loanTenure, setLoanTenure] = useState<number>(10); // in Years
  const [interestRate, setInterestRate] = useState<number>(9.5); // in %

  // Simple EMI estimation calculation: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const principal = loanAmount * 100000;
  const estimatedEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const filterTabs = [
    { id: "all", label: "All 12 Partners" },
    { id: "unsecured", label: "Non-Collateral (Unsecured)" },
    { id: "public", label: "Public Banks (Lowest ROI)" },
    { id: "international", label: "No Co-Signer (USD/Global)" },
  ];

  const filteredPartners = LOAN_PARTNERS_12.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "unsecured") {
      return (
        p.collateral.toLowerCase().includes("no collateral") ||
        p.collateral.toLowerCase().includes("unsecured") ||
        p.collateral.toLowerCase().includes("both")
      );
    }
    if (selectedFilter === "public") {
      return p.type.includes("Public Sector Bank");
    }
    if (selectedFilter === "international") {
      return p.type.includes("Global") || p.type.includes("Direct Lender");
    }
    return true;
  });

  return (
    <section id="loan-hub" className="py-20 sm:py-24 bg-white border-t border-b border-[#dce4ef] relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="eyebrow-accent">
              <span className="w-4 h-[1.5px] bg-[#1a56db]" />
              <span>Ancillary financial ecosystem · Zero stress funding</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#172b43] leading-tight">
              Education loan & financial assistance hub.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Funding your international degree shouldn’t be a roadblock. Through our verified partnerships with 12+ leading national banks and global NBFCs, we help students across Tamil Nadu secure collateral and non-collateral loans with doorstep document support.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenModal("Education Loan Pre-Assessment")}
              className="btn-primary"
            >
              <span>Check loan eligibility</span>
              <span>↗</span>
            </button>
            {!isDetailed && (
              <Link href="/services#loan-hub" className="btn-secondary">
                <span>View all loan schemes</span>
                <span>↓</span>
              </Link>
            )}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LOAN_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="card-clean p-6 bg-[#f7f9fc] border border-[#dce4ef] flex flex-col justify-between hover:border-[#1a56db] transition-all"
            >
              <div className="space-y-3">
                <span className="font-display font-extrabold text-sm text-[#1a56db] bg-[#eaf1ff] px-2.5 py-1 rounded w-fit block">
                  {pillar.step}
                </span>
                <h3 className="font-display font-bold text-base text-[#172b43] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 12+ Partner Banks & NBFCs Interactive Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#dce4ef] gap-4">
            <div>
              <h3 className="font-display font-bold text-xl text-[#172b43]">
                12+ Verified Banking & NBFC Partners
              </h3>
              <p className="text-xs text-[#64748b]">
                Pre-approved tie-ups for fast sanction letters and doorstep application processing.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    selectedFilter === tab.id
                      ? "bg-[#1a56db] text-white shadow-xs"
                      : "bg-white text-[#41536a] border border-[#dce4ef] hover:border-[#1a56db]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Cards Grid (12 Institutions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredPartners.map((partner) => (
            <article
              key={partner.id}
              className="card-clean p-5 sm:p-6 bg-white border border-[#dce4ef] hover:border-[#aac5f7] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Logo and Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="h-10 flex items-center">
                    <BankLogo id={partner.id} className="h-9 w-auto object-contain" />
                  </div>
                  {partner.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a56db] bg-[#eaf1ff] px-2 py-0.5 rounded-full whitespace-nowrap">
                      {partner.badge}
                    </span>
                  )}
                </div>

                {/* Key Numbers Row */}
                <div className="grid grid-cols-2 gap-2 pt-2 pb-2 bg-[#f7f9fc] rounded p-3 text-xs border border-[#edf2f7]">
                  <div>
                    <span className="text-[10px] uppercase text-[#64748b] block font-semibold">Max Loan</span>
                    <strong className="text-[#172b43] font-display font-bold text-[13px]">{partner.maxAmount}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#64748b] block font-semibold">Interest Rate</span>
                    <strong className="text-[#15803d] font-display font-bold text-[13px]">{partner.rateEstimate}</strong>
                  </div>
                </div>

                <div className="text-xs text-[#172b43] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1a56db] flex-shrink-0" />
                  <span>{partner.collateral}</span>
                </div>

                <p className="text-xs text-[#64748b] leading-relaxed">
                  {partner.highlight}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-[#f0f4f9] flex items-center justify-between">
                <span className="text-[11px] text-[#64748b]">
                  {partner.type}
                </span>
                <button
                  onClick={() => onOpenModal(`Education Loan via ${partner.name}`)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1a56db] hover:text-[#1243b4] transition-colors cursor-pointer"
                >
                  <span>Apply with Ideation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Loan EMI Estimator Box */}
        <div className="bg-[#edf3ff] rounded-md border border-[#cadbfa] p-7 sm:p-10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1a56db] flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Interactive Planning Tool</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#172b43]">
                  Estimate your education loan repayment
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b]">
                  Adjust the sliders to see indicative monthly EMI post your course moratorium period.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#172b43] mb-1.5">
                    <span>Loan Amount</span>
                    <span className="text-[#1a56db] font-bold text-sm">₹{loanAmount} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-[#1a56db] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#64748b]">
                    <span>₹5L</span>
                    <span>₹50L (Unsecured)</span>
                    <span>₹1 Cr+ (Secured)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#172b43] mb-1.5">
                      <span>Tenure (Post-Moratorium)</span>
                      <span className="text-[#1a56db] font-bold">{loanTenure} Years</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="15"
                      step="1"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full accent-[#1a56db] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#172b43] mb-1.5">
                      <span>Indicative Interest Rate</span>
                      <span className="text-[#1a56db] font-bold">{interestRate}% p.a.</span>
                    </div>
                    <input
                      type="range"
                      min="8.5"
                      max="13"
                      step="0.25"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-[#1a56db] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-white rounded-md border border-[#cadbfa] p-6 sm:p-7 shadow-sm space-y-4 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase font-semibold text-[#64748b]">Estimated Monthly EMI</span>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#1a56db] mt-1">
                  ₹{estimatedEmi.toLocaleString("en-IN")}
                  <span className="text-xs font-medium text-[#64748b]"> /month</span>
                </div>
                <span className="text-[11px] text-[#64748b] mt-1 block">
                  Starts after course completion + 6 to 12 months grace period.
                </span>
              </div>

              <div className="border-t border-[#edf2f7] pt-3 text-xs text-[#41536a] space-y-1.5 text-left">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                  <span>100% Tax deduction on interest under Section 80E</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d]" />
                  <span>Pre-visa disbursement letter included</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Education Loan Pre-Assessment (₹${loanAmount} Lakhs)`)}
                className="btn-primary w-full justify-center text-xs"
              >
                <span>Request pre-approval assessment</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tamil Nadu Doorstep & Paperwork Assistance Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded bg-[#f7f9fc] border border-[#dce4ef] text-xs text-[#64748b]">
          <div className="flex items-center gap-3">
            <Building className="w-5 h-5 text-[#1a56db] flex-shrink-0" />
            <div>
              <strong className="text-[#172b43] font-semibold block">
                Local Banking Assistance in Tiruchirappalli, Manapparai & Across Tamil Nadu
              </strong>
              <span>
                Our dedicated loan advisors coordinate directly with local branch managers and NBFC credit officers for document collection and speedy sanction letters.
              </span>
            </div>
          </div>

          <button
            onClick={() => onOpenModal("Branch Document Checklist")}
            className="text-[#1a56db] hover:underline font-bold whitespace-nowrap flex-shrink-0"
          >
            Get document checklist ↗
          </button>
        </div>
      </div>
    </section>
  );
}
