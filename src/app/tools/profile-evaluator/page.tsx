"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Award,
  Globe2,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DESTINATIONS } from "@/data/destinations";

export default function ProfileEvaluatorPage() {
  const [step, setStep] = useState(1);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    scholarshipProbability: string;
    tier: "High-Competitive" | "Strong" | "Moderate";
    reachUnis: string[];
    targetUnis: string[];
    safetyUnis: string[];
    recommendations: string[];
  }>(null);

  const [profile, setProfile] = useState({
    degreeLevel: "Master's (Postgraduate)",
    currentEducation: "B.E / B.Tech Computer Science",
    cgpa: "8.2",
    backlogs: "0",
    workExpYears: "2",
    ieltsStatus: "Already Taken",
    ieltsScore: "7.0",
    greStatus: "Not Required / Waived",
    targetCountry: "Germany",
    annualBudget: "₹10L - ₹20L",
  });

  const handleRunEvaluation = () => {
    setAnalyzing(true);
    setTimeout(() => {
      // Calculate realistic score based on inputs
      const cgpaNum = parseFloat(profile.cgpa) || 7.5;
      const baseScore = Math.min(Math.round(cgpaNum * 10 + (profile.ieltsScore ? 10 : 0) + (parseInt(profile.workExpYears) > 0 ? 5 : 0)), 96);

      let reach: string[] = [];
      let target: string[] = [];
      let safety: string[] = [];

      if (profile.targetCountry === "Germany") {
        reach = ["Technical University of Munich (TUM)", "RWTH Aachen University"];
        target = ["University of Stuttgart", "TU Darmstadt", "FAU Erlangen-Nuremberg"];
        safety = ["TU Chemnitz", "Hochschule Schmalkalden", "Deggendorf Institute of Technology"];
      } else if (profile.targetCountry === "United States") {
        reach = ["University of Southern California (USC)", "Carnegie Mellon University"];
        target = ["Northeastern University", "Arizona State University", "UT Dallas"];
        safety = ["San Jose State University", "University of North Texas", "Pace University"];
      } else if (profile.targetCountry === "United Kingdom") {
        reach = ["University of Manchester", "University of Edinburgh"];
        target = ["University of Bristol", "University of Leeds", "University of Birmingham"];
        safety = ["Brunel University London", "Nottingham Trent", "University of Hertfordshire"];
      } else {
        reach = ["University of Toronto", "University of Melbourne"];
        target = ["University of Waterloo", "UNSW Sydney", "Monash University"];
        safety = ["University of Windsor", "Deakin University", "Western Sydney University"];
      }

      setResult({
        score: baseScore,
        scholarshipProbability: baseScore > 85 ? "High (60% - 100% Tuition Waiver)" : "Moderate (20% - 40% Merit Aid)",
        tier: baseScore > 85 ? "High-Competitive" : "Strong",
        reachUnis: reach,
        targetUnis: target,
        safetyUnis: safety,
        recommendations: [
          `Your ${profile.cgpa} CGPA in ${profile.currentEducation} qualifies you strongly for top programs in ${profile.targetCountry}.`,
          `Highlight your ${profile.workExpYears} year(s) of experience in your Statement of Purpose to offset competitive applicant pools.`,
          `Target scholarships early: Deadlines for major institutional grants occur 4 to 6 months prior to intake.`,
          `Schedule a personalized session with Ideation counselors to review individual university course prerequisites.`,
        ],
      });
      setAnalyzing(false);
      setStep(4);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> AI Admissions Diagnostic
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              AI Profile Evaluator
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Analyze your admission probability, receive categorized Safety, Target, and Reach universities, and calculate scholarship chances in under 2 minutes.
            </p>
          </div>
        </Container>
      </section>

      {/* Evaluator Flow */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="max-w-3xl mx-auto">
            {/* Step Indicators */}
            {step < 4 && (
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                {[
                  { num: 1, label: "Academics" },
                  { num: 2, label: "Test Scores" },
                  { num: 3, label: "Destination & Budget" },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        step === s.num
                          ? "bg-blue-600 text-white"
                          : step > s.num
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {step > s.num ? "✓" : s.num}
                    </span>
                    <span
                      className={`text-xs font-bold hidden sm:inline ${
                        step === s.num ? "text-blue-600" : "text-slate-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: Academics */}
            {step === 1 && (
              <Card className="p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Step 1: Your Academic Background
                  </h3>
                  <p className="text-xs text-slate-500">
                    Enter your recent qualification and academic performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Degree You Are Applying For
                    </label>
                    <select
                      value={profile.degreeLevel}
                      onChange={(e) => setProfile({ ...profile, degreeLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                    >
                      <option>Master&apos;s (Postgraduate - MS / MBA / MA)</option>
                      <option>Bachelor&apos;s (Undergraduate - BS / BBA)</option>
                      <option>Doctorate (Ph.D. / Research)</option>
                      <option>Postgraduate Diploma / Certificate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Current / Completed Degree
                    </label>
                    <input
                      type="text"
                      value={profile.currentEducation}
                      onChange={(e) => setProfile({ ...profile, currentEducation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        CGPA or Percentage
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 8.2 or 78%"
                        value={profile.cgpa}
                        onChange={(e) => setProfile({ ...profile, cgpa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Active or Past Backlogs
                      </label>
                      <select
                        value={profile.backlogs}
                        onChange={(e) => setProfile({ ...profile, backlogs: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                      >
                        <option value="0">0 (Zero backlogs)</option>
                        <option value="1-2">1 to 2 (Cleared)</option>
                        <option value="3-5">3 to 5 (Cleared)</option>
                        <option value="6+">6+ (Cleared)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Years of Relevant Work Experience
                    </label>
                    <select
                      value={profile.workExpYears}
                      onChange={(e) => setProfile({ ...profile, workExpYears: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                    >
                      <option value="0">Fresher / Final Year Student (0 years)</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3-5">3 to 5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Proceed to Step 2
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 2: Test Scores */}
            {step === 2 && (
              <Card className="p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Step 2: Standardized Test Scores
                  </h3>
                  <p className="text-xs text-slate-500">
                    English proficiency and aptitude test details.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        English Test (IELTS / PTE / TOEFL)
                      </label>
                      <select
                        value={profile.ieltsStatus}
                        onChange={(e) => setProfile({ ...profile, ieltsStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                      >
                        <option>Already Taken</option>
                        <option>Planning to Take in 1-2 Months</option>
                        <option>Seeking Medium of Instruction (MOI) Waiver</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Score / Expected Score
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 7.0 (IELTS) or 68 (PTE)"
                        value={profile.ieltsScore}
                        onChange={(e) => setProfile({ ...profile, ieltsScore: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      GRE / GMAT Status
                    </label>
                    <select
                      value={profile.greStatus}
                      onChange={(e) => setProfile({ ...profile, greStatus: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                    >
                      <option>Not Required / Applying to Test-Waived Universities</option>
                      <option>Already Taken (310+ GRE / 650+ GMAT)</option>
                      <option>Planning to Take</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    size="lg"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Proceed to Step 3
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 3: Destination & Budget */}
            {step === 3 && (
              <Card className="p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 animate-fade-in">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Step 3: Destination & Financial Target
                  </h3>
                  <p className="text-xs text-slate-500">
                    Select your preferred country and yearly budget in INR.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Destination of Choice
                    </label>
                    <select
                      value={profile.targetCountry}
                      onChange={(e) => setProfile({ ...profile, targetCountry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none bg-white focus:border-blue-600"
                    >
                      {DESTINATIONS.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.flag} {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Estimated Annual Tuition + Living Budget
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Under ₹15L (Low-Cost/Scholarship)", "₹15L - ₹30L (Mid-Tier)", "₹30L+ (Premium/Ivy)"].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setProfile({ ...profile, annualBudget: b })}
                          className={`p-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                            profile.annualBudget === b
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleRunEvaluation}
                    size="lg"
                    isLoading={analyzing}
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold"
                    rightIcon={<Sparkles className="w-4 h-4" />}
                  >
                    Run AI Evaluation
                  </Button>
                </div>
              </Card>
            )}

            {/* Step 4: Diagnostic Results */}
            {step === 4 && result && (
              <div className="space-y-8 animate-fade-in">
                {/* Score Card */}
                <Card className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-2xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center sm:text-left">
                      <Badge variant="glass" size="md">
                        Admissions Competitiveness Score
                      </Badge>
                      <h3 className="text-3xl font-extrabold text-white">
                        Profile Rating: {result.tier}
                      </h3>
                      <p className="text-xs text-blue-200">
                        Evaluated for {profile.targetCountry} · {profile.degreeLevel}
                      </p>
                    </div>

                    <div className="w-28 h-28 rounded-full bg-white/10 border-4 border-amber-400 flex flex-col items-center justify-center text-center shadow-lg flex-shrink-0">
                      <span className="text-3xl font-extrabold text-white">
                        {result.score}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                        / 100
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                    <span>Scholarship Potential:</span>
                    <span className="font-bold text-amber-300">{result.scholarshipProbability}</span>
                  </div>
                </Card>

                {/* Categorized University Shortlist Tiers */}
                <div className="space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Recommended University Match Portfolios
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Reach */}
                    <div className="p-6 rounded-2xl bg-white border border-rose-200 shadow-sm space-y-3">
                      <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase">
                        🎯 Reach (Dream 20-40%)
                      </span>
                      <div className="space-y-2 pt-2">
                        {result.reachUnis.map((u, i) => (
                          <p key={i} className="text-xs font-semibold text-slate-800">
                            • {u}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Target */}
                    <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
                      <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase">
                        ⭐ Target (Match 60-80%)
                      </span>
                      <div className="space-y-2 pt-2">
                        {result.targetUnis.map((u, i) => (
                          <p key={i} className="text-xs font-semibold text-slate-800">
                            • {u}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Safety */}
                    <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
                        🛡️ Safety (Guaranteed 90%+)
                      </span>
                      <div className="space-y-2 pt-2">
                        {result.safetyUnis.map((u, i) => (
                          <p key={i} className="text-xs font-semibold text-slate-800">
                            • {u}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Advice */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-4">
                  <h4 className="text-base font-bold text-slate-900">
                    AI Strategic Recommendations for Your Next Steps:
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    {result.recommendations.map((rec, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final CTA */}
                <div className="p-8 rounded-3xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Want to Apply with 100% Free Guidance?
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Our certified advisors will personally guide your SOP, applications, and visa.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Re-evaluate
                    </button>
                    <Link href="/#register">
                      <Button size="md" className="font-bold">
                        Book Free Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
