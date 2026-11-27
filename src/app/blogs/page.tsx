import type { Metadata } from "next";
import Link from "next/link";
import { BLOGS } from "@/lib/data/blogs";
import { BookOpen, Clock, User, ArrowRight } from "lucide-react";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

export const metadata: Metadata = {
  title: "Blogs & Technical Insights | Ghwasa Technical Equipment Trading",
  description:
    "Explore engineering insights on ATEX explosion protection, industrial static grounding, gas detection, and MARPOL compliance from Dubai, UAE.",
};

export default function BlogsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation backgroundClass="bg-white" direction="bottom">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3.5 py-1 text-xs font-semibold text-[#0F2E53]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Knowledge & Standards</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0F2E53] sm:text-5xl">
              Technical Blogs & Insights
            </h1>
            <p className="text-base leading-relaxed text-[#0F2E53]/75">
              Written by our Dubai application engineers to help maritime operators, plant
              managers, and safety officers navigate international compliance standards.
            </p>
          </div>
        </RevealAnimation>

        {/* Blogs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <article
              key={blog.slug}
              className="group flex flex-col justify-between rounded-3xl border border-[#0F2E53]/15 bg-white p-7 shadow-sm hover:shadow-xl hover:border-[#0F2E53]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#0F2E53]/60">
                  <span className="rounded-full bg-[#0F2E53]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#0F2E53]">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-[#0F2E53]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#0F2E53] group-hover:text-[#164377] transition-colors leading-snug">
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-[#0F2E53]/70 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#0F2E53]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#0F2E53]/60">
                  <User className="w-3.5 h-3.5 text-[#0F2E53]/60" />
                  <span className="text-[11px] font-medium">{blog.author}</span>
                </div>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="font-bold text-[#0F2E53] hover:text-[#164377] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
