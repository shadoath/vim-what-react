import { Box, Tooltip, Typography } from '@mui/material'
import { textObjects } from '../lib/textObjects'

type Pair = { i: string; iDesc: string; a: string; aDesc: string }
type Group = { label: string; pairs: Pair[] }

const groups: Group[] = [
  {
    label: 'Words',
    pairs: [
      { i: 'iw', iDesc: 'word', a: 'aw', aDesc: 'word + space' },
      { i: 'iW', iDesc: 'WORD', a: 'aW', aDesc: 'WORD + space' },
    ],
  },
  {
    label: 'Sentences / Paragraphs',
    pairs: [
      { i: 'is', iDesc: 'sentence', a: 'as', aDesc: '+ trailing space' },
      { i: 'ip', iDesc: 'paragraph', a: 'ap', aDesc: '+ blank line' },
    ],
  },
  {
    label: 'Brackets',
    pairs: [
      { i: 'i(', iDesc: 'inside ()', a: 'a(', aDesc: 'inc. ()' },
      { i: 'i[', iDesc: 'inside []', a: 'a[', aDesc: 'inc. []' },
      { i: 'i{', iDesc: 'inside {}', a: 'a{', aDesc: 'inc. {}' },
      { i: 'i<', iDesc: 'inside <>', a: 'a<', aDesc: 'inc. <>' },
    ],
  },
  {
    label: 'Quotes',
    pairs: [
      { i: "i'", iDesc: "inside ''", a: "a'", aDesc: "inc. ''" },
      { i: 'i"', iDesc: 'inside ""', a: 'a"', aDesc: 'inc. ""' },
      { i: 'i`', iDesc: 'inside ``', a: 'a`', aDesc: 'inc. ``' },
    ],
  },
  {
    label: 'Tags',
    pairs: [
      { i: 'it', iDesc: 'tag content', a: 'at', aDesc: 'inc. tags' },
    ],
  },
]

// i = inner (teal), a = around (blue)
const iStyle = { bg: '#ccfbf1', fg: '#0f766e', hover: '#99f6e4' }
const aStyle = { bg: '#dbeafe', fg: '#1d4ed8', hover: '#bfdbfe' }

const Sel = ({ sel, desc }: { sel: string; desc: string }) => {
  const obj = textObjects.find((t) => t.selector === sel)
  const style = sel.startsWith('i') ? iStyle : aStyle
  return (
    <Tooltip
      title={obj ? <Box><Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{obj.name}</Typography><Typography sx={{ fontSize: 11 }}>{obj.description}</Typography><Typography sx={{ fontSize: 11, opacity: 0.8, fontStyle: 'italic' }}>e.g. {obj.example}</Typography></Box> : ''}
      placement='top'
      arrow
    >
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, cursor: 'default', '&:hover .sel-chip': { backgroundColor: style.hover } }}>
        <Box
          className='sel-chip'
          sx={{
            fontFamily: 'monospace', fontWeight: 'bold', fontSize: 12,
            px: 0.6, py: 0.1, borderRadius: 1,
            backgroundColor: style.bg, color: style.fg,
            lineHeight: 1.4, flexShrink: 0,
          }}
        >
          {sel}
        </Box>
        <Typography sx={{ fontSize: 11, opacity: 0.65, lineHeight: 1.4, whiteSpace: 'nowrap' }}>{desc}</Typography>
      </Box>
    </Tooltip>
  )
}

export const TextObjects = () => (
  <Box sx={{ px: 1.5, pb: 1, pt: 0.5 }}>
    {/* Header */}
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.75 }}>
      <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#0f766e' }}>Text Objects</Typography>
      <Typography sx={{ fontSize: 11, opacity: 0.5, fontFamily: 'monospace' }}>{'{op}{sel}'}</Typography>
      <Typography sx={{ fontSize: 11, opacity: 0.55 }}>
        — combine with <strong>d</strong>, <strong>c</strong>, <strong>y</strong>, <strong>v</strong>
      </Typography>
      <Box sx={{ ml: 'auto', display: 'flex', gap: 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box sx={{ px: 0.5, py: 0.1, borderRadius: 0.5, backgroundColor: '#ccfbf1', color: '#0f766e', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 10, lineHeight: 1.4 }}>i</Box>
          <Typography sx={{ fontSize: 10, opacity: 0.6 }}>= inner (excludes delimiters)</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box sx={{ px: 0.5, py: 0.1, borderRadius: 0.5, backgroundColor: '#dbeafe', color: '#1d4ed8', fontFamily: 'monospace', fontWeight: 'bold', fontSize: 10, lineHeight: 1.4 }}>a</Box>
          <Typography sx={{ fontSize: 10, opacity: 0.6 }}>= around (includes delimiters)</Typography>
        </Box>
      </Box>
    </Box>

    {/* Groups grid */}
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {groups.map((g) => (
        <Box
          key={g.label}
          sx={{
            minWidth: 200, flex: '1 1 200px',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 1.5,
            px: 1.25, pt: 0.75, pb: 1,
            backgroundColor: 'rgba(255,255,255,0.35)',
          }}
        >
          <Typography sx={{ fontSize: 11, fontWeight: 'bold', opacity: 0.55, textTransform: 'uppercase', letterSpacing: 0.5, mb: 0.75 }}>
            {g.label}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {g.pairs.map((p) => (
              <Box key={p.i} sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ flex: 1 }}><Sel sel={p.i} desc={p.iDesc} /></Box>
                <Box sx={{ flex: 1 }}><Sel sel={p.a} desc={p.aDesc} /></Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)
