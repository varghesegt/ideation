import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | 8-Stage Overseas Education Roadmap",
  description:
    "Explore Ideation Edu Services' end-to-end study abroad process: profile assessment, country selection, university shortlisting, SOP editing, scholarships, and visa processing.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-blue-700" /> Complete End-to-End Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
              The 8-Stage Study Abroad Roadmap
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every step of your international journey is meticulously mapped, executed, and supervised by certified counselors with zero hidden fees.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid with deep details */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="space-y-12">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Step indicator & overview */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black flex items-center justify-center text-lg shadow-md">
                      {s.stepNumber}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
                      Stage {s.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Typical Timeline: {s.timeline}</span>
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.fullDesc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900"
                    >
                      <span>Read Deep-Dive Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables & Benefits */}
                <div className="lg:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    What We Deliver in This Stage:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-medium">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                    <span className="italic">&ldquo;{s.whyCrucial}&rdquo;</span>
                    <Link
                      href="/#register"
                      className="font-bold text-blue-700 hover:underline flex-shrink-0 ml-4"
                    >
                      Book This Service →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="lg" bg="alt">
        <Container size="large">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-black text-slate-900">
              Get Started with Your Free Profile Evaluation
            </h2>
            <p className="text-slate-600">
              Speak directly with our senior counselors. Receive a customized university shortlist tailored to your budget and academic goals.
            </p>
            <Link href="/#register">
              <Button size="xl" variant="primary" className="font-bold">
                Schedule Free Counseling Call
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
