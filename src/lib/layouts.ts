export const keymaps = {
  Colemak: [
    '!@#$%^&*()+',
    '1234567890=',
    'QWFPGJLUY:{}|',
    'qwfpgjluy;[]\\',
    'ARSTDHNEIO"',
    "arstdhneio'",
    'zxcvbkm,./',
    'ZXCVBKM<>?',
  ],
  Qwerty: [
    '~!@#$%^&*()_+',
    '`1234567890-=',
    'QWERTYUIOP{}|',
    'qwertyuiop[]\\',
    'ASDFGHJKL:"',
    "asdfghjkl;'",
    'ZXCVBNM<>?',
    'zxcvbnm,./',
  ],
  Dvorak: [
    '~!@#$%^&*(){}|', // row 0 - shifted number row
    '`1234567890[]\\', // row 1 - normal number row ([ and ] where - and = are in Qwerty)
    '"<>PYFGCRL?+', // row 2 - shifted top row
    "',.pyfgcrl/=", // row 3 - normal top row
    'AOEUIDHTNS_', // row 4 - shifted home row
    'aoeuidhtns-', // row 5 - normal home row
    ':QJKXBMWVZ', // row 6 - shifted bottom row
    ';qjkxbmwvz', // row 7 - normal bottom row
  ],
  'Colemak-DH': [
    '!@#$%^&*()+', // row 0 - shifted number row
    '1234567890=', // row 1 - normal number row
    'QWFPBJLUY:{}|', // row 2 - shifted top row (B replaces G vs standard Colemak)
    'qwfpbjluy;[]\\', // row 3 - normal top row
    'ARSTGMNEIO"', // row 4 - shifted home row (G where D was, M where H was)
    "arstgmneio'", // row 5 - normal home row
    'zxcdvkh,./', // row 6 - normal bottom row (D and H moved down here)
    'ZXCDVKH<>?', // row 7 - shifted bottom row
  ],
  Workman: [
    '~!@#$%^&*()_+', // row 0 - shifted number row
    '`1234567890-=', // row 1 - normal number row
    'QDRWBJFUP:{}|', // row 2 - shifted top row
    'qdrwbjfup;[]\\', // row 3 - normal top row
    'ASHTGYNEOI"', // row 4 - shifted home row
    "ashtgyneoi'", // row 5 - normal home row
    'ZXMCVKL<>?', // row 6 - shifted bottom row
    'zxmcvkl,./', // row 7 - normal bottom row
  ],
}

// Which row indices are the "shift" (uppercase/symbol) layer for each layout
export const shiftRowIndices: Record<string, number[]> = {
  Qwerty: [0, 2, 4, 6],
  Colemak: [0, 2, 4, 7],
  Dvorak: [0, 2, 4, 6],
  'Colemak-DH': [0, 2, 4, 7],
  Workman: [0, 2, 4, 6],
}

// For each normal row index, return the closest shift row string for that layout
export function getShiftRowForNormalRow(
  layout: string,
  normalIdx: number,
): string | undefined {
  const rows = keymaps[layout as keyof typeof keymaps]
  const shiftIdxs = shiftRowIndices[layout] ?? []
  if (!rows || shiftIdxs.length === 0) return undefined
  let closestIdx = shiftIdxs[0]
  let minDist = Math.abs(normalIdx - shiftIdxs[0])
  for (const si of shiftIdxs) {
    const dist = Math.abs(normalIdx - si)
    if (dist < minDist) {
      minDist = dist
      closestIdx = si
    }
  }
  return rows[closestIdx]
}
