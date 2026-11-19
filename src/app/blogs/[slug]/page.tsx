import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOGS, getBlogBySlug } from "@/lib/data/blogs";
import { Clock, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Al Ghwasa",
    };
  }

  return {
    title: `${blog.title} | Al Ghwasa Technical Insights`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const otherBlogs = BLOGS.filter((b) => b.slug !== blog.slug);

  return (
    <article className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2E53]/70 hover:text-[#0F2E53] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#0F2E53]/10 px-3 py-1 text-xs font-bold text-[#0F2E53]">
              {blog.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#0F2E53]/60 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#0F2E53]" />
              <span>{blog.readTime}</span>
            </div>
            <span className="text-xs text-[#0F2E53]/40">·</span>
            <span className="text-xs text-[#0F2E53]/60">{blog.date}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-[#0F2E53] sm:text-4xl leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-[#0F2E53]/70 border-b border-[#0F2E53]/10 pb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F2E53] text-white font-bold text-xs">
              AG
            </div>
            <div>
              <p className="font-semibold text-[#0F2E53]">{blog.author}</p>
              <p className="text-[11px] text-[#0F2E53]/60">Dubai Technical Instrumentation Desk</p>
            </div>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="mt-8 rounded-2xl bg-[#0F2E53]/5 p-6 border border-[#0F2E53]/15">
          <p className="text-sm font-medium text-[#0F2E53] leading-relaxed italic">
            &ldquo;{blog.excerpt}&rdquo;
          </p>
        </div>

        {/* Article Body Content */}
        <div className="mt-10 space-y-6 text-sm sm:text-base leading-relaxed text-[#0F2E53]/85">
          {blog.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Technical Support Box */}
        <div className="mt-16 rounded-3xl border border-[#0F2E53]/15 bg-white p-8 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2E53]">
            <ShieldCheck className="w-4 h-4" />
            <span>Need Application Advice for Your Facility?</span>
          </div>
          <h3 className="text-lg font-bold text-[#0F2E53]">
            Consult With Our Certified Hazardous Area Safety Engineers
          </h3>
          <p className="text-xs text-[#0F2E53]/70 leading-relaxed max-w-2xl">
            Al Ghwasa provides site surveys, ATEX risk audits, and technical product selections
            tailored to offshore vessels, fuel terminals, and chemical facilities across the Middle East.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F2E53] px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-[#164377] transition-colors"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {otherBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#0F2E53]/10">
            <h3 className="text-xl font-bold tracking-tight text-[#0F2E53] mb-6">
              More Insights from Al Ghwasa
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherBlogs.map((ob) => (
                <Link
                  key={ob.slug}
                  href={`/blogs/${ob.slug}`}
                  className="group rounded-2xl border border-[#0F2E53]/15 bg-white p-6 hover:border-[#0F2E53]/40 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F2E53]">
                    {ob.category}
                  </span>
                  <h4 className="mt-2 text-base font-bold text-[#0F2E53] group-hover:text-[#164377] transition-colors leading-snug">
                    {ob.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#0F2E53]/70 line-clamp-2">
                    {ob.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
