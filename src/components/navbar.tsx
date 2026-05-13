import Link from "next/link";
import { IconArrowRight } from "./icons";

function Wordmark({ size = 26, dark = false }: { size?: number; dark?: boolean }) {
  const fg = dark ? "#F4F1E8" : "#0E0E10";
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="7" fill={fg} />
        <path d="M10 22 L22 10" stroke="#CFF24E" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="22" cy="10" r="2.4" fill="#CFF24E" />
        <path d="M10 22 L13.5 22 M10 22 L10 18.5" stroke="#CFF24E" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span
        style={{
          fontSize: size * 0.72,
          fontWeight: 600,
          letterSpacing: "-0.035em",
          color: fg,
          lineHeight: 1,
        }}
      >
        Gigvane
      </span>
    </div>
  );
}

export { Wordmark };

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-md"
      style={{ background: "rgba(244,241,232,0.78)", borderBottom: "1px solid var(--hair)" }}
    >
      <div className="max-w-[1240px] mx-auto h-[64px] px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/"><Wordmark size={26} /></Link>
          <div className="hidden md:flex items-center gap-7 text-[13.5px]" style={{ color: "#2a2a2c" }}>
            <a href="#outcomes" className="hover:opacity-70">Outcomes</a>
            <a href="#how" className="hover:opacity-70">The 10/90 Model</a>
            <a href="#waitlist" className="hover:opacity-70">Pricing</a>
            <a href="/blog" className="hover:opacity-70">Blog</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline text-[13.5px] hover:opacity-70" style={{ color: "#2a2a2c" }}>
            Sign in
          </a>
          <a href="#waitlist" className="btn-ink gap-1.5">
            Join Waitlist <IconArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
