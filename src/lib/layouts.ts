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
}

// Which row indices are the "shift" (uppercase/symbol) layer for each layout
export const shiftRowIndices: Record<string, number[]> = {
  Qwerty: [0, 2, 4, 6],
  Colemak: [0, 2, 4, 7],
}
