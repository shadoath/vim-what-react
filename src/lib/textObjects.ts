export type TextObject = {
  selector: string   // e.g. "iw"
  name: string       // e.g. "inner word"
  description: string
  example: string    // e.g. "diw = delete inner word"
}

export const textObjects: TextObject[] = [
  // Words
  { selector: 'iw', name: 'inner word', description: 'Select the word under cursor (no surrounding whitespace)', example: 'diw, ciw, yiw' },
  { selector: 'aw', name: 'a word', description: 'Select the word under cursor plus surrounding whitespace', example: 'daw, caw, yaw' },
  { selector: 'iW', name: 'inner WORD', description: 'Select the WORD under cursor (no whitespace)', example: 'diW, ciW' },
  { selector: 'aW', name: 'a WORD', description: 'Select the WORD under cursor plus whitespace', example: 'daW, caW' },
  // Sentences & paragraphs
  { selector: 'is', name: 'inner sentence', description: 'Select the current sentence', example: 'dis, cis, vis' },
  { selector: 'as', name: 'a sentence', description: 'Select the sentence with trailing whitespace', example: 'das, cas' },
  { selector: 'ip', name: 'inner paragraph', description: 'Select the current paragraph (no blank lines)', example: 'dip, yip, vip' },
  { selector: 'ap', name: 'a paragraph', description: 'Select the paragraph with trailing blank line', example: 'dap, cap' },
  // Brackets
  { selector: 'i(', name: 'inner ()', description: 'Select inside parentheses', example: 'di(, ci(, yi(' },
  { selector: 'a(', name: 'a ()', description: 'Select inside parentheses including the parens', example: 'da(, ca(' },
  { selector: 'i[', name: 'inner []', description: 'Select inside square brackets', example: 'di[, ci[' },
  { selector: 'a[', name: 'a []', description: 'Select inside square brackets including brackets', example: 'da[, ca[' },
  { selector: 'i{', name: 'inner {}', description: 'Select inside curly braces', example: 'di{, ci{' },
  { selector: 'a{', name: 'a {}', description: 'Select inside curly braces including braces', example: 'da{, ca{' },
  { selector: 'i<', name: 'inner <>', description: 'Select inside angle brackets', example: 'di<, ci<' },
  { selector: 'a<', name: 'a <>', description: 'Select inside angle brackets including them', example: 'da<, ca<' },
  // Quotes
  { selector: "i'", name: "inner ''", description: "Select inside single quotes", example: "ci', di', yi'" },
  { selector: "a'", name: "a ''", description: "Select inside single quotes including the quotes", example: "da', ca'" },
  { selector: 'i"', name: 'inner ""', description: 'Select inside double quotes', example: 'ci", di", yi"' },
  { selector: 'a"', name: 'a ""', description: 'Select inside double quotes including the quotes', example: 'da", ca"' },
  { selector: 'i`', name: 'inner ``', description: 'Select inside backticks', example: 'ci`, di`' },
  { selector: 'a`', name: 'a ``', description: 'Select inside backticks including them', example: 'da`, ca`' },
  // Tags
  { selector: 'it', name: 'inner tag', description: 'Select inside HTML/XML tag (content only)', example: 'cit, dit, vit' },
  { selector: 'at', name: 'a tag', description: 'Select the whole tag including opening/closing tags', example: 'dat, cat' },
]

// Aliases — ib = i( and ab = a(
export const textObjectAliases: Record<string, string> = {
  'ib': 'i( — alias',
  'ab': 'a( — alias',
  'iB': 'i{ — alias',
  'aB': 'a{ — alias',
}
