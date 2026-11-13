"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Search, Globe, ArrowRight, ExternalLink } from "lucide-react";
import { DESTINATIONS, DestinationData } from "@/data/destinations";

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CountryModal({ isOpen, onClose }: CountryModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  if (!isOpen) return null;

  const regions = ["All", "Americas", "UK & Ireland", "Europe", "Asia-Pacific & Middle East"];

  const filtered = DESTINATIONS.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-100 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌍</span>
              <h3 className="text-xl font-extrabold text-slate-900">
                All 25 Study Abroad Destinations
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Select a country to explore top universities, costs, post-study work rights, and visa criteria.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-100 space-y-3 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by country name (e.g. Germany, UK, Australia, Singapore)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 text-sm outline-none bg-slate-50/60"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedRegion === region
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Countries List */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={`/destinations/${c.slug}`}
              onClick={onClose}
              className="p-4 rounded-2xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{c.flag}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {c.region}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base">
                  {c.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                  {c.tagline}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 flex items-center justify-between">
          <span>Need help choosing? Our counseling is 100% free.</span>
          <Link
            href="/#register"
            onClick={onClose}
            className="font-bold text-blue-600 hover:underline"
          >
            Speak with an Advisor →
          </Link>
        </div>
      </div>
    </div>
  );
}
