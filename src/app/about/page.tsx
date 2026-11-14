"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadModal } from "@/components/ui/lead-modal";
import { LEADERS_3 } from "@/data/new-project-data";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="eyebrow-accent">A little about us</div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.06] tracking-[-0.07em] text-[#172b43]">
                Big dreams deserve thoughtful guidance.
              </h1>
              <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-xl">
                Since 2015, Ideation Education Services has helped students from Tamil Nadu explore education opportunities beyond borders.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative min-h-[300px] sm:min-h-[360px] rounded-[6px] bg-cover bg-center overflow-hidden shadow-2xl visual-hero-overlay"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85')`,
                }}
              >
                <div className="absolute z-10 left-6 bottom-5 text-white font-display font-semibold text-sm tracking-wide">
                  A community of possibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Split Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="eyebrow-accent">Our story</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#172b43]">
                Every student’s story is different. Their guidance should be, too.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[#64748b] text-sm sm:text-base leading-relaxed">
              <p>
                We began with a simple belief: students deserve advice that starts by listening. Study abroad planning can feel like a lot to navigate, so we make space for questions, clear information and decisions shaped around each person.
              </p>
              <p>
                From our roots in Manapparai and Tiruchirappalli, we support students as they explore destinations, applications and the steps that follow. Our aim is to help you feel informed and prepared as you choose what comes next.
              </p>
              <p className="text-xs text-[#64748b] pt-2">
                The information on this page describes our approach. Ask our team for current company, service and destination details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Principles Cards */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="card-clean p-7">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-lg mb-5">
                ◎
              </div>
              <h3 className="font-display font-bold text-xl text-[#172b43] mb-2">
                Listen first
              </h3>
              <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                Your plans and priorities guide the conversation.
              </p>
            </article>

            <article className="card-clean p-7">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-lg mb-5">
                ↗
              </div>
              <h3 className="font-display font-bold text-xl text-[#172b43] mb-2">
                Explain clearly
              </h3>
              <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                We help make processes and choices easier to understand.
              </p>
            </article>

            <article className="card-clean p-7">
              <div className="w-10 h-10 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-lg mb-5">
                ✳
              </div>
              <h3 className="font-display font-bold text-xl text-[#172b43] mb-2">
                Stay alongside
              </h3>
              <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                Support through the stages of your study abroad journey.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#123b7a] text-white p-8 sm:p-12 rounded-[5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#b9d0ff]">
                Let’s meet
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Tell us where you hope to go.
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d0e4]">
                We’d be glad to hear what you’re planning.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1243b4] text-white px-6 py-3.5 rounded text-[13px] font-bold transition-all shadow-md flex-shrink-0"
            >
              <span>Get in touch</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#edf3ff] border-t border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="eyebrow-accent">The people behind Ideation</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#172b43] tracking-tight mt-2 mb-2">
              Leadership with a personal commitment to your journey.
            </h2>
            <p className="text-sm sm:text-base text-[#64748b]">
              Meet the team guiding Ideation Education Services and its student experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERS_3.map((leader) => (
              <article
                key={leader.name}
                className="card-clean p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Header Banner */}
                <div
                  className="h-[150px] -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-6 bg-cover bg-center relative flex items-center justify-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(220,233,255,0.92), rgba(240,245,255,0.92)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80')`,
                  }}
                >
                  <div className="w-[88px] h-[88px] rounded-full border border-[#aac5f7] bg-white text-[#1a56db] grid place-items-center font-display font-semibold text-xl tracking-wide shadow-md">
                    {leader.initials}
                  </div>
                  <span className="absolute right-4 top-3.5 text-[#7385a3] font-serif italic text-base">
                    {leader.index}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-[#172b43] mb-1">
                  {leader.name}
                </h3>
                <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1a56db] mb-3">
                  {leader.role}
                </div>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                  {leader.bio}
                </p>
              </article>
            ))}
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
