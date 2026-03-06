import { Box, Typography, Chip } from '@mui/material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'
import type { AllKeyTypes } from '../contexts/BaseContext'

export const KeyOfTheDay = () => {
  const { keyOfDay, setSelectedKey, learnedKeys } = useBaseContext()
  const keyInfo = allKeysWithInfo[keyOfDay as AllKeyTypes]
  if (!keyInfo) return null

  const isLearned = learnedKeys.includes(keyOfDay)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.75,
        backgroundColor: isLearned ? '#f0fdf4' : '#fffbeb',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        cursor: 'pointer',
      }}
      onClick={() => setSelectedKey(keyOfDay)}
    >
      <Typography sx={{ fontSize: 10, fontWeight: 'bold', opacity: 0.5, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        Key of the day
      </Typography>
      <Typography sx={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1, minWidth: 20, textAlign: 'center' }}>
        {keyOfDay}
      </Typography>
      <Typography sx={{ fontSize: 11, opacity: 0.8, flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {keyInfo.secondaryText ?? keyInfo.text}
      </Typography>
      {isLearned && (
        <Chip label='learned' size='small' sx={{ fontSize: 10, height: 18, backgroundColor: '#16a34a', color: '#fff' }} />
      )}
    </Box>
  )
}
