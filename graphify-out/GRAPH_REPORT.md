# Graph Report - C:/Code/gigvane  (2026-05-13)

## Corpus Check
- Corpus is ~24,586 words - fits in a single context window. You may not need a graph.

## Summary
- 110 nodes · 105 edges · 6 communities detected
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.76)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Icon Component Library|Icon Component Library]]
- [[_COMMUNITY_Design Tweaks Panel|Design Tweaks Panel]]
- [[_COMMUNITY_Project Setup & Docs|Project Setup & Docs]]
- [[_COMMUNITY_Blog Pages & Routes|Blog Pages & Routes]]
- [[_COMMUNITY_Agent & Claude Rules|Agent & Claude Rules]]
- [[_COMMUNITY_n8n Webhook API|n8n Webhook API]]

## God Nodes (most connected - your core abstractions)
1. `Gigvane Next.js Project` - 9 edges
2. `Next.js Agent Rules` - 4 edges
3. `Next.js Framework` - 4 edges
4. `Vercel Deployment Platform` - 3 edges
5. `App()` - 2 edges
6. `Ic()` - 2 edges
7. `IconArrowRight()` - 2 edges
8. `IconArrowUpRight()` - 2 edges
9. `IconCheck()` - 2 edges
10. `IconX()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `File/Document Icon (SVG)` --conceptually_related_to--> `Gigvane Next.js Project`  [INFERRED]
  public/file.svg → README.md
- `Globe/World Icon (SVG)` --conceptually_related_to--> `Gigvane Next.js Project`  [INFERRED]
  public/globe.svg → README.md
- `Browser Window Icon (SVG)` --conceptually_related_to--> `Gigvane Next.js Project`  [INFERRED]
  public/window.svg → README.md
- `Next.js Wordmark Logo (SVG)` --conceptually_related_to--> `Next.js Framework`  [INFERRED]
  public/next.svg → README.md
- `Vercel Triangle Logo (SVG)` --conceptually_related_to--> `Vercel Deployment Platform`  [INFERRED]
  public/vercel.svg → README.md

## Hyperedges (group relationships)
- **Gigvane Next.js + Vercel Deployment Stack** — readme_gigvane_project, readme_nextjs_framework, readme_vercel_platform, readme_create_next_app, readme_geist_font, readme_next_font [EXTRACTED 0.95]
- **Public Static SVG Assets** — svg_file_icon, svg_globe_icon, svg_next_logo, svg_vercel_logo, svg_window_icon [INFERRED 0.80]
- **Agent/Claude Instruction Documents** — agents_nextjs_agent_rules, claude_agents_reference, agents_breaking_changes_warning, agents_rationale_custom_nextjs [EXTRACTED 0.95]

## Communities

### Community 0 - "Icon Component Library"
Cohesion: 0.13
Nodes (19): Ic(), IconArrowRight(), IconArrowUpRight(), IconBolt(), IconBox(), IconCheck(), IconClock(), IconCommand() (+11 more)

### Community 1 - "Design Tweaks Panel"
Cohesion: 0.12
Nodes (2): App(), useTweaks()

### Community 2 - "Project Setup & Docs"
Cohesion: 0.18
Nodes (13): app/page.tsx Entry Point, create-next-app CLI Tool, Development Server, Geist Font Family, Gigvane Next.js Project, next/font Optimization, Next.js Framework, Vercel Deployment Platform (+5 more)

### Community 4 - "Blog Pages & Routes"
Cohesion: 0.4
Nodes (1): formatDate()

### Community 5 - "Agent & Claude Rules"
Cohesion: 0.5
Nodes (5): Breaking Changes Warning, Next.js Agent Rules, Next.js Dist Docs Guide Reference, Rationale: Use Custom Next.js Docs Not Training Data, CLAUDE.md Reference to AGENTS.md

### Community 8 - "n8n Webhook API"
Cohesion: 1.0
Nodes (2): POST(), slugify()

## Knowledge Gaps
- **8 isolated node(s):** `CLAUDE.md Reference to AGENTS.md`, `app/page.tsx Entry Point`, `Development Server`, `File/Document Icon (SVG)`, `Globe/World Icon (SVG)` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Design Tweaks Panel`** (17 nodes): `App()`, `app.jsx`, `tweaks-panel.jsx`, `TweakButton()`, `TweakColor()`, `TweakNumber()`, `TweakRadio()`, `TweakRow()`, `TweakSection()`, `TweakSelect()`, `TweakSlider()`, `TweaksPanel()`, `TweakText()`, `TweakToggle()`, `__TwkCheck()`, `__twkIsLight()`, `useTweaks()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Blog Pages & Routes`** (5 nodes): `formatDate()`, `generateMetadata()`, `generateStaticParams()`, `page.tsx`, `page.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `n8n Webhook API`** (3 nodes): `POST()`, `slugify()`, `route.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Next.js Framework` connect `Project Setup & Docs` to `Agent & Claude Rules`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `Next.js Agent Rules` connect `Agent & Claude Rules` to `Project Setup & Docs`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Gigvane Next.js Project` (e.g. with `File/Document Icon (SVG)` and `Globe/World Icon (SVG)`) actually correct?**
  _`Gigvane Next.js Project` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Next.js Framework` (e.g. with `Next.js Wordmark Logo (SVG)` and `Next.js Agent Rules`) actually correct?**
  _`Next.js Framework` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Vercel Deployment Platform` (e.g. with `Geist Font Family` and `Vercel Triangle Logo (SVG)`) actually correct?**
  _`Vercel Deployment Platform` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `CLAUDE.md Reference to AGENTS.md`, `app/page.tsx Entry Point`, `Development Server` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Icon Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._