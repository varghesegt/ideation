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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      {/* Top Advisory Notice Bar */}
      <div className="bg-slate-50 border-b border-slate-200/70 text-slate-600 text-xs py-1.5 px-4 hidden lg:block">
        <Container size="large">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Admissions Open for Fall 2026 & Spring 2027 Intakes
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-medium">
                100% Free Counseling & Direct University Applications
              </span>
            </div>
            <div className="flex items-center gap-5 font-semibold text-slate-700">
              <a
                href="tel:+919488553344"
                className="hover:text-blue-600 flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3 h-3 text-blue-600" />
                <span>+91 94885 53344</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="mailto:info@ideationedu.com"
                className="hover:text-blue-600 transition-colors"
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
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-slate-900">
                  IDEATION
                </span>
                <span className="text-blue-700 text-xs font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200">
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
              <button className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2">
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-4 shadow-2xl animate-fade-in text-slate-900 border-t border-slate-200">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 space-y-1 mb-2">
            <p className="text-xs font-extrabold text-blue-900">
              Need immediate admission guidance?
            </p>
            <a
              href="tel:+919488553344"
              className="text-sm font-black text-blue-700 flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> +91 94885 53344
            </a>
          </div>

          <Link
            href="/"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            About Us & Leadership
          </Link>
          <Link
            href="/services"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            Our 8-Stage Process
          </Link>
          <Link
            href="/destinations"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50 flex items-center justify-between"
          >
            <span>All 25 Destinations</span>
            <span className="px-2 py-0.5 text-xs font-black rounded-md bg-blue-100 text-blue-800">
              25 Countries
            </span>
          </Link>
          <Link
            href="/tools/profile-evaluator"
            className="block p-3.5 text-base font-bold text-slate-900 bg-slate-50 rounded-xl flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Admissions Eligibility Evaluator</span>
          </Link>
          <Link
            href="/tools/cost-calculator"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            Cost & Budget Calculator
          </Link>
          <Link
            href="/contact"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            Contact Headquarters
          </Link>
          <Link
            href="/student-login"
            className="block p-3.5 text-base font-bold text-slate-900 rounded-xl hover:bg-slate-50"
          >
            Student Portal Login
          </Link>

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a href="/#register" className="block w-full">
              <button className="w-full py-3.5 rounded-2xl bg-blue-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
