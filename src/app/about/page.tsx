import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  MapPin,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: "About Us & Leadership | Ideation Edu Services",
  description:
    "Learn about Ideation Edu Services, founded in 2015 to empower Indian students to study abroad. Discover our mission, values, leadership team, and university partnerships.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-blue-700" /> About Our Institution
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
              Empowering International Education Dreams Since 2015
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Ideation Edu Services (OPC) Private Limited was founded on a simple principle: every student deserves transparent, ethical, and ambitious guidance to study at the world&apos;s best universities without predatory agency charges.
            </p>
          </div>
        </Container>
      </section>

      {/* Origin Story & Mission */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-blue-700" /> Our Origin & Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                From Tiruchirappalli to 25 Countries Worldwide
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Started in 2015 in Tamil Nadu, Ideation Edu Services was born out of observing students fall victim to predatory agencies charging exorbitant hidden fees while pushing students toward substandard foreign institutions.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We pioneered a 100% free, transparent counseling model backed by direct official tie-ups with over 500 accredited universities across the US, UK, Canada, Australia, and Continental Europe. Over the last decade, we have successfully guided more than 1,000 students into global careers.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl font-black text-blue-800">10+ Years</p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">Excellence in Global Admissions</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <p className="text-2xl font-black text-emerald-700">98%</p>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">First-Time Visa Approval Rate</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white border border-slate-200 text-slate-900 p-8 sm:p-10 shadow-xl space-y-6">
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Our Core Pillars of Service
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-black flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-900">100% Free & Transparent Guidance</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        We never charge students for advisory, profile reviews, or application submissions. Direct university partnerships keep our counsel ethical.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-black flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-900">Student-First University Matching</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        We match institutions strictly according to student capability, long-term ROI, and career goals rather than agency quotas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-black flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-900">Comprehensive Pre- & Post-Arrival Care</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        From airport landing and student accommodation to part-time job tips and alumni networking, we stand by students until settlement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership Team */}
      <Section spacing="lg" bg="alt">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider inline-block">
              Leadership & Mentors
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Meet Our Executive Leadership
            </h2>
            <p className="text-slate-600 text-base">
              Hands-on guidance from industry veterans committed to your personal academic and career success.
            </p>
          </div>

          <TeamSection />
        </Container>
      </Section>

      {/* Call to Action */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white border border-blue-200 p-8 md:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Ready to Discuss Your Study Abroad Future?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              Book a free counseling call with Dr. Stanley, Mrs. Rameeza, or one of our certified international education advisors today.
            </p>
            <div className="pt-2">
              <Link href="/#register">
                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-600/20 cursor-pointer transition-all inline-flex items-center gap-2">
                  <span>Book Free Consultation Now</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
