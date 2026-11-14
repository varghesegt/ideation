"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LeadModal } from "@/components/ui/lead-modal";
import { asset } from "@/lib/assets";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#f7f9fc]/95 backdrop-blur-md border-b border-[#dce4ef] transition-all">
        <div className="max-w-[1160px] mx-auto px-3.5 sm:px-6 h-[58px] sm:h-[68px] flex items-center justify-between gap-3 sm:gap-5">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 select-none group flex-shrink-0"
            aria-label="Ideation Education Services"
          >
            <img
              src={asset("/images/logo-emblem-dark.png")}
              alt="Ideation Education Crest"
              className="h-[36px] sm:h-[42px] w-auto object-contain transition-transform group-hover:scale-105 duration-200 flex-shrink-0"
            />
            <div className="flex flex-col select-none">
              <span className="font-serif font-black text-[17px] sm:text-[19px] tracking-[0.03em] leading-tight text-[#102b50] group-hover:text-[#1a56db] transition-colors">
                IDEATION
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <span className="h-[1px] w-2 sm:w-2.5 bg-[#c59b27]/60" />
                <span className="text-[7.5px] sm:text-[8.5px] font-extrabold tracking-[0.22em] uppercase text-[#c59b27] leading-none">
                  EDU SERVICES
                </span>
                <span className="h-[1px] w-2 sm:w-2.5 bg-[#c59b27]/60" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#41536a] font-medium">
            <Link
              href="/"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/destinations" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Destinations
            </Link>
            <Link
              href="/services"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/services" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Our support
            </Link>
            <Link
              href="/testimonials"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/testimonials" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Student stories
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/about" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#1a56db] transition-colors ${
                pathname === "/contact" ? "text-[#1a56db] font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setLeadModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#1a56db] border border-[#1a56db] hover:bg-[#1243b4] hover:border-[#1243b4] text-white px-4.5 py-2.5 rounded text-[13px] font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>Let’s talk</span>
              <span className="text-base leading-none">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#172b43] p-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f9fc] border-b border-[#dce4ef] px-4 py-3.5 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col text-[13.5px] text-[#41536a] font-medium">
              <Link
                href="/"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/services"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our support
              </Link>
              <Link
                href="/testimonials"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student stories
              </Link>
              <Link
                href="/about"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our story
              </Link>
              <Link
                href="/contact"
                className="py-2.5 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLeadModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a56db] text-white py-2.5 px-4 rounded text-[13px] font-bold"
                >
                  <span>Let’s talk</span>
                  <span>↗</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Lead / Consultation Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
      />
    </>
  );
}
