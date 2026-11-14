"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { DESTINATIONS_25 } from "@/data/new-project-data";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCountry?: string;
}

export function LeadModal({ isOpen, onClose, initialCountry = "" }: LeadModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(initialCountry);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (initialCountry) {
      setCountry(initialCountry);
    }
  }, [initialCountry]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Study abroad enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${country || "Still exploring"}\nStudy plans: ${message || "Not specified"}`
    );
    setStatus("Opening your email app to send your enquiry…");
    setTimeout(() => {
      window.location.href = `mailto:info@ideationedu.com?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b1d1d]/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#f7f9fc] w-full max-w-[520px] rounded-md border border-[#dce4ef] p-7 sm:p-9 shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-[#64748b] hover:text-[#172b43] text-2xl p-1 transition-colors leading-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#1a56db] flex items-center gap-2 mb-2">
          <span className="w-5 h-[1px] bg-[#f2a900]" />
          <span>A good place to begin</span>
        </div>

        <h2
          id="modal-title"
          className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#172b43] mb-2"
        >
          Let’s talk about your plans.
        </h2>

        <p className="text-xs sm:text-sm text-[#64748b] mb-6 leading-relaxed">
          Share a few details and our team can get back to you for a first conversation.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-semibold text-[#172b43] mb-1.5">
                Your name *
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#172b43] mb-1.5">
                Phone or WhatsApp *
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91"
                className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label htmlFor="modal-email" className="block text-xs font-semibold text-[#172b43] mb-1.5">
                Email address *
              </label>
              <input
                id="modal-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
              />
            </div>

            <div>
              <label htmlFor="modal-country" className="block text-xs font-semibold text-[#172b43] mb-1.5">
                Destination of interest
              </label>
              <select
                id="modal-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db]"
              >
                <option value="">Still exploring</option>
                {DESTINATIONS_25.map((d) => (
                  <option key={d.slug} value={d.name}>
                    {d.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="modal-message" className="block text-xs font-semibold text-[#172b43] mb-1.5">
              What would you like to study?
            </label>
            <textarea
              id="modal-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us a little about your plans (optional)"
              className="w-full bg-white border border-[#dce4ef] rounded px-3 py-2.5 text-xs sm:text-sm text-[#172b43] outline-none focus:border-[#1a56db] focus:ring-1 focus:ring-[#1a56db] resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#1a56db] hover:bg-[#1243b4] text-white py-3 px-5 rounded font-semibold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
          >
            <span>Send my details</span>
            <span>↗</span>
          </button>

          {status && (
            <p className="text-xs text-[#1a56db] font-medium text-center pt-1" aria-live="polite">
              {status}
            </p>
          )}

          <p className="text-[11px] text-[#64748b] text-center leading-normal">
            Your details will be used solely to respond to this enquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
