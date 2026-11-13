import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ConsultationForm } from "@/components/forms/consultation-form";

export const metadata: Metadata = {
  title: "Contact Us | Ideation Edu Services",
  description:
    "Get in touch with Ideation Edu Services. Headquarters in Tiruchirappalli, Tamil Nadu with pan-India virtual student counseling.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              We&apos;re Here to Help
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Get in Touch with Our Advisors
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Have questions about foreign university applications, fees, scholarships, or visas? Reach out to our team in Tiruchirappalli or schedule a virtual session from anywhere in India.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Reach Our Headquarters
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ideation Edu Services (OPC) Private Limited serves students across Tamil Nadu (Trichy, Chennai, Coimbatore, Madurai, Salem) and nationwide.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Office Location</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Ideation Edu Services Headquarters<br />
                      Manapparai / Tiruchirappalli (Trichy),<br />
                      Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Official Email</h4>
                    <a
                      href="mailto:info@ideationedu.com"
                      className="text-xs font-semibold text-blue-600 hover:underline block mt-1"
                    >
                      info@ideationedu.com
                    </a>
                    <a
                      href="mailto:ideationeduservices@gmail.com"
                      className="text-xs text-slate-500 hover:underline block mt-0.5"
                    >
                      ideationeduservices@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Counseling Hours</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST<br />
                      Sunday: By Appointment (Virtual Sessions Available)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <span>💬 Instant WhatsApp Assistance</span>
                </div>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  Need an urgent answer regarding upcoming intake deadlines or visa requirements? Connect with our desk directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Ideation%20Edu%20Services,%20I%20have%20an%20inquiry%20regarding%20studying%20abroad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
