import Link from "next/link";
import { ShieldAlert, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8 bg-white text-[#0F2E53]">
      <div className="max-w-md text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F2E53]/5 text-[#0F2E53]">
          <ShieldAlert className="h-8 w-8 text-[#0F2E53]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F2E53]">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0F2E53]">
            Page Not Found
          </h1>
          <p className="text-xs text-[#0F2E53]/70 leading-relaxed">
            The page or equipment category you are looking for does not exist or has been relocated.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F2E53] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#164377] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#brands"
            className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#0F2E53] hover:bg-[#0F2E53]/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Brands</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
