// flow.jsx — How It Works (10/90 Model) + Footer Manifesto + Bottom Waitlist CTA
const { useState: useStateF, useEffect: useEffectF } = React;

const STAGES = [
  { code:'01', name:'Intake',     icon: IconCommand,  blurb:'Drop a task in plain English. No briefs, no Loom walkthroughs.',          micro:'< 1s parse · 9 task families' },
  { code:'02', name:'SOW',        icon: IconFileText, blurb:'A Statement of Work renders instantly — scope, price, ETA, agent fleet.', micro:'auto-spec\'d · binding · editable' },
  { code:'03', name:'10% Gate',   icon: IconLock,     blurb:'Pay 10% to release the work. The remaining 90% is locked in escrow.',     micro:'stripe · refundable · audited' },
  { code:'04', name:'Execution',  icon: IconCpu,      blurb:'Specialized agents run in parallel. You watch a live pipeline, not a Trello board.', micro:'real-time logs · word-edits · alts' },
  { code:'05', name:'Delivery',   icon: IconBox,      blurb:'Accept the work and the 90% releases. Reject it and the 90% never leaves.',  micro:'90% on accept · 100% refund on reject' },
];

function FlowRail() {
  // Animate a "money packet" moving across the rail
  const [t, setT] = useStateF(0);
  useEffectF(() => {
    let raf, start;
    const loop = (ts) => {
      if (!start) start = ts;
      setT(((ts - start) / 6000) % 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Money packet x position across the rail (0–1)
  // Phase 0–0.35: 10% packet (voltage) crosses gate 03 onward
  // Phase 0.35–0.7: nothing (escrow held)
  // Phase 0.7–1: 90% packet (voltage) releases at 05 back to fleet
  const packets = [
    { from: 0.0, to: 0.40, label:'10%', color:'#CFF24E', size: 'sm' },
    { from: 0.55, to: 1.0, label:'90%', color:'#CFF24E', size: 'lg' },
  ];

  return (
    <div className="relative">
      {/* desktop rail */}
      <div className="hidden md:block">
        <div className="relative" style={{ height: 320 }}>
          {/* baseline rail */}
          <div className="absolute left-[5%] right-[5%]" style={{ top: 152, height: 1, background:'#26262c' }}/>
          <div className="absolute left-[5%] right-[5%] flex justify-between" style={{ top: 142 }}>
            {STAGES.map((_, i) => (
              <span key={i} style={{ width:1, height:21, background:'#26262c' }}/>
            ))}
          </div>

          {/* moving packets */}
          {packets.map((p, idx) => {
            const inSpan = t >= p.from && t <= p.to;
            const local = inSpan ? (t - p.from) / (p.to - p.from) : 0;
            const xPct = 5 + local * 90; // map to 5% – 95%
            return inSpan ? (
              <div key={idx} className="absolute" style={{ left: `${xPct}%`, top: 145, transform:'translate(-50%,-50%)' }}>
                <div className="font-mono inline-flex items-center gap-1 px-2 py-[2px] rounded-full"
                     style={{ fontSize:10, background:p.color, color:'#0E0E10', boxShadow:'0 0 18px rgba(207,242,78,.4)' }}>
                  <IconDollar size={10} stroke={2.4}/>{p.label}
                </div>
              </div>
            ) : null;
          })}

          {/* stage nodes */}
          <div className="absolute left-[5%] right-[5%] flex justify-between" style={{ top: 0 }}>
            {STAGES.map((s, i) => {
              const Icon = s.icon;
              const isGate = i === 2;
              const isDelivery = i === 4;
              return (
                <div key={i} className="flex flex-col items-center" style={{ width: 200 }}>
                  {/* upper card (label) */}
                  <div className="text-center mb-2 h-[120px] flex flex-col items-center justify-end">
                    <div className="font-mono text-[10.5px] mb-1" style={{ color:'#62615a', letterSpacing:'.08em' }}>STAGE · {s.code}</div>
                    <div className="text-[19px] font-semibold tk-tighter" style={{ color:'#F4F1E8' }}>{s.name}</div>
                    <p className="mt-1 text-[12.5px] leading-[1.45] px-2" style={{ color:'#9c9a90' }}>{s.blurb}</p>
                  </div>
                  {/* dot/node */}
                  <div className="relative" style={{ width:44, height:44 }}>
                    <div className="absolute inset-0 rounded-full flex items-center justify-center"
                         style={{
                           background: isGate ? '#CFF24E' : '#16161A',
                           border:'1px solid ' + (isGate ? '#CFF24E' : '#2a2a30'),
                           color: isGate ? '#0E0E10' : '#F4F1E8',
                           boxShadow: isGate ? '0 0 24px rgba(207,242,78,.35)' : 'none',
                         }}>
                      <Icon size={18} stroke={1.9}/>
                    </div>
                    {isGate && (
                      <span className="absolute -top-2 -right-2 chip-mono"
                            style={{ background:'#0E0E10', color:'#CFF24E', borderColor:'#2a2a30', fontSize:9 }}>GATE</span>
                    )}
                    {isDelivery && (
                      <span className="absolute -top-2 -right-2 chip-mono"
                            style={{ background:'#0E0E10', color:'#F4F1E8', borderColor:'#2a2a30', fontSize:9 }}>ACCEPT</span>
                    )}
                  </div>
                  {/* micro */}
                  <div className="mt-3 font-mono text-[10.5px] text-center" style={{ color:'#62615a', letterSpacing:'.04em' }}>
                    {s.micro}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* mobile rail */}
      <div className="md:hidden flex flex-col gap-4">
        {STAGES.map((s, i) => {
          const Icon = s.icon;
          const isGate = i === 2;
          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full flex items-center justify-center"
                     style={{ width:40, height:40,
                              background: isGate ? '#CFF24E' : '#16161A',
                              color: isGate ? '#0E0E10' : '#F4F1E8',
                              border:'1px solid ' + (isGate ? '#CFF24E' : '#2a2a30') }}>
                  <Icon size={16}/>
                </div>
                {i < STAGES.length - 1 && (
                  <span className="mt-1" style={{ width:1, flex:1, minHeight: 28, background:'#2a2a30' }}/>
                )}
              </div>
              <div className="pb-4">
                <div className="font-mono text-[10.5px]" style={{ color:'#62615a', letterSpacing:'.08em' }}>STAGE · {s.code}</div>
                <div className="text-[18px] font-semibold tk-tighter" style={{ color:'#F4F1E8' }}>{s.name}</div>
                <p className="mt-0.5 text-[13px] leading-[1.45]" style={{ color:'#9c9a90' }}>{s.blurb}</p>
                <div className="mt-1.5 font-mono text-[10.5px]" style={{ color:'#62615a' }}>{s.micro}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" data-screen-label="03 How it works" className="relative overflow-hidden"
             style={{ background:'#0E0E10', color:'#F4F1E8' }}>
      {/* subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
        backgroundSize:'56px 56px',
        maskImage:'radial-gradient(ellipse at 50% 30%, black 0%, transparent 75%)',
      }}/>
      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 mb-14">
          <div>
            <div className="font-mono text-[11px]" style={{ color:'#80807a', letterSpacing:'.08em' }}>
              <span style={{ borderTop:'1px solid #2a2a30', display:'inline-block', width:14, verticalAlign:'middle', marginRight:8 }}/>
              03 · The 10/90 trust model
            </div>
            <h2 className="mt-3 text-[44px] sm:text-[56px] font-semibold tk-tightest leading-[1.0]">
              Two payments.<br/>
              <span className="italic font-normal" style={{ fontFamily:'"Instrument Serif", serif', color:'#CFF24E' }}>
                Zero hostage situations.
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[17px] leading-[1.5] tk-tight max-w-[520px]" style={{ color:'#bfbeb4' }}>
              The contract is the product. We don't capture a cent until the deliverable
              clears your acceptance — and you don't release the rest until you've seen the work.
              The agent fleet eats the risk; you ship the result.
            </p>
          </div>
        </div>

        <FlowRail/>

        {/* receipts row */}
        <div className="mt-16 grid md:grid-cols-3 gap-px overflow-hidden rounded-2xl"
             style={{ background:'#2a2a30', border:'1px solid #2a2a30' }}>
          {[
            { k:'You authorize', v:'$5.00', s:'10% of a $50 video edit', icon:IconLock },
            { k:'Escrow holds', v:'$45.00', s:'until you press Accept', icon:IconShield },
            { k:'On delivery', v:'$45.00', s:'releases · or 100% refund', icon:IconHand },
          ].map((m, i) => {
            const I = m.icon;
            return (
              <div key={i} className="p-6" style={{ background:'#0E0E10' }}>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10.5px]" style={{ color:'#80807a', letterSpacing:'.08em' }}>{m.k.toUpperCase()}</div>
                  <I size={15} stroke={1.7} style={{ color:'#62615a' }}/>
                </div>
                <div className="mt-2 text-[36px] font-semibold tk-tighter tnum" style={{ color: i === 2 ? '#CFF24E' : '#F4F1E8' }}>
                  {m.v}
                </div>
                <div className="text-[13px]" style={{ color:'#9c9a90' }}>{m.s}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Bottom CTA / Waitlist ───────────────────────────────────────────────
function WaitlistCTA() {
  const [email, setEmail] = useStateF('');
  const [submitted, setSubmitted] = useStateF(false);
  const [pos, setPos] = useStateF(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    // pseudo-random ticket
    const n = 4000 + Math.floor(Math.random() * 800);
    setPos(n);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" data-screen-label="04 Waitlist" className="relative">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-24">
        <div className="relative rounded-[28px] overflow-hidden"
             style={{ background:'#0E0E10', color:'#F4F1E8',
                      boxShadow:'0 30px 80px -30px rgba(14,14,16,.45)' }}>
          {/* voltage corner */}
          <div className="absolute -right-20 -top-20 rounded-full"
               style={{ width: 360, height: 360, background:'radial-gradient(closest-side, rgba(207,242,78,.22), rgba(207,242,78,0) 70%)' }}/>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage:'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
            backgroundSize:'48px 48px',
            maskImage:'radial-gradient(ellipse at 20% 80%, black 0%, transparent 70%)',
          }}/>

          <div className="relative px-8 sm:px-14 py-16 sm:py-24 grid lg:grid-cols-[1.3fr,1fr] gap-12 items-end">
            <div>
              <div className="font-mono text-[11px] inline-flex items-center gap-2" style={{ color:'#CFF24E', letterSpacing:'.08em' }}>
                <span className="pulse-volt"/> CLOSED BETA · WAVE 03 · MAY 2026
              </div>
              <h2 className="mt-4 text-[48px] sm:text-[72px] font-semibold tk-tightest leading-[0.98]">
                Outcomes are<br/>
                <span className="italic font-normal" style={{ fontFamily:'"Instrument Serif", serif', color:'#CFF24E' }}>
                  the new line item.
                </span>
              </h2>
              <p className="mt-5 text-[17px] leading-[1.5] tk-tight max-w-[520px]" style={{ color:'#bfbeb4' }}>
                We let in 200 teams a week. Founders, ops leads, and growth heads jump the line.
                You'll get a private intake link, a $50 credit, and ten minutes with the team that's
                wiring this up.
              </p>
            </div>

            <div className="w-full">
              {!submitted ? (
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                  <label className="font-mono text-[10.5px]" style={{ color:'#80807a', letterSpacing:'.08em' }}>
                    WORK EMAIL
                  </label>
                  <div className="flex items-center rounded-full p-1.5"
                       style={{ background:'#16161A', border:'1px solid #2a2a30' }}>
                    <input
                      type="email" required value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ada@yourstartup.com"
                      className="flex-1 bg-transparent outline-none px-4 text-[15px]"
                      style={{ color:'#F4F1E8' }}
                    />
                    <button type="submit"
                            className="btn-volt inline-flex items-center gap-1.5 shrink-0">
                      Request access <IconArrowRight size={14}/>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[10.5px]" style={{ color:'#62615a', letterSpacing:'.04em' }}>
                    <span className="inline-flex items-center gap-1"><IconShield size={11}/> SOC-2 IN-PROGRESS</span>
                    <span>·</span>
                    <span>NO SPAM · UNSUB ANYTIME</span>
                  </div>
                </form>
              ) : (
                <div className="rise flex flex-col gap-4 rounded-2xl p-6"
                     style={{ background:'#16161A', border:'1px solid #2a2a30' }}>
                  <div className="flex items-center gap-2">
                    <span className="chip-volt inline-flex items-center gap-1">
                      <IconCheck size={11} stroke={2.4}/> YOU'RE IN
                    </span>
                    <span className="font-mono text-[10.5px]" style={{ color:'#80807a' }}>WAVE 03 · POSITION</span>
                  </div>
                  <div className="text-[60px] font-semibold tk-tightest tnum leading-none" style={{ color:'#CFF24E' }}>
                    #{pos}
                  </div>
                  <div className="text-[14px]" style={{ color:'#bfbeb4' }}>
                    Confirmation sent to <span className="font-mono text-[13px]" style={{ color:'#F4F1E8' }}>{email}</span>.
                    We'll route you a private intake link within 48 hours.
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => { setSubmitted(false); setEmail(''); }} className="btn-ghost"
                            style={{ borderColor:'#2a2a30', color:'#F4F1E8' }}>
                      Use a different email
                    </button>
                    <a className="text-[13.5px] underline opacity-75" href="#" style={{ color:'#bfbeb4' }}>Skip the line →</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer / Manifesto strip */}
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
              <span className="inline-block rounded-full" style={{ width:24, height:24, background:'#0E0E10' }}/>
              <span className="text-[13px]" style={{ color:'#3a3a3c' }}>
                — Signed, the Gigvane founding team
              </span>
            </div>
          </div>
          <div className="flex lg:justify-end items-end">
            <div className="flex flex-col gap-2 text-[13.5px]" style={{ color:'#3a3a3c' }}>
              <Wordmark size={22}/>
              <div className="font-mono text-[11px] mt-1" style={{ color:'#6b695f', letterSpacing:'.04em' }}>
                A BLACK-BOX AGENCY · INC. DELAWARE · MMXXVI
              </div>
              <div className="flex gap-4 mt-2">
                <a className="hover:opacity-70">Privacy</a>
                <a className="hover:opacity-70">Terms</a>
                <a className="hover:opacity-70">Security</a>
                <a className="hover:opacity-70">Status</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HowItWorks, WaitlistCTA });
