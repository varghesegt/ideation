import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/services";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Ideation Edu Services`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
            </Link>

            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs">
                {service.stepNumber}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
                Stage {service.stepNumber} of 8
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {service.shortDesc}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Deep Dive */}
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">
                  Comprehensive Overview
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-4">
                <h3 className="text-xl font-black text-slate-900">
                  Deliverables & Execution Checklist
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Crucial */}
              <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Why This Stage is Crucial for Admissions Success:
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.whyCrucial}
                </p>
              </div>

              {/* FAQs */}
              {service.faq && service.faq.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900">
                    Frequently Asked Questions About This Stage
                  </h3>
                  <div className="space-y-3">
                    {service.faq.map((f, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs"
                      >
                        <h5 className="font-bold text-slate-900 text-base flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{f.q}</span>
                        </h5>
                        <p className="text-sm text-slate-600 leading-relaxed pl-6">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Consultation Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider inline-block">
                    100% Free Service
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-2">
                    Need Help With {service.title}?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Schedule a 1-on-1 session with our senior counseling team.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Turnaround Time: {service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Direct Senior Counselor Review</span>
                  </div>
                </div>

                <Link href="/#register" className="block">
                  <Button fullWidth size="lg" className="font-bold">
                    Schedule Free Consultation
                  </Button>
                </Link>

                <p className="text-[11px] text-center text-slate-400">
                  Zero service charges · No commitments
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
