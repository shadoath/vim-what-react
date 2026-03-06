import {
  Box,
  Chip,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material'
import { textObjects } from '../lib/textObjects'

const categories = [
  { label: 'Words', filter: (s: string) => ['iw','aw','iW','aW'].includes(s) },
  { label: 'Sentences/Paragraphs', filter: (s: string) => ['is','as','ip','ap'].includes(s) },
  { label: 'Brackets', filter: (s: string) => ['i(','a(','i[','a[','i{','a{','i<','a<'].includes(s) },
  { label: 'Quotes', filter: (s: string) => ["i'","a'",'i"','a"','i`','a`'].includes(s) },
  { label: 'Tags', filter: (s: string) => ['it','at'].includes(s) },
]

export const TextObjects = () => {
  return (
    <Box sx={{ px: 1.5, pb: 1, pt: 0.5 }}>
      <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#0f766e', mb: 0.5 }}>
        Text Objects{' '}
        <Typography component='span' sx={{ fontSize: 11, fontWeight: 'normal', opacity: 0.7 }}>
          — {'{operator}{selector}'}
        </Typography>
      </Typography>
      <Typography sx={{ fontSize: 11, opacity: 0.6, mb: 1 }}>
        Combine with any operator: <strong>d</strong>elete, <strong>c</strong>hange, <strong>y</strong>ank, <strong>v</strong>isual
      </Typography>
      {categories.map((cat) => {
        const items = textObjects.filter((t) => cat.filter(t.selector))
        return (
          <Box key={cat.label} sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: 10, fontWeight: 'bold', opacity: 0.5, textTransform: 'uppercase', mb: 0.5 }}>
              {cat.label}
            </Typography>
            <Grid container spacing={0.5}>
              {items.map((obj) => (
                <Grid item key={obj.selector}>
                  <Tooltip
                    title={
                      <Box>
                        <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>{obj.name}</Typography>
                        <Typography sx={{ fontSize: 11 }}>{obj.description}</Typography>
                        <Typography sx={{ fontSize: 11, opacity: 0.8, fontStyle: 'italic' }}>e.g. {obj.example}</Typography>
                      </Box>
                    }
                    placement='top'
                    arrow
                  >
                    <Chip
                      label={obj.selector}
                      size='small'
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        fontSize: 12,
                        height: 24,
                        backgroundColor: '#ccfbf1',
                        color: '#0f766e',
                        cursor: 'default',
                        '&:hover': { backgroundColor: '#99f6e4' },
                      }}
                    />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Box>
        )
      })}
    </Box>
  )
}
