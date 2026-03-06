import { useState } from 'react'
import { Box, Collapse, LinearProgress, Typography } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'

const letterKeys = Object.keys(allKeysWithInfo).filter((k) => /^[a-zA-Z]$/.test(k))
const symbolKeys = Object.keys(allKeysWithInfo).filter((k) => /^[^a-zA-Z0-9]$/.test(k))
const numberKeys = Object.keys(allKeysWithInfo).filter((k) => /^[0-9]$/.test(k))
const totalKeys = Object.keys(allKeysWithInfo).length

type Category = { label: string; keys: string[] }
const categories: Category[] = [
  { label: 'Letters', keys: letterKeys },
  { label: 'Symbols', keys: symbolKeys },
  { label: 'Numbers', keys: numberKeys },
]

export const ProgressPanel = () => {
  const { learnedKeys } = useBaseContext()
  const [open, setOpen] = useState(false)

  const learnedCount = learnedKeys.length
  const pct = totalKeys > 0 ? Math.round((learnedCount / totalKeys) * 100) : 0

  return (
    <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', px: 1.5, py: 0.75, gap: 1 }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 'bold', flex: 1, color: '#16a34a' }}>
          Progress — {learnedCount}/{totalKeys} keys ({pct}%)
        </Typography>
        {open ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
      </Box>

      <Collapse in={open}>
        <Box sx={{ px: 1.5, pb: 1.5 }}>
          <LinearProgress
            variant='determinate'
            value={pct}
            sx={{
              mb: 1.5,
              height: 6,
              borderRadius: 3,
              backgroundColor: '#dcfce7',
              '& .MuiLinearProgress-bar': { backgroundColor: '#16a34a' },
            }}
          />
          {categories.map(({ label, keys }) => {
            const learned = keys.filter((k) => learnedKeys.includes(k)).length
            const catPct = keys.length > 0 ? Math.round((learned / keys.length) * 100) : 0
            return (
              <Box key={label} sx={{ mb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
                  <Typography sx={{ fontSize: 11 }}>{label}</Typography>
                  <Typography sx={{ fontSize: 11, opacity: 0.6 }}>
                    {learned}/{keys.length} ({catPct}%)
                  </Typography>
                </Box>
                <LinearProgress
                  variant='determinate'
                  value={catPct}
                  sx={{
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: '#dcfce7',
                    '& .MuiLinearProgress-bar': { backgroundColor: '#4ade80' },
                  }}
                />
              </Box>
            )
          })}
          {learnedCount === 0 && (
            <Typography sx={{ fontSize: 11, opacity: 0.5, textAlign: 'center', pt: 0.5 }}>
              Click a key and press "Mark as learned" to track your progress
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
