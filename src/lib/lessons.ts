export const lessons = [
  '1234567890',
  '$^0WERweuiA:hjklXBxb',
  'TtFdfVcv.',
  'OPyop"',
  '#*N?n/',
  "@`q'm",
  '%()-+{}[]GHKLM',
  '%~=YrSDJsC<>',
  '_UI&Q!zZa;:g,|\\',
]
export const lessonLevels = [1, 2, 3, 4, 5, 6, 7]
// {
// 	  1: "Level 1",
// 	  2: "Level 2",
// 	  3: "Level 3",
// 	  4: "Level 4",
// 	  5: "Level 5",
// 	  6: "Level 6",
// 	  7: "Level 7",
// 	  8: "Level 8"

// }

export const getActiveKeys = (lessonLevel: number): string[] => {
  const activeKeys: string[] = []

  for (let i = 0; i <= lessonLevel; i++) {
    const lessonKeys = lessons[i].split('')
    lessonKeys.forEach((key) => {
      activeKeys.push(key)
    })
  }

  return activeKeys
}

export const getFocusedKeys = (lessonLevel: number): string[] => {
  const focusedKeys: string[] = []

  const lessonKeys = lessons[lessonLevel].split('')
  lessonKeys.forEach((key) => {
    focusedKeys.push(key)
  })

  return focusedKeys
}
