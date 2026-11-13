"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Award,
  Globe2,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  ShieldAlert,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  interest: string;
  assignedTo: string;
  status: "New" | "Contacted" | "In Review" | "Admit Received" | "Visa Approved";
  date: string;
}

export default function AdminDashboardPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [leads, setLeads] = useState<Lead[]>([
    {
      id: "LEAD-101",
      name: "Anandha Krishnan",
      email: "anandha.k@gmail.com",
      phone: "+91 98401 23456",
      destination: "Germany",
      interest: "M.Sc. Informatics",
      assignedTo: "Rameeza Stanley Isaac",
      status: "Admit Received",
      date: "Nov 12, 2026",
    },
    {
      id: "LEAD-102",
      name: "Sneha Varadarajan",
      email: "sneha.v@yahoo.com",
      phone: "+91 94432 56789",
      destination: "United Kingdom",
      interest: "M.Sc. Business Analytics",
      assignedTo: "Sherwin S Isaac",
      status: "In Review",
      date: "Nov 13, 2026",
    },
    {
      id: "LEAD-103",
      name: "Karthik Subramanian",
      email: "karthik.sub@gmail.com",
      phone: "+91 98940 11223",
      destination: "Australia",
      interest: "Master of Data Science",
      assignedTo: "Dr. Stanley D Isaac",
      status: "Visa Approved",
      date: "Nov 10, 2026",
    },
    {
      id: "LEAD-104",
      name: "Pooja Ramesh",
      email: "pooja.ramesh@outlook.com",
      phone: "+91 97890 44556",
      destination: "United States",
      interest: "MS in Computer Science",
      assignedTo: "Rameeza Stanley Isaac",
      status: "New",
      date: "Today, 10:15 AM",
    },
    {
      id: "LEAD-105",
      name: "Mohammed Farhan",
      email: "farhan.m@gmail.com",
      phone: "+91 99400 88990",
      destination: "Ireland",
      interest: "M.Sc. Cloud Computing",
      assignedTo: "Sherwin S Isaac",
      status: "Contacted",
      date: "Today, 09:30 AM",
    },
  ]);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.destination.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Admin Bar */}
      <header className="bg-[#06183d] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight">
              IDEATION CRM
            </span>
            <span className="text-xs text-blue-300 ml-2">
              Counselor Administration Console
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="text-slate-300">Admin: Dr. Stanley D Isaac</span>
          <Link
            href="/"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            View Live Site →
          </Link>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="p-6 md:p-10 flex-1 max-w-[1500px] w-full mx-auto space-y-8">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Inquiries
            </span>
            <p className="text-3xl font-extrabold text-slate-900">1,284</p>
            <p className="text-xs text-emerald-600 font-semibold">+18% this month</p>
          </Card>

          <Card className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Active Applications
            </span>
            <p className="text-3xl font-extrabold text-blue-600">342</p>
            <p className="text-xs text-slate-500">Across 25 countries</p>
          </Card>

          <Card className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Admit Offers Received
            </span>
            <p className="text-3xl font-extrabold text-emerald-600">219</p>
            <p className="text-xs text-emerald-600 font-semibold">TUM, Oxford, Stanford, Toronto</p>
          </Card>

          <Card className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              First-Time Visa Success
            </span>
            <p className="text-3xl font-extrabold text-amber-500">98.2%</p>
            <p className="text-xs text-slate-500">Industry benchmark</p>
          </Card>
        </div>

        {/* Lead Management Table */}
        <Card className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Student Inquiries & Pipeline Management
              </h3>
              <p className="text-xs text-slate-500">
                Track incoming consultation leads, assigned counselors, and visa milestones.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-blue-600"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs outline-none bg-white font-medium"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="In Review">In Review</option>
                <option value="Admit Received">Admit Received</option>
                <option value="Visa Approved">Visa Approved</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-y border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Destination & Course</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Assigned Counselor</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <div className="text-[11px] text-slate-400">{lead.id}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold text-slate-800">{lead.destination}</div>
                      <div className="text-[11px] text-slate-500">{lead.interest}</div>
                    </td>
                    <td className="py-4 px-4 space-y-0.5">
                      <div className="text-slate-800 font-medium">{lead.phone}</div>
                      <div className="text-slate-400 text-[11px]">{lead.email}</div>
                    </td>
                    <td className="py-4 px-4 font-medium text-slate-800">
                      {lead.assignedTo}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          lead.status === "New"
                            ? "bg-amber-100 text-amber-800"
                            : lead.status === "Contacted"
                            ? "bg-blue-100 text-blue-800"
                            : lead.status === "In Review"
                            ? "bg-purple-100 text-purple-800"
                            : lead.status === "Admit Received"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-500">{lead.date}</td>
                    <td className="py-4 px-4 text-right space-x-2">
                      <a
                        href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold"
                      >
                        Email
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
