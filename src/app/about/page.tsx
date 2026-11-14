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
  Landmark,
  FileCheck2,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: "Institutional Heritage & Leadership | Ideation Edu Services",
  description:
    "Learn about Ideation Edu Services (OPC) Private Limited, founded in 2015 to provide ethical, non-predatory, and rigorous admissions counsel for Indian students seeking top global universities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 border-b border-[#ded9cd] bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-academic-mesh opacity-60 pointer-events-none" />
        <Container size="large">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-academic text-xs font-medium">
              <Landmark className="w-3.5 h-3.5 text-amber-800" />
              <span>Institutional Profile & Academic Heritage</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-editorial text-slate-950 leading-[1.12]">
              A Decade of Principled Stewardship in Global Higher Education
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light max-w-3xl">
              Founded in 2015 in Tiruchirappalli, Ideation Edu Services (OPC) Private Limited was established to replace commercial agent salesmanship with academic mentorship, transparent university advocacy, and zero-compromise student safety.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Ethos & History */}
      <section className="py-20 border-b border-[#ded9cd]">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                Origins & Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal font-editorial text-slate-950 leading-tight">
                From Central Tamil Nadu to the World’s Leading Research Campuses
              </h2>
              
              <div className="space-y-4 text-slate-700 leading-relaxed text-base font-normal">
                <p>
                  In 2015, Dr. Stanley D. Isaac and Mrs. Rameeza Stanley Isaac observed that aspiring students across Tier-2 and Tier-3 Indian cities were routinely steered toward low-tier private foreign institutions by transactional brokers chasing high agent commissions.
                </p>
                <p>
                  Ideation Edu Services was founded on the fundamental principle that higher education counsel must function as an academic fiduciary. Every student is evaluated strictly on merit, financial feasibility, and career trajectory, ensuring that applications are lodged with accredited, research-intensive, and career-advancing global universities.
                </p>
                <p>
                  Today, having advised over 1,000 successful scholars across 25 destination countries, Ideation continues to uphold its founding charter: 100% free consultation, direct university articulation, and absolute transparency in visa and financial compliance.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#ded9cd]">
                <div>
                  <p className="text-3xl sm:text-4xl font-normal font-editorial text-blue-950">2015</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Year Established</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-normal font-editorial text-blue-950">1,000+</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">Scholars Placed</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-normal font-editorial text-blue-950">98%</p>
                  <p className="text-xs text-slate-600 mt-1 font-medium">First-Time Visa Rate</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card-editorial p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 pb-3 border-b border-[#ded9cd]">
                  <Scale className="w-4 h-4 text-amber-800" />
                  <span>The Ideation Transparency Charter</span>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 text-amber-200 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Zero Student Advisory Surcharges</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        We never charge students for advisory sessions, document audits, or university applications. Direct institutional partnerships sustain our counsel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 text-amber-200 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Student-Led Institutional Matching</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Programs are shortlisted based solely on the applicant’s academic profile, post-study work regulations, and long-term economic return.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-950 text-amber-200 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Pre- & Post-Arrival Safety Continuity</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Guidance extends beyond visa grant to secured student housing, compliant forex transfers, blocked accounts, and on-campus arrival briefings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ded9cd]">
                  <div className="p-4 rounded-xl bg-[#faf8f5] border border-[#ded9cd] text-xs text-slate-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Corporate Incorporation:</span> Registered with the Ministry of Corporate Affairs (MCA), Government of India as Ideation Edu Services (OPC) Private Limited, Tiruchirappalli, Tamil Nadu.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-20 border-b border-[#ded9cd] bg-[#f5f2eb]">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="inline-block px-3 py-1 rounded-full badge-academic text-xs font-medium">
              Academic Directorship & Counseling Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-editorial text-slate-950">
              Meet Our Executive Leadership
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto font-light">
              Personalized mentorship from experienced educators dedicated to student integrity and academic advancement.
            </p>
          </div>

          <TeamSection />
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <Container size="large">
          <div className="card-editorial p-10 md:p-16 text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Admissions Session Booking
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-editorial text-slate-950">
              Begin Your University Advisory Assessment
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light">
              Connect directly with our senior counseling faculty in Tiruchirappalli or schedule a secure virtual advisory session from anywhere in India.
            </p>
            <div className="pt-2">
              <Link href="/#register">
                <button className="px-8 py-3.5 rounded-xl bg-[#0a192f] hover:bg-[#132a4a] text-amber-100 font-semibold text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm">
                  <span>Schedule Consultation</span>
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
