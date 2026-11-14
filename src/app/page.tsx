"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Award,
  BookOpen,
  Users,
  Compass,
  FileCheck,
  PlaneTakeoff,
  Clock,
  ChevronRight,
  Star,
  MapPin,
  TrendingUp,
  HeartHandshake,
  DollarSign,
  Building2,
  Calculator,
  Search,
  Phone,
  Calendar,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { CountryModal } from "@/components/ui/country-modal";
import { TeamSection } from "@/components/sections/team-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomePage() {
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [selectedDestinationCategory, setSelectedDestinationCategory] = useState<
    "all" | "english" | "europe" | "medical" | "asia"
  >("all");

  // Interactive Hero Search State
  const [heroDegree, setHeroDegree] = useState("Master's (Postgraduate)");
  const [heroCountry, setHeroCountry] = useState("Germany");
  const [heroField, setHeroField] = useState("Computer Science & AI");
  const [heroSearchResult, setHeroSearchResult] = useState<any>(null);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const dest = DESTINATIONS.find((d) => d.name === heroCountry) || DESTINATIONS[4];
    setHeroSearchResult({
      country: dest.name,
      flag: dest.flag,
      slug: dest.slug,
      avgTuition: dest.avgTuitionINR,
      postStudyWork: dest.postStudyWork,
      topUnis: dest.topUniversities.slice(0, 3),
      field: heroField,
      degree: heroDegree,
    });
  };

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (selectedDestinationCategory === "all") return true;
    if (selectedDestinationCategory === "english") {
      return ["usa", "uk", "canada", "australia", "ireland", "new-zealand"].includes(d.slug);
    }
    if (selectedDestinationCategory === "europe") {
      return ["germany", "france", "italy", "sweden", "netherlands", "switzerland", "austria", "spain", "poland", "hungary"].includes(d.slug);
    }
    if (selectedDestinationCategory === "medical") {
      return ["georgia", "philippines", "russia", "kyrgyzstan", "uzbekistan", "kazakhstan", "armenia"].includes(d.slug);
    }
    if (selectedDestinationCategory === "asia") {
      return ["singapore", "malaysia", "uae", "japan"].includes(d.slug);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-blue-600 selection:text-white font-sans-ui">
      <Navbar />

      {/* ─── 1. HIGH-PRESTIGE EDITORIAL HERO SECTION ─────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-academic-mesh overflow-hidden border-b border-[#e7e4dc]">
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-academic-grid opacity-25 pointer-events-none" />

        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start relative z-10">
            {/* Left Column: Editorial Statement & Authority */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust & Accreditation Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ded9cd] text-xs font-bold text-slate-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Admissions Open for Fall 2026 & Spring 2027 Intakes</span>
                <span className="text-slate-300">·</span>
                <span className="text-blue-800 font-extrabold">98% Visa Record</span>
              </div>

              {/* Master Headline: Stately Editorial Serif */}
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-tight leading-[1.08]">
                Guiding India&apos;s Next Generation to the{" "}
                <span className="italic text-blue-900 font-semibold">
                  World&apos;s Leading Universities
                </span>
              </h1>

              {/* Dignified Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Ideation Edu Services is Tamil Nadu&apos;s premier international education consultancy. Over 1,000 verified admits across 25 global destinations, backed by direct university representations, ethical counseling, and zero agency markups.
              </p>

              {/* Quick Trust Highlights Matrix */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-y border-[#ded9cd]/80 py-5">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Free Counseling</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-900">500+</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Partner Unis</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-800">₹14Cr+</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Scholarships Won</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-800">25</p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Countries</p>
                </div>
              </div>

              {/* Hero Action CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a href="#register" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2">
                    <span>Schedule Free Counseling</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </a>

                <button
                  onClick={() => setCountryModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-slate-50 border border-[#ded9cd] text-slate-900 font-bold text-sm shadow-2xs hover:border-slate-400 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Globe2 className="w-4 h-4 text-blue-800" />
                  <span>Explore All 25 Destinations</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Course & Admissions Search Console */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-[#ded9cd] p-7 sm:p-9 shadow-xl relative">
                <div className="space-y-1 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-[11px] font-black uppercase tracking-wider inline-block">
                    Admissions Search Console
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900">
                    Find Universities for Your Profile
                  </h3>
                  <p className="text-xs text-slate-500">
                    Filter 500+ accredited institutions by target degree and destination.
                  </p>
                </div>

                <form onSubmit={handleHeroSearch} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Degree Level
                    </label>
                    <select
                      value={heroDegree}
                      onChange={(e) => setHeroDegree(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50/70 focus:bg-white focus:border-blue-700 outline-none transition-colors"
                    >
                      <option>Master&apos;s (Postgraduate - MS / MBA / MA)</option>
                      <option>Bachelor&apos;s (Undergraduate - BS / BBA)</option>
                      <option>Medical (MBBS / MD Programs)</option>
                      <option>Doctorate (Ph.D. / Research)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Destination
                    </label>
                    <select
                      value={heroCountry}
                      onChange={(e) => setHeroCountry(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50/70 focus:bg-white focus:border-blue-700 outline-none transition-colors"
                    >
                      {DESTINATIONS.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.flag} {c.name} ({c.region})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1.5">
                      Field of Interest
                    </label>
                    <select
                      value={heroField}
                      onChange={(e) => setHeroField(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 bg-slate-50/70 focus:bg-white focus:border-blue-700 outline-none transition-colors"
                    >
                      <option>Computer Science, AI & Data Science</option>
                      <option>Mechanical, Automotive & Robotics</option>
                      <option>Business Analytics, MBA & Finance</option>
                      <option>Biotechnology & Life Sciences</option>
                      <option>General Medicine (MBBS) & Healthcare</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <Search className="w-4 h-4 text-white" />
                    <span>Search Matching Programs</span>
                  </button>
                </form>

                {/* Live Search Result Output Card */}
                {heroSearchResult ? (
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-3 animate-fade-in text-xs bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                        <span className="text-xl">{heroSearchResult.flag}</span>
                        <span>Study in {heroSearchResult.country}</span>
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        {heroSearchResult.postStudyWork.split("(")[0]}
                      </span>
                    </div>

                    <div className="space-y-1 text-slate-600">
                      <div className="flex justify-between">
                        <span>Average Tuition:</span>
                        <span className="font-bold text-slate-900">{heroSearchResult.avgTuition}</span>
                      </div>
                      <div className="pt-1">
                        <p className="font-bold text-slate-800 mb-1">Key Universities:</p>
                        <div className="flex flex-wrap gap-1">
                          {heroSearchResult.topUnis.map((u: any, idx: number) => (
                            <span key={idx} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-[10px] font-semibold text-slate-800">
                              {u.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <Link
                        href={`/destinations/${heroSearchResult.slug}`}
                        className="text-blue-800 font-extrabold hover:underline"
                      >
                        View Full Country Guide →
                      </Link>
                      <a href="#register" className="text-slate-800 font-bold hover:text-blue-900">
                        Book Consultation
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>✓ Direct Application Fast-Track</span>
                    <span>✓ 100% Free Service</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. LIVE VERIFIED ADMISSIONS & SCHOLARSHIPS MARQUEE ─────────── */}
      <section className="bg-white border-b border-[#e7e4dc] py-4 overflow-hidden">
        <Container size="large">
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5 border-r border-slate-200 pr-4">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Recent Verified Admits:</span>
            </span>

            <div className="flex items-center gap-6 text-xs text-slate-700 overflow-x-auto no-scrollbar py-1 whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong className="text-slate-900">Anandha K.</strong> → Technical University of Munich (TUM), Germany · <em className="text-emerald-700 font-bold">100% Free Tuition</em>
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <strong className="text-slate-900">Priya R.</strong> → Imperial College London, UK · <em className="text-blue-800 font-bold">£10,000 Dean&apos;s Scholarship</em>
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                <strong className="text-slate-900">Karthik S.</strong> → University of Toronto, Canada · <em className="text-indigo-800 font-bold">3-Year PGWP</em>
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <strong className="text-slate-900">Sneha V.</strong> → University of Melbourne, Australia · <em className="text-emerald-700 font-bold">25% Merit Waiver</em>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 3. DESTINATIONS DIRECTORY WITH LANDMARK PHOTOGRAPHY ─────────── */}
      <section className="py-20 md:py-28 bg-[#faf8f5]" id="destinations">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-[#f4f1ea] border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
                Global Academic Network
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
                Explore 25 Study Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Verified institutional rankings, 2026 post-study work authorization, and tuition cost breakdowns in Indian Rupees (INR).
              </p>
            </div>

            <button
              onClick={() => setCountryModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
            >
              <span>View All 25 Countries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Destination Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#ded9cd]">
            {[
              { id: "all", label: "All 25 Destinations" },
              { id: "english", label: "Top English Hubs (USA, UK, Canada, Australia)" },
              { id: "europe", label: "Tuition-Free & Low Cost Europe (Germany, France, Netherlands)" },
              { id: "medical", label: "Affordable Medical / MBBS (Georgia, Philippines, Kazakhstan)" },
              { id: "asia", label: "Asian Tech Hubs (Singapore, UAE, Japan)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDestinationCategory(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDestinationCategory === tab.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-[#ded9cd] hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Destination Cards Grid with Real Photography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.slice(0, 8).map((dest) => (
              <div
                key={dest.slug}
                className="group rounded-3xl bg-white border border-[#ded9cd] hover:border-slate-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        dest.image ||
                        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={`Study in ${dest.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-3xl drop-shadow-md">{dest.flag}</span>
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                        {dest.region}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-editorial text-2xl font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dest.tagline}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Avg Tuition:</span>
                        <span className="font-extrabold text-slate-900">{dest.avgTuitionINR.split("/")[0]}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Post-Study Work:</span>
                        <span className="font-extrabold text-emerald-800">{dest.postStudyWork.split("(")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1"
                  >
                    Country Guide →
                  </Link>
                  <a
                    href="#register"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 4. SIDE-BY-SIDE COUNTRY COMPARISON MATRIX ───────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e7e4dc]">
        <Container size="large">
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="px-3.5 py-1 rounded-full bg-[#f4f1ea] border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
              Strategic Decision Engine
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
              Compare Major Study Destinations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Side-by-side empirical comparison to help Indian students and parents determine the best return on investment.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[#ded9cd] shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#faf8f5] border-b border-[#ded9cd] text-slate-900 font-black uppercase text-[11px] tracking-wider">
                  <th className="p-4 sm:p-5">Country</th>
                  <th className="p-4 sm:p-5">Annual Tuition (INR)</th>
                  <th className="p-4 sm:p-5">Monthly Living Cost</th>
                  <th className="p-4 sm:p-5">2026 Work Visa (PSWV)</th>
                  <th className="p-4 sm:p-5">Part-Time Wage</th>
                  <th className="p-4 sm:p-5">PR Pathway Ease</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ded9cd]/60 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇩🇪</span> Germany
                  </td>
                  <td className="p-4 sm:p-5 font-black text-emerald-800">₹0 - ₹3 Lakhs (Public)</td>
                  <td className="p-4 sm:p-5">₹65,000 - ₹85,000</td>
                  <td className="p-4 sm:p-5 font-bold">18 Months Job Seeker</td>
                  <td className="p-4 sm:p-5">€12.50 / hr (~₹1,150)</td>
                  <td className="p-4 sm:p-5 text-emerald-700 font-bold">High (EU Blue Card in 21 mos)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span> United States
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">₹18 - ₹45 Lakhs</td>
                  <td className="p-4 sm:p-5">₹80,000 - ₹1,30,000</td>
                  <td className="p-4 sm:p-5 font-black text-blue-900">Up to 3 Years (STEM OPT)</td>
                  <td className="p-4 sm:p-5">$13 - $18 / hr</td>
                  <td className="p-4 sm:p-5 text-amber-800 font-bold">Employer H-1B Lottery</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇬🇧</span> United Kingdom
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">₹14 - ₹32 Lakhs (1-Yr Degree)</td>
                  <td className="p-4 sm:p-5">₹75,000 - ₹1,15,000</td>
                  <td className="p-4 sm:p-5 font-bold">2 Years Graduate Route</td>
                  <td className="p-4 sm:p-5">£11.44 / hr (~₹1,220)</td>
                  <td className="p-4 sm:p-5 text-slate-700">Skilled Worker Visa (Threshold £38.7k)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇨🇦</span> Canada
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">₹12 - ₹28 Lakhs</td>
                  <td className="p-4 sm:p-5">₹65,000 - ₹95,000</td>
                  <td className="p-4 sm:p-5 font-bold">Up to 3 Years PGWP</td>
                  <td className="p-4 sm:p-5">CAD $16.50 / hr</td>
                  <td className="p-4 sm:p-5 text-emerald-700 font-bold">Express Entry & PNP Streams</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇦🇺</span> Australia
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">₹16 - ₹34 Lakhs</td>
                  <td className="p-4 sm:p-5">₹80,000 - ₹1,20,000</td>
                  <td className="p-4 sm:p-5 font-bold">2 to 4 Years (Subclass 485)</td>
                  <td className="p-4 sm:p-5">AUD $24.10 / hr (~₹1,350)</td>
                  <td className="p-4 sm:p-5 text-slate-700">Points-Based Skilled PR</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-950 flex items-center gap-2">
                    <span className="text-xl">🇮🇪</span> Ireland
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-slate-900">₹11 - ₹24 Lakhs</td>
                  <td className="p-4 sm:p-5">₹70,000 - ₹1,00,000</td>
                  <td className="p-4 sm:p-5 font-bold">2 Years Third Level Scheme</td>
                  <td className="p-4 sm:p-5">€12.70 / hr</td>
                  <td className="p-4 sm:p-5 text-emerald-700 font-bold">Critical Skills Employment Permit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ─── 5. THE 8-STAGE ADMISSIONS ARCHITECTURE ─────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf8f5]" id="services">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-[#f4f1ea] border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
              Proven Architecture
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
              The 8-Stage Admissions Architecture
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A structured, stress-free advisory roadmap from initial profile assessment to airport reception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-7 rounded-3xl bg-white border border-[#ded9cd] hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-3xl font-bold text-slate-300 group-hover:text-blue-900 transition-colors">
                      {s.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {s.timeline}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-slate-950 group-hover:text-blue-900 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {s.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>Explore Stage Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <button className="px-8 py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-900 font-bold text-sm transition-all cursor-pointer bg-white shadow-2xs">
                Learn More About Our 8-Stage Methodology
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── 6. THE PARENT ADVISORY & TRANSPARENCY CHARTER ──────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e7e4dc]">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900 uppercase tracking-wider inline-block">
                Parent Advisory & Trust Charter
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
                We Understand What Matters Most to Parents
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sending your child overseas is both an emotional commitment and a major financial decision. Our leadership adheres to an uncompromising transparency policy: zero hidden fees, verified campus accommodations, and verified post-study work pathways.
              </p>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#ded9cd] space-y-2">
                <h4 className="font-bold text-sm text-slate-900">Why Our Counseling is 100% Free:</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are officially recognized and funded by international universities to evaluate and guide prospective students. We do not charge students or parents consultation fees, profile evaluation fees, or submission charges.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-[#ded9cd] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg font-bold text-slate-950">Safe Accommodations First</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We secure verified student residences and airport reception before flight bookings to ensure zero transit safety risks for your child.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-[#ded9cd] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg font-bold text-slate-950">Loan & Blocked Account Setup</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct guidance for SBI/nationalized bank education loans, German blocked accounts (Sperrkonto), and Canadian GIC deposit verification.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-[#ded9cd] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg font-bold text-slate-950">Accredited Degrees Only</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We strictly refuse partnerships with unaccredited private colleges. Every shortlisted institution offers legal post-study work rights.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#faf8f5] border border-[#ded9cd] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-editorial text-lg font-bold text-slate-950">Direct Founder Access</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Parents can book direct face-to-face sessions with Dr. Stanley or Mrs. Rameeza at our Tiruchirappalli office or via Zoom.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 7. LETTER FROM THE FOUNDERS & EXECUTIVE TEAM ───────────────── */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e7e4dc]" id="team">
        <Container size="large">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Signed Letter Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#ded9cd] shadow-md space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#f4f1ea] border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
                A Letter from the Founders
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                &ldquo;Why We Started Ideation Edu Services in 2015&rdquo;
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Over a decade ago, we witnessed dozens of capable young students from Tamil Nadu and across India fall prey to aggressive commercial agencies charging ₹1,00,000+ in file fees, only to dump students into substandard private foreign colleges with zero job viability.
                </p>
                <p>
                  We founded Ideation Edu Services on a foundational pledge: **total ethical transparency**. We established direct, recognized representations with leading public and state universities in Germany, the UK, the US, Canada, Australia, and Ireland.
                </p>
                <p>
                  Today, over 1,000 of our alumni are working as software engineers, healthcare specialists, data architects, and corporate leaders across Europe and North America. Every student who walks into our doors receives the exact same standard of care we would give our own children.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-950 text-base">Dr. Stanley D. Isaac & Rameeza Stanley Isaac</h4>
                  <p className="text-xs text-slate-500">CEO & Founder-Director · Ideation Edu Services (OPC) Pvt Ltd</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-blue-900" />
                  <span>Manapparai / Tiruchirappalli, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Team Profiles Grid */}
            <TeamSection />
          </div>
        </Container>
      </section>

      {/* ─── 8. STUDENT & PARENT TESTIMONIALS ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e7e4dc]" id="testimonials">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="px-3.5 py-1 rounded-full bg-[#f4f1ea] border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
              Verified Student Outcomes
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight">
              Real Experiences from Our Scholars & Parents
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hear directly from Indian students who transitioned into top global universities with Ideation mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-[#faf8f5] border border-[#ded9cd] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-600">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-3xl">{t.countryFlag}</span>
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ded9cd]/60 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${t.avatarBg} text-white font-black flex items-center justify-center text-sm shadow-xs flex-shrink-0`}>
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">{t.name}</h4>
                    <p className="text-xs font-bold text-blue-900">{t.program}</p>
                    <p className="text-[11px] text-slate-500">{t.university} · {t.hometown}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e7e4dc]" id="faq">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3.5 py-1 rounded-full bg-white border border-[#ded9cd] text-xs font-bold text-slate-800 uppercase tracking-wider inline-block">
              Transparent Answers
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Direct, honest answers about foreign admissions, bank loans, visa appointments, and our zero-fee model.
            </p>
          </div>

          <FAQSection />
        </Container>
      </section>

      {/* ─── 10. LEAD CONSULTATION REGISTRATION ──────────────────────────── */}
      <section className="py-20 md:py-32 bg-white border-t border-[#e7e4dc]" id="register">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Context Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-900 uppercase tracking-wider inline-block">
                Start Your Journey
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
                Schedule Your 1-on-1 Counseling Session
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Connect with our senior international education advisors for an in-depth profile evaluation, custom university shortlisting, and scholarship roadmap.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">100% Free Counseling Policy</h4>
                    <p className="text-xs text-slate-500">No registration fees or service charges at any stage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Empirical University Shortlist</h4>
                    <p className="text-xs text-slate-500">6-8 universities categorized into Dream, Target, and Safety tiers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Visa & Bank Loan Mentorship</h4>
                    <p className="text-xs text-slate-500">98% visa success rate and financial aid assistance.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#ded9cd] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-900 flex-shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquarters: <strong>Manapparai / Tiruchirappalli, Tamil Nadu</strong> with pan-India virtual student counseling.
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 25 Countries Modal */}
      <CountryModal
        isOpen={countryModalOpen}
        onClose={() => setCountryModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
