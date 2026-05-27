# M.T.N MPC Website

Interactive artist website for **M.T.N**, designed as a haunted MPC-style workstation. The page turns the artist's music links, videos, socials, releases, merch, blog, and biography into a 16-pad hardware-inspired interface.

## Preview

The site opens directly into the MPC experience:

- 16 clickable pads for streaming platforms, YouTube, Instagram, releases, merch, events, blog, and about content
- Green CRT-style mini screen with platform-aware previews
- Spotify embedded mini-player support for Spotify pads
- YouTube profile/video card previews for YouTube pads
- Rotary selector, transport controls, hover states, and keyboard navigation
- Animated background video, particles, fog, static, and boot loader
- About mode with Greek artist biography content

## Tech Stack

This is a static frontend site built with plain web technologies:

- HTML
- CSS
- JavaScript
- Local media assets in `assets/`

No build step or framework is required.

## Project Structure

```text
.
+-- index.html        # Main page markup
+-- styles.css        # Full visual system and responsive layout
+-- script.js         # Pad data, interactions, mini-player previews, about mode
+-- assets/           # Background media and supporting assets
+-- LICENSE
+-- README.md
```

## Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server, run one of these from the project root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also use any static server extension or hosting platform.

## Deployment

The project is ready for static hosting on platforms such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Deploy the repository root so `index.html`, `styles.css`, `script.js`, and the `assets/` folder stay together.

## Notes

Some third-party platforms restrict embedded playback depending on browser, origin, privacy settings, or local file usage. The site uses stable card previews for YouTube links and embedded players where they are supported.