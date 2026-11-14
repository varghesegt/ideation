"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Lock,
} from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    interest: "Computer Science & IT",
    destination: "United States",
    preferredIntake: "Fall 2026",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, "").length < 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  if (status === "success") {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-emerald-200 text-center space-y-4 animate-fade-in text-slate-900">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">
          Consultation Request Confirmed!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>! A senior overseas education advisor from Ideation Edu Services will reach out to you at <span className="font-bold text-slate-900">{formData.mobile}</span> within 24 hours.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/919488553344?text=Hi%20Ideation%20Edu%20Services,%20I%20am%20${encodeURIComponent(formData.fullName)}%20and%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(formData.destination)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors gap-2"
          >
            <span>💬 Chat on WhatsApp Now</span>
          </a>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                email: "",
                mobile: "",
                interest: "Computer Science & IT",
                destination: "United States",
                preferredIntake: "Fall 2026",
              });
            }}
            className="px-6 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200 space-y-5 text-slate-900"
    >
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" /> Book 1-on-1 Free Session
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Start Your Study Abroad Journey
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Personalized counseling based on your academic profile, budget & dreams.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Anandha Krishnan"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 bg-white"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="name@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 bg-white"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
              Mobile Number (WhatsApp) <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 bg-white"
            />
            {errors.mobile && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.mobile}
              </p>
            )}
          </div>
        </div>

        {/* Area of Interest & Target Degree */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
              Area of Interest
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 outline-none transition-all bg-white"
            >
              <option value="Computer Science & IT">Computer Science & AI / IT</option>
              <option value="Data Science & Business Analytics">Data Science & Analytics</option>
              <option value="Engineering & Robotics">Engineering (Mech, Civil, ECE)</option>
              <option value="Business & MBA">Business Administration / MBA</option>
              <option value="Healthcare & Biotechnology">Medicine, Bio & Health Sciences</option>
              <option value="Hospitality & Tourism">Hospitality & Luxury Management</option>
              <option value="Design & Architecture">Design, Media & Architecture</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
              Destination of Choice
            </label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm font-medium text-slate-900 outline-none transition-all bg-white"
            >
              {DESTINATIONS.map((c) => (
                <option key={c.slug} value={c.name}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Target Intake */}
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-1.5">
            Target Intake
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {["Fall 2026", "Spring 2027", "Fall 2027"].map((intake) => (
              <button
                type="button"
                key={intake}
                onClick={() => setFormData({ ...formData, preferredIntake: intake })}
                className={`py-2.5 px-3 text-xs font-extrabold rounded-xl border text-center transition-all cursor-pointer ${
                  formData.preferredIntake === intake
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {intake}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
      >
        <span>Submit for Free Consultation</span>
        <Send className="w-4 h-4 text-white" />
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium pt-1">
        <Lock className="w-3.5 h-3.5 text-emerald-600" />
        <span>Your information is 100% confidential. Zero spam guarantee.</span>
      </div>
    </form>
  );
}
