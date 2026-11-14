"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LeadModal } from "@/components/ui/lead-modal";

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
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-5">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 select-none group flex-shrink-0"
            aria-label="Ideation Education Services"
          >
            <img
              src="/images/logo-dark.png"
              alt="Ideation Education Services"
              className="h-[52px] sm:h-[56px] w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
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
              className="inline-flex items-center gap-2 bg-[#1a56db] border border-[#1a56db] hover:bg-[#1243b4] hover:border-[#1243b4] text-white px-5 py-3 rounded text-[13px] font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>Let’s talk</span>
              <span className="text-base leading-none">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#172b43] p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f7f9fc] border-b border-[#dce4ef] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col text-[14px] text-[#41536a] font-medium">
              <Link
                href="/"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/services"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our support
              </Link>
              <Link
                href="/testimonials"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student stories
              </Link>
              <Link
                href="/about"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our story
              </Link>
              <Link
                href="/contact"
                className="py-3 border-b border-[#dce4ef] hover:text-[#1a56db]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLeadModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1a56db] text-white py-3 px-5 rounded text-[13px] font-bold"
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
