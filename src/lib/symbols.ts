import { KeyInfoType } from './types';

export const symbols: Record<string, KeyInfoType> = {
  '~': {
    title: 'Tilde',
    image: '/images/symbols/tilde.png',
    action: 'command',
    vimhelp: 'change.txt.html#%7e',
    text: '',
    secondaryText: 'toggle case',
  },
  '!': {
    title: 'Bang',
    image: '/images/symbols/bang.png',
    action: 'operator',
    vimhelp: 'change.txt.html#%21',
    text: '',
    secondaryText: 'external filter',
  },
  '@': {
    title: 'At/Register',
    image: '/images/symbols/at.png',
    action: 'command',
    hasDot: true,
    vimhelp: 'repeat.txt.html#%40',
    text: ":let @q='_ctrl-r_ctrl-r_q (paste @q)<br>*modify*<br>' (closing quote) & _enter_<br><br>:g/pattern/d X (delete pattern and save to x register)",
    secondaryText: 'play macro',
  },
  '#': {
    title: 'Hash',
    image: '/images/symbols/hash.png',
    action: 'motion',
    vimhelp: 'pattern.txt.html#%23',
    text: "Same as '*', but search backward.",
    secondaryText: 'prev ident',
  },
  $: {
    title: 'Money',
    image: '/images/symbols/money.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%24',
    text: 'To end of line',
    secondaryText: 'end of line',
  },
  '%': {
    title: 'Percent',
    image: '/images/symbols/percent.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%25',
    text: 'Find the next item in this line after or under the cursor and jump to its match. |inclusive| motion.',
    secondaryText: 'goto match',
  },
  '^': {
    title: 'Caret',
    image: '/images/symbols/caret.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%5e',
    text: 'Return to first non-blank character',
    secondaryText: "'soft' bol",
  },
  '&': {
    title: 'Ampersand',
    image: '/images/symbols/ampersand.png',
    action: 'command',
    vimhelp: 'change.txt.html#%26',
    text: 'Synonym for `:s` (repeat last substitute)<br>Note that the flags are not remembered, thus it might actually work differently.<br>You can use `:&&` to keep the flags.',
    secondaryText: 'repeat :s',
  },
  '&amp;': {
    title: 'Ampersand',
    image: '/images/symbols/ampersand.png',
    action: 'motion',
    vimhelp: 'change.txt.html#%26',
    text: 'Synonym for `:s` (repeat last substitute)<br>Note that the flags are not remembered, thus it might actually work differently.<br>You can use `:&&` to keep the flags.',
    secondaryText: 'repeat :s',
  },
  '*': {
    title: 'Asterisk',
    image: '/images/symbols/42.png',
    action: 'motion',
    vimhelp: 'pattern.txt.html#star',
    text: "Search forward for the [count]'th occurrence of the word nearest to the cursor",
    secondaryText: 'next ident',
  },
  '(': {
    title: 'Begin parenthesis',
    image: '/images/symbols/begin_parenthesis.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%28',
    text: '[count] sentences backward.  |exclusive| motion.',
    secondaryText: 'begin sentence',
  },
  ')': {
    title: 'End parenthesis',
    image: '/images/symbols/end_parenthesis.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%29',
    text: '[count] sentences forward.  |exclusive| motion.',
    secondaryText: 'end sentence',
  },
  _: {
    title: 'Underscore',
    image: '/images/symbols/underscore.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#_',
    text: '[count] - 1 lines downward, on the first non-blank character |linewise|.',
    secondaryText: "'soft' bol down",
  },
  '+': {
    title: 'Plus',
    image: '/images/symbols/plus.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%2b',
    text: '[count] lines downward, on the first non-blank character |linewise|.',
    secondaryText: 'next line',
  },
  '-': {
    title: 'Minus/Dash',
    image: '/images/symbols/dash.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#-',
    plugins: 'AndrewRadev/switch.vim | Change true/false, etc',
    text: '[count] lines upward, on the first non-blank character |linewise|.',
    secondaryText: 'prev line',
  },
  '=': {
    title: 'Equal',
    image: '/images/symbols/equal.png',
    action: 'operator',
    vimhelp: 'change.txt.html#%3d',
    text: "Filter {motion} lines through the external program given with the 'equalprg' option.  When the 'equalprg' option is empty (this is the default), use the internal formatting function",
    secondaryText: 'auto format',
  },
  '`': {
    title: 'backtick',
    image: '/images/symbols/backtick.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'motion.txt.html#%60',
    text: 'Jump to the mark {a-z} in the current buffer.',
    secondaryText: 'goto mark',
  },
  '[': {
    title: 'Beginning Bracket',
    image: '/images/symbols/begin_bracket.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'index.txt.html#%5b',
    text: 'A lot of Vim power found here! check out :help [',
    secondaryText: 'misc',
  },
  ']': {
    title: 'Ending Bracket',
    image: '/images/symbols/end_bracket.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'index.txt.html#%5d',
    text: 'A lot of Vim power found here! check out :help ]',
    secondaryText: 'misc',
  },
  '{': {
    title: 'Begin Brace',
    image: '/images/symbols/begin_brace.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%7b',
    text: '[count] paragraphs backward.  |exclusive| motion.',
    secondaryText: 'begin paragraph',
  },
  '}': {
    title: 'End Brace',
    image: '/images/symbols/end_brace.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%7d',
    text: '[count] paragraphs forward.  |exclusive| motion.',
    secondaryText: 'end paragraph',
  },
  '?': {
    title: 'Question Mark',
    image: '/images/symbols/question_mark.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'pattern.txt.html#%3f',
    text: "Search backward for the [count]'th occurrence of the latest used pattern |last-pattern| with latest used |{offset}|.",
    secondaryText: 'find (reverse)',
  },
  '/': {
    title: 'Forward Slash',
    image: '/images/symbols/forward_slash.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'pattern.txt.html#%2f',
    text: "Search forward for the [count]'th occurrence of the latest used pattern |last-pattern| with latest used |{offset}|.",
    secondaryText: 'find',
  },
  '\\': {
    title: 'Back Slash',
    image: '/images/symbols/back_slash.png',
    action: 'extra',
    hasDot: true,
    vimhelp: 'pattern.txt.html#%2f%5c',
    text: 'A backslash followed by a single character, with no special meaning, is reserved for future expansions',
    secondaryText: 'not used!',
  },
  '|': {
    title: 'Pipe',
    image: '/images/symbols/pipe.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#bar',
    text: '',
    secondaryText: 'bol/goto col',
  },
  '.': {
    title: 'dot',
    image: '/images/symbols/dot.png',
    action: 'command',
    vimhelp: 'repeat.txt.html#.',
    text: '',
    secondaryText: 'repeat last command',
  },
  ',': {
    title: 'Comma',
    image: '/images/symbols/comma.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%2c',
    text: '',
    secondaryText: 'reverse f/F/t/T',
  },
  '"': {
    title: 'Double Quote',
    image: '/images/symbols/double_quote.png',
    action: 'extra',
    hasDot: true,
    vimhelp: 'pattern.txt.html#%2f%5c',
    text: '',
    secondaryText: 'reg spec',
  },
  "'": {
    title: 'Single Quote',
    image: '/images/symbols/single_quote.png',
    action: 'motion',
    hasDot: true,
    vimhelp: 'motion.txt.html#%27',
    text: "'< & '> start/end of visual selection<br> '[ & '] - start/end of last change or yank<br> '. - position of where last change was made<br> '^ - position of cursor when last Vim last left insert mode - This is how gi command works<br> '' - position before last jump (Super useful!). See :h ''<br>` (backtick) Go to line AND column",
    secondaryText: 'goto mark bol',
  },
  ';': {
    title: 'Semicolon',
    image: '/images/symbols/semicolon.png',
    action: 'motion',
    vimhelp: 'motion.txt.html#%3b',
    text: '',
    secondaryText: 'repeat f/F/t/T',
  },
  ':': {
    title: 'Colon',
    image: '/images/symbols/colon.png',
    action: 'command',
    vimhelp: 'cmdline.txt.html#%3a',
    text: '',
    secondaryText: 'ex command line',
  },
  // '&gt;': {
  //   title: 'Greater than',
  //   image: '/images/symbols/greater_than.png',
  //   action: 'operator',
  //   ,
  //   vimhelp: '',
  //   text: '',
  //   secondaryText: 'indent',
  // },
  // '&lt;': {
  //   title: 'Less than',
  //   image: '/images/symbols/less_than.png',
  //   action: 'operator',
  //   ,
  //   vimhelp: '',
  //   text: '',
  //   secondaryText: 'un-indent',
  // },
  '>': {
    title: 'Greater than',
    image: '/images/symbols/greater_than.png',
    action: 'operator',
    vimhelp: 'change.txt.html#%3e',
    text: '',
    secondaryText: 'indent',
  },
  '<': {
    title: 'Less than',
    image: '/images/symbols/less_than.png',
    action: 'operator',
    vimhelp: 'change.txt.html#%3c',
    text: '',
    secondaryText: 'un-indent',
  },
};