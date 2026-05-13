"use client";

import { useState } from "react";
import { IconArrowRight, IconCheck, IconShield } from "./icons";
import { Wordmark } from "./navbar";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pos, setPos] = useState<number | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    const n = 4000 + Math.floor(Math.random() * 800);
    setPos(n);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-24">
        {/* Main CTA card */}
        <div
          className="relative rounded-[28px] overflow-hidden"
          style={{ background: "#0E0E10", color: "#F4F1E8", boxShadow: "0 30px 80px -30px rgba(14,14,16,.45)" }}
        >
          {/* Voltage corner glow */}
          <div
            className="absolute -right-20 -top-20 rounded-full"
            style={{
              width: 360,
              height: 360,
              background: "radial-gradient(closest-side, rgba(207,242,78,.22), rgba(207,242,78,0) 70%)",
            }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse at 20% 80%, black 0%, transparent 70%)",
            }}
          />

          <div className="relative px-8 sm:px-14 py-16 sm:py-24 grid lg:grid-cols-[1.3fr,1fr] gap-12 items-end">
            <div>
              <div
                className="font-mono text-[11px] inline-flex items-center gap-2"
                style={{ color: "#CFF24E", letterSpacing: ".08em" }}
              >
                <span className="pulse-volt" /> CLOSED BETA · WAVE 03 · MAY 2026
              </div>
              <h2 className="mt-4 text-[48px] sm:text-[72px] font-semibold tk-tightest leading-[0.98]">
                Outcomes are<br />
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "var(--font-instrument-serif), serif", color: "#CFF24E" }}
                >
                  the new line item.
                </span>
              </h2>
              <p
                className="mt-5 text-[17px] leading-[1.5] tk-tight max-w-[520px]"
                style={{ color: "#bfbeb4" }}
              >
                We let in 200 teams a week. Founders, ops leads, and growth heads jump the line.
                You'll get a private intake link, a $50 credit, and ten minutes with the team that's
                wiring this up.
              </p>
            </div>

            <div className="w-full">
              {!submitted ? (
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                  <label
                    className="font-mono text-[10.5px]"
                    style={{ color: "#80807a", letterSpacing: ".08em" }}
                  >
                    WORK EMAIL
                  </label>
                  <div
                    className="flex items-center rounded-full p-1.5"
                    style={{ background: "#16161A", border: "1px solid #2a2a30" }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ada@yourstartup.com"
                      className="flex-1 bg-transparent outline-none px-4 text-[15px]"
                      style={{ color: "#F4F1E8" }}
                    />
                    <button type="submit" className="btn-volt shrink-0 gap-1.5">
                      Request access <IconArrowRight size={14} />
                    </button>
                  </div>
                  <div
                    className="flex items-center gap-3 font-mono text-[10.5px]"
                    style={{ color: "#62615a", letterSpacing: ".04em" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <IconShield size={11} /> SOC-2 IN-PROGRESS
                    </span>
                    <span>·</span>
                    <span>NO SPAM · UNSUB ANYTIME</span>
                  </div>
                </form>
              ) : (
                <div
                  className="rise flex flex-col gap-4 rounded-2xl p-6"
                  style={{ background: "#16161A", border: "1px solid #2a2a30" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="chip-volt inline-flex items-center gap-1">
                      <IconCheck size={11} stroke={2.4} /> YOU&apos;RE IN
                    </span>
                    <span className="font-mono text-[10.5px]" style={{ color: "#80807a" }}>
                      WAVE 03 · POSITION
                    </span>
                  </div>
                  <div
                    className="text-[60px] font-semibold tk-tightest tnum leading-none"
                    style={{ color: "#CFF24E" }}
                  >
                    #{pos}
                  </div>
                  <div className="text-[14px]" style={{ color: "#bfbeb4" }}>
                    Confirmation sent to{" "}
                    <span className="font-mono text-[13px]" style={{ color: "#F4F1E8" }}>
                      {email}
                    </span>
                    . We'll route you a private intake link within 48 hours.
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => { setSubmitted(false); setEmail(""); }}
                      className="btn-ghost"
                      style={{ borderColor: "#2a2a30", color: "#F4F1E8" }}
                    >
                      Use a different email
                    </button>
                    <a className="text-[13.5px] underline opacity-75" href="#" style={{ color: "#bfbeb4" }}>
                      Skip the line →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer / Manifesto */}
        <div id="manifesto" className="mt-16 grid lg:grid-cols-[1.4fr,1fr] gap-10 px-2">
          <div>
            <div className="eyebrow">Manifesto · v.0.1</div>
            <p className="mt-3 text-[20px] sm:text-[22px] leading-[1.4] tk-tight max-w-[680px]">
              The unit of work used to be the hour. Then it was the project. The next unit is
              the <span className="volt-under">outcome</span> — atomic, priced, gated by acceptance.
              We didn't build another marketplace of people. We built the infrastructure that
              makes the marketplace unnecessary.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span
                className="inline-block rounded-full"
                style={{ width: 24, height: 24, background: "#0E0E10" }}
              />
              <span className="text-[13px]" style={{ color: "#3a3a3c" }}>
                — Signed, the Gigvane founding team
              </span>
            </div>
          </div>
          <div className="flex lg:justify-end items-end">
            <div className="flex flex-col gap-2 text-[13.5px]" style={{ color: "#3a3a3c" }}>
              <Wordmark size={22} />
              <div
                className="font-mono text-[11px] mt-1"
                style={{ color: "#6b695f", letterSpacing: ".04em" }}
              >
                A BLACK-BOX AGENCY · INC. DELAWARE · MMXXVI
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:opacity-70">Privacy</a>
                <a href="#" className="hover:opacity-70">Terms</a>
                <a href="#" className="hover:opacity-70">Security</a>
                <a href="#" className="hover:opacity-70">Status</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
