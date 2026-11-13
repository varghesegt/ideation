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
  title: "About Us | Ideation Edu Services",
  description:
    "Learn about Ideation Edu Services, founded in 2015 to empower Indian students to study abroad. Discover our mission, values, leadership team, and university partnerships.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              About Our Company
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Empowering International Education Dreams Since 2015
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Ideation Edu Services (OPC) Private Limited was founded on a simple principle: every student deserves transparent, ethical, and ambitious guidance to study at the world&apos;s best universities.
            </p>
          </div>
        </Container>
      </section>

      {/* Origin Story & Mission */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                From Tiruchirappalli to 25 Countries Worldwide
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Started in 2015 in Tamil Nadu, Ideation Edu Services was born out of observing students fall victim to predatory agencies charging exorbitant hidden fees while pushing students toward substandard foreign colleges.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                We pioneered a 100% free, transparent counseling model backed by direct official tie-ups with over 500 accredited universities across the US, UK, Canada, Australia, and Continental Europe. Over the last decade, we have successfully guided more than 1,000 students into global careers.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl font-extrabold text-blue-700">10+ Years</p>
                  <p className="text-xs text-slate-600 mt-1">Excellence in Global Admissions</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <p className="text-2xl font-extrabold text-emerald-700">98%</p>
                  <p className="text-xs text-slate-600 mt-1">First-Time Visa Approval Rate</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 shadow-2xl space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">
                  Our Core Pillars of Service
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">100% Free & Transparent Guidance</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        We never charge students for advisory, profile reviews, or application submissions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">Student-First University Matching</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        We match institutions strictly according to student capability, long-term ROI, and career goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-white">Comprehensive Post-Arrival Support</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        From airport landing and student accommodation to part-time job tips and alumni networking.
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
            <Badge variant="primary" size="md">
              Leadership & Mentors
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Executive Leadership
            </h2>
            <p className="text-slate-600 text-base">
              Hands-on guidance from industry veterans committed to your personal academic success.
            </p>
          </div>

          <TeamSection />
        </Container>
      </Section>

      {/* Call to Action */}
      <Section spacing="lg" bg="gradient">
        <Container size="large">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Discuss Your Study Abroad Future?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Book a free counseling call with Dr. Stanley, Mrs. Rameeza, or one of our certified international education advisors today.
            </p>
            <div className="pt-2">
              <Link href="/#register">
                <Button
                  size="xl"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold shadow-2xl"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Free Consultation Now
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
