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
  Building2,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ConsultationForm } from "@/components/forms/consultation-form";

export const metadata: Metadata = {
  title: "Admissions Directorate & Inquiries | Ideation Edu Services",
  description:
    "Direct contact channels for Ideation Edu Services (OPC) Private Limited. Reach our counseling center in Tiruchirappalli, Tamil Nadu or connect for virtual pan-India admissions advisory.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#ded9cd] bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute inset-0 bg-academic-mesh opacity-60 pointer-events-none" />
        <Container size="large">
          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-academic text-xs font-medium">
              <MessageSquare className="w-3.5 h-3.5 text-amber-800" />
              <span>Admissions Advisory & Direct Correspondence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight font-editorial text-slate-950 leading-[1.12]">
              Connect with Our Senior Counseling Directorate
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-light max-w-3xl">
              Whether you require preliminary profile assessment, intake deadline verification, or financial documentation reviews, our advisory team in Tiruchirappalli is available via in-person appointment or secure virtual conference.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid */}
      <section className="py-20">
        <Container size="large">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  Headquarters & Offices
                </span>
                <h2 className="text-3xl font-normal font-editorial text-slate-950">
                  Official Communication Channels
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Ideation Edu Services (OPC) Private Limited provides dedicated support across Tamil Nadu and for students pan-India.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="card-editorial p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 text-amber-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Headquarters & Advisory Center</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Ideation Edu Services (OPC) Private Limited<br />
                      Manapparai / Tiruchirappalli (Trichy),<br />
                      Tamil Nadu - 621306, India.
                    </p>
                  </div>
                </div>

                <div className="card-editorial p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 text-amber-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Direct Admissions Helpline</h4>
                    <a
                      href="tel:+919488553344"
                      className="text-xs font-bold text-blue-900 hover:underline block mt-1"
                    >
                      +91 94885 53344
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-light">
                      Monday to Saturday: 9:30 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>

                <div className="card-editorial p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 text-amber-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Electronic Correspondence</h4>
                    <a
                      href="mailto:info@ideationedu.com"
                      className="text-xs font-semibold text-blue-900 hover:underline block mt-1"
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

                <div className="card-editorial p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 text-amber-200 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Admissions Office Hours</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      In-Person Consultations: Mon–Sat, 9:30 AM – 6:30 PM<br />
                      Virtual Counseling: Prior booking required for evening and Sunday slots.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="card-editorial p-6 border-l-4 border-l-emerald-600 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Expedited WhatsApp Advisory Desk</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  For immediate queries regarding specific university application deadlines or visa prerequisites, reach out directly to our counseling team.
                </p>
                <div>
                  <a
                    href="https://wa.me/919488553344?text=Hi%20Ideation%20Edu%20Services,%20I%20would%20like%20to%20inquire%20about%20university%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 text-white font-medium text-xs hover:bg-emerald-900 transition-colors shadow-xs"
                  >
                    <span>Connect on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
