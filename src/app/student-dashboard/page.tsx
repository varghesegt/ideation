"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare,
  Upload,
  User,
  ShieldCheck,
  Send,
  Building2,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function StudentDashboardPage() {
  const [messages, setMessages] = useState([
    {
      sender: "Rameeza Stanley Isaac (Director & Counselor)",
      time: "Today, 11:20 AM",
      text: "Congratulations Anandha! We received your official admit letter from Technical University of Munich (TUM). I have reviewed the conditional requirements—please upload your final degree certificate so we can proceed with your blocked account setup.",
      isCounselor: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        time: "Just now",
        text: newMessage,
        isCounselor: false,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-20">
        <Container size="large">
          <div className="space-y-8">
            {/* Top Welcome Bar */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="glass" size="sm">
                    Student Portal
                  </Badge>
                  <span className="text-xs text-blue-200">ID: IDE-2026-849</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Welcome back, Anandha Krishnan 👋
                </h1>
                <p className="text-xs text-blue-200">
                  Target: Germany · M.Sc. Informatics / Computer Science (Winter 2026)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg">
                  RS
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-blue-200">
                    Assigned Senior Mentor
                  </p>
                  <p className="text-sm font-bold text-white">
                    Rameeza Stanley Isaac
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    ● Active on Counselor Desk
                  </p>
                </div>
              </div>
            </div>

            {/* Visual 8-Stage Progress Tracker */}
            <Card className="p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Overall Application Progress
                  </h3>
                  <p className="text-xs text-slate-500">
                    Stage 5 of 8: Offer Letter Confirmation & Verification
                  </p>
                </div>
                <span className="text-lg font-extrabold text-blue-600">65% Completed</span>
              </div>

              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full w-[65%] rounded-full transition-all duration-500" />
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-2 text-center text-[10px] font-semibold text-slate-600">
                <span className="text-emerald-600">01 Profile ✓</span>
                <span className="text-emerald-600">02 Country ✓</span>
                <span className="text-emerald-600">03 Shortlist ✓</span>
                <span className="text-emerald-600">04 Applied ✓</span>
                <span className="text-blue-600 font-bold bg-blue-50 py-1 rounded">05 Offers ⏳</span>
                <span className="text-slate-400">06 Visa</span>
                <span className="text-slate-400">07 Departure</span>
                <span className="text-slate-400">08 Landing</span>
              </div>
            </Card>

            {/* Main 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: University Applications Pipeline */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    Your University Applications (3 Active)
                  </h3>
                  <Badge variant="primary" size="sm">
                    Winter 2026 Intake
                  </Badge>
                </div>

                {/* University Card 1: TUM (Admit) */}
                <div className="p-6 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇩🇪</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">
                          Technical University of Munich (TUM)
                        </h4>
                        <p className="text-xs text-slate-500">
                          M.Sc. in Informatics (Computer Science) · Munich, Germany
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      🎉 Admit Offer Received
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs text-emerald-900">
                    <span>Tuition Status: <strong>Zero Tuition (Public University)</strong></span>
                    <button className="font-bold text-emerald-700 hover:underline">
                      Download Official Offer Letter (.pdf)
                    </button>
                  </div>
                </div>

                {/* University Card 2: RWTH Aachen (Review) */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇩🇪</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">
                          RWTH Aachen University
                        </h4>
                        <p className="text-xs text-slate-500">
                          M.Sc. in Computer Engineering · Aachen, Germany
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                      ⏳ Under Departmental Review
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 flex justify-between">
                    <span>Application ID: RWTH-2026-9041</span>
                    <span>Expected Decision: Within 2 weeks</span>
                  </div>
                </div>

                {/* University Card 3: TU Darmstadt */}
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🇩🇪</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">
                          TU Darmstadt
                        </h4>
                        <p className="text-xs text-slate-500">
                          M.Sc. in Autonomous Systems & AI · Darmstadt, Germany
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                      Conditional Offer
                    </span>
                  </div>
                </div>

                {/* Document Vault */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        Document Vault & Verification
                      </h4>
                      <p className="text-xs text-slate-500">
                        Securely verified by Ideation compliance officers
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-xl border border-blue-600 text-blue-600 font-semibold text-xs hover:bg-blue-50 transition-colors flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" /> Upload File
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-slate-800">Undergrad Transcripts</span>
                      </div>
                      <span className="text-emerald-600 font-bold">✓ Verified</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-slate-800">IELTS Test Report (7.5)</span>
                      </div>
                      <span className="text-emerald-600 font-bold">✓ Verified</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-slate-800">German APS Certificate</span>
                      </div>
                      <span className="text-emerald-600 font-bold">✓ Verified</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-amber-500" />
                        <span className="font-medium text-slate-800">Blocked Account Receipt</span>
                      </div>
                      <span className="text-amber-600 font-bold">Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Counselor Live Chat */}
              <div className="lg:col-span-4 sticky top-28 space-y-6">
                <Card className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center">
                      RS
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Direct Counselor Chat
                      </h4>
                      <p className="text-xs text-emerald-600 font-semibold">
                        ● Online (Rameeza Stanley Isaac)
                      </p>
                    </div>
                  </div>

                  {/* Messages Scroll Area */}
                  <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={`p-3.5 rounded-2xl text-xs space-y-1 ${
                          m.isCounselor
                            ? "bg-blue-50 text-slate-800 border border-blue-100 mr-4"
                            : "bg-blue-600 text-white ml-4"
                        }`}
                      >
                        <div className="flex justify-between items-center opacity-80 text-[10px]">
                          <span className="font-bold">{m.sender}</span>
                          <span>{m.time}</span>
                        </div>
                        <p className="leading-relaxed">{m.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleSendMessage} className="pt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask Mrs. Rameeza a question..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 text-xs outline-none focus:border-blue-600"
                    />
                    <button
                      type="submit"
                      className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
