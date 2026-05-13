"use client";

import { useEffect, useState } from "react";
import {
  IconBox,
  IconCommand,
  IconCpu,
  IconDollar,
  IconFileText,
  IconHand,
  IconLock,
  IconShield,
} from "./icons";

const STAGES = [
  {
    code: "01",
    name: "Intake",
    Icon: IconCommand,
    blurb: "Drop a task in plain English. No briefs, no Loom walkthroughs.",
    micro: "< 1s parse · 9 task families",
  },
  {
    code: "02",
    name: "SOW",
    Icon: IconFileText,
    blurb: "A Statement of Work renders instantly — scope, price, ETA, agent fleet.",
    micro: "auto-spec'd · binding · editable",
  },
  {
    code: "03",
    name: "10% Gate",
    Icon: IconLock,
    blurb: "Pay 10% to release the work. The remaining 90% is locked in escrow.",
    micro: "stripe · refundable · audited",
  },
  {
    code: "04",
    name: "Execution",
    Icon: IconCpu,
    blurb: "Specialized agents run in parallel. You watch a live pipeline, not a Trello board.",
    micro: "real-time logs · word-edits · alts",
  },
  {
    code: "05",
    name: "Delivery",
    Icon: IconBox,
    blurb: "Accept the work and the 90% releases. Reject it and the 90% never leaves.",
    micro: "90% on accept · 100% refund on reject",
  },
];

const PACKETS = [
  { from: 0.0, to: 0.4, label: "10%", size: "sm" },
  { from: 0.55, to: 1.0, label: "90%", size: "lg" },
];

function FlowRail() {
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const loop = (ts: number) => {
      if (!start) start = ts;
      setT(((ts - start) / 6000) % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      {/* Desktop rail */}
      <div className="hidden md:block">
        <div className="relative" style={{ height: 320 }}>
          {/* Baseline */}
          <div
            className="absolute left-[5%] right-[5%]"
            style={{ top: 152, height: 1, background: "#26262c" }}
          />
          <div className="absolute left-[5%] right-[5%] flex justify-between" style={{ top: 142 }}>
            {STAGES.map((_, i) => (
              <span key={i} style={{ width: 1, height: 21, background: "#26262c" }} />
            ))}
          </div>

          {/* Moving packets */}
          {PACKETS.map((p, idx) => {
            const inSpan = t >= p.from && t <= p.to;
            const local = inSpan ? (t - p.from) / (p.to - p.from) : 0;
            const xPct = 5 + local * 90;
            return inSpan ? (
              <div
                key={idx}
                className="absolute"
                style={{ left: `${xPct}%`, top: 145, transform: "translate(-50%,-50%)" }}
              >
                <div
                  className="font-mono inline-flex items-center gap-1 px-2 py-[2px] rounded-full"
                  style={{
                    fontSize: 10,
                    background: "#CFF24E",
                    color: "#0E0E10",
                    boxShadow: "0 0 18px rgba(207,242,78,.4)",
                  }}
                >
                  <IconDollar size={10} stroke={2.4} />
                  {p.label}
                </div>
              </div>
            ) : null;
          })}

          {/* Stage nodes */}
          <div className="absolute left-[5%] right-[5%] flex justify-between" style={{ top: 0 }}>
            {STAGES.map((s, i) => {
              const Icon = s.Icon;
              const isGate = i === 2;
              const isDelivery = i === 4;
              return (
                <div key={i} className="flex flex-col items-center" style={{ width: 200 }}>
                  <div className="text-center mb-2 h-[120px] flex flex-col items-center justify-end">
                    <div
                      className="font-mono text-[10.5px] mb-1"
                      style={{ color: "#62615a", letterSpacing: ".08em" }}
                    >
                      STAGE · {s.code}
                    </div>
                    <div className="text-[19px] font-semibold tk-tighter" style={{ color: "#F4F1E8" }}>
                      {s.name}
                    </div>
                    <p
                      className="mt-1 text-[12.5px] leading-[1.45] px-2"
                      style={{ color: "#9c9a90" }}
                    >
                      {s.blurb}
                    </p>
                  </div>
                  <div className="relative" style={{ width: 44, height: 44 }}>
                    <div
                      className="absolute inset-0 rounded-full flex items-center justify-center"
                      style={{
                        background: isGate ? "#CFF24E" : "#16161A",
                        border: "1px solid " + (isGate ? "#CFF24E" : "#2a2a30"),
                        color: isGate ? "#0E0E10" : "#F4F1E8",
                        boxShadow: isGate ? "0 0 24px rgba(207,242,78,.35)" : "none",
                      }}
                    >
                      <Icon size={18} stroke={1.9} />
                    </div>
                    {isGate && (
                      <span
                        className="absolute -top-2 -right-2 chip-mono"
                        style={{ background: "#0E0E10", color: "#CFF24E", borderColor: "#2a2a30", fontSize: 9 }}
                      >
                        GATE
                      </span>
                    )}
                    {isDelivery && (
                      <span
                        className="absolute -top-2 -right-2 chip-mono"
                        style={{ background: "#0E0E10", color: "#F4F1E8", borderColor: "#2a2a30", fontSize: 9 }}
                      >
                        ACCEPT
                      </span>
                    )}
                  </div>
                  <div
                    className="mt-3 font-mono text-[10.5px] text-center"
                    style={{ color: "#62615a", letterSpacing: ".04em" }}
                  >
                    {s.micro}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile rail */}
      <div className="md:hidden flex flex-col gap-4">
        {STAGES.map((s, i) => {
          const Icon = s.Icon;
          const isGate = i === 2;
          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="relative flex flex-col items-center">
                <div
                  className="rounded-full flex items-center justify-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: isGate ? "#CFF24E" : "#16161A",
                    color: isGate ? "#0E0E10" : "#F4F1E8",
                    border: "1px solid " + (isGate ? "#CFF24E" : "#2a2a30"),
                  }}
                >
                  <Icon size={16} />
                </div>
                {i < STAGES.length - 1 && (
                  <span
                    className="mt-1"
                    style={{ width: 1, flex: 1, minHeight: 28, background: "#2a2a30" }}
                  />
                )}
              </div>
              <div className="pb-4">
                <div
                  className="font-mono text-[10.5px]"
                  style={{ color: "#62615a", letterSpacing: ".08em" }}
                >
                  STAGE · {s.code}
                </div>
                <div className="text-[18px] font-semibold tk-tighter" style={{ color: "#F4F1E8" }}>
                  {s.name}
                </div>
                <p className="mt-0.5 text-[13px] leading-[1.45]" style={{ color: "#9c9a90" }}>
                  {s.blurb}
                </p>
                <div className="mt-1.5 font-mono text-[10.5px]" style={{ color: "#62615a" }}>
                  {s.micro}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden"
      style={{ background: "#0E0E10", color: "#F4F1E8" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 0%, transparent 75%)",
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 mb-14">
          <div>
            <div className="font-mono text-[11px]" style={{ color: "#80807a", letterSpacing: ".08em" }}>
              <span
                style={{
                  borderTop: "1px solid #2a2a30",
                  display: "inline-block",
                  width: 14,
                  verticalAlign: "middle",
                  marginRight: 8,
                }}
              />
              03 · The 10/90 trust model
            </div>
            <h2 className="mt-3 text-[44px] sm:text-[56px] font-semibold tk-tightest leading-[1.0]">
              Two payments.<br />
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#CFF24E" }}
              >
                Zero hostage situations.
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="text-[17px] leading-[1.5] tk-tight max-w-[520px]"
              style={{ color: "#bfbeb4" }}
            >
              The contract is the product. We don't capture a cent until the deliverable
              clears your acceptance — and you don't release the rest until you've seen the work.
              The agent fleet eats the risk; you ship the result.
            </p>
          </div>
        </div>

        <FlowRail />

        {/* Receipts row */}
        <div
          className="mt-16 grid md:grid-cols-3 gap-px overflow-hidden rounded-2xl"
          style={{ background: "#2a2a30", border: "1px solid #2a2a30" }}
        >
          {[
            { k: "You authorize", v: "$5.00", s: "10% of a $50 video edit", Icon: IconLock },
            { k: "Escrow holds", v: "$45.00", s: "until you press Accept", Icon: IconShield },
            { k: "On delivery", v: "$45.00", s: "releases · or 100% refund", Icon: IconHand },
          ].map((m, i) => (
            <div key={i} className="p-6" style={{ background: "#0E0E10" }}>
              <div className="flex items-center justify-between">
                <div
                  className="font-mono text-[10.5px]"
                  style={{ color: "#80807a", letterSpacing: ".08em" }}
                >
                  {m.k.toUpperCase()}
                </div>
                <m.Icon size={15} stroke={1.7} style={{ color: "#62615a" }} />
              </div>
              <div
                className="mt-2 text-[36px] font-semibold tk-tighter tnum"
                style={{ color: i === 2 ? "#CFF24E" : "#F4F1E8" }}
              >
                {m.v}
              </div>
              <div className="text-[13px]" style={{ color: "#9c9a90" }}>{m.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
