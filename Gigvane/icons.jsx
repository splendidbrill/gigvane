// icons.jsx — minimal inline icon set (lucide-style strokes)
// Avoids loading lucide-react via esm; keeps things deterministic.

const Ic = ({ d, size = 16, stroke = 1.6, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" {...p}>
    {d}
  </svg>
);

const IconArrowRight = (p) => <Ic {...p} d={<><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>}/>;
const IconArrowUpRight = (p) => <Ic {...p} d={<><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>}/>;
const IconSpark = (p) => <Ic {...p} d={<><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m5.6 5.6 2.8 2.8"/><path d="m15.6 15.6 2.8 2.8"/><path d="m5.6 18.4 2.8-2.8"/><path d="m15.6 8.4 2.8-2.8"/></>}/>;
const IconCheck = (p) => <Ic {...p} d={<path d="M5 13 9 17 19 7"/>}/>;
const IconX = (p) => <Ic {...p} d={<><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>}/>;
const IconLock = (p) => <Ic {...p} d={<><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>}/>;
const IconBolt = (p) => <Ic {...p} d={<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>}/>;
const IconClock = (p) => <Ic {...p} d={<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>}/>;
const IconShield = (p) => <Ic {...p} d={<><path d="M12 3 4 6v6c0 4.5 3.2 8.5 8 9 4.8-.5 8-4.5 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></>}/>;
const IconCommand = (p) => <Ic {...p} d={<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6z"/>}/>;
const IconCorner = (p) => <Ic {...p} d={<><path d="M9 14 4 9l5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></>}/>;
const IconFileText = (p) => <Ic {...p} d={<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h4"/></>}/>;
const IconDollar = (p) => <Ic {...p} d={<><path d="M12 3v18"/><path d="M16 7H10a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H8"/></>}/>;
const IconBox = (p) => <Ic {...p} d={<><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/></>}/>;
const IconRoute = (p) => <Ic {...p} d={<><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h7"/></>}/>;
const IconCpu = (p) => <Ic {...p} d={<><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></>}/>;
const IconHand = (p) => <Ic {...p} d={<><path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 7.5V4a1.5 1.5 0 0 1 3 0v7.5"/><path d="M15 7.5a1.5 1.5 0 0 1 3 0V14"/><path d="M6 12.5V9a1.5 1.5 0 0 1 3 0V11"/><path d="M18 13.5c0 5-3 8.5-6 8.5s-6-2-7-6c-.5-2-.5-3 .5-4"/></>}/>;
const IconVideo = (p) => <Ic {...p} d={<><rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></>}/>;
const IconDatabase = (p) => <Ic {...p} d={<><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>}/>;
const IconPen = (p) => <Ic {...p} d={<><path d="m12 19 7-7-3-3-7 7-1 4 4-1z"/><path d="m18 13-3-3"/></>}/>;
const IconCircle = (p) => <Ic {...p} d={<circle cx="12" cy="12" r="9"/>}/>;
const IconMinus = (p) => <Ic {...p} d={<path d="M5 12h14"/>}/>;
const IconWand = (p) => <Ic {...p} d={<><path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M15 9.5 16.2 10.7M17.8 6.2 19 5M15 9.5 16.2 8.3"/><path d="M3 21 12 12l3 3-9 9z"/></>}/>;

Object.assign(window, {
  IconArrowRight, IconArrowUpRight, IconSpark, IconCheck, IconX, IconLock,
  IconBolt, IconClock, IconShield, IconCommand, IconCorner, IconFileText,
  IconDollar, IconBox, IconRoute, IconCpu, IconHand, IconVideo, IconDatabase,
  IconPen, IconCircle, IconMinus, IconWand,
});
