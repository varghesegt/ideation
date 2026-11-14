"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { COUNTRY_NAME_MAP } from "@/data/new-project-data";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Still exploring");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const paramCountry = searchParams.get("country");
    if (paramCountry && COUNTRY_NAME_MAP[paramCountry.toLowerCase()]) {
      setCountry(COUNTRY_NAME_MAP[paramCountry.toLowerCase()]);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Study abroad enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nStudy area: ${program || "Not specified"}\nMessage: ${message || "Not specified"}`
    );
    setStatus("Opening your email app with your enquiry details.");
    setTimeout(() => {
      window.location.href = `mailto:info@ideationedu.com?subject=${subject}&body=${body}`;
    }, 400);
  };

  const countries = [
    "Still exploring",
    "United Kingdom",
    "Canada",
    "Australia",
    "United States",
    "Ireland",
    "New Zealand",
    "Singapore",
    "Germany",
    "France",
    "Netherlands",
    "United Arab Emirates",
    "Spain",
    "Italy",
    "Switzerland",
    "Austria",
    "Belgium",
    "Hungary",
    "Finland",
    "Czech Republic",
    "Portugal",
    "Poland",
    "Latvia",
    "Malaysia",
    "Japan",
    "Timor-Leste",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit} className="card-clean p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-[#172b43] mb-1.5">
            Your name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold text-[#172b43] mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91"
            className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-[#172b43] mb-1.5">
            Email address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
          />
        </div>

        <div>
          <label htmlFor="contact-country" className="block text-xs font-bold text-[#172b43] mb-1.5">
            Country of interest
          </label>
          <select
            id="contact-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-program" className="block text-xs font-bold text-[#172b43] mb-1.5">
          What would you like to study?
        </label>
        <input
          id="contact-program"
          type="text"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          placeholder="Course or subject area"
          className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-[#172b43] mb-1.5">
          A little about your plans
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your current studies, preferred intake, or questions"
          className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db] resize-y"
        />
      </div>

      <div className="pt-2 space-y-3">
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
        >
          <span>Prepare my enquiry</span>
          <span>↗</span>
        </button>

        {status && (
          <p className="text-xs text-[#1a56db] font-semibold" aria-live="polite">
            {status}
          </p>
        )}

        <p className="text-[11px] text-[#64748b] leading-normal">
          Submitting will open your email app so you can review and send your enquiry.
        </p>
        <p className="text-[11px] text-[#64748b] leading-normal">
          Your details will be used to respond to this enquiry. Do not include passport, financial or other sensitive documents in this form.
        </p>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#172b43] font-sans-body">
      <Navbar />

      {/* Page Hero */}
      <section className="py-16 sm:py-20 bg-radial-[at_84%_4%] from-[#dfeaff] via-[#edf3ff] to-[#f7f9fc] border-b border-[#dce4ef]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="eyebrow-accent">Your plans start with a conversation</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.06] tracking-[-0.07em] text-[#172b43]">
              We’d love to hear what you’re dreaming of.
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed max-w-2xl">
              Share a little about your plans. Our team can help you understand the next steps and the options worth exploring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Split */}
      <section id="enquiry" className="py-16 sm:py-24">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="eyebrow-accent">Send us a note</div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#172b43] mt-2 mb-3">
                  Let’s talk about your study abroad plans.
                </h2>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Tell us where you are in your journey. A member of our team will be able to follow up using the details you provide.
                </p>
              </div>

              {/* Photo Panel */}
              <div
                className="h-[220px] rounded-[5px] bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=85')`,
                }}
              />

              {/* Office Card */}
              <div className="card-clean p-6 space-y-2.5">
                <h3 className="font-display font-bold text-lg text-[#172b43]">
                  Ideation Education Services
                </h3>
                <p className="text-xs text-[#1a56db]">
                  <a href="mailto:info@ideationedu.com" className="hover:underline">
                    info@ideationedu.com
                  </a>
                </p>
                <p className="text-xs text-[#64748b] leading-relaxed">
                  Manapparai · Tiruchirappalli<br />
                  Tamil Nadu, India
                </p>
                <p className="text-[11px] text-[#7385a3]">Appointments by arrangement</p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="card-clean p-8 text-center text-sm text-[#64748b]">Loading form...</div>}>
                <ContactFormInner />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
