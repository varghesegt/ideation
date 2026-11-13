"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, CheckCircle, ShieldCheck } from "lucide-react";
import { TEAM_MEMBERS, TeamMemberData } from "@/data/team";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TeamSection() {
  const [activeTab, setActiveTab] = useState<"founding" | "ceo">("founding");

  const filteredMembers =
    activeTab === "founding"
      ? TEAM_MEMBERS.filter((m) => m.category === "founding")
      : TEAM_MEMBERS.filter((m) => m.category === "ceo");

  return (
    <div className="space-y-10">
      {/* Tab Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
          <button
            onClick={() => setActiveTab("founding")}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === "founding"
                ? "bg-white text-blue-700 shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Founding Team
          </button>
          <button
            onClick={() => setActiveTab("ceo")}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              activeTab === "ceo"
                ? "bg-white text-blue-700 shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            CEO & Strategic Advisor
          </button>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div
        className={`grid gap-8 ${
          activeTab === "founding"
            ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
            : "grid-cols-1 max-w-2xl mx-auto"
        }`}
      >
        {filteredMembers.map((member) => (
          <Card
            key={member.name}
            variant="default"
            className="p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/50"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-lg flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <Badge variant="primary" size="sm" className="mb-1">
                    {member.role}
                  </Badge>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-blue-600 font-semibold">
                    Ideation Edu Services
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {member.bio}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Credentials & Expertise:
                </p>
                {member.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700">
                  Direct Student Mentor
                </span>
              </div>
              <a
                href={`mailto:${member.email || "info@ideationedu.com"}`}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" /> Contact Advisor
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
