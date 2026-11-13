"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe2,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Briefcase,
  Coins,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              Global Higher Education Network
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Study Across 25 Destination Countries
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
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
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none bg-white shadow-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    selectedRegion === region
                      ? "bg-blue-600 text-white shadow-md"
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
                className="p-8 rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl">{country.flag}</span>
                    <Badge variant="primary" size="sm">
                      {country.region}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {country.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-1">
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
                      <span className="font-bold text-slate-900">
                        {country.avgTuitionINR.split("/")[0]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-blue-500" /> Post-Study Work:
                      </span>
                      <span className="font-bold text-emerald-600">
                        {country.postStudyWork.split("(")[0]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-indigo-500" /> Key Partner Unis:
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
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Full Country Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#register"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
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
