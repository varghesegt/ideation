"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  Globe2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-[#071d49]/80 backdrop-blur-md py-4 border-b border-white/10"
      )}
    >
      <Container size="large">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <div
                className={cn(
                  "font-extrabold text-lg sm:text-xl tracking-tight leading-tight transition-colors",
                  scrolled ? "text-slate-900" : "text-white"
                )}
              >
                IDEATION
                <span className="text-blue-500 text-sm ml-1.5 font-bold tracking-normal uppercase">
                  Edu Services
                </span>
              </div>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-wider font-semibold",
                  scrolled ? "text-slate-500" : "text-blue-200"
                )}
              >
                Study Abroad Experts · Since 2015
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/"
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/10"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/about"
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/10"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer",
                  activeDropdown === "services" || pathname.startsWith("/services")
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/10"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                )}
              >
                Services
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4 animate-fade-in mt-1">
                  <div className="col-span-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our End-to-End Overseas Guidance
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      View All 8 Stages <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group p-3 rounded-xl hover:bg-blue-50/80 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {service.stepNumber}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {service.shortDesc}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-medium text-slate-700">
                        100% Free Counseling with Zero Hidden Charges
                      </span>
                    </div>
                    <Link
                      href="/#register"
                      className="text-xs font-bold text-blue-700 hover:text-blue-800"
                    >
                      Book Free Call →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("destinations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer",
                  activeDropdown === "destinations" || pathname.startsWith("/destinations")
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/10"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                )}
              >
                Destinations
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-400 text-slate-950">
                  25
                </span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === "destinations" && (
                <div className="absolute top-full -left-20 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 animate-fade-in mt-1">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Explore 25 Study Abroad Destinations
                      </h4>
                      <p className="text-xs text-slate-500">
                        Accredited universities, visa rules & post-study work permits
                      </p>
                    </div>
                    <Link
                      href="/destinations"
                      className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      All 25 Countries <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-3 max-h-[380px] overflow-y-auto pr-2">
                    {DESTINATIONS.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/destinations/${c.slug}`}
                        className="group p-2.5 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all flex items-center gap-2"
                      >
                        <span className="text-xl flex-shrink-0">{c.flag}</span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-blue-600">
                            {c.name}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {c.topUniversities.length}+ Universities
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* AI Tools */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("tools")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer",
                  activeDropdown === "tools" || pathname.startsWith("/tools")
                    ? scrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-white bg-white/10"
                    : scrolled
                    ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                )}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                AI Tools
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === "tools" && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-fade-in mt-1 space-y-2">
                  <Link
                    href="/tools/profile-evaluator"
                    className="p-3 rounded-xl hover:bg-blue-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        AI Profile Evaluator
                      </h5>
                      <p className="text-xs text-slate-500">
                        Check admission probability in 2 minutes
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/tools/university-matcher"
                    className="p-3 rounded-xl hover:bg-blue-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold flex-shrink-0">
                      🔍
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        University Matcher
                      </h5>
                      <p className="text-xs text-slate-500">
                        Filter by budget, ranking & intake
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/tools/cost-calculator"
                    className="p-3 rounded-xl hover:bg-blue-50 flex items-start gap-3 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">
                      💰
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                        Cost Calculator
                      </h5>
                      <p className="text-xs text-slate-500">
                        Calculate tuition + living costs in INR
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={cn(
                "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/blog"
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/10"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/contact"
                  ? scrolled
                    ? "text-blue-600 bg-blue-50"
                    : "text-white bg-white/10"
                  : scrolled
                  ? "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/student-login"
              className={cn(
                "text-xs font-semibold px-3 py-2 rounded-lg transition-colors",
                scrolled
                  ? "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              Portal Login
            </Link>

            <Link href="/#register">
              <Button
                variant={scrolled ? "primary" : "secondary"}
                size="md"
                className={cn(
                  "font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all",
                  !scrolled && "bg-white text-blue-900 hover:bg-blue-50"
                )}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-6 shadow-2xl animate-slide-up">
          <div className="space-y-2">
            <Link
              href="/"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Services (8-Stage Process)
            </Link>
            <Link
              href="/destinations"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50 flex items-center justify-between"
            >
              <span>Study Destinations</span>
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-800">
                25 Countries
              </span>
            </Link>
            <Link
              href="/tools/profile-evaluator"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>AI Profile Evaluator</span>
            </Link>
            <Link
              href="/tools/university-matcher"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              University Matcher
            </Link>
            <Link
              href="/tools/cost-calculator"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Cost & Budget Calculator
            </Link>
            <Link
              href="/blog"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Blog & News
            </Link>
            <Link
              href="/contact"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Contact Us
            </Link>
            <Link
              href="/student-login"
              className="block p-3 text-base font-semibold text-slate-900 rounded-xl hover:bg-blue-50"
            >
              Student Portal Login
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link href="/#register" className="block w-full">
              <Button fullWidth size="lg" variant="primary">
                Book Free Consultation
              </Button>
            </Link>
            <a
              href="mailto:info@ideationedu.com"
              className="block text-center text-xs text-slate-500 font-medium py-2"
            >
              info@ideationedu.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
