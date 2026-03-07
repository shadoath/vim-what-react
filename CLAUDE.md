# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two implementations of "Vim What?" - a Chrome extension for learning Vim commands:

1. **vim-what**: Original jQuery-based Chrome extension (manifest v3)
2. **vim-what-react**: React TypeScript migration (in progress)

The goal is to complete the migration from the jQuery version to the React version while maintaining all functionality.

## Development Commands

### React Application (vim-what-react)
```bash
cd vim-what-react
npm install              # Install dependencies
npm start                # Start development server on localhost:3000
npm test                 # Run tests in watch mode
npm run build            # Build for production (Chrome extension compatible)
```

Note: The build command includes `INLINE_RUNTIME_CHUNK=false` for Chrome extension compatibility.

### Original Extension (vim-what)
No build process required - uses static HTML/JS with jQuery. Load directly in Chrome as unpacked extension.

## Architecture

### Data Flow
Both versions share similar data structures but implement them differently:

**Original (vim-what)**:
- JSON files loaded via jQuery AJAX: `key_info_*.json`, `layouts.json`, `lessons.json`
- Chrome storage API for user preferences and custom mappings
- Global state managed through variables

**React (vim-what-react)**:
- TypeScript modules: `letters.ts`, `numbers.ts`, `symbols.ts`, `layouts.ts`, `lessons.ts`, `prefixKeys.ts`
- Context API (`BaseContext`) for state management
- Persistence via `localStorage`: layout, lesson level, learned keys, custom mappings

### Key Components Architecture

**React Component Hierarchy**:
```
App
├── Header (layout/lesson/prefix selectors, KOTD, search)
├── Keyboard (visual keyboard — dual-layer stacked keys)
│   └── Key (individual key; isSecondary for shift layer)
└── BottomTabs
    ├── InfoArea (key detail panel + lesson content when no key selected)
    │   └── lessons/Lesson1–7, LessonAll (lesson prose/visuals)
    ├── TextObjects (i/a text object reference)
    ├── ProgressPanel (per-category learned key progress)
    └── CustomMappings (user remap notes, stored in localStorage)
```

**Context Pattern**:
- `BaseContext` manages: layout, lesson level, selected key info, documentation links
- All components access shared state via `useBaseContext()` hook

### Feature Migration Status

**Completed**:
- Keyboard layouts (Qwerty, Colemak, Colemak-DH, Dvorak, Workman)
- Lesson progression system (8 levels + All)
- Key information display with plugin tips in `letters.ts`, `numbers.ts`, `symbols.ts`
- Dual-layer keyboard: shift keys stacked above normal keys, no toggle needed
- Search/query filtering
- Prefix modes: g, z, Ctrl overlays via ToggleButtonGroup
- Keyboard shortcut navigation (press a key to select it)
- Key of the Day (KOTD) widget in header
- Learned key tracking with green dot indicator
- Custom mapping indicator (purple dot)
- Legend explaining visual indicators
- Insert mode keys highlighted in red

**Missing / Remaining**:
- Chrome extension store submission (screenshots, icons, promotional tile)
- README update with store link once published

### Key Data Structures

**Key Info Type** (React):
```typescript
type KeyInfoType = {
  title?: string
  action?: 'motion' | 'operator' | 'command' | 'extra'
  hasBorder?: boolean
  hasDot?: boolean
  vimHelp?: string
  plugins?: string
  text: string
  secondaryText?: string
}
```

**Lesson System**:
- 8 levels (0-7 + "all" mode)
- Each level introduces new vim commands progressively
- Visual opacity indicates active vs focused keys

### Chrome Extension Configuration

Both versions target Manifest V3. The React build requires special configuration:
- `INLINE_RUNTIME_CHUNK=false` in build script
- Static assets in `public/` directory
- Icons and manifest.json ready for Chrome

### Important Implementation Details

1. **Layout Storage**: Original uses Chrome sync storage; React version needs implementation
2. **Key Mapping Format**: Custom maps stored as string values in Chrome storage
3. **Help Links**: Point to `http://vimhelp.appspot.com/` with specific anchors
4. **Image Assets**: Located in `/images/about/` for lesson visuals
5. **Dual-layer keyboard**: `getShiftRowForNormalRow()` in `layouts.ts` pairs each normal row with its shift row by closest index. Two `<Key>` components stacked per position — shift key (`isSecondary`, height 26px) above normal key (height 30px).
6. **No tooltips on keys**: Tooltips were removed — clicking a key opens the InfoArea panel instead.
7. **Scrollbar hiding**: Global `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` in `App.scss`. Popup auto-sizes to content.
8. **MUI ToggleButtonGroup**: `exclusive` mode overrides individual `selected` prop. Use `'&.Mui-selected': { backgroundColor: '...' !important }` directly on each `ToggleButton` sx — group-level selectors don't win.

## Development Philosophy / Design Preferences

- **Compact UI**: Everything should fit in the Chrome popup without scrollbars. Minimize padding, font sizes, and spacing.
- **Click over hover**: Interactive details (key info) should appear on click, not hover tooltip. Keep the keyboard surface clean.
- **Dual-layer display**: Show shifted and unshifted keys simultaneously — no toggles or modal states.
- **Progressive disclosure**: Lesson levels filter visible keys; full info only shown when a key is selected.
- **Plan before editing**: Briefly state the approach and wait for confirmation before making changes, especially for larger refactors.