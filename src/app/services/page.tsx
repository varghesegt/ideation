"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadModal } from "@/components/ui/lead-modal";
import { SERVICES_6 } from "@/data/new-project-data";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="eyebrow-accent">Here for every next step</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.06] tracking-[-0.07em] text-[#172b43]">
                Good guidance makes the journey feel lighter.
              </h1>
              <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-xl">
                From your first questions to getting ready to go, get thoughtful support shaped around your goals and your next chapter.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Talk to an advisor</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative min-h-[280px] sm:min-h-[340px] rounded-[6px] bg-cover bg-center overflow-hidden shadow-2xl visual-hero-overlay"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85')`,
                }}
              >
                <div className="absolute z-10 left-6 bottom-5 text-white font-display font-semibold text-sm tracking-wide">
                  Shaping the path forward
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_6.map((s) => (
              <article
                key={s.number}
                className="card-clean p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-sm mb-5">
                    {s.number}
                  </div>
                  <h2 className="font-display font-bold text-xl text-[#172b43] mb-2.5">
                    {s.title}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-[#64748b] mt-8 leading-relaxed max-w-2xl">
            Services and eligibility depend on your destination and circumstances. Speak with an advisor for current details.
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#123b7a] text-white p-8 sm:p-12 rounded-[5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#b9d0ff]">
                Start with a conversation
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let’s figure out your next step.
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d0e4]">
                Share what you’re hoping for. We’ll help you explore the way forward.
              </p>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1243b4] text-white px-6 py-3.5 rounded text-[13px] font-bold transition-all shadow-md flex-shrink-0 cursor-pointer"
            >
              <span>Book a free conversation</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
