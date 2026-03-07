# Chrome Web Store Listing — Vim What?

---

## Name
Vim What?

---

## Short Description
*(132 character max — current: 118)*

Visual Vim reference: color-coded keyboard, prefix overlays, progressive lessons, plugin tips, and progress tracking.

---

## Detailed Description

**Vim What?** is the interactive Vim command reference that lives in your browser. Forget a key? Click the toolbar icon — the full keyboard is right there, color-coded and clickable, with rich descriptions, examples, and official docs links for every command.

**Color-coded key types:**
- Teal — Motion (moves the cursor: w, b, f, /)
- Orange — Operator (acts on a motion: d, y, c, =)
- Yellow — Command (direct action: i, o, p, u)
- Gray — Extra (prefix or special: g, z, ", @)

---

**Features:**

- **Visual keyboard** — every Vim command laid out on a full keyboard. Click any key for a detailed description, usage examples, and a direct link to the official Vim docs. Rich inline formatting with `code` references throughout.

- **Plugin tips** — key info includes annotations for popular plugins like vim-surround, vim-commentary, vim-unimpaired, CamelCaseMotion, vim-asterisk, and more. See which plugins extend each key and what they add.

- **Prefix overlays** — toggle `g`, `z`, or `Ctrl` mode to instantly see what every key does with that prefix, overlaid directly on the keyboard. No more guessing what `gz` or `Ctrl-d` do.

- **Dual-layer keyboard** — every key shows both the normal and shifted command simultaneously, stacked. No toggle needed — the full picture is always visible.

- **Progressive lessons** — 7 lesson levels introduce commands gradually. Start with the essentials (`h`/`j`/`k`/`l`, `i`, `o`, `d`, `y`) and unlock more as you go. Keys outside your current lesson are dimmed so you can focus.

- **Search** — type any key or keyword to instantly highlight matching keys across the entire keyboard.

- **Key of the Day** — a daily key to study. Each day surfaces a different letter key with its full description. Great for building muscle memory over time.

- **Progress tracking** — mark keys as learned. A green dot appears on each learned key so you can see your progress at a glance.

- **Text Objects reference** — a dedicated panel for `i`/`a` text object selectors (`iw`, `a(`, `i"`, `it`, ...), color-coded and grouped by category (words, quotes, brackets, tags, and more).

- **Custom mappings** — save your personal remaps and notes per key or sequence (e.g. `<leader>w`, `gd`, `<C-p>`). They appear highlighted on the keyboard and in the info panel.

- **5 keyboard layouts** — Qwerty, Colemak, Colemak-DH, Dvorak, Workman.

- **Keyboard navigation** — press any key on your physical keyboard to select it on screen. Escape to clear.

Whether you are just starting with Vim or filling in gaps in your knowledge, Vim What? keeps the full command set one click away — without leaving your browser.

---

## Category
Developer Tools

---

## Language
English

---

## Screenshots (suggested captures — 1280x800 or 640x400)

1. **Main keyboard view** — full Qwerty layout, normal mode, no key selected. Shows all color-coded keys at a glance.
2. **Key selected (rich info)** — click `d` or `y` with the Info panel showing: description with code formatting, examples, plugin tip, vim help link, and "Mark as Learned" button.
3. **Prefix overlay** — `g` mode active, keyboard showing g+key commands overlaid in blue (gg, gd, gf, g~, gv...).
4. **Dual-layer keyboard** — close-up showing stacked shift+normal key pairs across a row.
5. **Text Objects panel** — color-coded teal/blue `i`/`a` chips, grouped by category with inline descriptions.
6. **Progress panel** — progress bars and per-category breakdown showing learned key counts.
7. **Custom Mappings panel** — example remaps like `<leader>w`, `gd`, `<C-p>` shown with purple highlight.

---

## Promotional Tile (small — 440x280)

**Headline:** Learn Vim. One key at a time.
**Subtext:** Visual keyboard reference with lessons, prefix overlays, plugin tips, and progress tracking.

---

## Promotional Tile (marquee — 1400x560)

**Headline:** Vim What?
**Subtext:** The interactive Vim command reference for your browser. Visual keyboard, progressive lessons, prefix overlays, plugin tips, and progress tracking — always one click away.

---

## Privacy Policy Notes

- No data is collected or transmitted.
- All user data (learned keys, custom mappings, layout preference, lesson level) is stored locally in the browser via `localStorage`.
- No analytics, no tracking, no external requests.
- Privacy policy URL: https://github.com/shadoath/vim-what-react/blob/main/PRIVACY.md

---

## Support / Homepage URL

https://github.com/shadoath/vim-what-react

---

## Pre-Release Checklist

- [x] Create `PRIVACY.md` in repo
- [ ] Take screenshots (1280x800) for all 7 suggested captures above
- [ ] Verify icon quality at all 3 sizes (16px, 48px, 128px) — current icons are from 2023
- [ ] Run `npm run build` and load the `build/` folder as an unpacked extension — smoke test all panels
- [ ] Verify Key of the Day cycles correctly
- [ ] Verify lesson images (`/about/lesson_*.png`) load inside the extension popup
- [ ] Verify keyboard physical key navigation works in the popup context
- [ ] Consider a 440x280 promotional tile image for the store listing
- [ ] Update README with link to Chrome Web Store once published
