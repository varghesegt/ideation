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
  Check,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Admissions Services & Roadmap | Ideation Edu Services",
  description:
    "Explore Ideation Edu Services' rigorous 8-stage admissions methodology: profile assessment, country selection, university shortlisting, SOP editing, scholarships, and visa compliance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#ded9cd] bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-academic-mesh opacity-60 pointer-events-none" />
        <Container size="large">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-academic text-xs font-medium">
              <Layers className="w-3.5 h-3.5 text-amber-800" />
              <span>Structured Admissions Methodology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-editorial text-slate-950 leading-[1.12]">
              The 8-Stage Overseas Education Protocol
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light max-w-3xl">
              From academic diagnostic and course matching to statement editing, scholarship procurement, and consular preparation — every stage is executed by certified counselors with zero agency surcharges.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container size="large">
          <div className="space-y-12">
            {SERVICES.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="card-editorial p-8 sm:p-10 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Step indicator & overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#0a192f] text-amber-200 font-bold flex items-center justify-center text-base border border-amber-500/20">
                      0{s.stepNumber}
                    </span>
                    <span className="badge-academic px-3 py-0.5 text-xs font-medium">
                      Stage 0{s.stepNumber} of 08
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal font-editorial text-slate-950">
                    {s.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-800" />
                    <span>Average Timeline: {s.timeline}</span>
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    {s.fullDesc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-950 hover:text-amber-900 transition-colors"
                    >
                      <span>Stage Guide & Methodology</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Deliverables & Benefits */}
                <div className="lg:col-span-7 bg-[#faf8f5] rounded-xl p-6 sm:p-7 border border-[#ded9cd] space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-950">
                    Core Stage Deliverables & Audit Points:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#ded9cd] text-xs text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-800 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug font-normal">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#ded9cd] flex items-center justify-between text-xs text-slate-600">
                    <span className="italic font-light">&ldquo;{s.whyCrucial}&rdquo;</span>
                    <Link
                      href="/#register"
                      className="font-semibold text-blue-950 hover:underline flex-shrink-0 ml-4"
                    >
                      Enroll for this Stage →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[#ded9cd] bg-[#f5f2eb]">
        <Container size="large">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <span className="badge-academic px-3.5 py-1 text-xs font-medium inline-block">
              Free Preliminary Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-editorial text-slate-950">
              Initiate Stage 01: Comprehensive Profile Audit
            </h2>
            <p className="text-slate-600 text-base font-light">
              Speak directly with our senior counseling faculty. Receive an unvarnished institutional shortlist aligned with your academic credentials and financial parameters.
            </p>
            <div className="pt-2">
              <Link href="/#register">
                <button className="px-8 py-3.5 rounded-xl bg-[#0a192f] hover:bg-[#132a4a] text-amber-100 font-semibold text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm">
                  <span>Schedule Profile Evaluation</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
