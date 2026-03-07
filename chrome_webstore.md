# Chrome Web Store Listing — Vim What?

---

## Name

Vim What?

---

## Short Description
*(132 character max — current: 122)*

Visual Vim reference: color-coded keyboard, 9 progressive lessons, prefix overlays, plugin tips, and progress tracking.

---

## Detailed Description
*(plain text — paste directly into the Chrome Web Store description field)*

Vim What? is the interactive Vim command reference that lives in your browser. Forget a key? Click the toolbar icon — the full keyboard is right there, color-coded and clickable, with rich descriptions, examples, and official docs links for every command.

COLOR-CODED KEY TYPES

Teal — Motion (moves the cursor: w, b, f, /)
Orange — Operator (acts on a motion: d, y, c, =)
Yellow — Command (direct action: i, o, p, u)
Gray — Extra (prefix or special: g, z, ", @)
Red text — Enters insert mode (i, a, o, s, c...)

FEATURES

Visual keyboard — every Vim command on a full keyboard. Click any key for a detailed description, usage examples, and a direct link to the official Vim docs.

Dual-layer keyboard — every key shows both the normal and shifted command stacked together. No toggle needed — the full picture is always visible.

9 progressive lessons — commands are introduced gradually across 9 named levels:
  1 — Move & survive
  2 — Insert & line basics
  3 — Words & operators
  4 — Find on line
  5 — Yank & paste
  6 — Search
  7 — Visual mode
  8 — Navigate the file
  9 — Marks & macros
Current-level keys are outlined so you always know what to focus on. Keys from previous levels stay visible but slightly muted. Inactive keys fade into the background.

Prefix overlays — toggle g, z, or Ctrl mode to instantly see what every key does with that prefix, overlaid directly on the keyboard. Non-mapped keys hide their labels so only relevant commands show.

Plugin tips — key info includes annotations for popular plugins like vim-surround, vim-commentary, vim-unimpaired, CamelCaseMotion, vim-asterisk, and more.

Search — type any key or keyword to instantly highlight matching keys across the entire keyboard.

Key of the Day — a different letter key is featured each day with its full description. Great for building muscle memory over time.

Progress tracking — mark keys as learned. A green dot appears on each learned key and the Progress panel shows your completion by category.

Text Objects reference — a dedicated panel for i/a text object selectors (iw, a(, i", it...), color-coded and grouped by category.

Custom mappings — save your personal remaps and notes per key or sequence (e.g. leader+w, gd, Ctrl-p). They appear highlighted on the keyboard and in the info panel.

5 keyboard layouts — Qwerty, Colemak, Colemak-DH, Dvorak, Workman.

Keyboard navigation — press any key on your physical keyboard to select it on screen. Press Escape to clear the selection, or press Escape again to close the popup.

Whether you are just starting with Vim or filling in gaps in your knowledge, Vim What? keeps the full command set one click away — without leaving your browser.

---

## Category

Developer Tools

---

## Language

English

---

## Screenshots (suggested captures — 1280x800 or 640x400)

1. Main keyboard view — full Qwerty layout, All mode, no key selected. Shows all color-coded keys at a glance.
2. Lesson level view — level 1 active, current-level keys outlined, prior/inactive keys visibly tiered.
3. Key selected (rich info) — click d or y: description with code formatting, examples, plugin tip, vim help link, and Mark Learned button.
4. Prefix overlay — g mode active, keyboard showing g+key commands overlaid in blue (gg, gd, gf, g~, gv...).
5. Text Objects panel — color-coded i/a chips, grouped by category with inline descriptions.
6. Progress panel — progress bars and per-category breakdown showing learned key counts.
7. Custom Mappings panel — example remaps shown with purple highlight.

---

## Promotional Tile (small — 440x280)

Headline: Learn Vim. One key at a time.
Subtext: Visual keyboard reference with 9 progressive lessons, prefix overlays, plugin tips, and progress tracking.

---

## Promotional Tile (marquee — 1400x560)

Headline: Vim What?
Subtext: The interactive Vim command reference for your browser. Visual keyboard, 9 progressive lessons, prefix overlays, plugin tips, and progress tracking — always one click away.

---

## Privacy Policy Notes

No data is collected or transmitted.
All user data (learned keys, custom mappings, layout preference, lesson level) is stored locally in the browser via localStorage.
No analytics, no tracking, no external requests.
Privacy policy URL: https://github.com/shadoath/vim-what-react/blob/main/PRIVACY.md

---

## Support / Homepage URL

https://github.com/shadoath/vim-what-react

---

## Pre-Release Checklist

- [x] Create PRIVACY.md in repo
- [x] Replace lesson PNG images with React components
- [x] 9 named lesson levels with progressive key highlighting
- [x] Escape closes popup when no key is selected
- [ ] Take screenshots (1280x800) for all 7 suggested captures above
- [ ] Verify icon quality at all 3 sizes (16px, 48px, 128px)
- [ ] Run npm run build and load the build/ folder as an unpacked extension — smoke test all panels
- [ ] Verify Key of the Day cycles correctly
- [ ] Verify keyboard physical key navigation works in the popup context
- [ ] Consider a 440x280 promotional tile image for the store listing
- [ ] Update README with link to Chrome Web Store once published
