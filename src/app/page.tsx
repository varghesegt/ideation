"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
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
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CountryModal } from "@/components/ui/country-modal";
import { TeamSection } from "@/components/sections/team-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomePage() {
  const [countryModalOpen, setCountryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* ─── 1. HIGH-IMPACT HERO SECTION ─────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 gradient-hero-bg text-white overflow-hidden">
        {/* Decorative Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-amber-400/15 rounded-full blur-[140px] pointer-events-none" />

        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-emerald-300 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>✓ Trusted by 1,000+ Students · 98% Visa Success Rate</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-sm">
                Plan Your Study Abroad Journey with{" "}
                <span className="text-gradient-cyan">
                  Expert Guidance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Personalized counseling based on your goals, budget and academic profile. Our expert advisors help you choose the perfect university and country with 100% transparent and free guidance.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#register" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2">
                    <span>Free Consultation</span>
                    <ArrowRight className="w-5 h-5 text-slate-950" />
                  </button>
                </a>

                <button
                  onClick={() => setCountryModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Globe2 className="w-5 h-5 text-cyan-300" />
                  <span>Explore 25 Countries</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
                  <p className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-bold">Free Counseling</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-cyan-300">500+</p>
                  <p className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-bold">Partner Unis</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-300">25</p>
                  <p className="text-[11px] sm:text-xs text-blue-200 uppercase tracking-wider font-bold">Global Countries</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl gradient-card-dark p-8 shadow-2xl text-white space-y-6 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-wider">
                      Admissions Open 2026/2027
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      Ideation Edu Services
                    </h3>
                    <p className="text-xs text-blue-200 mt-1">
                      Empowering students to achieve international education dreams since 2015.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                      <span className="text-blue-100 font-medium">USA & Canada OPT / PGWP</span>
                      <span className="font-extrabold text-white">Up to 3 Years</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                      <span className="text-blue-100 font-medium">UK Graduate Route Work Visa</span>
                      <span className="font-extrabold text-white">2 Years</span>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between">
                      <span className="text-blue-100 font-medium">Germany Public Universities</span>
                      <span className="font-extrabold text-emerald-300">Tuition Free</span>
                    </div>
                  </div>

                  <Link href="/tools/profile-evaluator" className="block">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-black text-sm shadow-xl flex items-center justify-between group transition-all">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-slate-950" />
                        <span>Launch AI Profile Evaluator</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 2. POLISHED STATS BAR ────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-12 relative z-20 shadow-sm">
        <Container size="large">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-blue-600">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Students Guided
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black text-indigo-600">
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
              <div className="text-4xl sm:text-5xl font-black text-amber-500">
                <AnimatedCounter target={25} suffix=" Countries" />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-500">
                Global Destinations
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 3. ABOUT SECTION ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="about">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Box on Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 p-8 sm:p-10 text-white shadow-2xl space-y-6 border border-slate-800">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-blue-300">
                  Established 2015
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Simplifying Your Overseas Education Journey Since 2015
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Headquartered in Tiruchirappalli (Tamil Nadu) with consulting networks pan-India, we provide transparent, ethical, profile-based mentorship for aspiring global scholars.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Direct University Partnerships</h5>
                      <p className="text-xs text-slate-400">Collaborating with 500+ accredited international universities.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">100% Free Counseling Policy</h5>
                      <p className="text-xs text-slate-400">Zero file charges, zero hidden consultation fees.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-white">Personalized Mentorship</h5>
                      <p className="text-xs text-slate-400">Direct access to experienced leadership and counselors.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Registered: Ideation Edu Services (OPC) Pvt Ltd</span>
                  <Link href="/about" className="font-bold text-cyan-300 hover:underline">
                    Read Our Story →
                  </Link>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Who We Are
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
                  className="font-bold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>25 Countries</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">see more →</span>
                </button>{" "}
                to open doors to globally recognized programs.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a href="#register">
                  <button className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md cursor-pointer transition-all">
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
              <TrendingUp className="w-3.5 h-3.5" /> Proven Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Your 8-Stage Study Abroad Journey
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
                className="group p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                      {s.stepNumber}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-black group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      →
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {s.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Explore Stage Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <button className="px-8 py-3.5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-extrabold text-sm transition-all cursor-pointer">
                Learn More About Our 8-Stage Process
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ─── 5. POPULAR STUDY DESTINATIONS SHOWCASE ───────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="destinations">
        <Container size="large">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider mb-2">
                <Globe2 className="w-3.5 h-3.5" /> Global Representation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Top Study Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Explore key facts, post-study work rights, and top universities across our 25 countries.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.slice(0, 8).map((dest) => (
              <div
                key={dest.slug}
                className="group rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{dest.flag}</span>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
                      {dest.region}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
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
                      <span className="font-extrabold text-emerald-600">{dest.postStudyWork.split("(")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="text-xs font-black text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
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

      {/* ─── 6. AI TOOLS BANNER ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50" id="tools">
        <Container size="large">
          <div className="rounded-3xl gradient-hero-bg text-white p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Next-Generation Technology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Evaluate Your Profile with AI in 2 Minutes
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
                Take the guesswork out of overseas admissions. Enter your CGPA, budget, and destination to get instant admission probability tiers across Safety, Target, and Reach universities.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/tools/profile-evaluator">
                  <button className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl cursor-pointer flex items-center gap-2">
                    <span>Launch AI Profile Evaluator</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                </Link>
                <Link href="/tools/cost-calculator">
                  <button className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold text-sm backdrop-blur-md cursor-pointer">
                    Cost Calculator
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 7. TESTIMONIALS & SUCCESS STORIES ───────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="testimonials">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Proven Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              What Our Students Say
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hear from students across Tamil Nadu and Pan-India who achieved admits at Stanford, Oxford, Toronto, and top European universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                    <p className="text-xs font-bold text-blue-600">{t.program}</p>
                    <p className="text-[11px] text-slate-500">{t.university} · {t.hometown}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 8. LEADERSHIP & TEAM ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200" id="team">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> Experienced Leadership
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

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS ───────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" id="faq">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Transparent Answers
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

      {/* ─── 10. LEAD REGISTRATION FORM SECTION ──────────────────────── */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200" id="register">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-wider">
                <PlaneTakeoff className="w-3.5 h-3.5" /> Intake 2026 / 2027
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Start Your Study Abroad Journey Today ✈️
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Join thousands of students who trusted Ideation Education Service. Schedule a one-on-one session with our senior overseas education counselors.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">100% Free Consultation</h4>
                    <p className="text-xs text-slate-500">No registration fees or service charges at any point.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Customized University Shortlist</h4>
                    <p className="text-xs text-slate-500">6-8 universities categorized into Dream, Target, and Safety tiers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Visa & Scholarship Handholding</h4>
                    <p className="text-xs text-slate-500">98% visa success rate and financial aid negotiation.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
