// app.jsx — root composition + Tweaks
const { useState: useStateA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#CFF24E",
  "headlineStyle": "duotone",
  "density": "regular",
  "showMetricsRow": true,
  "darkFlow": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent to css var
  React.useEffect(() => {
    document.documentElement.style.setProperty('--voltage', t.accent);
    // Walk inline #CFF24E refs would be costly; we just override via override sheet:
    const id = '__gv_voltage_override';
    let el = document.getElementById(id);
    if (!el) { el = document.createElement('style'); el.id = id; document.head.appendChild(el); }
    // Override the most common hard-coded voltage colors
    el.textContent = `
      .chip-volt{background:${t.accent} !important}
      .btn-volt{background:${t.accent} !important}
      .pulse-volt{background:${t.accent} !important}
      .volt-under{background-image:linear-gradient(180deg,transparent 60%, ${t.accent} 60%, ${t.accent} 92%, transparent 92%) !important}
    `;
  }, [t.accent]);

  return (
    <div style={{ background:'var(--bone)' }}>
      <Navbar/>
      <Hero/>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10"><div className="section-rule"/></div>
      <Comparison/>
      <HowItWorks/>
      <WaitlistCTA/>

      <TweaksPanel title="Tweaks · Gigvane">
        <TweakSection label="Brand"/>
        <TweakColor label="Voltage accent" value={t.accent}
          options={['#CFF24E','#9EE493','#7EE7FF','#FF7A59','#E6E6E6']}
          onChange={(v) => setTweak('accent', v)}/>
        <TweakRadio label="Headline" value={t.headlineStyle}
          options={['duotone','plain']}
          onChange={(v) => setTweak('headlineStyle', v)}/>
        <TweakSection label="Density"/>
        <TweakRadio label="Layout" value={t.density}
          options={['compact','regular','comfy']}
          onChange={(v) => setTweak('density', v)}/>
        <TweakToggle label="Metrics row" value={t.showMetricsRow}
          onChange={(v) => setTweak('showMetricsRow', v)}/>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
