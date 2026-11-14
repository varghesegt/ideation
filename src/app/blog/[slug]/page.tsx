import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BLOGS } from "@/data/blogs";

export async function generateStaticParams() {
  return BLOGS.map((b) => ({
    slug: b.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | Ideation Edu Services`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Light Header Banner */}
      <section className="pt-36 pb-16 gradient-hero-light bg-academic-mesh border-b border-slate-200/80">
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
            </Link>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-black uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1 font-bold">
                <User className="w-3.5 h-3.5 text-blue-600" /> {blog.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {blog.publishedDate}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Body */}
      <Section spacing="lg" bg="default">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Text Content */}
            <article className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-800 leading-relaxed text-base">
              <p className="text-lg font-medium text-slate-900 border-l-4 border-blue-600 pl-4 italic bg-slate-50 py-3 rounded-r-xl">
                {blog.excerpt}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-slate-700 whitespace-pre-line leading-relaxed">
                {blog.content}
              </div>

              {/* Tags */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar Sticky Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider inline-block">
                    Free Expert Advisory
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mt-2">
                    Questions About This Guide?
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Connect directly with Ideation counselors for 1-on-1 personalized profile advice.
                  </p>
                </div>

                <Link href="/#register" className="block">
                  <button className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer">
                    Schedule Free Counseling
                  </button>
                </Link>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 font-medium">
                  <p className="text-emerald-700 font-bold">✓ 100% Free Consultation</p>
                  <p>✓ 500+ Partner Universities</p>
                  <p>✓ 98% Visa Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
