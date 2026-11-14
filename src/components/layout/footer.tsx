import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#102b50] text-white pt-14 pb-8 border-t border-[#1a3860]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 select-none group"
              aria-label="Ideation Education Services"
            >
              <img
                src="/images/logo-emblem-white.png"
                alt="Ideation Education Crest"
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300 flex-shrink-0"
              />
              <div className="flex flex-col select-none">
                <span className="font-serif font-black text-[22px] tracking-[0.04em] leading-tight text-white group-hover:text-[#f7c948] transition-colors">
                  IDEATION
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="h-[1px] w-3.5 bg-[#f7c948]/70" />
                  <span className="text-[9.5px] font-extrabold tracking-[0.22em] uppercase text-[#f7c948] leading-none">
                    EDU SERVICES
                  </span>
                  <span className="h-[1px] w-3.5 bg-[#f7c948]/70" />
                </div>
              </div>
            </Link>
            <p className="text-[13px] text-[#bdcbe0] leading-relaxed max-w-[260px]">
              Thoughtful guidance for the next chapter of your education journey.
            </p>
            <div>
              <a
                href="mailto:info@ideationedu.com"
                className="text-[12px] text-[#d9e2dc] hover:text-white underline underline-offset-4 transition-colors"
              >
                Write to our team ↗
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.12em] font-bold text-[#d9e2dc]">
              Explore
            </h3>
            <div className="space-y-2 text-[12px] text-[#bdcbe0]">
              <Link href="/about" className="block hover:text-white transition-colors">
                Our story
              </Link>
              <Link href="/services" className="block hover:text-white transition-colors">
                Our support
              </Link>
              <Link href="/testimonials" className="block hover:text-white transition-colors">
                Student stories
              </Link>
              <Link href="/destinations" className="block hover:text-white transition-colors">
                Destinations
              </Link>
            </div>
          </div>

          {/* Start Here Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.12em] font-bold text-[#d9e2dc]">
              Start here
            </h3>
            <div className="space-y-2 text-[12px] text-[#bdcbe0]">
              <Link href="/contact" className="block hover:text-white transition-colors">
                Talk to an advisor
              </Link>
              <Link href="/destinations" className="block hover:text-white transition-colors">
                Explore countries
              </Link>
              <a
                href="mailto:info@ideationedu.com"
                className="block hover:text-white transition-colors"
              >
                Send us an email
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.12em] font-bold text-[#d9e2dc]">
              Get in touch
            </h3>
            <div className="space-y-2 text-[12px] text-[#bdcbe0] leading-relaxed">
              <a
                href="mailto:info@ideationedu.com"
                className="block hover:text-white transition-colors"
              >
                info@ideationedu.com
              </a>
              <p>
                Manapparai · Tiruchirappalli<br />
                Tamil Nadu, India
              </p>
              <p className="text-[11px] text-[#8ea6c7]">By appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ffffff24] pt-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#aebed5] gap-2">
          <span>© 2026 Ideation Education Services</span>
          <span>Made for the possibilities ahead.</span>
        </div>

        {/* Legal Disclaimer */}
        <p className="text-[10px] text-[#8a9db8] leading-relaxed mt-4 max-w-4xl">
          Information on this website is for general guidance and does not guarantee admission, scholarships, visa outcomes or immigration eligibility. Please verify current requirements with the relevant institution and official authorities.
        </p>
      </div>
    </footer>
  );
}
