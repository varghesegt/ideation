"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Globe2,
  ArrowRight,
  Phone,
  Compass,
  CheckCircle2,
  Calculator,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e7e4dc] shadow-2xs transition-all">
        {/* Top Advisory Notice Bar */}
        <div className="bg-[#faf8f5] border-b border-[#ded9cd]/70 text-slate-700 text-xs py-1.5 px-4 hidden lg:block font-medium">
          <Container size="large">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Fall 2026 & Spring 2027 Admissions Open
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">
                  100% Free Counseling & Direct University Representations
                </span>
              </div>
              <div className="flex items-center gap-5 font-bold text-slate-800">
                <a
                  href="tel:+919488553344"
                  className="hover:text-blue-900 flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-800" />
                  <span>+91 94885 53344</span>
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="mailto:info@ideationedu.com"
                  className="hover:text-blue-900 transition-colors"
                >
                  info@ideationedu.com
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Navbar */}
        <Container size="large">
          <div className="flex items-center justify-between py-3.5">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-blue-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-editorial text-2xl font-bold tracking-tight text-slate-950">
                    IDEATION
                  </span>
                  <span className="text-blue-900 text-xs font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#f4f1ea] border border-[#ded9cd]">
                    Edu Services
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                  Overseas Education Experts · Est. 2015
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                  pathname === "/"
                    ? "text-blue-700 bg-blue-50/80 shadow-xs"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                )}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={cn(
                  "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                  pathname === "/about"
                    ? "text-blue-700 bg-blue-50/80 shadow-xs"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                )}
              >
                About & Leadership
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "px-3.5 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer",
                    activeDropdown === "services" || pathname.startsWith("/services")
                      ? "text-blue-700 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                  )}
                >
                  Services
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 w-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-3 mt-2 animate-fade-in text-slate-900 z-50">
                    <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                        Our 8-Stage Admissions Journey
                      </span>
                      <Link
                        href="/services"
                        className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                      >
                        View All 8 Stages <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    {SERVICES.slice(0, 6).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="p-3 rounded-2xl hover:bg-blue-50 transition-colors flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-xs flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {service.stepNumber}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Destinations */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("destinations")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    "px-3.5 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer",
                    activeDropdown === "destinations" || pathname.startsWith("/destinations")
                      ? "text-blue-700 bg-blue-50/80"
                      : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                  )}
                >
                  Destinations
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    25 Countries
                  </span>
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </button>

                {activeDropdown === "destinations" && (
                  <div className="absolute top-full -left-24 w-[740px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 mt-2 animate-fade-in text-slate-900 z-50">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900">
                          Explore 25 Study Abroad Destinations
                        </h4>
                        <p className="text-xs text-slate-500">
                          Verified university rankings, tuition ranges in INR, post-study work rights & visa guidance
                        </p>
                      </div>
                      <Link
                        href="/destinations"
                        className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                      >
                        All 25 Countries <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                      {DESTINATIONS.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/destinations/${c.slug}`}
                          className="p-2.5 rounded-xl hover:bg-blue-50 border border-slate-100 transition-all flex items-center gap-2 group"
                        >
                          <span className="text-2xl">{c.flag}</span>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600">
                              {c.name}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {c.region}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Advisory Tools */}
              <Link
                href="/tools/profile-evaluator"
                className={cn(
                  "px-3.5 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5",
                  pathname === "/tools/profile-evaluator"
                    ? "text-blue-700 bg-blue-50/80 shadow-xs"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                )}
              >
                <Compass className="w-4 h-4 text-blue-600" />
                <span>Eligibility Evaluator</span>
              </Link>

              <Link
                href="/tools/cost-calculator"
                className={cn(
                  "px-3.5 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5",
                  pathname === "/tools/cost-calculator"
                    ? "text-blue-700 bg-blue-50/80 shadow-xs"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                )}
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Cost Calculator</span>
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                  pathname === "/contact"
                    ? "text-blue-700 bg-blue-50/80 shadow-xs"
                    : "text-slate-700 hover:text-blue-700 hover:bg-slate-100/70"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/student-login"
                className="text-xs font-bold px-3 py-2 text-slate-600 hover:text-blue-600 rounded-xl transition-colors"
              >
                Portal Login
              </Link>

              <a href="/#register">
                <button className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-900 hover:bg-blue-950 text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2">
                  <span>Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Full-Screen Mobile Drawer - Impervious to Z-Index or Stacking Context Clashes */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white overflow-y-auto p-6 flex flex-col justify-between animate-fade-in text-slate-900">
          <div className="space-y-5">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-black text-lg text-slate-900">IDEATION</span>
                    <span className="text-blue-700 text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-blue-50">
                      Edu
                    </span>
                  </div>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-slate-500">
                    Est. 2015
                  </p>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Direct Helpline Banner */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 space-y-1">
              <p className="text-xs font-black text-blue-900">
                Direct Admission Advisory Helpline
              </p>
              <a
                href="tel:+919488553344"
                className="text-sm font-black text-blue-700 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-blue-600" /> +91 94885 53344
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
              >
                About Us & Leadership
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
              >
                Our 8-Stage Process
              </Link>
              <Link
                href="/destinations"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50 flex items-center justify-between"
              >
                <span>All 25 Destinations</span>
                <span className="px-2 py-0.5 text-xs font-black rounded-md bg-blue-100 text-blue-800">
                  25 Countries
                </span>
              </Link>
              <Link
                href="/tools/profile-evaluator"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-blue-900 bg-blue-50/80 rounded-xl flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Admissions Eligibility Evaluator</span>
              </Link>
              <Link
                href="/tools/cost-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Cost & Budget Calculator</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
              >
                Contact Headquarters
              </Link>
              <Link
                href="/student-login"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 text-base font-bold text-slate-600 rounded-xl hover:bg-slate-50"
              >
                Student Portal Login
              </Link>
            </nav>
          </div>

          {/* Bottom Free Consultation CTA */}
          <div className="pt-6 border-t border-slate-200 space-y-3">
            <a
              href="/#register"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-600/20 cursor-pointer">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
