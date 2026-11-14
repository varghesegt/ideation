"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadModal } from "@/components/ui/lead-modal";
import {
  STUDENT_STORIES,
  UNIVERSITY_PARTNERS,
  VIDEO_TESTIMONIALS,
  TRUST_STATS,
  StudentStory,
  VideoTestimonial,
} from "@/data/new-project-data";
import { Play, CheckCircle2, Award, Building2, MapPin, X, ArrowUpRight, GraduationCap } from "lucide-react";

export default function TestimonialsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  const handleOpenLead = (country = "") => {
    setModalCountry(country);
    setModalOpen(true);
  };

  const filterOptions = [
    { id: "all", label: "All Destinations", count: STUDENT_STORIES.length },
    { id: "germany", label: "🇩🇪 Germany" },
    { id: "uk", label: "🇬🇧 United Kingdom" },
    { id: "australia", label: "🇦🇺 Australia" },
    { id: "ireland", label: "🇮🇪 Ireland" },
    { id: "usa", label: "🇺🇸 United States" },
    { id: "canada", label: "🇨🇦 Canada" },
    { id: "other", label: "🇪🇺 France & Singapore" },
  ];

  const filteredStories = STUDENT_STORIES.filter((story) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "other") {
      return story.destinationCode === "france" || story.destinationCode === "singapore";
    }
    return story.destinationCode === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-16 sm:pt-20 pb-16 sm:pb-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="eyebrow-accent">Proven outcomes · Since 2015</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.06] tracking-[-0.07em] text-[#172b43]">
              Real students. Real admits.<br />
              Stories that speak for themselves.
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-2xl pt-1">
              Study abroad is one of the most important investments you and your family will ever make. Discover how students from Tamil Nadu secured tuition waivers, prestigious admits, and stress-free visa approvals.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenLead()}
                className="btn-primary"
              >
                <span>Check your eligibility</span>
                <span>↗</span>
              </button>
              <a
                href="#stories"
                className="btn-secondary"
              >
                <span>Read student stories</span>
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Band */}
      <section className="bg-white border-b border-[#dce4ef] py-10 sm:py-12">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1a56db] tracking-tight">
                  {stat.value}
                </div>
                <div className="font-display font-bold text-xs sm:text-sm text-[#172b43]">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#64748b] leading-tight">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Spotlight */}
      <section className="py-16 sm:py-20 border-b border-[#dce4ef] bg-[#f0f5fd]/50">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="eyebrow-accent">In their own words</div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#172b43] mt-2">
                Watch student journeys from Tamil Nadu to campus.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748b] max-w-md">
              Short, authentic accounts of navigating applications, scholarships, and arriving at their international universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VIDEO_TESTIMONIALS.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVideo(v)}
                className="card-clean overflow-hidden group cursor-pointer hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-[200px] overflow-hidden bg-slate-900">
                  <img
                    src={v.thumbnail}
                    alt={v.studentName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button Badge */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-12 h-12 rounded-full bg-white/95 text-[#1a56db] grid place-items-center shadow-lg group-hover:scale-110 group-hover:bg-[#1a56db] group-hover:text-white transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute right-3 bottom-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold">
                    {v.duration}
                  </div>

                  {/* Destination Flag */}
                  <div className="absolute left-3 bottom-3 text-white text-xs font-semibold flex items-center gap-1.5">
                    <span>{v.flag}</span>
                    <span>{v.destination}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2.5">
                  <h3 className="font-display font-bold text-lg text-[#172b43] group-hover:text-[#1a56db] transition-colors">
                    {v.studentName}
                  </h3>
                  <div className="text-xs font-semibold text-[#1a56db]">
                    {v.program} · {v.university}
                  </div>
                  <p className="font-serif italic text-xs sm:text-[13px] text-[#41536a] leading-relaxed">
                    “{v.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Filterable Case Studies */}
      <section id="stories" className="py-16 sm:py-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="mb-10 space-y-3">
            <div className="eyebrow-accent">Verified student outcomes</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#172b43]">
              Filter student case studies by destination
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] max-w-2xl leading-relaxed">
              Every card represents a verified admission. Explore their educational backgrounds, scholarships won, and their advice for future applicants.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-8 border-b border-[#dce4ef]">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 rounded text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === opt.id
                    ? "bg-[#1a56db] text-white shadow-xs"
                    : "bg-white text-[#41536a] border border-[#dce4ef] hover:border-[#1a56db] hover:text-[#1a56db]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="card-clean p-6 sm:p-8 flex flex-col justify-between border border-[#dce4ef] hover:border-[#aac5f7] transition-all relative overflow-hidden group"
              >
                {/* Background Accent Band */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a56db] via-[#4f86f7] to-[#f2a900]" />

                <div className="space-y-5">
                  {/* Top Profile Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                        <img
                          src={story.photo}
                          alt={story.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-[#172b43] leading-tight">
                          {story.name}
                        </h3>
                        <div className="text-[12px] text-[#64748b] flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#1a56db]" />
                          <span>{story.hometown}</span>
                        </div>
                        <div className="text-[11px] text-[#7385a3]">
                          {story.previousDegree}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-2xl drop-shadow-xs select-none">
                        {story.flag}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a56db] mt-1">
                        {story.destination}
                      </span>
                    </div>
                  </div>

                  {/* Outcome Highlight Pill */}
                  <div className="inline-flex items-center gap-2 bg-[#eaf1ff] border border-[#bfd4fb] text-[#1243b4] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight">
                    <Award className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
                    <span>{story.outcomePill}</span>
                  </div>

                  {/* Admit Details Box */}
                  <div className="bg-[#f7f9fc] rounded border border-[#e2e8f0] p-4 space-y-1.5">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#64748b]">
                      Admitted University & Degree
                    </div>
                    <div className="font-display font-bold text-base text-[#172b43]">
                      {story.university}
                    </div>
                    <div className="text-xs text-[#1a56db] font-semibold">
                      {story.program} · <span className="text-[#64748b] font-normal">{story.intake}</span>
                    </div>
                  </div>

                  {/* Student Testimonial Quote */}
                  <blockquote className="font-serif italic text-xs sm:text-[13px] text-[#41536a] leading-relaxed pt-1">
                    “{story.testimonial}”
                  </blockquote>
                </div>

                {/* Card Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#dce4ef] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#15803d] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Admit · Direct Process</span>
                  </div>

                  <button
                    onClick={() => handleOpenLead(story.destination)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1a56db] hover:text-[#1243b4] transition-colors cursor-pointer"
                  >
                    <span>Plan like {story.name.split(" ")[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="text-xs text-[#64748b] mt-8 leading-relaxed max-w-3xl">
            Testimonials reflect actual student journeys and outcomes achieved through Ideation Education Services. Admission criteria, scholarship awards, and visa regulations are decided solely by the respective academic institutions and national immigration authorities.
          </p>
        </div>
      </section>

      {/* University Representation Wall */}
      <section className="py-16 sm:py-24 bg-[#edf3ff] border-t border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="eyebrow-accent justify-center">Authorized partnerships & direct access</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#172b43]">
              Institutions our students attend
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              We guide students toward recognized, world-ranked public research institutions and universities offering strong global career placement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNIVERSITY_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="card-clean p-5 sm:p-6 bg-white flex flex-col justify-between border border-[#dce4ef] hover:border-[#1a56db] transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{partner.countryFlag}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a56db] bg-[#e8f0ff] px-2.5 py-0.5 rounded-full">
                      {partner.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#172b43] leading-snug">
                    {partner.name}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-[#f0f4f9] flex items-center justify-between text-xs text-[#64748b]">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#1a56db]" />
                    <span>{partner.location}</span>
                  </span>
                  <span className="text-[#1a56db] font-semibold">Explore ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 98.4% Visa Success Framework */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="eyebrow-accent">Why our visa approval rate is 98.4%</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#172b43]">
                Zero shortcuts. Rigorous preparation.
              </h2>
              <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                Visa rejection is the greatest fear of every student and parent. We protect your investment through a four-stage verification protocol refined over 9+ years of practice in Tamil Nadu.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleOpenLead()}
                  className="btn-primary"
                >
                  <span>Schedule a visa profile audit</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="card-clean p-6 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-display font-bold text-base text-[#172b43]">
                  Financial Stress-Testing
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  We pre-verify all funds, bank statements, affidavits, and sponsor documentation to meet embassy standards before filing.
                </p>
              </div>

              <div className="card-clean p-6 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-display font-bold text-base text-[#172b43]">
                  Custom Statement of Purpose
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Zero AI-generated templates. Every SOP clearly articulates course relevance, home-ties, and career ROI.
                </p>
              </div>

              <div className="card-clean p-6 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-sm">
                  3
                </div>
                <h3 className="font-display font-bold text-base text-[#172b43]">
                  1-on-1 Mock Embassy Interviews
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Conducted in our Manapparai & Trichy offices to eliminate hesitation for US F-1, German APS, and Australian GS checks.
                </p>
              </div>

              <div className="card-clean p-6 space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f0ff] text-[#1a56db] grid place-items-center font-bold text-sm">
                  4
                </div>
                <h3 className="font-display font-bold text-base text-[#172b43]">
                  Direct Pre-Departure Briefing
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Forex card setup, student accommodation booking, and immigration counter preparation for first-time flyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="pb-20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#123b7a] text-white p-8 sm:p-12 rounded-[5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#b9d0ff]">
                Your journey starts here
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Your story could be the next one featured here.
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d0e4]">
                Book a confidential 1:1 conversation to explore eligible countries, admissions, and scholarships.
              </p>
            </div>

            <button
              onClick={() => handleOpenLead()}
              className="inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1243b4] text-white px-6 py-3.5 rounded text-[13px] font-bold transition-all shadow-md flex-shrink-0 cursor-pointer"
            >
              <span>Book a free consultation</span>
              <span>↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Preview */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-[#0b1d1d]/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveVideo(null);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#f7f9fc] w-full max-w-[560px] rounded-md border border-[#dce4ef] overflow-hidden shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
            <div className="relative h-[240px] bg-slate-900">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.studentName}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Close"
                className="absolute right-4 top-4 text-white hover:text-white/80 p-1.5 rounded-full bg-black/40 backdrop-blur-xs transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute left-6 bottom-5 right-6 text-white space-y-1">
                <div className="text-xs font-semibold text-[#b9d0ff] flex items-center gap-2">
                  <span>{activeVideo.flag} {activeVideo.destination}</span>
                  <span>•</span>
                  <span>{activeVideo.duration}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {activeVideo.studentName}
                </h3>
                <p className="text-xs text-white/90">
                  {activeVideo.program} · {activeVideo.university}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-5">
              <div className="space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#1a56db]">
                  Student Experience & Verification
                </div>
                <p className="font-serif italic text-sm text-[#172b43] leading-relaxed">
                  “{activeVideo.quote}”
                </p>
              </div>

              <div className="bg-white rounded border border-[#dce4ef] p-4 text-xs text-[#64748b] space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-[#172b43]">
                  <GraduationCap className="w-4 h-4 text-[#1a56db]" />
                  <span>Verified Admission & Visa Protocol</span>
                </div>
                <p>
                  Guided end-to-end by Ideation Education Services (Manapparai & Tiruchirappalli office).
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#64748b] hover:text-[#172b43]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const country = activeVideo.destination;
                    setActiveVideo(null);
                    handleOpenLead(country);
                  }}
                  className="btn-primary text-xs"
                >
                  <span>Plan your admission like this</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCountry={modalCountry}
      />
    </div>
  );
}
