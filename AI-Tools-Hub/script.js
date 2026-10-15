// ===== Site settings — edit these =====
const SITE = {
  name: "AI Tools Hub",
  tagline: "A hand-picked directory of AI tools.",
  email: "hello@example.com" // <- put your real email here
};

// ===== Tool data — add new tools here (put featured: true to show first) =====
const TOOLS = [
  { name: "ChatGPT", cat: "Writing", price: "Freemium", featured: true, url: "https://chatgpt.com", desc: "General-purpose AI assistant for writing, research, brainstorming and analysis." },
  { name: "Claude", cat: "Writing", price: "Freemium", featured: true, url: "https://claude.ai", desc: "AI assistant for long documents, careful writing, coding and analysis." },
  { name: "Gemini", cat: "Writing", price: "Freemium", url: "https://gemini.google.com", desc: "Google's AI assistant, connected to Search, Gmail and Docs." },
  { name: "Perplexity", cat: "Research", price: "Freemium", featured: true, url: "https://www.perplexity.ai", desc: "Answer engine that searches the web and cites its sources." },
  { name: "Grammarly", cat: "Writing", price: "Freemium", url: "https://www.grammarly.com", desc: "Fixes grammar, tone and clarity as you write." },
  { name: "Copy.ai", cat: "Writing", price: "Freemium", url: "https://www.copy.ai", desc: "Drafts marketing copy, emails and product descriptions." },

  { name: "GitHub Copilot", cat: "Coding", price: "Freemium", featured: true, url: "https://github.com/features/copilot", desc: "Code suggestions and chat right inside VS Code and other editors." },
  { name: "Cursor", cat: "Coding", price: "Freemium", url: "https://cursor.com", desc: "AI-first code editor that can edit multiple files from a prompt." },
  { name: "Claude Code", cat: "Coding", price: "Paid", url: "https://claude.com/product/claude-code", desc: "Coding agent that works in your terminal and project folder." },
  { name: "Replit", cat: "Coding", price: "Freemium", url: "https://replit.com", desc: "Build and host apps from a prompt in the browser." },

  { name: "Midjourney", cat: "Images", price: "Paid", featured: true, url: "https://www.midjourney.com", desc: "High-quality artistic image generation from text prompts." },
  { name: "Leonardo AI", cat: "Images", price: "Freemium", url: "https://leonardo.ai", desc: "Generate images, game assets and concept art with fine control." },
  { name: "Canva", cat: "Design", price: "Freemium", featured: true, url: "https://www.canva.com", desc: "Design posts, logos and slides with built-in AI tools." },
  { name: "Remove.bg", cat: "Images", price: "Freemium", url: "https://www.remove.bg", desc: "Removes image backgrounds in a few seconds." },

  { name: "Runway", cat: "Video", price: "Freemium", url: "https://runwayml.com", desc: "Create and edit video clips with text and image prompts." },
  { name: "Pika", cat: "Video", price: "Freemium", url: "https://pika.art", desc: "Turn text or images into short animated videos." },
  { name: "CapCut", cat: "Video", price: "Freemium", url: "https://www.capcut.com", desc: "Video editor with auto-captions and AI effects." },

  { name: "ElevenLabs", cat: "Audio", price: "Freemium", featured: true, url: "https://elevenlabs.io", desc: "Realistic text-to-speech and voice generation." },
  { name: "Suno", cat: "Audio", price: "Freemium", url: "https://suno.com", desc: "Create full songs with vocals from a text prompt." },
  { name: "Otter.ai", cat: "Audio", price: "Freemium", url: "https://otter.ai", desc: "Records meetings and turns them into notes and summaries." },

  { name: "Notion AI", cat: "Productivity", price: "Paid", url: "https://www.notion.com/product/ai", desc: "Summarise, write and search inside your Notion workspace." },
  { name: "Gamma", cat: "Productivity", price: "Freemium", url: "https://gamma.app", desc: "Generate presentations, docs and web pages from a prompt." },
  { name: "NotebookLM", cat: "Research", price: "Free", url: "https://notebooklm.google", desc: "Upload your sources and ask questions or get audio summaries." }
];

const COLORS = ["#2f5bff", "#e4572e", "#17a398", "#7a4cc2", "#d6336c", "#2b8a3e", "#c77d00", "#1c7ed6"];
const page = document.body.dataset.page;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ===== Shared header & footer =====
function buildLayout() {
  const links = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["contact.html", "Contact", "contact"]
  ];
  const navItems = links
    .map(([href, label, id]) => `<a href="${href}"${page === id ? ' aria-current="page"' : ""}>${label}</a>`)
    .join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <header class="topbar">
        <a class="brand" href="index.html" aria-label="${esc(SITE.name)} home">
          <img src="logo.svg" alt="" width="34" height="34" />
          ${esc(SITE.name)}
        </a>
        <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mainNav">Menu</button>
        <nav class="nav" id="mainNav" aria-label="Main">
          ${navItems}
          <a class="cta" href="index.html#tools">Browse tools</a>
        </nav>
      </header>`;
    const btn = document.getElementById("menuBtn");
    const nav = document.getElementById("mainNav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="footer-in">
          <div>
            <a class="brand" href="index.html"><img src="logo.svg" alt="" width="30" height="30" />${esc(SITE.name)}</a>
            <p>${esc(SITE.tagline)} Pricing and features change, so check each tool's website.</p>
          </div>
          <nav aria-label="Footer">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="privacy.html">Privacy</a>
          </nav>
        </div>
        <p class="footer-in" style="padding-top:0;padding-bottom:32px;margin:0 auto;color:var(--muted);font-size:.9rem">© ${new Date().getFullYear()} ${esc(SITE.name)}</p>
      </footer>`;
  }
}

// ===== Saved tools (browser only) =====
function loadSaved() {
  try { return JSON.parse(localStorage.getItem("savedTools") || "[]"); } catch { return []; }
}
function storeSaved(list) {
  try { localStorage.setItem("savedTools", JSON.stringify(list)); } catch { /* storage unavailable */ }
}

// ===== Directory (home page) =====
function initDirectory() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const empty = document.getElementById("empty");
  const search = document.getElementById("search");
  const priceSel = document.getElementById("price");
  const sortSel = document.getElementById("sort");
  const filtersEl = document.getElementById("filters");
  const title = document.getElementById("resultsTitle");

  let activeCat = "All";
  let saved = loadSaved();

  const colorFor = (name) => {
    let h = 0;
    for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return COLORS[h % COLORS.length];
  };

  function buildFilters() {
    const cats = ["All", "Saved", ...new Set(TOOLS.map((t) => t.cat))];
    filtersEl.innerHTML = "";
    cats.forEach((c) => {
      const b = document.createElement("button");
      b.className = "chip";
      b.type = "button";
      b.textContent = c === "Saved" ? `Saved (${saved.length})` : c;
      b.setAttribute("aria-pressed", c === activeCat);
      b.addEventListener("click", () => {
        activeCat = c;
        buildFilters();
        render();
      });
      filtersEl.appendChild(b);
    });
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const price = priceSel.value;

    let list = TOOLS.filter((t) => {
      const matchCat =
        activeCat === "All" ||
        (activeCat === "Saved" ? saved.includes(t.name) : t.cat === activeCat);
      const matchPrice = price === "all" || t.price === price;
      const matchText = !q || `${t.name} ${t.cat} ${t.desc}`.toLowerCase().includes(q);
      return matchCat && matchPrice && matchText;
    });

    if (sortSel.value === "az") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    grid.innerHTML = list
      .map((t) => {
        const isSaved = saved.includes(t.name);
        return `
        <article class="card">
          <button class="save" type="button" data-name="${esc(t.name)}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove" : "Save"} ${esc(t.name)}">${isSaved ? "★" : "☆"}</button>
          <div class="card-top">
            <div class="logo" style="background:${colorFor(t.name)}" aria-hidden="true">${esc(t.name[0])}</div>
            <div>
              <h3>${esc(t.name)}</h3>
              <span class="cat">${esc(t.cat)}</span>
            </div>
          </div>
          <p>${esc(t.desc)}</p>
          <div class="card-foot">
            <span class="price ${t.price}">${t.price}</span>
            <a class="visit" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">Visit ${esc(t.name)}</a>
          </div>
        </article>`;
      })
      .join("");

    empty.hidden = list.length > 0;
    empty.textContent =
      activeCat === "Saved" && !q
        ? "Nothing saved yet. Tap the star on a tool to keep it here."
        : "No tools match that search. Try a different word or clear the filters.";

    title.textContent = q
      ? `${list.length} result${list.length === 1 ? "" : "s"} for “${search.value.trim()}”`
      : activeCat === "All" ? "All tools" : activeCat === "Saved" ? "Your saved tools" : activeCat;
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".save");
    if (!btn) return;
    const name = btn.dataset.name;
    saved = saved.includes(name) ? saved.filter((n) => n !== name) : [...saved, name];
    storeSaved(saved);
    buildFilters();
    render();
  });

  document.getElementById("toolCount").textContent = TOOLS.length;
  search.addEventListener("input", render);
  priceSel.addEventListener("change", render);
  sortSel.addEventListener("change", render);

  // Support links like index.html?q=video
  const startQ = new URLSearchParams(location.search).get("q");
  if (startQ) search.value = startQ;

  buildFilters();
  render();

  // Newsletter (front-end only — connect to a service like Mailchimp or Buttondown later)
  const news = document.getElementById("newsForm");
  if (news) {
    news.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("newsMsg").textContent = "You're in. Watch your inbox for the next tool.";
      news.reset();
    });
  }
}

// ===== Contact form (opens the visitor's email app) =====
function initContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const topic = document.getElementById("cTopic").value;
    const msg = document.getElementById("cMsg").value.trim();
    const subject = encodeURIComponent(`${topic} – ${SITE.name}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    document.getElementById("contactMsg").textContent = "Opening your email app to send this message.";
  });
}

buildLayout();
initDirectory();
initContact();