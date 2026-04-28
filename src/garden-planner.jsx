import { useState } from "react";

/* ─── THEME ─────────────────────────────────────────────── */
const T = {
  bg: "#0f1a0f",
  card: "#162016",
  cardHover: "#1d2e1d",
  border: "#2a3d2a",
  accent: "#7ec850",
  accentSoft: "#4a7a2a",
  gold: "#d4a843",
  coral: "#e07050",
  lavender: "#9b7ec8",
  blue: "#5b9bd4",
  muted: "#5a7a5a",
  text: "#d8ecd8",
  textSoft: "#8aab8a",
  readyGlow: "rgba(126,200,80,0.18)",
};

/* ─── DATA ───────────────────────────────────────────────── */
const plants = [
  // ── LAVENDER ──────────────────────────────────────────────
  {
    id: "lav-phenomenal-lg",
    name: "Lavender 'Phenomenal'",
    latin: "Lavandula × intermedia",
    qty: 5, potSize: "large",
    category: "Lavender",
    bloom: "Jun–Aug", bloomColor: T.lavender,
    sun: "Full Sun", sunHours: "8+", shade: false,
    height: "24–36\"", spread: "24–30\"",
    soil: "Well-drained gritty/sandy, poor-average. Mound essential.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Hardiest lavandin for NJ. Crown must stay dry. Space 30\".",
    tags: ["fragrant", "pollinator", "deer-resistant"],
  },
  {
    id: "lav-sm",
    name: "Lavender Mix (sm)",
    latin: "Lavandula × intermedia",
    qty: 6, potSize: "small",
    category: "Lavender",
    bloom: "Jun–Aug", bloomColor: T.lavender,
    sun: "Full Sun", sunHours: "8+", shade: false,
    height: "20–36\"", spread: "20–30\"",
    soil: "Well-drained gritty/sandy. Mound or raised bed.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Mix of Phenomenal, Grosso & Spectacular. Same care as large.",
    tags: ["fragrant", "pollinator", "deer-resistant"],
  },

  // ── AGASTACHE (large pots) ─────────────────────────────────
  {
    id: "aga-blue-boa",
    name: "Agastache 'Blue Boa'",
    latin: "Agastache hybrid",
    qty: 1, potSize: "large (established)",
    category: "Agastache",
    bloom: "Jun–Sep", bloomColor: T.blue,
    sun: "Full–Part Sun", sunHours: "6+", shade: false,
    height: "24–36\"", spread: "18–24\"",
    soil: "Well-drained, average. Tolerates dry once established.",
    container: true, readyNow: true,
    spreadType: "Clump", spreadRate: "none",
    notes: "Already large & established in blue container. Deer resistant. Top performer for bees.",
    tags: ["pollinator", "deer-resistant", "hummingbird", "fragrant"],
  },
  {
    id: "aga-foen-lg",
    name: "Anise Hyssop",
    latin: "Agastache foeniculum",
    qty: 1, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Sep", bloomColor: T.blue,
    sun: "Full–Part Sun", sunHours: "6+", shade: false,
    height: "24–48\"", spread: "18–24\"",
    soil: "Well-drained, poor to average. Drought tolerant.",
    container: true, readyNow: false,
    spreadType: "Reseeds", spreadRate: "moderate",
    notes: "Native species. Licorice-scented foliage. Self-seeds readily — deadhead to control.",
    tags: ["native", "pollinator", "fragrant", "edible"],
  },
  {
    id: "aga-foen-sm",
    name: "Anise Hyssop 'Blue Giant'",
    latin: "Agastache foeniculum",
    qty: 3, potSize: "small",
    category: "Agastache",
    bloom: "Jun–Sep", bloomColor: T.blue,
    sun: "Full–Part Sun", sunHours: "6+", shade: false,
    height: "36–48\"", spread: "18–24\"",
    soil: "Well-drained, poor to average. Drought tolerant.",
    container: true, readyNow: false,
    spreadType: "Reseeds", spreadRate: "moderate",
    notes: "Native. Extra tall selection. Strong pollinator magnet.",
    tags: ["native", "pollinator", "fragrant"],
  },
  {
    id: "aga-poquito-orange",
    name: "Agastache 'Poquito Orange'",
    latin: "Agastache hybrid",
    qty: 1, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Oct", bloomColor: T.coral,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "12–18\"", spread: "12–15\"",
    soil: "Well-drained, average to dry. Heat tolerant.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Dwarf — perfect for container edges. Hummingbird magnet. Bright orange spikes.",
    tags: ["pollinator", "hummingbird", "deer-resistant", "compact"],
  },
  {
    id: "aga-poquito-lav",
    name: "Agastache 'Poquito Lavender'",
    latin: "Agastache hybrid",
    qty: 1, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Oct", bloomColor: T.lavender,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "12–18\"", spread: "12–15\"",
    soil: "Well-drained, average to dry.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Dwarf, pairs beautifully with Poquito Orange in same container.",
    tags: ["pollinator", "hummingbird", "deer-resistant", "compact"],
  },
  {
    id: "aga-morello",
    name: "Agastache 'Morello'",
    latin: "Agastache hybrid",
    qty: 2, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Sep", bloomColor: "#c0507a",
    sun: "Full–Part Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "16–20\"",
    soil: "Well-drained, average.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Deep cherry-red spikes. Great mid-height container plant.",
    tags: ["pollinator", "deer-resistant", "hummingbird"],
  },
  {
    id: "aga-purple-haze",
    name: "Agastache 'Purple Haze'",
    latin: "Agastache hybrid",
    qty: 2, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Sep", bloomColor: T.lavender,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "24–30\"", spread: "18–24\"",
    soil: "Well-drained, average to dry.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Masses of purple-blue spikes. Long bloomer, drought tolerant once set.",
    tags: ["pollinator", "deer-resistant", "fragrant"],
  },
  {
    id: "aga-kudos-coral",
    name: "Agastache 'Kudos Coral'",
    latin: "Agastache hybrid",
    qty: 2, potSize: "large",
    category: "Agastache",
    bloom: "Jun–Oct", bloomColor: T.coral,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "14–18\"",
    soil: "Well-drained, average to dry.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Dwarf hummingbird mint. Dense coral spikes. Honey-mint scent. Excellent container size.",
    tags: ["pollinator", "hummingbird", "deer-resistant", "compact", "fragrant"],
  },

  // ── SALVIA ────────────────────────────────────────────────
  {
    id: "salvia-azure-snow",
    name: "Salvia 'Azure Snow'",
    latin: "Salvia nemorosa (Color Spires®)",
    qty: 1, potSize: "large",
    category: "Salvia",
    bloom: "May–Sep", bloomColor: T.blue,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–20\"", spread: "16–20\"",
    soil: "Well-drained, average. Drought tolerant once established.",
    container: true, readyNow: true,
    spreadType: "Clump", spreadRate: "none",
    notes: "Blue-white bicolor. Already blooming. Deadhead for repeat flushes all season.",
    tags: ["pollinator", "deer-resistant", "fragrant", "rebloomer"],
  },
  {
    id: "salvia-fashionista",
    name: "Salvia 'Fashionista Pink'",
    latin: "Salvia nemorosa (Fashionista®)",
    qty: 2, potSize: "large",
    category: "Salvia",
    bloom: "May–Sep", bloomColor: "#e080b0",
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "18–24\"",
    soil: "Well-drained, average. Drought tolerant.",
    container: true, readyNow: true,
    spreadType: "Clump", spreadRate: "none",
    notes: "Bold pink spikes, already blooming. Reblooms heavily after deadheading. Stunning in pots.",
    tags: ["pollinator", "deer-resistant", "rebloomer"],
  },

  // ── ECHINACEA ─────────────────────────────────────────────
  {
    id: "echi-pow-wow",
    name: "Echinacea 'Pow Wow Wildberry'",
    latin: "Echinacea purpurea",
    qty: 1, potSize: "large",
    category: "Echinacea",
    bloom: "Jun–Sep", bloomColor: "#c060a0",
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "18–24\"",
    soil: "Well-drained, average to dry. Very adaptable.",
    container: true, readyNow: true,
    spreadType: "Clump", spreadRate: "slow",
    notes: "Deep rosy-purple. Already blooming! Compact selection — ideal for containers.",
    tags: ["native", "pollinator", "bird-seed", "deer-resistant"],
  },
  {
    id: "echi-purpurea",
    name: "Purple Coneflower",
    latin: "Echinacea purpurea",
    qty: 1, potSize: "large",
    category: "Echinacea",
    bloom: "Jun–Sep", bloomColor: "#b060a0",
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "24–36\"", spread: "18–24\"",
    soil: "Well-drained, average. Very adaptable.",
    container: true, readyNow: false,
    spreadType: "Clump + Reseeds", spreadRate: "slow",
    notes: "Species form. Larger than Pow Wow. Self-seeds modestly. Goldfinches love the seedheads.",
    tags: ["native", "pollinator", "bird-seed"],
  },
  {
    id: "echi-pallida",
    name: "Pale Purple Coneflower",
    latin: "Echinacea pallida",
    qty: 1, potSize: "small",
    category: "Echinacea",
    bloom: "Jun–Jul", bloomColor: "#c0a0c0",
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "24–36\"", spread: "12–18\"",
    soil: "Well-drained, lean to average. Very drought tolerant.",
    container: false, readyNow: false,
    spreadType: "Clump", spreadRate: "slow",
    notes: "Drooping pale pink petals. More slender than purpurea. Best planted out — gets tall.",
    tags: ["native", "pollinator", "deer-resistant"],
  },

  // ── NATIVE COMPOSITES (small pots) ────────────────────────
  {
    id: "heliopsis",
    name: "Ox Eye Sunflower",
    latin: "Heliopsis helianthoides",
    qty: 2, potSize: "small",
    category: "Native Composite",
    bloom: "Jun–Sep", bloomColor: T.gold,
    sun: "Full–Part Sun", sunHours: "4+", shade: true,
    height: "36–60\"", spread: "24–36\"",
    soil: "Adaptable — clay, sand, average. Tolerates moist.",
    container: false, readyNow: false,
    spreadType: "Clump + Reseeds", spreadRate: "moderate",
    notes: "Bright yellow. Tolerates part shade — useful in mixed zones. Butterflies, wasps, bees.",
    tags: ["native", "pollinator", "shade-tolerant", "butterfly-host"],
  },
  {
    id: "helianthus",
    name: "Swamp Sunflower",
    latin: "Helianthus angustifolius",
    qty: 2, potSize: "small",
    category: "Native Composite",
    bloom: "Sep–Nov", bloomColor: T.gold,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "60–84\"", spread: "48\"",
    soil: "Moist to wet preferred. Tolerates clay.",
    container: false, readyNow: false,
    spreadType: "Rhizome", spreadRate: "aggressive",
    notes: "⚠️ Aggressive spreader — Zone 4 only. Monarch nectar plant. Late season goldfinch magnet.",
    tags: ["native", "pollinator", "monarch", "bird-seed"],
  },
  {
    id: "rudbeckia",
    name: "Cutleaf Coneflower",
    latin: "Rudbeckia laciniata",
    qty: 2, potSize: "small",
    category: "Native Composite",
    bloom: "Jul–Oct", bloomColor: T.gold,
    sun: "Part–Full Sun", sunHours: "4+", shade: true,
    height: "60–108\"", spread: "48\"",
    soil: "Moist preferred. Tolerates clay and shade.",
    container: false, readyNow: false,
    spreadType: "Rhizome + Reseeds", spreadRate: "aggressive",
    notes: "⚠️ Can reach 9ft. Zone 1 naturalization only. Shade tolerant — great for back of Zone 5.",
    tags: ["native", "pollinator", "shade-tolerant"],
  },
  {
    id: "ratibida",
    name: "Grey-headed Coneflower",
    latin: "Ratibida pinnata",
    qty: 2, potSize: "small",
    category: "Native Composite",
    bloom: "Jul–Sep", bloomColor: T.gold,
    sun: "Full–Part Sun", sunHours: "5+", shade: false,
    height: "48–60\"", spread: "18–24\"",
    soil: "Average-dry, well-drained. Tolerates poor soil.",
    container: false, readyNow: false,
    spreadType: "Reseeds", spreadRate: "moderate",
    notes: "Drooping yellow petals, tall cone. Deer/rabbit resistant. Seeds chewable for pain relief.",
    tags: ["native", "pollinator", "deer-resistant", "edible"],
  },
  {
    id: "coreopsis-tripteris",
    name: "Tall Coreopsis",
    latin: "Coreopsis tripteris",
    qty: 2, potSize: "small",
    category: "Native Composite",
    bloom: "Jul–Oct", bloomColor: T.gold,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "84–108\"", spread: "36–48\"",
    soil: "Well-drained, dry to average. Poor soil fine.",
    container: false, readyNow: false,
    spreadType: "Clump + Reseeds", spreadRate: "slow",
    notes: "7–9ft tall — back of border only. Up to 22 bee species use Coreopsis genus. Deep roots prevent erosion.",
    tags: ["native", "pollinator", "butterfly-host", "deer-resistant"],
  },
  {
    id: "coreopsis-jethro",
    name: "Coreopsis 'Jethro Tull'",
    latin: "Coreopsis hybrid",
    qty: 1, potSize: "large",
    category: "Native Composite",
    bloom: "Jun–Sep", bloomColor: T.gold,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "18–24\"",
    soil: "Well-drained, average to dry.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Compact cultivar — excellent container size. Fluted yellow petals. Deadhead to rebloom.",
    tags: ["pollinator", "compact", "rebloomer"],
  },

  // ── ASTERS ────────────────────────────────────────────────
  {
    id: "sym-cordifolium",
    name: "Blue Wood Aster",
    latin: "Symphyotrichum cordifolium",
    qty: 2, potSize: "small",
    category: "Aster",
    bloom: "Sep–Nov", bloomColor: "#8ab0e0",
    sun: "Part–Full Sun", sunHours: "3+", shade: true,
    height: "12–48\"", spread: "24\"",
    soil: "Well-drained, average. Tolerates dry shade.",
    container: false, readyNow: false,
    spreadType: "Clump + Reseeds", spreadRate: "moderate",
    notes: "Host for Pearl Crescent butterfly. 112 moth/butterfly species use asters. Best for Zone 5 shade.",
    tags: ["native", "pollinator", "shade-tolerant", "butterfly-host", "bird-seed"],
  },
  {
    id: "sym-woods-pink",
    name: "Aster 'Woods Pink'",
    latin: "Symphyotrichum",
    qty: 2, potSize: "large",
    category: "Aster",
    bloom: "Sep–Nov", bloomColor: "#e090b0",
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "12–18\"", spread: "18\"",
    soil: "Well-drained, average.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "slow",
    notes: "Compact pink aster — great fall container color. Pairs with salvias early, takes over late season.",
    tags: ["pollinator", "compact", "fall-color"],
  },

  // ── GOLDENROD & RELATIVES ─────────────────────────────────
  {
    id: "solidago-flexicaulis",
    name: "Zig-Zag Goldenrod",
    latin: "Solidago flexicaulis",
    qty: 8, potSize: "large",
    category: "Goldenrod",
    bloom: "Aug–Oct", bloomColor: T.gold,
    sun: "Part–Full Shade", sunHours: "2–4", shade: true,
    height: "24–36\"", spread: "18–24\"",
    soil: "Moist, humus-rich. Woodland conditions.",
    container: false, readyNow: false,
    spreadType: "Rhizome", spreadRate: "moderate",
    notes: "Deep shade specialist — perfect for Zone 5. Zig-zag stems distinctive. Important fall pollinator.",
    tags: ["native", "pollinator", "shade-tolerant", "bird-seed"],
  },
  {
    id: "solidago-rugosa",
    name: "Wrinkleleaf Goldenrod",
    latin: "Solidago rugosa",
    qty: 2, potSize: "large",
    category: "Goldenrod",
    bloom: "Sep–Oct", bloomColor: T.gold,
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "24–48\"", spread: "24–36\"",
    soil: "Moist to wet. Tolerates clay.",
    container: false, readyNow: false,
    spreadType: "Rhizome", spreadRate: "aggressive",
    notes: "⚠️ Aggressive — Zone 4 border, manage edges. Great fall pollinator. Tolerates wet areas.",
    tags: ["native", "pollinator", "bird-seed"],
  },
  {
    id: "euthamia",
    name: "Grass-leaved Goldenrod",
    latin: "Euthamia graminifolia",
    qty: 2, potSize: "small",
    category: "Goldenrod",
    bloom: "Jul–Sep", bloomColor: T.gold,
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "36–72\"", spread: "12–24\"",
    soil: "Wet to moist. Tolerates drier with part shade.",
    container: false, readyNow: false,
    spreadType: "Rhizome + Reseeds", spreadRate: "moderate",
    notes: "Flat-topped clusters. Butterflies, bees, beetles. Eastern Goldfinches eat seeds. Shoreline restoration.",
    tags: ["native", "pollinator", "bird-seed"],
  },

  // ── MINT FAMILY ───────────────────────────────────────────
  {
    id: "pycnanthemum",
    name: "Mountain Mint",
    latin: "Pycnanthemum muticum",
    qty: 1, potSize: "large",
    category: "Mint Family",
    bloom: "Jul–Sep", bloomColor: "#c0d0c0",
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "24–36\"", spread: "24–36\"",
    soil: "Average to moist. Tolerates clay.",
    container: true, readyNow: false,
    spreadType: "Rhizome", spreadRate: "moderate",
    notes: "Extremely attractive to pollinators — one of the best. Silvery bracts. Manage spread in containers.",
    tags: ["native", "pollinator", "fragrant", "deer-resistant"],
  },

  // ── CULVER'S ROOT ─────────────────────────────────────────
  {
    id: "veronicastrum",
    name: "Culver's Root",
    latin: "Veronicastrum virginicum",
    qty: 1, potSize: "large",
    category: "Other Native",
    bloom: "Jun–Aug", bloomColor: "#d0e8ff",
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "48–72\"", spread: "18–24\"",
    soil: "Moist, average to rich. Tolerates clay.",
    container: false, readyNow: false,
    spreadType: "Clump", spreadRate: "slow",
    notes: "Tall elegant white spires. Native. Excellent for background planting. Very few pests.",
    tags: ["native", "pollinator", "deer-resistant"],
  },

  // ── SEEDS ─────────────────────────────────────────────────
  {
    id: "seed-blue-sage",
    name: "Blue Sage (seed)",
    latin: "Salvia azurea",
    qty: 1, potSize: "seed",
    category: "Seeds",
    bloom: "Aug–Oct", bloomColor: T.blue,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "36–60\"", spread: "18–24\"",
    soil: "Well-drained, dry to average.",
    container: false, readyNow: false,
    spreadType: "Reseeds", spreadRate: "slow",
    notes: "Native prairie sage. Sky-blue spikes late season. Plant in spring, blooms first year.",
    tags: ["native", "pollinator"],
  },
  {
    id: "seed-salvia-off",
    name: "Common Sage (seed)",
    latin: "Salvia officinalis",
    qty: 1, potSize: "seed",
    category: "Seeds",
    bloom: "Jun–Jul", bloomColor: T.lavender,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "18–24\"",
    soil: "Well-drained, average.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Culinary and ornamental. Excellent container herb.",
    tags: ["edible", "pollinator", "fragrant"],
  },
  {
    id: "seed-scarlet-sage",
    name: "Scarlet Sage (seed)",
    latin: "Salvia coccinea",
    qty: 1, potSize: "seed",
    category: "Seeds",
    bloom: "Jun–Frost", bloomColor: T.coral,
    sun: "Full–Part Sun", sunHours: "5+", shade: false,
    height: "18–36\"", spread: "12–18\"",
    soil: "Average, well-drained.",
    container: true, readyNow: false,
    spreadType: "Reseeds", spreadRate: "moderate",
    notes: "Hummingbird favorite. Self-seeds but not aggressively. Good container annual.",
    tags: ["pollinator", "hummingbird"],
  },
  {
    id: "seed-sapphire-blue",
    name: "Salvia 'Sapphire Blue' (seed)",
    latin: "Salvia farinacea",
    qty: 1, potSize: "seed",
    category: "Seeds",
    bloom: "Jun–Frost", bloomColor: T.blue,
    sun: "Full Sun", sunHours: "6+", shade: false,
    height: "18–24\"", spread: "12–18\"",
    soil: "Well-drained, average.",
    container: true, readyNow: false,
    spreadType: "Clump", spreadRate: "none",
    notes: "Mealycup sage. Electric blue spikes all season. Treat as annual in NJ (tender perennial).",
    tags: ["pollinator"],
  },
  {
    id: "seed-chives",
    name: "Chives (seed)",
    latin: "Allium schoenoprasum",
    qty: 1, potSize: "seed",
    category: "Seeds",
    bloom: "May–Jun", bloomColor: "#c080c0",
    sun: "Full–Part Sun", sunHours: "4+", shade: false,
    height: "12–18\"", spread: "8–12\"",
    soil: "Average, well-drained.",
    container: true, readyNow: false,
    spreadType: "Clump + Reseeds", spreadRate: "slow",
    notes: "Edible flowers and leaves. Great container herb. Bees love the flowers.",
    tags: ["edible", "pollinator"],
  },
];

/* ─── FILTERS ────────────────────────────────────────────── */
const FILTERS = [
  { key: "all",       label: "All Plants" },
  { key: "container", label: "🪴 Patio/Container" },
  { key: "readyNow",  label: "✅ Ready Now" },
  { key: "shade",     label: "🌿 Shade OK" },
  { key: "native",    label: "🌱 Native" },
  { key: "pollinator",label: "🐝 Pollinator" },
  { key: "seeds",     label: "🌾 Seeds" },
  { key: "wet",       label: "💧 Wet" },
  { key: "clay",      label: "🟤 Clay" },
  { key: "spreaders", label: "⚠️ Spreaders" },
];

const CATEGORIES = ["All", "Lavender", "Agastache", "Salvia", "Echinacea",
  "Native Composite", "Aster", "Goldenrod", "Mint Family", "Other Native", "Seeds"];

const spreadColor = (r) =>
  r === "none" ? "#4a9a4a" : r === "slow" ? "#7ab04a" : r === "moderate" ? "#c0a040" : "#d05040";

/* ─── CARD ───────────────────────────────────────────────── */
function PlantCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{
      background: p.readyNow ? T.readyGlow : T.card,
      border: `1px solid ${p.readyNow ? T.accent : T.border}`,
      borderRadius: 14,
      padding: "14px 16px",
      cursor: "pointer",
      transition: "all 0.2s",
      position: "relative",
      boxShadow: p.readyNow ? `0 0 16px ${T.readyGlow}` : "none",
    }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: T.text, fontWeight: 700, fontSize: 15 }}>{p.name}</span>
            {p.readyNow && (
              <span style={{ background: T.accent, color: "#0f1a0f", fontSize: 10, fontWeight: 800,
                padding: "2px 7px", borderRadius: 20, letterSpacing: 0.5 }}>READY NOW</span>
            )}
            {p.container && !p.readyNow && (
              <span style={{ background: "rgba(91,155,212,0.2)", color: T.blue, fontSize: 10,
                padding: "2px 7px", borderRadius: 20 }}>🪴 Container</span>
            )}
            {p.shade && (
              <span style={{ background: "rgba(90,170,90,0.15)", color: "#6ab86a", fontSize: 10,
                padding: "2px 7px", borderRadius: 20 }}>🌿 Shade OK</span>
            )}
          </div>
          <div style={{ color: T.textSoft, fontSize: 12, fontStyle: "italic", marginTop: 2 }}>{p.latin}</div>
        </div>
        <div style={{ textAlign: "right", minWidth: 48 }}>
          <div style={{ color: p.bloomColor, fontSize: 11, fontWeight: 700 }}>{p.bloom}</div>
          <div style={{ color: T.muted, fontSize: 11 }}>×{p.qty}</div>
        </div>
      </div>

      {/* Quick stats row */}
      <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
        <Pill label={`☀️ ${p.sun}`} color={T.gold} />
        <Pill label={`↕ ${p.height}`} color={T.textSoft} />
        <Pill label={p.spreadType} color={spreadColor(p.spreadRate)} />
        <Pill label={p.potSize} color={T.muted} />
      </div>

      {/* Notes — always visible */}
      <div style={{ marginTop: 10, color: T.textSoft, fontSize: 13, lineHeight: 1.5 }}>{p.notes}</div>

      {/* Tags — always visible */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
        {p.tags.map(t => (
          <span key={t} style={{ background: "rgba(255,255,255,0.05)", color: T.muted,
            fontSize: 11, padding: "2px 8px", borderRadius: 10 }}>#{t}</span>
        ))}
      </div>

      {/* Expanded */}
      {open && (
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}` }}>
          <Row label="Soil" value={p.soil} />
          <Row label="Height / Spread" value={`${p.height} / ${p.spread}`} />
          <Row label="Sun Hours" value={`${p.sunHours} hrs minimum`} />
        </div>
      )}
    </div>
  );
}

function Pill({ label, color }) {
  return (
    <span style={{ background: "rgba(255,255,255,0.04)", color, fontSize: 11,
      padding: "2px 8px", borderRadius: 10, border: `1px solid rgba(255,255,255,0.07)` }}>
      {label}
    </span>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
      <span style={{ color: T.muted, fontSize: 12, minWidth: 110 }}>{label}</span>
      <span style={{ color: T.text, fontSize: 12 }}>{value}</span>
    </div>
  );
}

/* ─── CONTAINERS DATA ────────────────────────────────────── */
const containers = [
  {
    id: "pot-fiberglass-a",
    label: "Fiberglass A",
    material: "Fiberglass",
    qty: 2,
    diameter: 19, height: 14,
    color: T.blue,
    emoji: "🪣",
    sizeNote: "Medium–Large",
    volume: "~10 gal each",
    drainageNote: "Excellent — lightweight, frost-safe, stays cool",
    planted: null,
    suggestions: [
      { name: "Agastache 'Blue Boa'", why: "Already established — move the blue container display here for patio" },
      { name: "Agastache 'Purple Haze' + 'Kudos Coral'", why: "Two compact Agastache fill 19\" beautifully with contrasting color" },
      { name: "Salvia 'Fashionista Pink' (×1) + Aster 'Woods Pink' (×1)", why: "Pink team — Salvia blooms early, Aster takes over in fall" },
      { name: "Lavender 'Phenomenal' (×1)", why: "Single large lavender with gritty mix — peak fragrance on patio" },
    ],
    tips: "At 19\" you can comfortably fit 1 large plant OR 2 compact ones (e.g. both Poquito cultivars). Add grit to mix for lavender or Agastache.",
  },
  {
    id: "pot-fiberglass-b",
    label: "Fiberglass B",
    material: "Fiberglass",
    qty: 2,
    diameter: 19, height: 14,
    color: T.blue,
    emoji: "🪣",
    sizeNote: "Medium–Large",
    volume: "~10 gal each",
    drainageNote: "Excellent — lightweight, frost-safe",
    planted: null,
    suggestions: [
      { name: "Agastache 'Morello' (×1) + 'Poquito Orange' (×1)", why: "Cherry red + orange — stunning warm combo, both drought tolerant" },
      { name: "Echinacea 'Pow Wow Wildberry' + Salvia 'Azure Snow'", why: "Both blooming now — instant patio impact, complementary colors" },
    ],
    tips: "Same dimensions as Fiberglass A — treat as a pair for symmetrical patio placement.",
  },
  {
    id: "pot-resin-lg",
    label: "Resin (Large)",
    material: "Resin",
    qty: 1,
    diameter: 24, height: 15,
    color: T.gold,
    emoji: "🏺",
    sizeNote: "Large",
    volume: "~15–18 gal",
    drainageNote: "Check drainage holes — resin can pool water. Add perlite to mix.",
    planted: null,
    suggestions: [
      { name: "Agastache 'Blue Boa' (centerpiece) + 2 compact companions", why: "24\" gives room for thriller/filler — 'Blue Boa' center, Poquito Orange + Poquito Lavender at edges" },
      { name: "Salvia 'Fashionista Pink' (×2) as statement pot", why: "Two salvias in 24\" create a lush flowering mass all season" },
      { name: "Veronicastrum virginicum (tall back) + Aster 'Woods Pink' (front)", why: "White spires + pink aster — elegant height contrast" },
    ],
    tips: "Your biggest pot — use as the patio focal point. Thriller/filler/spiller formula works well at 24\". Lightweight resin means easy repositioning.",
  },
  {
    id: "planter-tulip",
    label: "Wood Planter A (tulips → empty)",
    material: "Painted Wood — Gray",
    qty: 1,
    diameter: null, lengthIn: 42, widthIn: 11.5, height: 13,
    color: "#8aab8a",
    emoji: "📦",
    sizeNote: "Narrow Rectangle",
    volume: "~25 gal",
    drainageNote: "Wood planters dry fast — check moisture every 2 days in summer. Ensure drainage holes exist. Consider coir liner to extend wood life.",
    planted: "Tulips (fading — leave foliage 4–6 wks before removing bulbs)",
    suggestions: [
      { name: "Salvia 'Azure Snow' (×1) + Agastache 'Poquito Lavender' (×1)", why: "Blue + lavender tone, both compact. Azure Snow blooming NOW — instant impact while Poquito fills in." },
      { name: "Coreopsis 'Jethro Tull' (×2 staggered)", why: "Bright yellow pops against gray wood all summer. Deadhead for repeat bloom through Oct." },
      { name: "Catmint 'Walker's Low' ★ BUY", why: "Best narrow planter perennial — cascades over the edge, blooms May–Sept, zero maintenance. Consider buying 2." },
      { name: "Lavender 'Hidcote' ★ BUY", why: "Compact lavender sized right for 11.5\" width. Stunning against gray painted wood, full sun, fragrant." },
    ],
    tips: "At 11.5\" wide, stick to 1 plant per 18–20\" of length — so 2–3 plants max per planter. A single repeating species looks most elegant at stair-side placement. Don't rush — let tulip foliage die fully before replanting center.",
  },
  {
    id: "planter-daff",
    label: "Wood Planter B (daffodils → empty)",
    material: "Painted Wood — Gray",
    qty: 1,
    diameter: null, lengthIn: 42, widthIn: 11.5, height: 13,
    color: "#8aab8a",
    emoji: "📦",
    sizeNote: "Narrow Rectangle",
    volume: "~25 gal",
    drainageNote: "Wood planters dry fast — check moisture every 2 days in summer. Daffodil bulbs can stay in permanently if planting around them.",
    planted: "Daffodils (fading — leave foliage 4–6 wks, bulbs can stay in-ground permanently)",
    suggestions: [
      { name: "Salvia 'Fashionista Pink' (×1) + Agastache 'Poquito Orange' (×1)", why: "Warm pink + coral — striking combo at stair entry. Both compact, both full sun, blooming season overlaps." },
      { name: "Echinacea 'Pow Wow Wildberry' (×1 center)", why: "Single specimen coneflower as focal point — purple-red, already blooming, 18\" wide fits the planter." },
      { name: "Sedum 'Autumn Joy' ★ BUY", why: "Fills the gap after bulbs fade — fleshy green spring, pink flowers Aug–Oct, russet seedheads all winter. Perfect succession planting." },
      { name: "Catmint 'Walker's Low' ★ BUY (pair with Planter A)", why: "Buy 2 total and plant one in each planter — creates a matched pair flanking the stairs. Very classic." },
    ],
    tips: "Daffodil bulbs can stay permanently — future years they'll pop through whatever perennial you plant on top. Plant new perennials at the edges now, let daffs die back in the center. By June both planters will be fully transitioned.",
  },
  {
    id: "pot-ceramic-sm",
    label: "Ceramic (Small)",
    material: "Ceramic",
    qty: 1,
    diameter: 11.5, height: 10.5,
    color: T.coral,
    emoji: "🫙",
    sizeNote: "Small",
    volume: "~3–4 gal",
    drainageNote: "Heavy — place on pot feet for drainage. Frost risk: bring in if ceramic is not frost-rated.",
    planted: null,
    suggestions: [
      { name: "Rosemary (planned)", why: "Perfect fit — 11.5\" is ideal for a single rosemary. Bring inside Nov–Mar." },
      { name: "Agastache 'Poquito Lavender' or 'Poquito Orange'", why: "Dwarf Poquito series tops out at 12–15\" — perfectly proportioned for this pot" },
      { name: "Common Sage (Salvia officinalis)", why: "Culinary herb, ornamental silver foliage, right size. Pair with rosemary nearby." },
      { name: "Chives", why: "Compact, edible, purple flowers. Move near kitchen door." },
    ],
    tips: "⚠️ Only 11.5\" — one plant max. Rosemary is the ideal tenant. Ceramic is porous, dries faster — water more frequently in summer heat.",
  },
];

/* ─── CONTAINER CARD ─────────────────────────────────────── */
function ContainerCard({ c }) {
  const [open, setOpen] = useState(false);
  const isRect = !!c.lengthIn;
  // visual scale
  const vizW = isRect ? 110 : Math.round((c.diameter / 24) * 110);
  const vizH = Math.round((c.height / 15) * 56);

  return (
    <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14,
      padding: "16px", marginBottom: 10 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Pot diagram */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 64 }}>
          <div style={{
            width: vizW, height: vizH,
            background: `${c.color}22`, border: `2px solid ${c.color}`,
            borderRadius: isRect ? "0 0 4px 4px" : "0 0 8px 8px", borderTop: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: isRect ? 18 : Math.max(16, vizW * 0.25),
          }}>{c.emoji}</div>
          <div style={{ width: vizW, height: 3, background: c.color, borderRadius: 2 }} />
          <div style={{ color: T.muted, fontSize: 10, marginTop: 4, textAlign: "center" }}>
            {isRect ? `${c.lengthIn}"×${c.widthIn}"` : `⌀${c.diameter}"`}
          </div>
        </div>
        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: T.text, fontWeight: 700, fontSize: 15 }}>{c.label}</span>
            {c.qty > 1 && <span style={{ color: T.muted, fontSize: 12 }}>×{c.qty}</span>}
            <span style={{ background: `${c.color}22`, color: c.color, fontSize: 10,
              padding: "2px 8px", borderRadius: 20 }}>{c.sizeNote}</span>
          </div>
          <div style={{ color: T.textSoft, fontSize: 12, marginTop: 3 }}>{c.material}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 6, flexWrap: "wrap" }}>
            {isRect
              ? <><Pill label={`${c.lengthIn}" L`} color={T.textSoft} /><Pill label={`${c.widthIn}" W`} color={T.textSoft} /></>
              : <Pill label={`⌀ ${c.diameter}"`} color={T.textSoft} />
            }
            <Pill label={`↕ ${c.height}"`} color={T.textSoft} />
            <Pill label={c.volume} color={T.muted} />
          </div>
          {c.planted && (
            <div style={{ marginTop: 6, fontSize: 11, color: T.gold }}>🌱 Currently: {c.planted}</div>
          )}
        </div>
      </div>

      {/* Drainage note */}
      <div style={{ marginTop: 10, fontSize: 12, color: T.muted, lineHeight: 1.5,
        background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "8px 10px" }}>
        💧 {c.drainageNote}
      </div>

      {/* Expand button */}
      <button onClick={() => setOpen(!open)} style={{
        marginTop: 10, background: "transparent", border: `1px solid ${T.border}`,
        color: T.textSoft, borderRadius: 8, padding: "6px 14px", fontSize: 12,
        cursor: "pointer", fontFamily: "inherit", width: "100%",
      }}>
        {open ? "Hide suggestions ▲" : "Plant suggestions ▼"}
      </button>

      {open && (
        <div style={{ marginTop: 10 }}>
          <div style={{ color: T.muted, fontSize: 11, marginBottom: 6,
            textTransform: "uppercase", letterSpacing: 1 }}>Planting Ideas</div>
          {c.suggestions.map((s, i) => (
            <div key={i} style={{ background: "rgba(126,200,80,0.05)", border: `1px solid ${T.border}`,
              borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
              <div style={{ color: T.accent, fontSize: 13, fontWeight: 600 }}>{s.name}</div>
              <div style={{ color: T.textSoft, fontSize: 12, marginTop: 3, lineHeight: 1.5 }}>{s.why}</div>
            </div>
          ))}
          <div style={{ marginTop: 8, fontSize: 12, color: T.textSoft, lineHeight: 1.6,
            borderTop: `1px solid ${T.border}`, paddingTop: 10 }}>
            💡 {c.tips}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN ───────────────────────────────────────────────── */
export default function GardenPlanner() {
  const [tab, setTab] = useState("plants");
  const [filter, setFilter] = useState("all");
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");

  const visible = plants.filter(p => {
    const matchFilter =
      filter === "all" ? true :
      filter === "container" ? p.container :
      filter === "readyNow" ? p.readyNow :
      filter === "shade" ? p.shade :
      filter === "native" ? p.tags.includes("native") :
      filter === "pollinator" ? p.tags.includes("pollinator") :
      filter === "seeds" ? p.potSize === "seed" :
      filter === "wet" ? p.soil.toLowerCase().includes("wet") || p.soil.toLowerCase().includes("moist") :
      filter === "clay" ? p.soil.toLowerCase().includes("clay") :
      filter === "spreaders" ? (p.spreadRate === "moderate" || p.spreadRate === "aggressive") : true;

    const matchCat = cat === "All" || p.category === cat;
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.latin.toLowerCase().includes(search.toLowerCase());

    return matchFilter && matchCat && matchSearch;
  });

  const total = visible.reduce((s, p) => s + p.qty, 0);

  return (
    <div style={{ background: T.bg, minHeight: "100vh", fontFamily: "'Georgia', serif", color: T.text }}>
      {/* Header */}
      <div style={{ padding: "24px 16px 0", background: `linear-gradient(180deg, #0a120a 0%, ${T.bg} 100%)` }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: T.muted, textTransform: "uppercase", marginBottom: 4 }}>
          NJ Garden Inventory
        </div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 400, color: T.accent, letterSpacing: -0.5 }}>
          Plant Collection
        </h1>
        <p style={{ margin: "4px 0 0", color: T.muted, fontSize: 13 }}>
          {plants.length} varieties · {plants.reduce((s,p)=>s+p.qty,0)} plants total
        </p>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 0, marginTop: 14, borderBottom: `1px solid ${T.border}` }}>
          {[["plants","🌿 Plants"], ["pots","🪴 My Pots"]].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key)} style={{
              padding: "8px 20px", background: "transparent", border: "none",
              borderBottom: tab === key ? `2px solid ${T.accent}` : "2px solid transparent",
              color: tab === key ? T.accent : T.muted, fontSize: 14, cursor: "pointer",
              fontFamily: "inherit", fontWeight: tab === key ? 700 : 400, marginBottom: -1,
            }}>{label}</button>
          ))}
        </div>

        {/* ── POTS TAB ── */}
        {tab === "pots" && (
          <div style={{ paddingTop: 16, paddingBottom: 32 }}>
            <p style={{ color: T.muted, fontSize: 13, margin: "0 0 14px" }}>
              6 containers · tap any card for planting suggestions
            </p>
            {containers.map(c => <ContainerCard key={c.id} c={c} />)}
          </div>
        )}

        {/* ── PLANTS TAB filters ── */}
        {tab === "plants" && <>
        {/* Search */}
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search name or latin..."
          style={{ width: "100%", boxSizing: "border-box", marginTop: 14,
            background: T.card, border: `1px solid ${T.border}`, borderRadius: 10,
            padding: "10px 14px", color: T.text, fontSize: 14, outline: "none" }}
        />

        {/* Filter pills */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "12px 0 4px",
          scrollbarWidth: "none" }}>
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} style={{
              whiteSpace: "nowrap", padding: "7px 14px", borderRadius: 20, fontSize: 13,
              cursor: "pointer", border: "none", fontFamily: "inherit",
              background: filter === f.key ? T.accent : T.card,
              color: filter === f.key ? "#0f1a0f" : T.textSoft,
              fontWeight: filter === f.key ? 700 : 400,
            }}>{f.label}</button>
          ))}
        </div>

        {/* Category pills */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", padding: "4px 0 16px",
          scrollbarWidth: "none" }}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={() => setCat(c)} style={{
              whiteSpace: "nowrap", padding: "5px 12px", borderRadius: 20, fontSize: 12,
              cursor: "pointer", border: `1px solid ${cat === c ? T.accentSoft : T.border}`,
              background: cat === c ? "rgba(126,200,80,0.12)" : "transparent",
              color: cat === c ? T.accent : T.muted, fontFamily: "inherit",
            }}>{c}</button>
          ))}
        </div>
        </>}
      </div>

      {/* Results count + cards — plants tab only */}
      {tab === "plants" && <>
        <div style={{ padding: "0 16px 8px", color: T.muted, fontSize: 12 }}>
          Showing {visible.length} varieties · {total} plants
        </div>
        <div style={{ padding: "0 16px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
          {visible.length === 0 && (
            <div style={{ color: T.muted, textAlign: "center", padding: 40 }}>No plants match this filter.</div>
          )}
          {visible.map(p => <PlantCard key={p.id} p={p} />)}
        </div>
      </>}
    </div>
  );
}
