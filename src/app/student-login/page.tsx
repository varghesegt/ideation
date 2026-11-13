"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function StudentLoginPage() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate instant secure auth and route to modernized student dashboard
    setTimeout(() => {
      router.push("/student-dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex flex-col justify-between">
      <Navbar />

      <div className="pt-36 pb-20 flex-1 flex items-center justify-center">
        <Container size="small">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white mx-auto shadow-md">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Student Portal Login
              </h1>
              <p className="text-xs text-slate-500">
                Track your university applications, document status & counselor notes.
              </p>
            </div>

            <Card className="p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl bg-white space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Student ID / Registered Email
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. IDE-2026-849 or email"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="font-semibold text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  isLoading={isLoading}
                  className="font-bold text-sm uppercase tracking-wider shadow-lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Log Into Portal
                </Button>
              </form>

              <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
                New student applicant?{" "}
                <Link
                  href="/#register"
                  className="font-bold text-blue-600 hover:underline"
                >
                  Register for Free Counseling
                </Link>
              </div>
            </Card>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Protected by 256-bit SSL encryption · Ideation Edu Services</span>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
