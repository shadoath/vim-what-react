# Vim What? v1.0.0

![Vim What logo](./src/vim-what.svg)

A Chrome extension for learning Vim commands interactively. Visual keyboard with color-coded keys, prefix mode overlays, progressive lesson levels, and progress tracking.

## Features

- **Visual keyboard** — color-coded key types (motion, operator, command, extra) across 5 layouts: Qwerty, Colemak, Colemak-DH, Dvorak, Workman
- **Prefix overlays** — toggle `g`, `z`, or `Ctrl` mode to see what each prefix does to every key
- **Shift mode** — toggle or hold Shift to view the uppercase/symbol layer; shows only the relevant half of the keyboard
- **7 progressive lesson levels** — learn Vim incrementally; keys outside the current lesson are dimmed
- **Search** — filter keys by name or description
- **Key of the Day** — a daily key to focus on
- **Progress tracking** — mark keys as learned; a green dot appears on learned keys
- **Text Objects reference** — quick reference panel for `i`/`a` text objects
- **Custom mappings** — save personal notes or remaps per key, stored in localStorage
- **Keyboard navigation** — press any key to select it; Escape to clear

## Key Color Guide

| Color | Type | Meaning |
|-------|------|---------|
| Teal | Motion | Moves the cursor |
| Orange | Operator | Acts on a motion (e.g. `d`, `y`, `c`) |
| Yellow | Command | Direct action (e.g. `i`, `o`, `p`) |
| Gray | Extra | Prefix or special commands |

Red key labels enter Insert mode.

## Development

```bash
cd vim-what-react
npm install
npm start        # dev server on localhost:3000
npm test         # run tests
npm run build    # production build (Chrome extension compatible)
```

## Chrome Extension

Load the `build/` folder as an unpacked Chrome extension. The build is configured with `INLINE_RUNTIME_CHUNK=false` for Manifest V3 compatibility.
