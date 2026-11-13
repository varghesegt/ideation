import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BLOGS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Study Abroad Blog & Visa Insights | Ideation Edu Services",
  description:
    "Expert articles, latest visa changes, scholarship announcements, and comprehensive overseas education guides written by Ideation counselors.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-b from-[#06183d] via-[#09265f] to-[#0d3b8e] text-white">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Badge variant="glass" size="md">
              Articles & Guides
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Study Abroad Knowledge Hub
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Stay ahead with verified visa policies, university admission trends, scholarship secrets, and destination guides curated by senior counselors.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Cards Grid */}
      <Section spacing="lg" bg="default">
        <Container size="large">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <Card
                key={blog.slug}
                variant="default"
                className="rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-0"
              >
                {/* Visual Header */}
                <div className={`p-8 bg-gradient-to-tr ${blog.coverGradient} text-white space-y-3`}>
                  <div className="flex items-center justify-between">
                    <Badge variant="glass" size="sm">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-blue-200 font-medium">
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug">
                    {blog.title}
                  </h3>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {blog.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                      <span>By {blog.author.split(",")[0]}</span>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
