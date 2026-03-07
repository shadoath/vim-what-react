import { Box, LinearProgress, Typography } from '@mui/material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'

const letterKeys = Object.keys(allKeysWithInfo).filter((k) =>
  /^[a-zA-Z]$/.test(k),
)
const symbolKeys = Object.keys(allKeysWithInfo).filter((k) =>
  /^[^a-zA-Z0-9]$/.test(k),
)
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

  const learnedCount = learnedKeys.length
  const pct = totalKeys > 0 ? Math.round((learnedCount / totalKeys) * 100) : 0

  return (
    <Box sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>
      <Typography
        sx={{ fontSize: 12, fontWeight: 'bold', color: '#16a34a', mb: 1 }}
      >
        Progress — {learnedCount}/{totalKeys} ({pct}%)
      </Typography>
      <LinearProgress
        variant='determinate'
        value={pct}
        sx={{
          mb: 2,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#dcfce7',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#16a34a',
            borderRadius: 5,
          },
        }}
      />
      {categories.map(({ label, keys }) => {
        const learned = keys.filter((k) => learnedKeys.includes(k)).length
        const catPct =
          keys.length > 0 ? Math.round((learned / keys.length) * 100) : 0
        return (
          <Box key={label} sx={{ mb: 1.5 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.4 }}
            >
              <Typography sx={{ fontSize: 12 }}>{label}</Typography>
              <Typography sx={{ fontSize: 12, opacity: 0.6 }}>
                {learned}/{keys.length} ({catPct}%)
              </Typography>
            </Box>
            <LinearProgress
              variant='determinate'
              value={catPct}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#dcfce7',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#4ade80',
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        )
      })}
      {learnedCount === 0 && (
        <Typography
          sx={{ fontSize: 11, opacity: 0.5, textAlign: 'center', pt: 0.5 }}
        >
          Click a key and press "Mark as learned" to track your progress
        </Typography>
      )}
    </Box>
  )
}
