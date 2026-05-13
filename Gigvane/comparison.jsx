// comparison.jsx — Old Way vs New Way (3 examples)

const COMPARES = [
  {
    icon: IconVideo,
    name: 'Video editing',
    sub: '3-pack of vertical shorts with captions',
    human: { price: 300, time: '4 days', notes: ['Brief, then wait', '2 rounds of revisions', 'Invoice on net-30'] },
    gigvane: { price: 50, time: '2 hr', notes: ['Auto-spec\'d from your raw clips', 'Instant iterations · word-edit', 'Pay 10% to start, 90% on accept'] },
    speedX: 48, costPct: 83,
  },
  {
    icon: IconDatabase,
    name: 'B2B data scraping',
    sub: '500 verified lead rows',
    human: { price: 800, time: '1 week', notes: ['Sourced from stale lists', 'Manual verification (or not)', 'Black-box methodology'] },
    gigvane: { price: 75, time: '10 min', notes: ['Real-time pulled & verified', 'SMTP + LinkedIn check', 'Receipts attached per row'] },
    speedX: 1008, costPct: 91,
  },
  {
    icon: IconPen,
    name: 'SEO content cluster',
    sub: '1 pillar + 7 supporting posts',
    human: { price: 1500, time: '2 weeks', notes: ['Generic voice, takes 3 rewrites', 'Misses brand tone', 'Coordination tax'] },
    gigvane: { price: 150, time: '30 min', notes: ['Brand voice trained on your blog', 'Schema + internal-links wired', 'Originality > 96% verified'] },
    speedX: 672, costPct: 90,
  },
];

function CompareRow({ row, index }) {
  const Icon = row.icon;
  return (
    <div className="compare-row grid grid-cols-12 gap-0"
         style={{ borderTop: index === 0 ? 'none' : '1px solid var(--hair)' }}>
      {/* Task label */}
      <div className="col-span-12 lg:col-span-3 px-6 py-7 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center rounded-lg"
                style={{ width:32, height:32, background:'#0E0E10', color:'#F4F1E8' }}>
            <Icon size={16} stroke={1.7}/>
          </span>
          <span className="eyebrow">Task {String(index+1).padStart(2,'0')}</span>
        </div>
        <h3 className="text-[24px] font-semibold tk-tighter leading-[1.1]">{row.name}</h3>
        <p className="text-[13.5px]" style={{ color:'#6e6c63' }}>{row.sub}</p>

        {/* delta meter */}
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex items-baseline justify-between font-mono text-[10.5px]" style={{ color:'#6e6c63', letterSpacing:'.04em' }}>
            <span>SPEED-UP</span>
            <span className="tnum" style={{ color:'#0E0E10' }}>{row.speedX}×</span>
          </div>
          <div className="h-[6px] rounded-full overflow-hidden" style={{ background:'#EDE9DA' }}>
            <div style={{ width: Math.min(100, Math.log10(row.speedX)*33)+'%', height:'100%', background:'#0E0E10' }}/>
          </div>
          <div className="flex items-baseline justify-between font-mono text-[10.5px] mt-1" style={{ color:'#6e6c63', letterSpacing:'.04em' }}>
            <span>COST-CUT</span>
            <span className="tnum" style={{ color:'#0E0E10' }}>−{row.costPct}%</span>
          </div>
          <div className="h-[6px] rounded-full overflow-hidden" style={{ background:'#EDE9DA' }}>
            <div style={{ width: row.costPct+'%', height:'100%', background:'#CFF24E' }}/>
          </div>
        </div>
      </div>

      {/* OLD WAY */}
      <div className="col-span-12 lg:col-span-4 px-6 py-7"
           style={{ borderLeft:'1px solid var(--hair)' }}>
        <div className="flex items-center gap-2">
          <span className="chip-mono inline-flex items-center gap-1">
            <IconX size={11} stroke={2.2}/> OLD WAY
          </span>
          <span className="font-mono text-[10.5px]" style={{ color:'#9c9a90' }}>human freelancer</span>
        </div>
        <div className="mt-3 flex items-baseline gap-3">
          <div>
            <div className="eyebrow">Price</div>
            <div className="text-[34px] font-semibold tk-tighter tnum" style={{ color:'#0E0E10' }}>
              <span style={{ textDecoration:'line-through', textDecorationThickness:'1.5px', textDecorationColor:'#A0A099' }}>${row.human.price}</span>
            </div>
          </div>
          <div className="ml-4">
            <div className="eyebrow">Time</div>
            <div className="text-[18px] font-medium tk-tight" style={{ color:'#0E0E10' }}>{row.human.time}</div>
          </div>
        </div>
        <ul className="mt-4 flex flex-col gap-1.5">
          {row.human.notes.map((n,i) => (
            <li key={i} className="flex items-start gap-2 text-[13.5px]" style={{ color:'#56544c' }}>
              <span className="mt-[7px] shrink-0" style={{ width:5, height:5, borderRadius:9999, background:'#A0A099' }}/>
              {n}
            </li>
          ))}
        </ul>
      </div>

      {/* NEW WAY */}
      <div className="col-span-12 lg:col-span-5 px-6 py-7 relative"
           style={{ borderLeft:'1px solid var(--hair)', background:'#FBF9F2' }}>
        <div className="flex items-center gap-2">
          <span className="chip-volt inline-flex items-center gap-1">
            <IconCheck size={11} stroke={2.4}/> GIGVANE
          </span>
          <span className="font-mono text-[10.5px]" style={{ color:'#6b695f' }}>agent fleet · 10/90 gated</span>
        </div>
        <div className="mt-3 flex items-baseline gap-6">
          <div>
            <div className="eyebrow">Price</div>
            <div className="text-[44px] font-semibold tk-tightest tnum leading-none">
              ${row.gigvane.price}
            </div>
          </div>
          <div>
            <div className="eyebrow">Delivery</div>
            <div className="text-[24px] font-semibold tk-tighter tnum leading-none">{row.gigvane.time}</div>
          </div>
          <div className="hidden sm:block">
            <div className="eyebrow">10% to start</div>
            <div className="text-[18px] font-medium tk-tight tnum leading-none">
              ${(row.gigvane.price*0.1).toFixed(2)}
            </div>
          </div>
        </div>
        <ul className="mt-4 flex flex-col gap-1.5">
          {row.gigvane.notes.map((n,i) => (
            <li key={i} className="flex items-start gap-2 text-[13.5px]" style={{ color:'#2a2a2c' }}>
              <span className="mt-[5px] shrink-0" style={{ color:'#0E0E10' }}><IconCheck size={12} stroke={2.4}/></span>
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <section id="outcomes" data-screen-label="02 Outcomes" className="relative">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-24">
        {/* Section head */}
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 mb-12">
          <div>
            <div className="eyebrow flex items-center gap-2">
              <span style={{ width:14, height:1, background:'#6B695F' }}/>
              02 · Outcomes, priced
            </div>
            <h2 className="mt-3 text-[44px] sm:text-[56px] font-semibold tk-tightest leading-[1.0]">
              The slowest, most expensive part of your team — <span className="volt-under">replaced</span>.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[17px] leading-[1.5] tk-tight max-w-[520px]" style={{ color:'#3a3a3c' }}>
              Three categories. Same scope, same quality bar. One side is the world you know: briefs,
              Slack threads, invoices. The other is a price tag and a clock.
            </p>
          </div>
        </div>

        {/* Compare table */}
        <div className="rounded-3xl overflow-hidden"
             style={{ background:'#FFFFFF', border:'1px solid var(--hair)',
                      boxShadow:'0 1px 0 rgba(255,255,255,.6) inset, 0 16px 50px -22px rgba(14,14,16,.18)' }}>
          {COMPARES.map((row, i) => <CompareRow key={i} row={row} index={i}/>)}
        </div>

        {/* Footer summary line */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 px-2">
          <div className="font-mono text-[12px]" style={{ color:'#6b695f' }}>
            Across 14 task categories · avg. 38× faster · avg. 84% cheaper · sample n=12,400 jobs (closed-beta)
          </div>
          <a href="#waitlist" className="text-[13.5px] inline-flex items-center gap-1.5 hover:opacity-70">
            Get on the waitlist <IconArrowRight size={13}/>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Comparison });
