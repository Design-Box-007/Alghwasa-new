import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BRANDS, getBrandBySlug } from "@/lib/data/brands";
import {
  ShieldCheck,
  Globe,
  Package,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  PhoneCall,
  FileText,
} from "lucide-react";

interface BrandPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return {
      title: "Brand Not Found | Al Ghwasa",
    };
  }

  return {
    title: `${brand.name} | Authorized Distributor Dubai | Al Ghwasa`,
    description: `Official supplier of genuine ${brand.name} ${brand.industry} equipment in Dubai, UAE and across the GCC since 1990.`,
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = BRANDS.filter((b) => b.slug !== brand.slug).slice(0, 3);

  return (
    <div className="py-16 sm:py-24 bg-white text-[#0F2E53]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#brands"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2E53]/70 hover:text-[#0F2E53] mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Brands</span>
        </Link>

        {/* Brand Banner Header */}
        <div className="rounded-3xl border border-[#0F2E53]/15 bg-white p-8 sm:p-12 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3.5 py-1 text-xs font-semibold text-[#0F2E53]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Authorised Dealer · UAE & GCC</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#0F2E53]/60">
              <Globe className="w-3.5 h-3.5" />
              <span>Manufacturing Origin: {brand.origin}</span>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0F2E53] sm:text-5xl">
            {brand.name}
          </h1>

          <p className="mt-2 text-base font-semibold text-[#0F2E53]">
            {brand.tagline}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#0F2E53]/75 max-w-3xl">
            {brand.description}
          </p>
        </div>

        {/* Featured Flagship Product */}
        <div className="mt-12 rounded-3xl border border-[#0F2E53]/15 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2E53] mb-2">
            <Package className="w-4 h-4" />
            <span>Featured Product Spotlight</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#0F2E53]">
            {brand.featuredProduct.name}
          </h2>

          <div className="mt-1">
            <span className="rounded-full bg-[#0F2E53]/5 px-3 py-1 text-[11px] font-semibold text-[#0F2E53]">
              Category: {brand.featuredProduct.category}
            </span>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[#0F2E53]/70 max-w-2xl sm:text-sm">
            {brand.featuredProduct.description}
          </p>

          {brand.featuredProduct.specs && (
            <div className="mt-6 pt-6 border-t border-[#0F2E53]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]/50 mb-3">
                Key Technical Specifications & Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {brand.featuredProduct.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-xl bg-[#0F2E53]/5 p-3.5 text-xs text-[#0F2E53] font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0F2E53] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-[#0F2E53]/10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F2E53] px-6 py-3 text-xs font-bold text-white shadow-md shadow-[#0F2E53]/20 hover:bg-[#164377] transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Quote for {brand.name}</span>
            </Link>

            <Link
              href="/experience-centre"
              className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/20 bg-white px-5 py-3 text-xs font-semibold text-[#0F2E53] hover:bg-[#0F2E53]/5 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Experience in Dubai Showroom</span>
            </Link>
          </div>
        </div>

        {/* Other Related Brands */}
        <div className="mt-16">
          <h3 className="text-xl font-bold tracking-tight text-[#0F2E53] mb-6">
            Explore Other Authorized Brands
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherBrands.map((ob) => (
              <Link
                key={ob.slug}
                href={`/brands/${ob.slug}`}
                className="group rounded-2xl border border-[#0F2E53]/15 bg-white p-5 hover:border-[#0F2E53]/40 hover:shadow-md transition-all"
              >
                <span className="text-[10px] font-mono text-[#0F2E53]/50 uppercase">
                  {ob.origin}
                </span>
                <h4 className="mt-1 text-base font-bold text-[#0F2E53] group-hover:text-[#164377] transition-colors">
                  {ob.name}
                </h4>
                <p className="mt-1 text-xs text-[#0F2E53]/70 line-clamp-2">
                  {ob.tagline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0F2E53]">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
