"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Phone,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#061533] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container size="large">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  IDEATION
                </span>
                <span className="text-blue-400 text-sm ml-1.5 font-bold uppercase">
                  Edu Services
                </span>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                  Study Abroad Experts · Est. 2015
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Ideation Edu Services (OPC) Private Limited empowers students to achieve their international education dreams through transparent counseling, tailored university shortlisting, and high-success visa processing.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Headquarters: Tiruchirappalli / Manapparai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:info@ideationedu.com"
                  className="hover:text-white transition-colors"
                >
                  info@ideationedu.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Free Consultation · 98% First-Time Visa Success Rate</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/60 text-xs font-semibold text-blue-300">
                ✓ 1,000+ Students Placed
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
                ✓ 500+ Partner Universities
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our 8-Stage Process
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  All 25 Destinations
                </Link>
              </li>
              <li>
                <Link href="/tools/profile-evaluator" className="hover:text-white transition-colors flex items-center gap-1.5 text-amber-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> AI Profile Evaluator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Study Abroad Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/student-login" className="hover:text-white transition-colors">
                  Student Portal Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Key Destinations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-blue-500 pl-2">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {DESTINATIONS.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/destinations/${c.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{c.flag}</span>
                    <span>Study in {c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 25 Destinations Comprehensive Pills */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="w-4 h-4 text-blue-400" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              All 25 Countries We Represent:
            </h5>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {DESTINATIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/destinations/${c.slug}`}
                className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/40 transition-all flex items-center gap-1.5"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <p>© 2026 Ideation Education Services. All rights reserved.</p>
            <span>·</span>
            <span>Ideation Edu Services (OPC) Private Limited</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
