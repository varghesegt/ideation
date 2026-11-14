"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe2,
  Search,
  ArrowRight,
  Building2,
  Coins,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
      c.tagline.toLowerCase().includes(search.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || c.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-blue-700" /> Global Higher Education Network
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
              Study Across 25 Destination Countries
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore tuition costs, living expenses, post-study work permits, and accredited universities across North America, the UK, Continental Europe, Asia, and Oceania.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Country Grid */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          {/* Search & Tabs */}
          <div className="space-y-6 mb-12">
            <div className="max-w-xl relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search any country or keyword (e.g. Germany, UK, Australia, OPT)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white shadow-xs font-medium"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    selectedRegion === region
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((country) => (
              <Card
                key={country.slug}
                variant="default"
                className="p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between bg-white"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl">{country.flag}</span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold">
                      {country.region}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {country.name}
                    </h3>
                    <p className="text-xs text-blue-700 font-semibold mt-1">
                      {country.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {country.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Coins className="w-3.5 h-3.5 text-amber-500" /> Avg Tuition:
                      </span>
                      <span className="font-extrabold text-slate-900">
                        {country.avgTuitionINR.split("/")[0]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Post-Study Work:
                      </span>
                      <span className="font-extrabold text-emerald-700">
                        {country.postStudyWork.split("(")[0]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-indigo-600" /> Key Partner Unis:
                      </span>
                      <span className="font-semibold text-slate-800 truncate max-w-[150px]">
                        {country.topUniversities[0]?.name || "Multiple Universities"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destinations/${country.slug}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <span>Full Country Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#register"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
