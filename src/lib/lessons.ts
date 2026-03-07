export const lessons = [
  '1234567890',       // 0: numbers (hidden from dropdown)
  'hjkliaxu:',        // 1: Move & survive
  'AIoOX.^-+',        // 2: Insert & line basics
  'wbeWBEdcDCr',      // 3: Words & core operators
  'fFtTsS;,',         // 4: Find on line
  'yYpP"J~',          // 5: Yank & paste
  '/?nN*#',           // 6: Search
  "vV><=!",           // 7: Visual mode
  'GHMLK%(){}[]',     // 8: Navigate the file
  "gmqzQRUZ@&_`|'",  // 9: Marks & macros
]

export const lessonLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const lessonNames: Record<number, string> = {
  1: 'Move & survive',
  2: 'Insert & line basics',
  3: 'Words & operators',
  4: 'Find on line',
  5: 'Yank & paste',
  6: 'Search',
  7: 'Visual mode',
  8: 'Navigate the file',
  9: 'Marks & macros',
}

export const getActiveKeys = (lessonLevel: number): string[] => {
  const activeKeys: string[] = []

  for (let i = 0; i <= lessonLevel && i < lessons.length; i++) {
    const lessonKeys = lessons[i].split('')
    for (const key of lessonKeys) {
      activeKeys.push(key)
    }
  }

  return activeKeys
}

export const getFocusedKeys = (lessonLevel: number): string[] => {
  const lessonKeys = lessons[lessonLevel]?.split('') ?? []
  return lessonKeys
}
