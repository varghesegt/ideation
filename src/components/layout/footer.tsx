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
  Compass,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <Container size="large">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-black text-xl text-slate-900 tracking-tight">
                  IDEATION
                </span>
                <span className="text-blue-700 text-xs ml-1.5 font-black uppercase px-1.5 py-0.5 rounded bg-blue-100">
                  Edu Services
                </span>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                  Overseas Education Experts · Est. 2015
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Ideation Edu Services (OPC) Private Limited empowers students to achieve their international education dreams through transparent counseling, tailored university shortlisting, and high-success visa processing.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Headquarters: Tiruchirappalli / Manapparai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a href="tel:+919488553344" className="hover:text-blue-700 font-semibold transition-colors">
                  +91 94885 53344
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@ideationedu.com"
                  className="hover:text-blue-700 font-semibold transition-colors"
                >
                  info@ideationedu.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Free Consultation · 98% First-Time Visa Success Rate</span>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-blue-800 shadow-xs">
                ✓ 1,000+ Placements
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
                ✓ 500+ Partner Universities
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2">
              Admissions Hub
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-blue-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-700 transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-700 transition-colors">
                  Our 8-Stage Process
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-blue-700 transition-colors">
                  All 25 Destinations
                </Link>
              </li>
              <li>
                <Link href="/tools/profile-evaluator" className="hover:text-blue-700 transition-colors flex items-center gap-1.5 font-bold text-blue-700">
                  <Compass className="w-3.5 h-3.5 text-blue-600" /> Admissions Evaluator
                </Link>
              </li>
              <li>
                <Link href="/tools/cost-calculator" className="hover:text-blue-700 transition-colors">
                  Cost & Budget Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-700 transition-colors">
                  Study Abroad Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700 transition-colors">
                  Contact Headquarters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2">
              Admissions Stages
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-blue-700 transition-colors block truncate"
                  >
                    Stage {s.stepNumber}: {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Key Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-l-2 border-blue-600 pl-2">
              Top Destinations
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {DESTINATIONS.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/destinations/${c.slug}`}
                    className="hover:text-blue-700 transition-colors flex items-center gap-2"
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
        <div className="py-8 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Explore All 25 Countries We Represent:
            </h5>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {DESTINATIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/destinations/${c.slug}`}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-blue-700 hover:border-blue-400 hover:bg-blue-50/50 shadow-2xs transition-all flex items-center gap-1.5 font-medium"
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3 flex-wrap">
            <p>© 2026 Ideation Education Services. All rights reserved.</p>
            <span>·</span>
            <span>Ideation Edu Services (OPC) Private Limited</span>
            <span>·</span>
            <span className="text-emerald-700 font-semibold">ISO 9001:2015 Certified Processes</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/student-login" className="hover:text-blue-700 font-medium transition-colors">
              Student Portal
            </Link>
            <Link href="/admin-dashboard" className="hover:text-blue-700 font-medium transition-colors">
              Counselor CRM
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 shadow-xs transition-colors flex items-center gap-1 cursor-pointer"
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
