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
              className="inline-flex items-center gap-2.5 font-display font-extrabold text-[17px] tracking-[-0.05em] text-white select-none"
            >
              <span className="w-9 h-9 rounded-full bg-[#1a56db] text-white font-serif italic text-2xl grid place-items-center shadow-xs">
                i
              </span>
              <span>
                ideation
                <small className="block font-medium text-[9px] tracking-[0.16em] uppercase text-[#b1c3bc]">
                  education services
                </small>
              </span>
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
              <Link href="/#approach" className="block hover:text-white transition-colors">
                How it works
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
