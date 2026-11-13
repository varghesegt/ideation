import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Coins,
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DESTINATIONS, DestinationData } from "@/data/destinations";

export async function generateStaticParams() {
  return DESTINATIONS.map((c) => ({
    country: c.slug,
  }));
}

interface CountryPageProps {
  params: Promise<{ country: string }>;
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { country: slug } = await params;
  const country = DESTINATIONS.find((c) => c.slug === slug);
  if (!country) return { title: "Country Not Found" };

  return {
    title: `Study in ${country.name} | Universities, Costs & Visa Guide | Ideation Edu`,
    description: `Complete guide to studying in ${country.name}: tuition fees (${country.avgTuitionINR}), living costs, top universities, ${country.postStudyWork} post-study work rights, and visa rules.`,
  };
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { country: slug } = await params;
  const country = DESTINATIONS.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-4xl space-y-4">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 hover:text-white mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All 25 Destinations
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-5xl sm:text-6xl">{country.flag}</span>
              <div>
                <Badge variant="glass" size="md">
                  {country.region}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-1">
                  Study in {country.name}
                </h1>
              </div>
            </div>

            <p className="text-lg text-blue-100 font-medium leading-relaxed">
              {country.tagline}
            </p>
            <p className="text-sm text-blue-200/90 max-w-3xl leading-relaxed">
              {country.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Key Facts Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <Container size="large">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Average Tuition
              </span>
              <p className="text-base sm:text-lg font-extrabold text-blue-700">
                {country.avgTuitionINR}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Average Living Cost
              </span>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                {country.avgLivingCostINR}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Post-Study Work
              </span>
              <p className="text-base sm:text-lg font-extrabold text-emerald-600">
                {country.postStudyWork.split("(")[0]}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Work During Study
              </span>
              <p className="text-base sm:text-lg font-extrabold text-slate-900">
                {country.workWhileStudy}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep-Dive Grid */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-10">
              {/* Key Advantages */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Why Study in {country.name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {country.keyAdvantages.map((adv, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 leading-snug">
                        {adv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Partner Universities */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Top Universities in {country.name}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600">
                    Official Ideation Partners
                  </span>
                </div>

                <div className="space-y-4">
                  {country.topUniversities.map((uni, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-slate-900">
                          {uni.name}
                        </h4>
                        {uni.ranking && (
                          <Badge variant="primary" size="sm">
                            {uni.ranking}
                          </Badge>
                        )}
                      </div>

                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Popular Programs:
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {uni.popularCourses.map((c, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intakes & Admission Cycles */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Major Intake Cycles in {country.name}:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {country.intakes.map((intake, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
                    >
                      📅 {intake}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visa Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Student Visa Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Processing Time
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {country.visaHighlights.processingTime}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Financial Proof
                    </span>
                    <p className="text-xs text-slate-700">
                      {country.visaHighlights.financialProof}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Language Criteria
                    </span>
                    <p className="text-xs text-slate-700">
                      {country.visaHighlights.languageReq}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Application Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="space-y-1">
                  <Badge variant="primary" size="sm">
                    100% Free Application
                  </Badge>
                  <h4 className="text-xl font-extrabold text-slate-900">
                    Apply to {country.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Get free profile evaluation, university shortlists, and visa guidance.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>98% Visa Success Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Direct Partner University Fast-Track</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Scholarship & Loan Assistance</span>
                  </div>
                </div>

                <Link href="/#register" className="block">
                  <Button fullWidth size="lg" className="font-bold">
                    Book Free Counseling for {country.name}
                  </Button>
                </Link>

                <p className="text-[11px] text-center text-slate-400">
                  Official partner of leading institutions in {country.name}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
