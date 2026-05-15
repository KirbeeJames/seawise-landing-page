# Hermes Agent Briefing — SeaWise Landing Page

## What You're Managing
The landing page for **SeaWise** — a maritime voyage planning iOS/Android app.
Live site: **https://www.seawise.site**
Your primary job: add daily blog posts.

---

## Tech Stack
- **Static HTML only** — no build step, no framework, no npm
- **GitHub repo:** `https://github.com/KirbeeJames/seawise-landing-page`
  - Default branch: `master`
  - **Push to `master` = instant production deploy via Vercel (~30 seconds)**
- **Vercel:** auto-deploys on every push to master. No CLI needed.
  - Project ID: `prj_kgyXL7XUwCFDRtPagmRgqZEfdtWd`
  - Team ID: `team_oyXQifhsCPwWT51Tw7FOSQZA`

---

## File Structure
```
seawise-landing-page/
├── index.html          ← MAIN FILE — all blog edits go here
├── style.css           ← site CSS (variables, components)
├── script.js           ← scroll animations, nav, pricing toggle
├── smoke.js            ← WebGL smoke animation (do not touch)
├── seawise-logo.png
├── screenshots/        ← 10 iPad app screenshots (do not touch)
├── images/
├── blog/               ← create full article pages here
├── privacy.html
├── terms.html
├── support.html
└── delete-account.html
```

---

## How to Add a Blog Post

**Step 1 — Pull latest:**
```bash
git pull origin master
```

**Step 2 — Find the blog section in `index.html`:**
Search for `<!-- BLOG -->`. Inside `<div class="blog-grid">`, **prepend** new cards at the top (newest first). Keep max 6 cards — remove oldest if over 6.

**Step 3 — Add a new blog card:**
```html
<a href="blog/your-article-slug.html" class="blog-card animate-in">
  <div class="blog-card-img">
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- PASTE ONE SVG PRESET FROM BELOW -->
    </svg>
  </div>
  <div class="blog-card-body">
    <span class="blog-tag">Fuel Management</span>
    <h3>Your Article Title Here</h3>
    <p>2–3 sentence summary. Direct, no fluff. Written for fleet managers and captains.</p>
    <div class="blog-meta">
      <span>May 2026</span>
      <span class="dot"></span>
      <span>5 min read</span>
    </div>
  </div>
</a>
```

**Step 4 — Create the full article page at `blog/your-article-slug.html`:**
Use the full article template at the bottom of this file.

**Step 5 — Commit and push:**
```bash
git add index.html blog/your-article-slug.html
git commit -m "Add blog: Your Article Title"
git push origin master
```

Vercel deploys automatically. Done.

---

## SVG Presets for Blog Card Images

**Fuel / Cost topics:**
```svg
<circle cx="26" cy="26" r="20" stroke="#38bdf8" stroke-width="1.2" opacity="0.3"/>
<path d="M14 22L18 18L22 21L26 14L30 19L34 16L38 22" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 30L18 26L22 29L26 22L30 27L34 24L38 30" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"/>
<circle cx="26" cy="14" r="2" fill="#38bdf8" opacity="0.8"/>
<circle cx="38" cy="22" r="2" fill="#38bdf8" opacity="0.8"/>
```

**Market / Prices topics:**
```svg
<rect x="12" y="10" width="28" height="32" rx="3" stroke="#0ea5e9" stroke-width="1.2" opacity="0.3"/>
<path d="M17 24h8" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17 28h14" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
<path d="M17 32h10" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
<circle cx="36" cy="14" r="6" fill="#0a1628" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M36 11.5V14L37.5 15.5" stroke="#f59e0b" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
```

**Technology / AI / Navigation topics:**
```svg
<circle cx="26" cy="26" r="18" stroke="#8b5cf6" stroke-width="1.2" opacity="0.3"/>
<path d="M16 30C18 28 20 24 22 23C24 22 26 27 28 25C30 23.5 32 20 33 19" stroke="#8b5cf6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
<path d="M14 36C17 34 20 32 23 33C26 34 29 32 32 31C35 30 37 31 38 30" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="23" cy="33" r="2.5" fill="#38bdf8" opacity="0.8"/>
<circle cx="38" cy="30" r="2.5" fill="#38bdf8" opacity="0.8"/>
```

**Fleet / Operations topics:**
```svg
<rect x="8" y="8" width="16" height="16" rx="2" stroke="#38bdf8" stroke-width="1.2" opacity="0.4"/>
<rect x="28" y="8" width="16" height="16" rx="2" stroke="#38bdf8" stroke-width="1.2" opacity="0.4"/>
<rect x="8" y="28" width="16" height="16" rx="2" stroke="#38bdf8" stroke-width="1.2" opacity="0.4"/>
<rect x="28" y="28" width="16" height="16" rx="2" stroke="#38bdf8" stroke-width="1.2" opacity="0.4"/>
<circle cx="36" cy="36" r="6" stroke="#10b981" stroke-width="1.5"/>
<path d="M36 33v3l2 2" stroke="#10b981" stroke-width="1.2" stroke-linecap="round"/>
<circle cx="16" cy="16" r="4" stroke="#38bdf8" stroke-width="1.5"/>
<line x1="16" y1="12" x2="16" y2="20" stroke="#38bdf8" stroke-width="1" opacity="0.5"/>
<line x1="12" y1="16" x2="20" y2="16" stroke="#38bdf8" stroke-width="1" opacity="0.5"/>
```

---

## Blog Tag Categories
Use exactly one per card:
- `Fuel Management`
- `Market Intelligence`
- `Technology`
- `Fleet Operations`
- `Voyage Planning`
- `Maritime Safety`
- `Navigation`

---

## Content Guidelines
**Audience:** Superyacht fleet managers, captains, professional mariners.

**Good topics:**
- Fuel planning, bunker strategy, fuel curves
- Voyage cost estimation, port-to-port planning
- AI in maritime navigation
- Global shipping lanes and chokepoints (Suez, Panama, Malacca, Gibraltar)
- Fleet management best practices
- Bunker fuel grades (MGO, VLSFO, HFO) and market conditions
- Weather routing, passage planning
- Maritime regulations affecting operations

**Tone:** Direct, professional, practical. No buzzwords. Short sentences. Write like someone who has actually stood a watch.

---

## Existing Blog Posts (do not duplicate these topics)
1. "How to Calculate Voyage Fuel Costs Like a Pro" — Fuel Management — May 2026
2. "Understanding Bunker Fuel Prices: What Every Captain Should Know" — Market Intelligence — May 2026
3. "From Paper Charts to AI: The Evolution of Maritime Route Planning" — Technology — Apr 2026

---

## Full Article Page Template

Save as `blog/your-article-slug.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YOUR ARTICLE TITLE — SeaWise</title>
<meta name="description" content="ARTICLE SUMMARY (150 chars max)">
<link rel="icon" type="image/png" href="../seawise-logo.png">
<link rel="stylesheet" href="../style.css">
<style>
  .article-hero { padding: 120px 24px 60px; text-align: center; background: var(--bg-deep); border-bottom: 1px solid var(--border); }
  .article-hero .section-tag { display: block; margin-bottom: 16px; }
  .article-hero h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; max-width: 700px; margin: 0 auto 20px; line-height: 1.15; letter-spacing: -0.02em; }
  .article-meta { color: var(--text-muted); font-size: 0.85rem; margin-top: 12px; }
  .article-body { max-width: 720px; margin: 60px auto; padding: 0 24px 100px; }
  .article-body h2 { font-size: 1.5rem; font-weight: 700; margin: 48px 0 16px; letter-spacing: -0.01em; }
  .article-body p { color: var(--text-secondary); line-height: 1.75; margin-bottom: 20px; font-size: 1rem; }
  .article-body ul, .article-body ol { color: var(--text-secondary); padding-left: 24px; margin-bottom: 20px; line-height: 1.75; }
  .article-body li { margin-bottom: 8px; }
  .article-body strong { color: var(--text-primary); }
  .article-cta { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 40px; text-align: center; margin-top: 60px; }
  .article-cta h3 { font-size: 1.4rem; font-weight: 700; margin-bottom: 12px; }
  .article-cta p { color: var(--text-secondary); margin-bottom: 24px; }
  .back-link { display: inline-flex; align-items: center; gap: 8px; color: var(--text-muted); text-decoration: none; font-size: 0.85rem; margin-bottom: 40px; transition: color 0.2s; }
  .back-link:hover { color: var(--accent-cyan); }
</style>
</head>
<body>

<nav>
  <div class="nav-inner">
    <a href="https://seawise.site/" class="nav-brand">
      <img src="../seawise-logo.png" alt="SeaWise" class="nav-logo">
      <span class="nav-wordmark">SEAWISE</span>
    </a>
    <div class="nav-links">
      <a href="https://seawise.site/#features">Features</a>
      <a href="https://seawise.site/#screenshots">Screenshots</a>
      <a href="https://seawise.site/#pricing">Pricing</a>
      <a href="https://seawise.site/#blog">Blog</a>
      <a href="https://app.seawise.site/" class="btn btn-sm btn-green" target="_blank" rel="noopener">Launch App</a>
    </div>
  </div>
</nav>

<div class="article-hero">
  <span class="section-tag">CATEGORY TAG</span>
  <h1>YOUR ARTICLE TITLE</h1>
  <p class="article-meta">May 2026 &nbsp;·&nbsp; 5 min read</p>
</div>

<div class="article-body">
  <a href="https://seawise.site/#blog" class="back-link">← Back to Blog</a>

  <p>Opening paragraph — hook the reader with the core insight or problem immediately.</p>

  <h2>Section Heading</h2>
  <p>Body content goes here...</p>

  <!-- Add more h2 + p sections as needed -->

  <div class="article-cta">
    <h3>Calculate Your Next Voyage</h3>
    <p>SeaWise gives you port-to-port distance, fuel cost, and travel time in seconds.</p>
    <a href="https://app.seawise.site/" class="btn btn-green btn-lg" target="_blank" rel="noopener">Launch SeaWise Free</a>
  </div>
</div>

<script src="../script.js"></script>
</body>
</html>
```

---

## Design Tokens (already in style.css — reference only)
```
--bg-deep: #0a1628          dark navy background
--bg-card: #0d1f3c          card background
--bg-card-hover: #112548    card hover state
--accent-cyan: #38bdf8      primary accent (links, tags, glows)
--text-primary: #e2e8f0     headings
--text-secondary: #94a3b8   body text
--text-muted: #4a6080       meta, labels
--border: rgba(56,189,248,0.12)
--radius: 16px
```

---

## Quick Reference
| | |
|---|---|
| Live site | https://www.seawise.site |
| Web app | https://app.seawise.site |
| GitHub repo | https://github.com/KirbeeJames/seawise-landing-page |
| Deploy branch | `master` — push = auto-deploy (~30s) |
| Blog section in HTML | `index.html` → search `<!-- BLOG -->` → `<div class="blog-grid">` |
| Article pages | `blog/article-slug.html` |
| Support email | service@seawise.site |
