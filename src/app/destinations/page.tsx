"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadModal } from "@/components/ui/lead-modal";
import { DESTINATIONS_25 } from "@/data/new-project-data";

export default function DestinationsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleOpenModal = (countryName: string) => {
    setSelectedCountry(countryName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="eyebrow-accent">Find your somewhere</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.07em] text-[#172b43]">
              A world of possibilities.<br />
              One that feels like yours.
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-2xl">
              Explore a few of the destinations students consider. The right choice depends on your course, goals, budget and personal priorities.
            </p>
          </div>
        </div>
      </section>

      {/* 25 Destinations Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <div className="eyebrow-accent">Explore all 25 countries we represent</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#172b43] mt-2">
              A world of study destinations, ready to explore.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS_25.map((c) => (
              <div
                key={c.slug}
                className="card-clean overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Flag */}
                  <div
                    className="relative h-[160px] bg-cover bg-center overflow-hidden country-photo-overlay"
                    style={{ backgroundImage: `url('${c.photo}')` }}
                  >
                    <span className="absolute right-3.5 bottom-2.5 z-10 text-2xl drop-shadow-md select-none">
                      {c.flag}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 pb-2">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#172b43] mb-1.5 group-hover:text-[#1a56db] transition-colors">
                      {c.name}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-[#64748b] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-3">
                  <Link
                    href={`/contact?country=${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a56db] hover:text-[#1243b4] transition-colors"
                  >
                    <span>Explore with an advisor</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#64748b] mt-8 leading-relaxed max-w-3xl">
            Study options, entry requirements, tuition and visa rules vary and can change. Confirm current details with the relevant institution and official authorities.
          </p>
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="pb-20">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#123b7a] text-white p-8 sm:p-12 rounded-[5px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#b9d0ff]">
                Not sure where to start?
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let’s find the right fit for you.
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d0e4]">
                A personal conversation can help you compare your options.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56db] hover:bg-[#1243b4] text-white px-6 py-3.5 rounded text-[13px] font-bold transition-all shadow-md flex-shrink-0"
            >
              <span>Talk through your options</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCountry={selectedCountry}
      />
    </div>
  );
}
