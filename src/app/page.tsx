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
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CountryModal } from "@/components/ui/country-modal";
import { TeamSection } from "@/components/sections/team-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomePage() {
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [selectedDestinationCategory, setSelectedDestinationCategory] = useState<
    "all" | "english" | "europe" | "medical" | "asia"
  >("all");

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* ─── 1. HIGH-PRESTIGE LIGHT HERO SECTION ───────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 gradient-hero-light bg-academic-mesh overflow-hidden border-b border-slate-200/70">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[450px] bg-blue-200/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-amber-200/25 rounded-full blur-[140px] pointer-events-none" />

        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs sm:text-sm font-extrabold text-blue-900 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Trusted by 1,000+ Students & Parents · 98% Visa Success Rate</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Plan Your Study Abroad Journey with{" "}
                <span className="text-gradient-royal">
                  Direct University Guidance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Personalized, ethical counseling for Indian students and parents. We help you choose the right country, course, and scholarship across 25 global destinations with 100% free guidance and transparent admissions support.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#register" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2">
                    <span>Schedule Free Counseling</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </a>

                <button
                  onClick={() => setCountryModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 font-bold text-sm sm:text-base shadow-xs hover:border-blue-400 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Globe2 className="w-5 h-5 text-blue-600" />
                  <span>Explore 25 Countries</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-blue-700">100%</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold">Free Counseling</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-indigo-700">500+</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold">Partner Unis</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-600">25</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-bold">Global Countries</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl bg-white p-8 shadow-2xl text-slate-900 space-y-6 border border-slate-200/90 relative">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-xs">
                      <GraduationCap className="w-7 h-7 text-blue-700" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider">
                      Admissions Open 2026/2027
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      Ideation Edu Services
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Empowering Indian scholars to achieve international education success since 2015.
                    </p>
                  </div>

                  {/* High Value Comparison Highlights */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">USA & Canada OPT / PGWP</span>
                      <span className="font-extrabold text-blue-700">Up to 3 Years</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">UK Graduate Route Work Visa</span>
                      <span className="font-extrabold text-indigo-700">2 - 3 Years</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">Germany Public Universities</span>
                      <span className="font-extrabold text-emerald-700">Tuition Free</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700 font-semibold">Affordable Medical (MBBS)</span>
                      <span className="font-extrabold text-amber-700">From ₹18L Total</span>
                    </div>
                  </div>

                  <Link href="/tools/profile-evaluator" className="block">
                    <div className="p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 font-black text-sm shadow-xs flex items-center justify-between group transition-all">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-blue-700" />
                        <span>Check Your Eligibility Scorecard</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-700 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. INSTITUTIONAL METRICS BAR ──────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-12 relative z-20 shadow-xs">
        <Container size="large">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-blue-700">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Students Guided
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-indigo-700">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Partner Universities
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-emerald-600">
                <AnimatedCounter target={98} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Visa Success Rate
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-amber-600">
                <AnimatedCounter target={25} suffix=" Countries" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Global Destinations
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 3. ABOUT US & CORPORATE GOVERNANCE ────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="about">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box on Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl bg-slate-50 p-8 sm:p-10 text-slate-900 shadow-xl space-y-6 border border-slate-200">
                <span className="px-3.5 py-1 rounded-full bg-blue-100 text-xs font-black uppercase tracking-wider text-blue-900">
                  Established 2015
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Simplifying Your Overseas Education Journey Since 2015
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Headquartered in Tiruchirappalli (Tamil Nadu) with consulting networks pan-India, we provide transparent, ethical, profile-based mentorship for aspiring global scholars and their families.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">Direct University Partnerships</h5>
                      <p className="text-xs text-slate-500">Collaborating with 500+ accredited international universities across 25 countries.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">100% Free Counseling Policy</h5>
                      <p className="text-xs text-slate-500">Zero file opening charges, zero hidden consultation fees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">Personalized Mentorship</h5>
                      <p className="text-xs text-slate-500">Direct access to experienced leadership and certified overseas education advisors.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Registered: Ideation Edu Services (OPC) Pvt Ltd</span>
                  <Link href="/about" className="font-bold text-blue-700 hover:underline">
                    Read Our Story →
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-blue-600" /> Who We Are
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                We help students make confident, informed decisions about studying abroad.
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                From choosing the right country, course, and university to application support, scholarship negotiation, and visa guidance, we provide end-to-end, stress-free service tailored to each student’s profile, budget, and career goals.
              </p>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Our experienced mentors work closely with students and parents to understand academic strengths and career aspirations before recommending the best international opportunities. We partner with reputed universities across{" "}
                <button
                  onClick={() => setCountryModalOpen(true)}
                  className="font-bold text-blue-700 hover:text-blue-900 underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>25 Countries</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">see more →</span>
                </button>{" "}
                to open doors to globally recognized programs.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a href="#register">
                  <button className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg cursor-pointer transition-all">
                    Schedule Free Consultation
                  </button>
                </a>
                <button
                  onClick={() => setCountryModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl border-2 border-slate-200 hover:border-blue-600 text-slate-800 font-extrabold text-sm transition-colors cursor-pointer"
                >
                  View All 25 Countries
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 4. THE 8-STAGE STUDY ABROAD JOURNEY ───────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="services">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" /> Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Your 8-Stage Study Abroad Roadmap
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A transparent, structured step-by-step roadmap from profile evaluation to landing your dream job abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-700 transition-colors">
                      {s.stepNumber}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs font-black group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {s.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                  <span>Explore Stage Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <button className="px-8 py-3.5 rounded-xl border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white font-extrabold text-sm transition-all cursor-pointer">
                Learn More About Our 8-Stage Process
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── 5. POPULAR STUDY DESTINATIONS EXPLORER ───────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="destinations">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-black uppercase tracking-wider mb-2">
                <Globe2 className="w-3.5 h-3.5 text-blue-600" /> Global Representation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Top Study Abroad Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Explore key facts, post-study work rights, and top universities across 25 countries.
              </p>
            </div>

            <button
              onClick={() => setCountryModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
            >
              <span>View All 25 Countries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-100">
            {[
              { id: "all", label: "All Destinations (25)" },
              { id: "english", label: "Top English Hubs (USA, UK, Canada, Australia)" },
              { id: "europe", label: "Tuition-Free & Low Cost Europe (Germany, France, Italy)" },
              { id: "medical", label: "Affordable Medical / MBBS (Georgia, Philippines, Kazakhstan)" },
              { id: "asia", label: "Asian Tech Hubs (Singapore, UAE, Japan)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDestinationCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDestinationCategory === tab.id
                    ? "bg-blue-700 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.slice(0, 8).map((dest) => (
              <div
                key={dest.slug}
                className="group rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{dest.flag}</span>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
                      {dest.region}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                      {dest.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Avg Tuition:</span>
                      <span className="font-extrabold text-slate-900">{dest.avgTuitionINR.split("/")[0]}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Post-Study Work:</span>
                      <span className="font-extrabold text-emerald-700">{dest.postStudyWork.split("(")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-xs font-black text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1"
                  >
                    Country Guide →
                  </Link>
                  <a
                    href="#register"
                    className="text-xs font-bold text-slate-500 hover:text-slate-900"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 6. INTERACTIVE EVALUATOR BANNER (LIGHT THEME, NO AI TONE) ───── */}
      <section className="py-16 md:py-24 bg-slate-50" id="tools">
        <Container size="large">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50/90 via-indigo-50/40 to-white border border-blue-200/80 p-8 md:p-14 shadow-xl text-slate-900 relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-blue-700" /> Admissions Eligibility Check
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Evaluate Your Admissions Eligibility & Scholarships in 3 Minutes
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Take the guesswork out of overseas admissions. Enter your academic background, test scores, and budget to receive an immediate profile scorecard categorizing Safety, Target, and Reach universities against 2026/2027 entry guidelines.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/tools/profile-evaluator">
                  <button className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2">
                    <span>Evaluate Profile Now</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </Link>
                <Link href="/tools/cost-calculator">
                  <button className="px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 font-bold text-sm shadow-xs cursor-pointer flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-600" />
                    <span>Cost & Living Calculator</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 7. PARENT ADVISORY & REASSURANCE HUB ───────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <Container size="large">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" /> Dedicated Parent Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              We Understand a Parent&apos;s Priorities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Sending your child overseas is a major financial and emotional investment. Here is how we ensure their safety, financial transparency, and successful settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Student Safety & Housing First</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We assist in pre-booking verified on-campus or partner student residences before departure, ensuring safe transit with airport pickups and local emergency contacts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Transparent Financial Planning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero hidden charges. We guide you through nationalized bank education loans, German blocked accounts (Sperrkonto), Canadian GIC, and merit scholarships.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Accredited Degrees & ROI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only shortlist government-recognized, globally accredited universities offering legal post-study work visas (PSWV) for direct career pathways.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 8. TESTIMONIALS & SUCCESS STORIES ───────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="testimonials">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Proven Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Real Stories from Our Students & Parents
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hear from students across Tamil Nadu and Pan-India who achieved admits at Stanford, Oxford, Toronto, and top European universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-3xl">{t.countryFlag}</span>
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${t.avatarBg} text-white font-black flex items-center justify-center text-sm shadow-md flex-shrink-0`}>
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs font-bold text-blue-700">{t.program}</p>
                    <p className="text-[11px] text-slate-500">{t.university} · {t.hometown}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 9. LEADERSHIP & TEAM ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="team">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-blue-600" /> Experienced Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Meet the Team Guiding Your Global Journey
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our experienced leadership team and advisors are dedicated to helping students achieve their dream of studying abroad through expert guidance, transparent processes, and personalized support.
            </p>
          </div>

          <TeamSection />
        </Container>
      </section>

      {/* ─── 10. FREQUENTLY ASKED QUESTIONS ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="faq">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-slate-600" /> Transparent Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Got questions about our services, fees, visas, or process? We have candid answers.
            </p>
          </div>

          <FAQSection />
        </Container>
      </section>

      {/* ─── 11. LEAD REGISTRATION FORM SECTION ──────────────────────── */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200" id="register">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
                <PlaneTakeoff className="w-3.5 h-3.5 text-blue-600" /> Intake 2026 / 2027
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Start Your Study Abroad Journey Today ✈️
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Join thousands of students who trusted Ideation Education Service. Schedule a one-on-one session with our senior overseas education counselors.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">100% Free Consultation</h4>
                    <p className="text-xs text-slate-500">No registration fees or service charges at any point.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Customized University Shortlist</h4>
                    <p className="text-xs text-slate-500">6-8 universities categorized into Dream, Target, and Safety tiers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Visa & Scholarship Handholding</h4>
                    <p className="text-xs text-slate-500">98% visa success rate and financial aid negotiation.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquarters: <strong>Tiruchirappalli / Manapparai, Tamil Nadu</strong> with pan-India virtual sessions.
                </p>
              </div>
            </div>

            {/* Form Column */}
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
