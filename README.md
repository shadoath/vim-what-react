# Vim What?

![Vim What logo](./src/vim-what.svg)

A Chrome extension for learning Vim commands. See the visual keyboard, understand what each key does, and learn progressively through lesson levels.

## Features

- Visual keyboard with color-coded key types (motion, operator, command, extra)
- Qwerty and Colemak layout support
- 7 progressive lesson levels to learn Vim incrementally
- Click any key to see its description and link to the official Vim docs
- Dot indicators for repeatable commands

## Key Color Guide

| Color | Type | Meaning |
|-------|------|---------|
| Teal | Motion | Moves the cursor |
| Orange | Operator | Acts on a motion (e.g. `d`, `y`, `c`) |
| Yellow | Command | Direct action (e.g. `i`, `o`, `p`) |
| Gray | Extra | Prefix or special commands |

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
