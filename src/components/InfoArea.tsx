import { Box, Chip, Grid, Link, Typography } from '@mui/material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'
import type { AllKeyTypes } from '../contexts/BaseContext'

const actionColors: Record<string, string> = {
  motion: '#7dd3c0',
  operator: '#fb923c',
  command: '#fbbf24',
  extra: '#e5e7eb',
}

export const InfoArea = () => {
  const { selectedKey, infoImage } = useBaseContext()
  const keyInfo = allKeysWithInfo[selectedKey as AllKeyTypes]

  if (!selectedKey || !keyInfo) {
    return (
      <Box sx={{ p: 1 }}>
        {infoImage && (
          <img src={infoImage} alt='lesson overview' style={{ width: '100%' }} />
        )}
      </Box>
    )
  }

  const docsUrl = keyInfo.vimHelp
    ? `http://vimhelp.appspot.com/${keyInfo.vimHelp}`
    : null

  return (
    <Box sx={{ p: 1.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <Grid container spacing={1} alignItems='flex-start'>
        <Grid item>
          <Typography
            sx={{
              fontSize: 36,
              fontWeight: 'bold',
              lineHeight: 1,
              width: 48,
              textAlign: 'center',
            }}
          >
            {selectedKey}
          </Typography>
        </Grid>
        <Grid item xs>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
            {keyInfo.action && (
              <Chip
                label={keyInfo.action}
                size='small'
                sx={{
                  backgroundColor: actionColors[keyInfo.action] ?? '#e5e7eb',
                  color: '#0f172a',
                  fontWeight: 'bold',
                  fontSize: 10,
                  height: 20,
                }}
              />
            )}
            {keyInfo.secondaryText && (
              <Typography sx={{ fontSize: 12, opacity: 0.7 }}>
                {keyInfo.secondaryText}
              </Typography>
            )}
          </Box>
          {keyInfo.text && (
            <Typography
              component='div'
              sx={{ fontSize: 12, lineHeight: 1.5 }}
              dangerouslySetInnerHTML={{ __html: keyInfo.text }}
            />
          )}
          {keyInfo.plugins && (
            <Typography
              sx={{
                fontSize: 11,
                mt: 0.5,
                opacity: 0.7,
                fontStyle: 'italic',
              }}
            >
              Plugin: {keyInfo.plugins}
            </Typography>
          )}
          {docsUrl && (
            <Link
              href={docsUrl}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ fontSize: 11, display: 'block', mt: 0.5 }}
            >
              :help {keyInfo.vimHelp?.replace('.html', '').replace(/#.*/, '')}
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
