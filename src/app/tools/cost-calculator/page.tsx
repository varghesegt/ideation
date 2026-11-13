"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Coins,
  Calculator,
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DESTINATIONS } from "@/data/destinations";

export default function CostCalculatorPage() {
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const [tuitionLakhs, setTuitionLakhs] = useState(2); // In Lakhs INR
  const [monthlyRent, setMonthlyRent] = useState(45000); // INR
  const [monthlyLiving, setMonthlyLiving] = useState(30000); // Food, transport, SIM, insurance
  const [worksPartTime, setWorksPartTime] = useState(true);
  const [partTimeHourlyINR, setPartTimeHourlyINR] = useState(1100); // ~€12.50 / $13 / hr

  // Calculations
  const yearlyTuition = tuitionLakhs * 100000;
  const yearlyLiving = (monthlyRent + monthlyLiving) * 12;
  const grossYearlyCost = yearlyTuition + yearlyLiving;

  // 20 hrs / week for 40 weeks = 800 hours/year
  const yearlyPartTimeEarnings = worksPartTime ? 800 * partTimeHourlyINR : 0;
  const netYearlyCost = Math.max(grossYearlyCost - yearlyPartTimeEarnings, 0);

  const countryData = DESTINATIONS.find((c) => c.name === selectedCountry) || DESTINATIONS[0];

  const handleCountryChange = (name: string) => {
    setSelectedCountry(name);
    if (name === "Germany") {
      setTuitionLakhs(1);
      setMonthlyRent(40000);
      setMonthlyLiving(25000);
      setPartTimeHourlyINR(1150);
    } else if (name === "United States") {
      setTuitionLakhs(25);
      setMonthlyRent(70000);
      setMonthlyLiving(40000);
      setPartTimeHourlyINR(1250);
    } else if (name === "United Kingdom") {
      setTuitionLakhs(18);
      setMonthlyRent(60000);
      setMonthlyLiving(35000);
      setPartTimeHourlyINR(1200);
    } else if (name === "Canada") {
      setTuitionLakhs(16);
      setMonthlyRent(55000);
      setMonthlyLiving(30000);
      setPartTimeHourlyINR(1050);
    } else if (name === "Australia") {
      setTuitionLakhs(20);
      setMonthlyRent(65000);
      setMonthlyLiving(35000);
      setPartTimeHourlyINR(1350);
    } else if (name === "Hungary" || name === "Poland") {
      setTuitionLakhs(3);
      setMonthlyRent(25000);
      setMonthlyLiving(20000);
      setPartTimeHourlyINR(700);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              Smart Financial Planner
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Study Abroad Cost & Budget Calculator
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Estimate your annual tuition fees, accommodation, living expenses, and offset with legal part-time student earnings in Indian Rupees (INR).
            </p>
          </div>
        </Container>
      </section>

      {/* Calculator Main Section */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Country Selection */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Study Destination
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-base font-semibold outline-none bg-slate-50 focus:border-blue-600 focus:bg-white"
                >
                  {DESTINATIONS.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.flag} {c.name} ({c.region})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-blue-600 font-medium">
                  {countryData.flag} {countryData.tagline}
                </p>
              </div>

              {/* Sliders Box */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
                {/* Tuition Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-900">
                      Annual Tuition Fee
                    </label>
                    <span className="text-lg font-extrabold text-blue-600">
                      ₹{tuitionLakhs} Lakhs / year
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="45"
                    step="0.5"
                    value={tuitionLakhs}
                    onChange={(e) => setTuitionLakhs(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>₹0 (Tuition Free / Germany)</span>
                    <span>₹20L (Standard)</span>
                    <span>₹45L (Ivy / Elite)</span>
                  </div>
                </div>

                {/* Monthly Rent */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-900">
                      Monthly Accommodation / Rent
                    </label>
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{monthlyRent.toLocaleString()} / month
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="100000"
                    step="2500"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(parseInt(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>₹15,000 (Shared Student Dorm)</span>
                    <span>₹50,000 (Studio)</span>
                    <span>₹1,00,000 (Central London/NYC)</span>
                  </div>
                </div>

                {/* Food & Living Expenses */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-slate-900">
                      Food, Transport & Health Insurance
                    </label>
                    <span className="text-base font-extrabold text-slate-900">
                      ₹{monthlyLiving.toLocaleString()} / month
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="60000"
                    step="2500"
                    value={monthlyLiving}
                    onChange={(e) => setMonthlyLiving(parseInt(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Part-Time Work Toggle */}
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-slate-900">
                        Offset with Part-Time Student Work
                      </span>
                      <p className="text-xs text-slate-500">
                        Legal 20 hrs/week during study semesters
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWorksPartTime(!worksPartTime)}
                      className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                        worksPartTime ? "bg-emerald-600" : "bg-slate-300"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                          worksPartTime ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {worksPartTime && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
                      <div className="flex justify-between font-bold">
                        <span>Estimated Part-Time Earnings:</span>
                        <span>₹{(yearlyPartTimeEarnings / 100000).toFixed(1)} Lakhs / year</span>
                      </div>
                      <p className="text-[11px] text-emerald-700">
                        Based on ~800 hours/year at ₹{partTimeHourlyINR}/hour (~local minimum wage).
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <Card className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#092257] to-[#0d3b8e] text-white shadow-2xl space-y-6">
                <div>
                  <Badge variant="glass" size="sm">
                    {selectedCountry} Summary
                  </Badge>
                  <h3 className="text-2xl font-extrabold text-white mt-2">
                    Estimated Net 1st Year Cost
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-amber-300">
                      ₹{(netYearlyCost / 100000).toFixed(1)}
                    </span>
                    <span className="text-xl font-bold text-blue-200">Lakhs</span>
                  </div>
                  <p className="text-xs text-blue-200 mt-1">
                    (₹{Math.round(netYearlyCost / 12).toLocaleString()} / month net)
                  </p>
                </div>

                {/* Line Item Breakdown */}
                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex justify-between text-blue-100">
                    <span>1st Year Tuition Fee:</span>
                    <span className="font-bold text-white">₹{(yearlyTuition / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>12 Months Living & Housing:</span>
                    <span className="font-bold text-white">₹{(yearlyLiving / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  <div className="flex justify-between text-blue-100">
                    <span>Gross Annual Investment:</span>
                    <span className="font-bold text-white">₹{(grossYearlyCost / 100000).toFixed(1)} Lakhs</span>
                  </div>
                  {worksPartTime && (
                    <div className="flex justify-between text-emerald-300 font-bold pt-2 border-t border-white/10">
                      <span>- Part-Time Student Earnings:</span>
                      <span>- ₹{(yearlyPartTimeEarnings / 100000).toFixed(1)} Lakhs</span>
                    </div>
                  )}
                </div>

                {/* Scholarship Tip */}
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-xs text-blue-100 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" /> Scholarship Opportunity
                  </div>
                  <p className="text-[11px] leading-relaxed text-blue-200">
                    Ideation students frequently secure 20% to 100% scholarships in {selectedCountry}, further reducing this outlay.
                  </p>
                </div>

                <Link href="/#register" className="block">
                  <Button
                    size="lg"
                    fullWidth
                    className="bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-xl"
                    rightIcon={<ArrowRight className="w-4 h-4 text-blue-600" />}
                  >
                    Discuss Financial Planning
                  </Button>
                </Link>

                <p className="text-[11px] text-center text-blue-300">
                  Education loan tie-ups available with leading Indian banks.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
