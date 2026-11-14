"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Building2,
  GraduationCap,
  Coins,
  ArrowRight,
  Filter,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DESTINATIONS } from "@/data/destinations";

export default function UniversityMatcherPage() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [search, setSearch] = useState("");

  // Gather all universities from all 25 destinations
  const allUnis = DESTINATIONS.flatMap((c) =>
    c.topUniversities.map((u) => ({
      ...u,
      country: c.name,
      countryFlag: c.flag,
      countrySlug: c.slug,
      avgTuition: c.avgTuitionINR,
      postStudyWork: c.postStudyWork,
    }))
  );

  const filteredUnis = allUnis.filter((u) => {
    const matchesCountry =
      selectedCountry === "All" || u.country === selectedCountry;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.popularCourses.some((course) =>
        course.toLowerCase().includes(search.toLowerCase())
      );
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-blue-700" /> Institutional Course Directory
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Global University & Course Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore 500+ world-class partner universities across 25 countries. Filter by country, field of study, and global ranking with 100% free application support from Ideation counselors.
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filters */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="space-y-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by university name or program (e.g. Stanford, Robotics, MBA, Data Science)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm outline-none bg-white shadow-xs focus:border-blue-600 focus:ring-2 focus:ring-blue-100 font-medium"
                />
              </div>

              <div className="md:col-span-4">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm outline-none bg-white shadow-xs focus:border-blue-600 font-medium"
                >
                  <option value="All">🌍 All 25 Countries</option>
                  {DESTINATIONS.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-slate-700">Showing {filteredUnis.length} accredited universities</span>
              <span className="text-emerald-700 font-semibold">✓ 100% Free Application Processing with Ideation</span>
            </div>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnis.map((uni, index) => (
              <Card
                key={index}
                variant="default"
                className="p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{uni.countryFlag}</span>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                      {uni.ranking}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {uni.name}
                    </h3>
                    <Link
                      href={`/destinations/${uni.countrySlug}`}
                      className="text-xs font-bold text-blue-700 hover:underline mt-1 inline-block"
                    >
                      {uni.country}
                    </Link>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Post-Study Work:</span>
                      <span className="font-bold text-emerald-700">{uni.postStudyWork.split("(")[0]}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Avg Tuition:</span>
                      <span className="font-bold text-slate-900">{uni.avgTuition.split("/")[0]}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                      Popular Degree Tracks:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.popularCourses.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destinations/${uni.countrySlug}`}
                    className="text-xs font-black text-blue-700 hover:text-blue-900"
                  >
                    Country Details →
                  </Link>

                  <Link href="/#register">
                    <Button size="sm" variant="primary">
                      Apply via Ideation
                    </Button>
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
