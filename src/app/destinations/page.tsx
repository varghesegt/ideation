"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2,
  Search,
  ArrowRight,
  Building2,
  Coins,
  Briefcase,
  CheckCircle2,
  Landmark,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = [
    "All",
    "Americas",
    "UK & Ireland",
    "Europe",
    "Asia-Pacific & Middle East",
  ];

  const filtered = DESTINATIONS.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.tagline.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || c.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#ded9cd] bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-academic-mesh opacity-60 pointer-events-none" />
        <Container size="large">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-academic text-xs font-medium">
              <Globe2 className="w-3.5 h-3.5 text-amber-800" />
              <span>International Higher Education Atlas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-editorial text-slate-950 leading-[1.12]">
              Study Across 25 Premier Global Destinations
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light max-w-3xl">
              Comparative dossiers on tuition fees, post-study work regulations, cost of living, and university accreditations across North America, the UK, Europe, and Asia-Pacific.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Country Grid */}
      <section className="py-16">
        <Container size="large">
          {/* Search & Tabs */}
          <div className="space-y-6 mb-12">
            <div className="max-w-xl relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search country, work permit, or keyword (e.g. Germany, OPT, 3-year visa)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#ded9cd] focus:border-blue-950 focus:ring-1 focus:ring-blue-950 text-sm outline-none bg-white shadow-xs font-normal"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedRegion === region
                      ? "bg-[#0a192f] text-amber-100 shadow-xs"
                      : "bg-white text-slate-700 border border-[#ded9cd] hover:bg-[#f5f2eb]"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((country) => {
              const bgPhoto =
                country.image ||
                "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80";

              return (
                <div
                  key={country.slug}
                  className="card-editorial overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all"
                >
                  {/* Photo Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-[#ded9cd]">
                    <img
                      src={bgPhoto}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-2xl drop-shadow-sm">{country.flag}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium border border-white/20">
                        {country.region}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-xl font-normal font-editorial drop-shadow-xs">
                        {country.name}
                      </h3>
                      <p className="text-[11px] text-amber-200/90 font-light truncate">
                        {country.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-light">
                      {country.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-[#ded9cd] text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 font-light">
                          <Coins className="w-3.5 h-3.5 text-amber-800" /> Avg Tuition:
                        </span>
                        <span className="font-semibold text-slate-900">
                          {country.avgTuitionINR.split("/")[0]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 font-light">
                          <Briefcase className="w-3.5 h-3.5 text-blue-900" /> Work Permit:
                        </span>
                        <span className="font-semibold text-emerald-800">
                          {country.postStudyWork.split("(")[0]}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-1.5 font-light">
                          <Building2 className="w-3.5 h-3.5 text-slate-700" /> Key Unis:
                        </span>
                        <span className="font-medium text-slate-800 truncate max-w-[150px]">
                          {country.topUniversities[0]?.name || "Multiple Universities"}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#ded9cd] flex items-center justify-between">
                      <Link
                        href={`/destinations/${country.slug}`}
                        className="text-xs font-semibold text-blue-950 hover:text-amber-900 flex items-center gap-1 transition-colors"
                      >
                        <span>Country Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/#register"
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-[#0a192f] text-amber-100 hover:bg-[#132a4a] transition-colors"
                      >
                        Apply for Intake
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
