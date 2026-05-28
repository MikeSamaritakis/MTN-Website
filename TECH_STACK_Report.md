# Tech Stack

This is a static frontend website built with no framework, backend, database, package manager, or build step.

## Technologies

- **HTML5**: Page structure in `index.html`.
- **CSS3**: Layout, responsive design, animations, visual effects, and styling in `styles.css`.
- **Vanilla JavaScript**: Interactions, pad navigation, previews, controls, loader, and particles in `script.js`.
- **Local media**: Background video in `assets/MTN_background_visual.mp4`.

## Browser APIs Used

- DOM manipulation and events.
- Canvas API for particles.
- `requestAnimationFrame` for animation.
- `URL` and `URLSearchParams` for link/embed handling.
- `matchMedia` for responsive behavior.
- `window.open` for external links.

## External Platforms

- Spotify.
- YouTube.
- Instagram.
- SoundCloud.
- Blogger.

## Main Features

- 16-pad MPC-style navigation.
- Inline SVG icons.
- Rotary knob and transport controls.
- Embedded Spotify/SoundCloud previews.
- YouTube preview cards.
- Animated video background.
- Fog, static, glow, LED, and scanline effects.
- Keyboard and accessibility support.

## Development and Deployment

- Runs directly in a browser.
- Optional local server:

```bash
python -m http.server 8000
```

- **Domain registrar**: GoDaddy.
- **Hosting**: GitHub Pages.

## Going Online

The site was published by pushing the static files to GitHub, enabling GitHub Pages, and connecting the GoDaddy domain to the GitHub Pages site.

Basic setup:

1. Upload `index.html`, `styles.css`, `script.js`, and `assets/` to the GitHub repository.
2. In GitHub, open the repository settings and enable **Pages** from the selected branch.
3. Add the custom domain in the GitHub Pages settings.
4. In GoDaddy DNS, point the domain to GitHub Pages using the required DNS records.
5. Add a `www` CNAME record pointing to the GitHub Pages default domain, such as `username.github.io`.
6. Wait for DNS propagation, then enable **Enforce HTTPS** in GitHub Pages.

## Used

OpenAI Codex extension in Visual Studio Code for code generation and optimization, and ChatGPT for project planning, documentation, and code review.
More specifically, GPT-5.5 was used in the Medium setting.

The website was based on an image created by the artist, which was used as a reference for the design and layout of the site. 
