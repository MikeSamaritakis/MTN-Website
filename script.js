const pads = [
  {
    label: "Spotify",
    icon: "SP",
    copy: "Artist profile and full streaming catalog.",
    href: "https://open.spotify.com/artist/1wDcwKVeBSpyUbC5Y4r9fx?si=Z1r46u0YQBCzAaDl2RxBFg",
    external: true
  },
  {
    label: "Artist YouTube",
    icon: "AY",
    copy: "Official artist channel and video uploads.",
    href: "https://www.youtube.com/@m.t.n7173",
    external: true
  },
  {
    label: "Instagram",
    icon: "IG",
    copy: "Photos, stories, highlights, and daily updates.",
    href: "https://www.instagram.com/b_giannakos/",
    external: true
  },
  {
    label: "Latest Album",
    icon: "LA",
    copy: "Open the latest album on Spotify.",
    href: "https://open.spotify.com/album/0UoYoj8TJ4WBYvfbjNq6WA",
    external: true
  },
  {
    label: "Latest Release",
    icon: "LR",
    copy: "Hear the newest release on Spotify.",
    href: "https://open.spotify.com/album/0ejQqIL7qieztOQqsjiQm9?si=8NZPvcp-RFy0Tocyov4BSA",
    external: true
  },
  {
    label: "Albums",
    icon: "AL",
    copy: "Browse the album discography.",
    href: "https://open.spotify.com/artist/1wDcwKVeBSpyUbC5Y4r9fx/discography/album",
    external: true
  },
  {
    label: "Singles & EPs",
    icon: "SE",
    copy: "Browse singles, EPs, and shorter releases.",
    href: "https://open.spotify.com/artist/1wDcwKVeBSpyUbC5Y4r9fx/discography/single",
    external: true
  },
  {
    label: "Personal YouTube",
    icon: "PY",
    copy: "Personal YouTube channel and uploads.",
    href: "https://www.youtube.com/@%CE%A0%CE%B1%CE%BD%CE%B1%CE%B3%CE%B9%CF%8E%CF%84%CE%B7%CF%82%CE%93%CE%B9%CE%B1%CE%BD%CE%BD%CE%AC%CE%BA%CE%BF%CE%BF%CF%82",
    external: true
  },
  {
    label: "SoundCloud",
    icon: "SC",
    copy: "SoundCloud tracks, demos, and uploads.",
    href: "https://soundcloud.com/dj-s-john",
    external: true
  },
  {
    label: "Mix Portfolio",
    icon: "MX",
    copy: "Curated mix portfolio playlist.",
    href: "https://open.spotify.com/playlist/6blXZ74P6c5Lpv6bn7roFa?si=F6opAWdrSDqdFaGZRc0y9w&pi=0q8XQlIiSPSnK&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExdGhZaWI4RlYwSTVoOElDNnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5-FthUCVlfjKA6Ccf05Ogr2vg8aXp_92el-KmPvK_YwdDdcma0jNjsKW0WzQ_aem_0299JL8QI0KRgf7-e0-EhQ&nd=1&dlsi=d02c0f7c2f3a4d5b",
    external: true
  },
  {
    label: "Beats Portfolio",
    icon: "BT",
    copy: "Beat portfolio playlist and production work.",
    href: "https://open.spotify.com/playlist/4LHh5KN4HT9lv09IAI8bpy?si=DYcoDWFzReyB3PY-OFavxg&pi=GuFkTIO0SxSB3&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExM2hTTEs0NHZkQlRWd1lvTXNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5QTGl8B58tKiQs2CIQv-nPCp9BVqT03F_yCLLq-F8GHLm629_zoHhJLbs4SQ_aem_zfV5JPRrIMbgDhBvZd9IBA&nd=1&dlsi=1abff097c9134e88",
    external: true
  },
  {
    label: "Latest Event",
    icon: "EV",
    copy: "Latest event highlight on Instagram.",
    href: "https://www.instagram.com/stories/highlights/18578905063029870/",
    external: true
  },
  {
    label: "Latest Video",
    icon: "VC",
    copy: "Open the latest video clip.",
    href: "https://youtu.be/N0uZ5-lcpCo?si=cT-U_0Tp_Z2JiEXk",
    external: true
  },
  {
    label: "Merch Drop",
    icon: "MR",
    copy: "Latest merch presentation on Instagram.",
    href: "https://amcstudent-my.sharepoint.com/personal/pgiannakos23b_amcstudent_edu_gr/_layouts/15/embed.aspx?UniqueId=bea26113-f20d-43ca-9769-fa24bc0b8341",
    external: true
  },
  {
    label: "Blogger",
    icon: "BL",
    copy: "Read the blog and written updates.",
    href: "https://pgiannakos23.blogspot.com/?m=1",
    external: true
  },
  {
    label: "About Section",
    icon: "AB",
    copy: "Artist information and background script.",
    href: "#about",
    external: false
  }
];

const state = {
  selected: 0,
  knobRotation: 95,
  dragging: false,
  dragStartY: 0,
  dragStartSelected: 0,
  dragLastStep: 0,
  lastWheelAt: 0,
  movedDuringDrag: false
};

const bank = document.querySelector("[data-pad-bank]");
const screenPreview = document.querySelector("[data-screen-preview]");
const screenFallback = document.querySelector("[data-screen-fallback]");
const screenUrl = document.querySelector("[data-screen-url]");
const title = document.querySelector("[data-screen-title]");
const copy = document.querySelector("[data-screen-copy]");
const counter = document.querySelector("[data-pad-counter]");
const screenFormat = document.querySelector("[data-screen-format]");
const screenMode = document.querySelector("[data-screen-mode]");
const knob = document.querySelector("[data-knob]");
const knobFace = document.querySelector("[data-knob-face]");
const knobOutput = document.querySelector("[data-knob-output]");
const panel = document.querySelector("[data-page-panel]");
const panelKicker = document.querySelector("[data-panel-kicker]");
const panelTitle = document.querySelector("[data-panel-title]");
const panelCopy = document.querySelector("[data-panel-copy]");
const panelLink = document.querySelector("[data-panel-link]");
const particlesCanvas = document.querySelector("[data-particles]");
const stage = document.querySelector(".stage");
const mobileNavigation = window.matchMedia("(max-width: 900px)");
const knobStep = 360 / pads.length;
const padCount = pads.length;
const aboutCopy = {
  primary: {
    kicker: "About transmission",
    title: "Ο Μ.Τ.Ν",
    body: "Ο Μ.Τ.Ν είναι ένας καλλιτέχνης που κατά βάση ασχολείται με την hiphop μουσική. Από το 2021 εκπροσωπεί τη συγκεκριμένη μουσική ως ράπερ και μουσικός παραγωγός. Η αγάπη του για τη συγκεκριμένη μουσική αλλά και κουλτούρα ξεκίνησε το 2016, όταν ασχολήθηκε με το breakdance."
  },
  secondary: {
    kicker: "Signal notes",
    title: "Παραγωγός / BHS",
    body: "Έπειτα ασχολήθηκε με τα scratch και από το 2021 μέχρι και σήμερα με τη μουσική παραγωγή. Στις 20 Δεκεμβρίου 2025 κυκλοφόρησε τον πρώτο του δίσκο σαν μουσικός παραγωγός, με 16 διαφορετικούς καλλιτέχνες, συμπεριλαμβανομένου και του ίδιου. Από το καλοκαίρι του 2025 μέχρι και σήμερα είναι επίσημο μέλος των BHS από το Ηράκλειο της Κρήτης."
  }
};

function renderPads() {
  const fragment = document.createDocumentFragment();

  pads.forEach((pad, index) => {
    const button = document.createElement("button");
    button.className = "pad";
    button.type = "button";
    button.dataset.index = index;
    button.setAttribute("aria-label", `Open ${pad.label}`);
    button.innerHTML = `
      <span class="pad__icon" aria-hidden="true">${pad.icon}</span>
      <span class="pad__label">${pad.label}</span>
    `;
    button.addEventListener("mouseenter", () => {
      if (!mobileNavigation.matches) {
        previewPad(index);
      }
    });
    button.addEventListener("focus", () => {
      if (!mobileNavigation.matches) {
        previewPad(index);
      }
    });
    button.addEventListener("click", () => {
      selectPad(index);
      activatePad(index, button);
    });
    fragment.append(button);
  });

  bank.append(fragment);
}

function selectPad(index) {
  const nextSelected = normalizePadIndex(index);
  const delta = getShortestPadDelta(state.selected, nextSelected);

  state.selected = nextSelected;
  state.knobRotation += delta * knobStep;

  const pad = pads[state.selected];
  const angle = state.knobRotation;

  document.querySelectorAll(".pad").forEach((item, itemIndex) => {
    item.classList.toggle("is-selected", itemIndex === state.selected);
  });

  renderScreenPreview(pad);
  counter.textContent = `PAD ${String(state.selected + 1).padStart(2, "0")}/${padCount}`;
  knobOutput.textContent = String(state.selected + 1).padStart(2, "0");
  knob.setAttribute("aria-valuenow", String(state.selected + 1));
  knob.setAttribute("aria-valuetext", `Pad ${state.selected + 1} of ${padCount}`);
  knob.style.setProperty("--knob-angle", `${angle}deg`);
  knobFace.style.transform = `rotate(${angle}deg)`;

  if (panel.classList.contains("is-open")) {
    updatePanel(pad);
  }
}

function renderScreenPreview(pad) {
  const preview = getPreviewConfig(pad);

  title.textContent = pad.label;
  copy.textContent = pad.copy;
  screenUrl.textContent = getDisplayHost(pad.href);
  screenFormat.textContent = preview.format;
  screenMode.textContent = preview.mode;
  screenPreview.classList.toggle("screen-preview--embedded", Boolean(preview.src));

  if (!preview.src) {
    screenFallback.hidden = false;
    const currentFrame = screenPreview.querySelector("iframe");

    if (currentFrame) {
      currentFrame.remove();
    }

    return;
  }

  screenFallback.hidden = true;

  let frame = screenPreview.querySelector("iframe");

  if (!frame) {
    frame = document.createElement("iframe");
    frame.loading = "lazy";
    frame.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    frame.sandbox = "allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    screenPreview.append(frame);
  }

  frame.title = `${pad.label} mini player`;

  if (frame.src !== preview.src) {
    frame.src = preview.src;
  }
}

function getPreviewConfig(pad) {
  const fallback = { src: "", mode: "PREVIEW", format: "44K 24" };

  try {
    const url = new URL(pad.href, window.location.href);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "open.spotify.com") {
      const spotifyUrl = getSpotifyEmbedUrl(url);
      return spotifyUrl
        ? { src: spotifyUrl, mode: "SPOTIFY", format: "EMBED" }
        : fallback;
    }

    if (host === "youtu.be" || host === "youtube.com" || host === "m.youtube.com") {
      const youtubeUrl = getYouTubeEmbedUrl(url);
      return youtubeUrl
        ? { src: youtubeUrl, mode: "YOUTUBE", format: "VIDEO" }
        : { src: "", mode: "CHANNEL", format: "OPEN" };
    }

    if (host === "soundcloud.com") {
      const params = new URLSearchParams({
        url: url.href,
        color: "#22f0dc",
        auto_play: "false",
        hide_related: "true",
        show_comments: "false",
        show_user: "true",
        show_reposts: "false",
        show_teaser: "false",
        visual: "false"
      });

      return { src: `https://w.soundcloud.com/player/?${params}`, mode: "SOUNDCLOUD", format: "AUDIO" };
    }

    if (host.endsWith("sharepoint.com") && url.pathname.includes("/embed.aspx")) {
      return { src: url.href, mode: "EMBED", format: "DOC" };
    }

    if (host === "pgiannakos23.blogspot.com") {
      url.searchParams.set("m", "1");
      return { src: url.href, mode: "BLOGGER", format: "MOBILE" };
    }

    if (host === "instagram.com") {
      return { src: "", mode: "INSTAGRAM", format: "OPEN" };
    }

    if (host === "linktr.ee") {
      return { src: "", mode: "LINKTREE", format: "OPEN" };
    }
  } catch (error) {
    return fallback;
  }

  return fallback;
}

function getDisplayHost(href) {
  try {
    const url = new URL(href, window.location.href);
    return url.hostname.replace(/^www\./, "");
  } catch (error) {
    return "local";
  }
}

function getSpotifyEmbedUrl(url) {
  const embeddableTypes = new Set(["album", "artist", "episode", "playlist", "show", "track"]);
  const parts = url.pathname.split("/").filter(Boolean);
  const typeIndex = parts.findIndex((part) => embeddableTypes.has(part));
  const type = parts[typeIndex];
  const id = parts[typeIndex + 1];

  if (!type || !id) {
    return "";
  }

  const embedUrl = new URL(`https://open.spotify.com/embed/${type}/${id}`);
  embedUrl.searchParams.set("utm_source", "generator");
  embedUrl.searchParams.set("theme", "0");
  return embedUrl.href;
}

function getYouTubeEmbedUrl(url) {
  let videoId = "";

  if (url.hostname === "youtu.be") {
    videoId = url.pathname.split("/").filter(Boolean)[0] || "";
  } else if (url.pathname.startsWith("/watch")) {
    videoId = url.searchParams.get("v") || "";
  } else if (url.pathname.startsWith("/shorts/") || url.pathname.startsWith("/embed/")) {
    videoId = url.pathname.split("/").filter(Boolean)[1] || "";
  }

  if (!videoId) {
    return "";
  }

  const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
  embedUrl.searchParams.set("rel", "0");
  return embedUrl.href;
}

function getKnobRotation(index) {
  return 95 + index * knobStep;
}

function normalizePadIndex(index) {
  return (index + pads.length) % pads.length;
}

function getShortestPadDelta(currentIndex, nextIndex) {
  let delta = nextIndex - currentIndex;
  const halfLength = pads.length / 2;

  if (delta > halfLength) {
    delta -= pads.length;
  }

  if (delta < -halfLength) {
    delta += pads.length;
  }

  return delta;
}

function updatePanel(pad) {
  if (pad.external) {
    panelKicker.textContent = "External transmission";
    panelLink.textContent = `Open ${pad.label}`;
  } else {
    panelKicker.textContent = "Internal page";
    panelLink.textContent = "Enter section";
  }

  panelTitle.textContent = pad.label;
  panelCopy.textContent = pad.copy;
  panelLink.href = pad.href;
  panelLink.target = "_blank";
  panelLink.rel = "noopener noreferrer";
}

function showPanel(index = state.selected) {
  updatePanel(pads[index]);
  panel.classList.add("is-open");
  panel.setAttribute("aria-hidden", "false");
}

function isAboutPad(pad) {
  return pad.href === "#about";
}

function getAboutPadIndex() {
  return pads.findIndex(isAboutPad);
}

function createAboutFields() {
  const fragment = document.createDocumentFragment();

  [
    ["top-left", aboutCopy.primary],
    ["bottom-right", aboutCopy.secondary]
  ].forEach(([position, content]) => {
    const field = document.createElement("aside");
    field.className = `about-field about-field--${position}`;
    field.setAttribute("aria-hidden", "true");
    field.innerHTML = `
      <p>${content.kicker}</p>
      <h2>${content.title}</h2>
      <p>${content.body}</p>
    `;
    fragment.append(field);
  });
  const closeButton = document.createElement("button");
  closeButton.className = "about-close";
  closeButton.type = "button";
  closeButton.textContent = "x";
  closeButton.setAttribute("aria-label", "Exit about section");
  closeButton.setAttribute("aria-hidden", "true");
  closeButton.addEventListener("click", hideAboutMode);
  fragment.append(closeButton);

  stage.append(fragment);
}

function showAboutMode() {
  panel.classList.remove("is-open");
  panel.setAttribute("aria-hidden", "true");
  stage.classList.add("is-about-mode");
  document.querySelectorAll(".about-field, .about-close").forEach((field) => {
    field.setAttribute("aria-hidden", "false");
  });
  window.location.hash = "about";
}

function hideAboutMode() {
  stage.classList.remove("is-about-mode");
  document.querySelectorAll(".about-field, .about-close").forEach((field) => {
    field.setAttribute("aria-hidden", "true");
  });

  if (window.location.hash === "#about") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}

function previewPad(index) {
  selectPad(index);

  if (!isAboutPad(pads[index])) {
    showPanel(index);
  }
}

function openPad(index = state.selected, trigger) {
  const pad = pads[index];
  const button = trigger || document.querySelector(`.pad[data-index="${index}"]`);

  if (button) {
    button.classList.add("is-pressed");
    window.setTimeout(() => button.classList.remove("is-pressed"), 180);
  }

  showPanel(index);
  window.location.hash = pad.href.startsWith("#") ? pad.href : "";
}

function activatePad(index = state.selected, trigger) {
  const button = trigger || document.querySelector(`.pad[data-index="${index}"]`);
  const pad = pads[index];

  if (button) {
    button.classList.add("is-pressed");
    window.setTimeout(() => button.classList.remove("is-pressed"), 140);
  }

  if (isAboutPad(pad)) {
    showAboutMode();
    return;
  }

  hideAboutMode();

  if (pad.href.startsWith("#")) {
    showPanel(index);
    window.location.hash = pad.href;
    return;
  }

  openLinkInNewTab(pad.href);
}

function navigatePad(index = state.selected) {
  const pad = pads[index];

  if (isAboutPad(pad)) {
    showAboutMode();
    return;
  }

  hideAboutMode();

  if (pad.href.startsWith("#")) {
    showPanel(index);
    window.location.hash = pad.href;
    return;
  }

  openLinkInNewTab(pad.href);
}

function openLinkInNewTab(href) {
  const url = new URL(href, window.location.href);
  window.open(url.href, "_blank", "noopener,noreferrer");
}

function rotateBy(delta) {
  selectPad(state.selected + delta);
}

function initKnob() {
  knob.addEventListener("wheel", (event) => {
    event.preventDefault();
    const now = window.performance.now();

    if (now - state.lastWheelAt < 130) {
      return;
    }

    const primaryDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

    if (Math.abs(primaryDelta) >= 2) {
      rotateBy(primaryDelta > 0 ? 1 : -1);
      state.lastWheelAt = now;
    }
  });

  knob.addEventListener("pointerdown", (event) => {
    state.dragging = true;
    state.dragStartY = event.clientY;
    state.dragStartSelected = state.selected;
    state.dragLastStep = 0;
    state.movedDuringDrag = false;
    knob.setPointerCapture(event.pointerId);
  });

  knob.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    const dragDistance = state.dragStartY - event.clientY;
    const step = Math.trunc(dragDistance / 38);

    if (step !== state.dragLastStep) {
      selectPad(state.dragStartSelected + step);
      state.dragLastStep = step;
      state.movedDuringDrag = true;
    }
  });

  knob.addEventListener("pointerup", () => {
    state.dragging = false;
  });

  knob.addEventListener("pointercancel", () => {
    state.dragging = false;
    state.dragLastStep = 0;
  });
}

function initControls() {
  document.querySelector("[data-prev]").addEventListener("click", () => rotateBy(-1));
  document.querySelector("[data-next]").addEventListener("click", () => rotateBy(1));
  document.querySelector("[data-open]").addEventListener("click", () => navigatePad());
  document.querySelector("[data-close-panel]").addEventListener("click", () => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") rotateBy(1);
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") rotateBy(-1);
    if (event.key === "Enter") activatePad();
    if (event.key === "Escape") {
      panel.classList.remove("is-open");
      hideAboutMode();
    }
  });
}

function initParticles() {
  const context = particlesCanvas.getContext("2d");
  const particles = Array.from({ length: 80 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.6 + 0.35,
    vx: (Math.random() - 0.5) * 0.0005,
    vy: Math.random() * -0.00045 - 0.0001,
    alpha: Math.random() * 0.55 + 0.1
  }));

  function resize() {
    particlesCanvas.width = window.innerWidth * window.devicePixelRatio;
    particlesCanvas.height = window.innerHeight * window.devicePixelRatio;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }

  function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.y < -0.05) particle.y = 1.05;
      if (particle.x < -0.05) particle.x = 1.05;
      if (particle.x > 1.05) particle.x = -0.05;

      context.beginPath();
      context.fillStyle = `rgba(111, 232, 255, ${particle.alpha})`;
      context.shadowBlur = 14;
      context.shadowColor = "rgba(34, 240, 220, 0.7)";
      context.arc(particle.x * width, particle.y * height, particle.r, 0, Math.PI * 2);
      context.fill();
    });

    window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

function initLoader() {
  window.setTimeout(() => {
    const loader = document.querySelector("[data-loader]");
    loader.classList.add("is-hidden");
    window.setTimeout(() => loader.classList.add("is-gone"), 760);
  }, 900);
}

function initRoute() {
  if (window.location.hash !== "#about") {
    return;
  }

  const aboutIndex = getAboutPadIndex();

  if (aboutIndex >= 0) {
    selectPad(aboutIndex);
    showAboutMode();
  }
}

renderPads();
createAboutFields();
initKnob();
initControls();
initParticles();
initLoader();
selectPad(0);
initRoute();


