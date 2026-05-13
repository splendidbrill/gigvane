"use client";

import { useState, useEffect } from "react";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBolt,
  IconCheck,
  IconClock,
  IconCommand,
  IconDatabase,
  IconLock,
  IconPen,
  IconShield,
  IconVideo,
  IconWand,
} from "./icons";

const PROMPTS = [
  {
    key: "video",
    Icon: IconVideo,
    chip: "Edit 3 shorts",
    text: "Edit these 3 podcast clips into vertical shorts with captions, hooks at the front, and B-roll over slow moments.",
    sow: {
      id: "SOW-2401",
      title: "Vertical Shorts · 3-pack",
      eta: { val: "2 hr 12 min" },
      price: 50,
      human: { price: 300, eta: "4 days" },
      agents: ["VID-EDIT-v3", "CAPTIONS-2", "HOOK-QA"],
      lines: [
        { label: "3× 9:16 cuts · ≤60s each", meta: "4K source · 1080×1920 out" },
        { label: "Auto-captions · brand kit", meta: "Karaoke style · custom font" },
        { label: "Hook re-order + B-roll fills", meta: "2 alts per short" },
        { label: "Loudness norm · -14 LUFS", meta: "Music ducking · breath-cut" },
      ],
    },
  },
  {
    key: "leads",
    Icon: IconDatabase,
    chip: "Scrape 500 SaaS leads",
    text: "Scrape 500 verified VP-Marketing leads from Series A SaaS companies (US, 50–250 headcount). Include verified email + LinkedIn.",
    sow: {
      id: "SOW-2402",
      title: "Verified B2B Leads · 500 rows",
      eta: { val: "10 min" },
      price: 75,
      human: { price: 800, eta: "1 week" },
      agents: ["CRAWL-v7", "VERIFY-MX", "ENRICH-LI"],
      lines: [
        { label: "500× rows · VP Marketing", meta: "Series A · US · 50–250 HC" },
        { label: "Email SMTP-verified", meta: "99.2% deliverability target" },
        { label: "LinkedIn URL + headline", meta: "Live within last 30 days" },
        { label: "CSV + Hubspot push", meta: "Dedup vs. your CRM" },
      ],
    },
  },
  {
    key: "seo",
    Icon: IconPen,
    chip: "SEO cluster, 8 posts",
    text: "Write a topical cluster on \"MLOps for fintech\" — 1 pillar + 7 supporting posts, matched to our brand voice (link our blog).",
    sow: {
      id: "SOW-2403",
      title: "Topic Cluster · MLOps × Fintech",
      eta: { val: "34 min" },
      price: 150,
      human: { price: 1500, eta: "2 weeks" },
      agents: ["RESEARCH-v4", "VOICE-MATCH", "EDITORIAL-QA"],
      lines: [
        { label: "1× pillar · 2,400 words", meta: "Schema + internal links" },
        { label: "7× supporting posts", meta: "Avg 1,200 words · keyword-mapped" },
        { label: "Brand voice from /blog", meta: "Tone profile · 12 axes" },
        { label: "Plagiarism + AI-trace clear", meta: "Originality > 96%" },
      ],
    },
  },
];

type Sow = (typeof PROMPTS)[number]["sow"];

function SOWCard({ sow }: { sow: Sow }) {
  return (
    <div
      className="rise rounded-2xl overflow-hidden"
      style={{
        background: "#0E0E10",
        color: "#F4F1E8",
        border: "1px solid #1c1c20",
        boxShadow: "0 1px 0 rgba(255,255,255,.05) inset, 0 18px 50px -18px rgba(14,14,16,.55)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: "1px solid #1c1c20" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px]" style={{ color: "#9c9a90", letterSpacing: ".04em" }}>
            {sow.id}
          </span>
          <span className="font-mono text-[11px]" style={{ color: "#62615a" }}>·</span>
          <span className="text-[14px] font-medium tk-tight">{sow.title}</span>
        </div>
        <span
          className="font-mono text-[10.5px] inline-flex items-center gap-1.5"
          style={{ color: "#CFF24E", letterSpacing: ".06em" }}
        >
          <span className="pulse-volt" /> READY TO START
        </span>
      </div>

      {/* Body */}
      <div className="grid md:grid-cols-[1.4fr,1fr]">
        {/* Deliverables */}
        <div className="px-5 py-4" style={{ borderRight: "1px solid #1c1c20" }}>
          <div className="font-mono text-[10.5px] mb-2" style={{ color: "#62615a", letterSpacing: ".08em" }}>
            DELIVERABLES
          </div>
          <ul className="flex flex-col">
            {sow.lines.map((l, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 py-2"
                style={{ borderTop: i ? "1px solid #1c1c20" : "none" }}
              >
                <span className="mt-1 shrink-0" style={{ color: "#CFF24E" }}>
                  <IconCheck size={13} stroke={2.4} />
                </span>
                <div className="flex-1">
                  <div className="text-[13.5px] tk-tight">{l.label}</div>
                  <div className="font-mono text-[11px] mt-0.5" style={{ color: "#80807a" }}>{l.meta}</div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="mt-3 pt-3 flex items-center gap-2 flex-wrap"
            style={{ borderTop: "1px dashed #2a2a30" }}
          >
            <span className="font-mono text-[10.5px]" style={{ color: "#62615a", letterSpacing: ".08em" }}>
              AGENT FLEET
            </span>
            {sow.agents.map((a, i) => (
              <span
                key={i}
                className="font-mono text-[10.5px] px-2 py-[3px] rounded-full"
                style={{ background: "#16161A", color: "#bfbeb4", border: "1px solid #25252b" }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="px-5 py-4 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10.5px]" style={{ color: "#62615a", letterSpacing: ".08em" }}>PRICE</span>
            <span className="font-mono text-[10.5px]" style={{ color: "#62615a" }}>fixed · no surprises</span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-[44px] font-semibold tk-tighter tnum">${sow.price}</span>
            <span className="text-[13px] tnum" style={{ color: "#9c9a90" }}>
              vs <span style={{ textDecoration: "line-through" }}>${sow.human.price}</span> human
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12.5px]" style={{ color: "#bfbeb4" }}>
            <span className="inline-flex items-center gap-1.5">
              <IconClock size={13} /> ETA <b className="tnum" style={{ color: "#F4F1E8" }}>{sow.eta.val}</b>
            </span>
            <span style={{ color: "#3a3a3e" }}>·</span>
            <span className="font-mono text-[11px]" style={{ color: "#80807a" }}>vs {sow.human.eta}</span>
          </div>

          {/* 10/90 bar */}
          <div className="mt-1">
            <div
              className="flex justify-between font-mono text-[10.5px]"
              style={{ color: "#80807a", letterSpacing: ".04em" }}
            >
              <span>10% to start</span><span>90% on delivery</span>
            </div>
            <div
              className="mt-1.5 h-[10px] rounded-full overflow-hidden flex"
              style={{ background: "#1c1c20" }}
            >
              <div style={{ width: "10%", background: "#CFF24E" }} />
              <div style={{ flex: 1, background: "repeating-linear-gradient(45deg,#2a2a30 0 6px,#222227 6px 12px)" }} />
            </div>
            <div
              className="mt-1.5 flex justify-between font-mono text-[10.5px] tnum"
              style={{ color: "#bfbeb4" }}
            >
              <span>${(sow.price * 0.1).toFixed(2)}</span>
              <span>${(sow.price * 0.9).toFixed(2)}</span>
            </div>
          </div>

          <button className="btn-volt mt-1 w-full justify-center gap-1.5">
            Authorize 10% · Start work <IconArrowRight size={14} />
          </button>
          <div
            className="font-mono text-[10.5px] text-center"
            style={{ color: "#62615a", letterSpacing: ".04em" }}
          >
            ESCROW · STRIPE · REFUNDABLE IF REJECTED
          </div>
        </div>
      </div>
    </div>
  );
}

function MagicInput() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "thinking" | "sow">("typing");
  const [held, setHeld] = useState(false);
  const cur = PROMPTS[idx];

  // Typewriter
  useEffect(() => {
    if (phase !== "typing") return;
    setTyped("");
    const target = cur.text;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTimeout(() => setPhase("thinking"), 380);
      }
    }, 18);
    return () => clearInterval(t);
  }, [idx, phase, cur.text]);

  // Thinking → SOW
  useEffect(() => {
    if (phase !== "thinking") return;
    const t = setTimeout(() => setPhase("sow"), 850);
    return () => clearTimeout(t);
  }, [phase]);

  // Auto-rotate
  useEffect(() => {
    if (phase !== "sow" || held) return;
    const t = setTimeout(() => {
      setIdx((idx + 1) % PROMPTS.length);
      setPhase("typing");
    }, 5200);
    return () => clearTimeout(t);
  }, [phase, idx, held]);

  const switchTo = (i: number) => {
    setIdx(i);
    setPhase("typing");
  };

  return (
    <div
      className="w-full max-w-[860px] mx-auto"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
    >
      <div className="card-bone p-3 sm:p-4" style={{ borderRadius: 22 }}>
        {/* Chrome */}
        <div className="flex items-center justify-between px-2 pt-1 pb-2">
          <div className="flex items-center gap-2">
            <span className="chip-mono inline-flex items-center gap-1.5">
              <span style={{ width: 6, height: 6, borderRadius: 9999, background: "#CFF24E", boxShadow: "0 0 0 2px #E5F596" }} />
              gigvane://intake
            </span>
            <span className="chip-mono hidden sm:inline">⌘K</span>
          </div>
          <div className="eyebrow">Magic Intake</div>
        </div>

        {/* Prompt input area */}
        <div
          className="rounded-2xl px-4 sm:px-5 py-4 sm:py-5"
          style={{ background: "#FFFFFF", border: "1px solid var(--hair)" }}
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 shrink-0" style={{ color: "#0E0E10", opacity: 0.5 }}>
              <IconCommand size={18} />
            </span>
            <div
              className="text-[17px] sm:text-[19px] leading-[1.45] tk-tight flex-1"
              style={{ minHeight: "3.6em" }}
            >
              {typed}
              {phase === "typing" && <span className="caret" />}
              {phase !== "typing" && (
                <span className="ml-2 align-middle inline-flex">
                  <span className="chip-volt inline-flex items-center gap-1">
                    <IconCheck size={11} stroke={2.2} /> intake parsed
                  </span>
                </span>
              )}
            </div>
            <button className="btn-ink shrink-0 gap-1.5 self-start">
              <IconWand size={14} /> Generate SOW
            </button>
          </div>

          {/* Chips */}
          <div
            className="mt-4 pt-3 flex flex-wrap items-center gap-2"
            style={{ borderTop: "1px dashed var(--hair)" }}
          >
            <span className="eyebrow mr-1">try</span>
            {PROMPTS.map((p, i) => (
              <button
                key={p.key}
                onClick={() => switchTo(i)}
                className={"chip-mono inline-flex items-center gap-1.5 " + (i === idx ? "ring-1" : "")}
                style={
                  i === idx
                    ? { background: "#0E0E10", color: "#F4F1E8", borderColor: "#0E0E10" }
                    : { cursor: "pointer" }
                }
              >
                <p.Icon size={12} stroke={1.8} /> {p.chip}
              </button>
            ))}
          </div>
        </div>

        {/* SOW preview area */}
        <div className="mt-3 relative" style={{ minHeight: 220 }}>
          {phase === "thinking" && (
            <div
              className="rounded-2xl p-5 flex items-center gap-3 rise"
              style={{ background: "#FBF9F2", border: "1px solid var(--hair)" }}
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 9999,
                      background: "#0E0E10",
                      opacity: 0.7,
                      animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[14px]" style={{ color: "#3a3a3c" }}>
                Routing to{" "}
                <span className="font-mono text-[12.5px]">{cur.sow.agents[0]}</span>
                {" "}· scoring 6 candidate agents…
              </span>
            </div>
          )}
          {phase === "sow" && <SOWCard key={cur.key} sow={cur.sow} />}
        </div>
      </div>

      {/* Footer hints */}
      <div
        className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12.5px]"
        style={{ color: "#5d5b53" }}
      >
        <span className="inline-flex items-center gap-1.5"><IconBolt size={12} /> SOW in &lt; 1s</span>
        <span style={{ color: "#cfc9b7" }}>·</span>
        <span className="inline-flex items-center gap-1.5"><IconLock size={12} /> 10% gate, 90% escrowed</span>
        <span style={{ color: "#cfc9b7" }}>·</span>
        <span className="inline-flex items-center gap-1.5"><IconShield size={12} /> Refund if rejected</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grain" />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ background: "#FBF9F2", border: "1px solid var(--hair)" }}
          >
            <span className="chip-volt">NEW</span>
            <span className="text-[12.5px]" style={{ color: "#2a2a2c" }}>
              Gigvane raises seed from a16z to build the agentic freelancer stack
            </span>
            <IconArrowUpRight size={13} />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-center mx-auto max-w-[1080px] tk-tightest font-semibold"
          style={{ fontSize: "clamp(48px, 8vw, 104px)", lineHeight: 0.96 }}
        >
          Buy the outcome.<br />
          <span
            className="italic font-normal"
            style={{ fontFamily: "var(--font-instrument-serif), serif", letterSpacing: "-0.02em" }}
          >
            Skip&nbsp;the&nbsp;freelancer.
          </span>
        </h1>

        {/* Subhead */}
        <p
          className="mt-7 mx-auto max-w-[680px] text-center text-[18px] sm:text-[19px] leading-[1.5] tk-tight"
          style={{ color: "#3a3a3c" }}
        >
          Drop a task in plain English. Gigvane scopes it, ships it, and only collects the rest
          once you accept the work. Outcomes priced. Hours abolished.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#waitlist" className="btn-ink gap-1.5">
            Join the Waitlist <IconArrowRight size={14} />
          </a>
          <a href="#how" className="btn-ghost gap-1.5">
            See the 10/90 model
          </a>
        </div>

        {/* Magic input */}
        <div className="mt-12 lg:mt-16">
          <MagicInput />
        </div>

        {/* Metrics row */}
        <div
          className="mt-12 mx-auto max-w-[920px] grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl"
          style={{ background: "var(--hair)", border: "1px solid var(--hair)" }}
        >
          {[
            { k: "Avg. SOW latency", v: "0.6s", s: "fleet-wide median" },
            { k: "Avg. delivery vs. human", v: "42×", s: "faster, across tasks" },
            { k: "Average price", v: "−84%", s: "vs comparable agency" },
            { k: "Acceptance rate", v: "98.4%", s: "first-pass on delivery" },
          ].map((m, i) => (
            <div key={i} className="p-4" style={{ background: "#FBF9F2" }}>
              <div className="eyebrow">{m.k}</div>
              <div className="mt-1 text-[28px] font-semibold tk-tighter tnum">{m.v}</div>
              <div className="text-[12.5px]" style={{ color: "#6e6c63" }}>{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
