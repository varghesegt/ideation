"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadModal } from "@/components/ui/lead-modal";
import {
  SERVICES_6,
  PROCESS_STEPS_4,
  VALUES_4,
} from "@/data/new-project-data";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState("");

  const handleOpenModal = (country = "") => {
    setModalCountry(country);
    setModalOpen(true);
  };

  const heroDestinations = [
    {
      country: "United Kingdom",
      number: "01 / Europe",
      flag: "🇬🇧",
      tagline: "Tradition meets fresh thinking",
      photo: "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "Canada",
      number: "02 / North America",
      flag: "🇨🇦",
      tagline: "Room to grow, in every sense",
      photo: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "Australia",
      number: "03 / Oceania",
      flag: "🇦🇺",
      tagline: "Learning with a new perspective",
      photo: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "United States",
      number: "04 / North America",
      flag: "🇺🇸",
      tagline: "Make space for big ideas",
      photo: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "Ireland",
      number: "05 / Europe",
      flag: "🇮🇪",
      tagline: "A welcoming place to begin",
      photo: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "New Zealand",
      number: "06 / Oceania",
      flag: "🇳🇿",
      tagline: "Find your own kind of balance",
      photo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=700&q=80",
    },
    {
      country: "Singapore",
      number: "07 / Asia",
      flag: "🇸🇬",
      tagline: "Connected to what comes next",
      photo: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef] overflow-hidden">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="eyebrow-accent">
                A more personal way to study abroad
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.05] tracking-[-0.07em] text-[#172b43]">
                Your world is<br />
                waiting to be <em className="font-serif italic font-normal text-[#1a56db]">opened.</em>
              </h1>

              <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-[480px]">
                Big plans start with the right conversation. Get thoughtful guidance for your study abroad journey, shaped around your ambitions, your budget and the life you want to build.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenModal()}
                  className="btn-primary"
                >
                  <span>Talk to an advisor</span>
                  <span className="text-base">↗</span>
                </button>

                <a
                  href="#destinations"
                  className="btn-outline"
                >
                  Explore destinations
                </a>
              </div>

              {/* Micro-proof */}
              <div className="flex items-center gap-3 pt-4 text-xs text-[#64748b]">
                <div className="flex -space-x-1.5" aria-hidden="true">
                  <span className="w-7 h-7 rounded-full border-2 border-white bg-[#d2b29a] text-[#3c3c32] font-bold text-[9px] grid place-items-center">
                    A
                  </span>
                  <span className="w-7 h-7 rounded-full border-2 border-white bg-[#bfd4cf] text-[#3c3c32] font-bold text-[9px] grid place-items-center">
                    R
                  </span>
                  <span className="w-7 h-7 rounded-full border-2 border-white bg-[#e5c3a2] text-[#3c3c32] font-bold text-[9px] grid place-items-center">
                    S
                  </span>
                  <span className="w-7 h-7 rounded-full border-2 border-white bg-[#d5d3b8] text-[#3c3c32] font-bold text-[9px] grid place-items-center">
                    +
                  </span>
                </div>
                <div>
                  <strong className="text-[#172b43] block">Guidance that stays with you</strong>
                  <span>From first idea to first day abroad</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Architecture */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full max-w-[500px] mx-auto">
                {/* Main Photo with Arch Top (Dome) */}
                <div className="absolute inset-0 sm:left-9 sm:bottom-6 rounded-t-[45%] rounded-b-md shadow-2xl overflow-hidden bg-[#102b50] border border-[#dce4ef] group">
                  <img
                    src="/images/hero-campus.jpg"
                    alt="University students walking together on campus"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c192d]/75 via-[#0c192d]/15 to-transparent pointer-events-none" />
                  <span className="absolute right-3.5 bottom-8 z-10 text-white text-[11px] font-semibold tracking-wider [writing-mode:vertical-rl] drop-shadow-md select-none">
                    A new point of view
                  </span>
                </div>

                {/* Circular Badge */}
                <div className="absolute top-4 left-0 sm:-left-3 w-20 h-20 rounded-full bg-[#e8f0ff] border border-[#cadbfa] text-[#1749ad] font-serif italic text-base flex flex-col items-center justify-center text-center shadow-md -rotate-12 select-none">
                  <span>Since</span>
                  <span className="font-bold">2015</span>
                </div>

                {/* Side Asterisk */}
                <div
                  className="absolute -right-3 top-4 text-[#f2a900] font-serif italic text-4xl rotate-12 select-none"
                  aria-hidden="true"
                >
                  ✳
                </div>

                {/* Float Note */}
                <div className="absolute left-0 bottom-2 bg-white border border-[#dce4ef] p-4 sm:p-5 rounded-md shadow-xl max-w-[230px]">
                  <b className="font-display text-[13px] font-bold text-[#172b43] block mb-1">
                    Every journey starts somewhere.
                  </b>
                  <span className="text-[11px] text-[#64748b] leading-tight block">
                    Let’s find the place that feels right for you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="bg-[#edf3ff] border-y border-[#dce4ef] py-5">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-bold text-[#64748b] w-full sm:w-auto">
              Personal guidance, built on care and clarity
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-[13px] font-display font-bold text-[#102b50]">
              <span className="flex items-center gap-2">
                <i className="font-serif italic text-[#1a56db] not-italic font-normal text-base">✳</i>
                <span>One-to-one advice</span>
              </span>
              <span className="flex items-center gap-2">
                <i className="font-serif italic text-[#1a56db] not-italic font-normal text-base">↗</i>
                <span>End-to-end support</span>
              </span>
              <span className="flex items-center gap-2">
                <i className="font-serif italic text-[#1a56db] not-italic font-normal text-base">◎</i>
                <span>Your goals come first</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow-accent">Find your somewhere</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#172b43] mt-3">
                A world of possibilities.<br />
                One that feels like yours.
              </h2>
            </div>
            <p className="text-sm text-[#64748b] max-w-[390px] leading-relaxed">
              Every destination has its own character, opportunities and way of life. We’ll help you explore what fits your goals and the future you imagine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {heroDestinations.map((d) => (
              <div
                key={d.country}
                onClick={() => handleOpenModal(d.country)}
                className="group relative min-h-[250px] p-5 rounded-[4px] flex flex-col justify-between text-white overflow-hidden bg-[#253a38] cursor-pointer shadow-xs hover:shadow-md transition-all"
              >
                {/* Background image & gradient overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${d.photo}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c192d]/85 via-[#0c192d]/30 to-transparent" />

                <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-white/90">
                  <span>{d.number}</span>
                  <span className="text-xl drop-shadow-xs">{d.flag}</span>
                </div>

                <div className="relative z-10 pt-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-[#b9d0ff] transition-colors">
                    {d.country}
                  </h3>
                  <span className="text-xs text-[#e1e6df] font-light leading-snug block">
                    {d.tagline}
                  </span>
                </div>
              </div>
            ))}

            {/* Card 8: Still exploring? */}
            <Link
              href="/destinations"
              className="bg-[#e8f0ff] hover:bg-[#d8e7ff] border border-[#cadbfa] p-6 rounded-[4px] flex flex-col items-center justify-center text-center text-[#1749ad] min-h-[250px] transition-colors group cursor-pointer"
            >
              <h3 className="font-serif italic text-2xl sm:text-[26px] mb-2 font-normal text-[#1a56db]">
                Still exploring?
              </h3>
              <span className="text-xs text-[#41536a] leading-relaxed">
                There’s a world beyond these.<br />
                <strong className="text-[#1a56db] group-hover:underline">Let’s discover yours ↗</strong>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f7f9fc]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow-accent">Here for every next step</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#172b43] mt-3">
                Good guidance makes<br />
                the journey feel lighter.
              </h2>
            </div>
            <p className="text-sm text-[#64748b] max-w-[390px] leading-relaxed">
              There’s a lot to think about. We’ll help you make sense of the details and keep moving forward, one clear step at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#dce4ef]">
            {SERVICES_6.map((s) => (
              <article
                key={s.number}
                className="bg-transparent hover:bg-white p-7 sm:p-8 border-r border-b border-[#dce4ef] transition-all min-h-[220px]"
              >
                <div className="w-10 h-10 rounded-full border border-[#d8e1d9] text-[#1a56db] grid place-items-center font-serif italic text-lg mb-6 bg-[#e8f0ff]/40">
                  {s.number}
                </div>
                <h3 className="font-display font-bold text-lg text-[#172b43] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process / Approach Section */}
      <section id="approach" className="py-20 bg-[#123b7a] text-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#b9d0ff] flex items-center gap-2">
                <span className="w-5 h-[1px] bg-[#f2a900]" />
                <span>A clear path, at your pace</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white mt-3">
                One step at a time.<br />
                With someone by your side.
              </h2>
            </div>
            <p className="text-sm text-[#c4d0ca] max-w-[390px] leading-relaxed">
              Studying abroad is a big decision. Our role is to make the process easier to understand and more personal to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS_4.map((step) => (
              <article key={step.number} className="border-t border-[#668b7c]/50 pt-6">
                <span className="font-serif italic text-[#a9ccba] text-base block mb-4">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#c4d0ca] leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="pt-10">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 bg-[#f7f9fc] hover:bg-white text-[#172b43] px-6 py-3.5 rounded text-[13px] font-bold transition-all shadow-md cursor-pointer"
            >
              <span>Begin with a conversation</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f7f9fc]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photo & Quote */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] sm:h-[460px] w-full">
                <div
                  className="absolute inset-0 sm:right-12 sm:bottom-7 rounded-[4px] bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85')`,
                  }}
                  role="img"
                  aria-label="Students sharing ideas while studying together"
                />
                <div className="absolute right-0 bottom-0 bg-[#e8f0ff] border border-[#cadbfa] p-5 sm:p-6 w-[220px] rounded-[3px] shadow-md font-serif italic text-base sm:text-[18px] text-[#102b50] leading-snug">
                  “The right path should feel like your own.”
                </div>
              </div>
            </div>

            {/* Right Story & Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow-accent">A little about us</div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#172b43] leading-tight">
                Big dreams deserve thoughtful guidance.
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                Ideation Education Services began in 2015 with a simple belief: every student deserves guidance that takes the time to understand them. From our roots in Tamil Nadu, we help students explore education opportunities beyond borders with care, clarity and a personal touch.
              </p>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                We’re here to help you make informed choices, feel prepared for what’s ahead and keep your ambitions at the centre of every decision.
              </p>

              {/* 4 Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                {VALUES_4.map((v) => (
                  <div key={v.title} className="border-t border-[#dce4ef] pt-3">
                    <b className="font-display text-sm font-bold text-[#1a56db] block mb-1">
                      {v.title}
                    </b>
                    <span className="text-xs text-[#64748b] block">
                      {v.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenModal()}
                  className="btn-outline"
                >
                  <span>Meet your advisor</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Card & Metrics */}
      <section className="py-12 bg-[#edf3ff]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[5px] overflow-hidden shadow-lg border border-[#cadbfa]">
            {/* Quote Block */}
            <div className="lg:col-span-6 bg-[#164da9] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="font-serif italic text-5xl sm:text-6xl text-[#aac6ff] leading-none mb-3">
                  “
                </div>
                <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug text-white mb-6">
                  Every student’s story is different. Their guidance should be, too.
                </blockquote>
              </div>
              <small className="text-xs text-[#d5e2ff] font-medium tracking-wider uppercase block">
                Our approach to education guidance
              </small>
            </div>

            {/* Metrics Block */}
            <div className="lg:col-span-6 bg-[#e6efff] p-8 sm:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <strong className="font-display text-3xl sm:text-4xl font-bold text-[#102b50] block tracking-tight">
                    2015
                  </strong>
                  <span className="text-xs text-[#64748b] mt-1 block">
                    Where our story began
                  </span>
                </div>
                <div>
                  <strong className="font-display text-3xl sm:text-4xl font-bold text-[#102b50] block tracking-tight">
                    25+
                  </strong>
                  <span className="text-xs text-[#64748b] mt-1 block">
                    Destinations to explore*
                  </span>
                </div>
                <div>
                  <strong className="font-display text-3xl sm:text-4xl font-bold text-[#102b50] block tracking-tight">
                    1:1
                  </strong>
                  <span className="text-xs text-[#64748b] mt-1 block">
                    Personal conversations
                  </span>
                </div>
                <div>
                  <strong className="font-display text-3xl sm:text-4xl font-bold text-[#102b50] block tracking-tight">
                    All the way
                  </strong>
                  <span className="text-xs text-[#64748b] mt-1 block">
                    Support through your journey
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-[#788582] mt-6 border-t border-[#cadbfa] pt-3">
                *Destination availability and services vary. Speak with an advisor for current details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#e8f0ff] border border-[#cadbfa] p-8 sm:p-12 md:p-14 rounded-[5px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 relative z-10 max-w-xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#1a56db] flex items-center gap-2">
                <span className="w-5 h-[1px] bg-[#f2a900]" />
                <span>Your next chapter starts here</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#172b43] tracking-tight">
                Let’s make a plan that feels like you.
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Tell us what you’re thinking. We’ll take it from there, together.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0 space-y-2">
              <button
                onClick={() => handleOpenModal()}
                className="btn-primary"
              >
                <span>Book a free conversation</span>
                <span>↗</span>
              </button>
              <small className="block text-[11px] text-[#64748b]">
                No pressure. Just a good place to start.
              </small>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCountry={modalCountry}
      />
    </div>
  );
}
