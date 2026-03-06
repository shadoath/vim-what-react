import { useState } from 'react'
import {
  Box,
  Chip,
  Collapse,
  Grid,
  Tooltip,
  Typography,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { textObjects } from '../lib/textObjects'

const categories = [
  { label: 'Words', filter: (s: string) => ['iw','aw','iW','aW'].includes(s) },
  { label: 'Sentences/Paragraphs', filter: (s: string) => ['is','as','ip','ap'].includes(s) },
  { label: 'Brackets', filter: (s: string) => ['i(','a(','i[','a[','i{','a{','i<','a<'].includes(s) },
  { label: 'Quotes', filter: (s: string) => ["i'","a'",'i"','a"','i`','a`'].includes(s) },
  { label: 'Tags', filter: (s: string) => ['it','at'].includes(s) },
]

export const TextObjects = () => {
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.1)', mt: 0 }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', px: 1.5, py: 0.75 }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 'bold', flex: 1, color: '#0f766e' }}>
          Text Objects{' '}
          <Typography component='span' sx={{ fontSize: 11, fontWeight: 'normal', opacity: 0.7 }}>
            — {'{operator}{selector}'}
          </Typography>
        </Typography>
        {open ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
      </Box>

      <Collapse in={open}>
        <Box sx={{ px: 1.5, pb: 1.5 }}>
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
      </Collapse>
    </Box>
  )
}
