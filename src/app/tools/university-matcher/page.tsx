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
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              Institutional Database
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Global University Matcher
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Explore 500+ world-class partner universities across 25 countries. Filter by country, field of study, and global ranking.
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
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm outline-none bg-white shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="md:col-span-4">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-sm outline-none bg-white shadow-sm focus:border-blue-600"
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
              <span>Showing {filteredUnis.length} partner universities</span>
              <span>100% Free Application Processing with Ideation</span>
            </div>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUnis.map((uni, index) => (
              <Card
                key={index}
                variant="default"
                className="p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{uni.countryFlag}</span>
                    {uni.ranking && (
                      <Badge variant="primary" size="sm">
                        {uni.ranking}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {uni.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-0.5">
                      {uni.country}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                    <div className="text-slate-500 font-medium">Popular Courses:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {uni.popularCourses.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs space-y-1 text-slate-600">
                    <div className="flex justify-between">
                      <span>Tuition Est:</span>
                      <span className="font-semibold text-slate-900">{uni.avgTuition.split("/")[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Post-Study Work:</span>
                      <span className="font-semibold text-emerald-600">{uni.postStudyWork.split("(")[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/destinations/${uni.countrySlug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    Country Guide →
                  </Link>

                  <Link
                    href="/#register"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Apply Free
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
