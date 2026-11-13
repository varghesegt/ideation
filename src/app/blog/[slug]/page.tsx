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
  Bookmark,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BLOGS, BlogArticle } from "@/data/blogs";

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
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
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />

      {/* Header Banner */}
      <section className={`pt-36 pb-20 bg-gradient-to-tr ${blog.coverGradient} text-white`}>
        <Container size="large">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 hover:text-white mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
            </Link>

            <div className="flex items-center gap-3">
              <Badge variant="glass" size="md">
                {blog.category}
              </Badge>
              <span className="text-xs text-blue-200 font-medium">
                {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {blog.title}
            </h1>

            <div className="pt-2 flex items-center gap-4 text-xs text-blue-200">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> {blog.author}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {blog.publishedDate}
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
            <article className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-slate-800 leading-relaxed text-base">
              <p className="text-lg font-medium text-slate-900 border-l-4 border-blue-600 pl-4 italic">
                {blog.excerpt}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-slate-700 whitespace-pre-line">
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
              <div className="sticky top-28 p-8 rounded-3xl bg-blue-50/80 border border-blue-100 shadow-lg space-y-6">
                <div>
                  <Badge variant="primary" size="sm">
                    Free Expert Advisory
                  </Badge>
                  <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                    Questions About This Guide?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Connect directly with Ideation counselors for 1-on-1 personalized profile advice.
                  </p>
                </div>

                <Link href="/#register" className="block">
                  <Button fullWidth size="lg" className="font-bold">
                    Schedule Free Counseling
                  </Button>
                </Link>

                <div className="pt-4 border-t border-blue-200/60 text-xs text-slate-500 space-y-2">
                  <p>✓ 100% Free Consultation</p>
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
