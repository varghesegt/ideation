"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import { DESTINATIONS } from "@/data/destinations";
import { SERVICES } from "@/data/services";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200"
          : "bg-[#041026]/90 backdrop-blur-md py-4 border-b border-white/10"
      )}
    >
      <Container size="large">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "font-black text-xl tracking-tight transition-colors",
                    scrolled ? "text-slate-900" : "text-white"
                  )}
                >
                  IDEATION
                </span>
                <span className="text-blue-500 text-xs font-black tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-500/10">
                  Edu Services
                </span>
              </div>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold",
                  scrolled ? "text-slate-500" : "text-blue-300"
                )}
              >
                Study Abroad Experts · Est. 2015
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
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/15"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                pathname === "/about"
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/15"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              )}
            >
              About
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
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                )}
              >
                Services
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-3 mt-2 animate-fade-in text-slate-900">
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
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/15"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                )}
              >
                Destinations
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-black rounded-md bg-amber-400 text-slate-950">
                  25
                </span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === "destinations" && (
                <div className="absolute top-full -left-20 w-[720px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 mt-2 animate-fade-in text-slate-900">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        Explore 25 Study Abroad Destinations
                      </h4>
                      <p className="text-xs text-slate-500">
                        Top universities, tuition costs, post-study work permits & visas
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

            {/* AI Tools */}
            <Link
              href="/tools/profile-evaluator"
              className={cn(
                "px-3.5 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5",
                scrolled
                  ? "text-amber-700 bg-amber-50 hover:bg-amber-100"
                  : "text-amber-300 bg-amber-400/10 hover:bg-amber-400/20"
              )}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Evaluator</span>
            </Link>

            <Link
              href="/tools/cost-calculator"
              className={cn(
                "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              )}
            >
              Cost Calculator
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-2 text-sm font-bold rounded-xl transition-all",
                scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/student-login"
              className={cn(
                "text-xs font-bold px-3 py-2 rounded-xl transition-colors",
                scrolled
                  ? "text-slate-600 hover:text-blue-600"
                  : "text-slate-200 hover:text-white"
              )}
            >
              Portal Login
            </Link>

            <Link href="/#register">
              <button
                className={cn(
                  "px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2",
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-amber-400 text-slate-950 hover:bg-amber-300"
                )}
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2.5 rounded-xl transition-colors",
              scrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/15"
            )}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-4 shadow-2xl animate-fade-in text-slate-900 border-t border-slate-200">
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
            className="block p-3.5 text-base font-bold text-amber-700 bg-amber-50 rounded-xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>AI Profile Evaluator</span>
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
            <Link href="/#register" className="block w-full">
              <button className="w-full py-3.5 rounded-2xl bg-blue-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg">
                Book Free Consultation
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
