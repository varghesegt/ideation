import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
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
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              Complete End-to-End Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              The 8-Stage Study Abroad Roadmap
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Every step of your international journey is meticulously mapped, executed, and supervised by certified counselors with zero hidden fees.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid with deep details */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="space-y-12">
            {SERVICES.map((s, index) => (
              <div
                key={s.slug}
                id={s.slug}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Step indicator & overview */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                      {s.stepNumber}
                    </span>
                    <Badge variant="primary" size="sm">
                      Stage {s.stepNumber}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {s.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Typical Timeline: {s.timeline}</span>
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.fullDesc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      <span>Read Deep-Dive Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables & Benefits */}
                <div className="lg:col-span-8 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-100 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What We Deliver in This Stage:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/60 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="italic">&ldquo;{s.whyCrucial}&rdquo;</span>
                    <Link
                      href="/#register"
                      className="font-bold text-blue-600 hover:underline flex-shrink-0 ml-4"
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
            <h2 className="text-3xl font-extrabold text-slate-900">
              Get Started with Your Free Profile Evaluation
            </h2>
            <p className="text-slate-600">
              Speak directly with our senior counselors. Receive a customized university shortlist tailored to your budget and background.
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
