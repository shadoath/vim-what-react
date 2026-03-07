import { Box, Button, Chip, Link, Typography } from '@mui/material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'
import type { AllKeyTypes } from '../contexts/BaseContext'

const actionColors: Record<string, string> = {
  motion: '#7dd3c0',
  operator: '#fb923c',
  command: '#fbbf24',
  extra: '#e5e7eb',
}

const parsePlugins = (plugins: string) =>
  plugins.split(' || ').map((p) => {
    const [repo, ...rest] = p.split(' | ')
    return { repo: repo.trim(), desc: rest.join(' | ').trim() }
  })

export const InfoArea = () => {
  const { selectedKey, infoImage, customMappings, learnedKeys, toggleLearned } =
    useBaseContext()
  const keyInfo = allKeysWithInfo[selectedKey as AllKeyTypes]

  if (!selectedKey || !keyInfo) {
    return (
      <Box sx={{ p: 1 }}>
        {infoImage && (
          <img
            src={infoImage}
            alt='lesson overview'
            style={{ width: '100%', maxHeight: 220, objectFit: 'contain' }}
          />
        )}
      </Box>
    )
  }

  const docsUrl = keyInfo.vimHelp
    ? `http://vimhelp.appspot.com/${keyInfo.vimHelp}`
    : null
  const isLearned = learnedKeys.includes(selectedKey)
  const plugins = keyInfo.plugins ? parsePlugins(keyInfo.plugins) : []

  return (
    <Box sx={{ p: 1.5, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      {/* Header row: key + action + title + learned button */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1 }}>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 'bold',
            lineHeight: 1,
            minWidth: 44,
            textAlign: 'center',
          }}
        >
          {selectedKey}
        </Typography>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.4 }}>
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
              <Typography sx={{ fontSize: 13, fontWeight: 600, opacity: 0.75 }}>
                {keyInfo.secondaryText}
              </Typography>
            )}
          </Box>
          {/* Description */}
          {keyInfo.text && (
            <Typography
              component='div'
              sx={{
                fontSize: 12,
                lineHeight: 1.6,
                '& code': {
                  fontFamily: 'monospace',
                  fontSize: 11,
                  px: 0.5,
                  py: 0.1,
                  borderRadius: 0.5,
                  backgroundColor: 'rgba(0,0,0,0.08)',
                },
              }}
              dangerouslySetInnerHTML={{ __html: keyInfo.text }}
            />
          )}
        </Box>
        {/* Learned button top-right */}
        <Button
          size='small'
          variant={isLearned ? 'contained' : 'outlined'}
          onClick={() => toggleLearned(selectedKey)}
          sx={{
            fontSize: 10,
            py: 0.25,
            px: 1,
            minWidth: 0,
            flexShrink: 0,
            ...(isLearned
              ? {
                  backgroundColor: '#16a34a',
                  '&:hover': { backgroundColor: '#15803d' },
                }
              : {
                  borderColor: '#16a34a',
                  color: '#16a34a',
                  '&:hover': {
                    borderColor: '#15803d',
                    backgroundColor: '#f0fdf4',
                  },
                }),
          }}
        >
          {isLearned ? '✓ Learned' : 'Mark learned'}
        </Button>
      </Box>

      {/* Examples */}
      {keyInfo.examples && keyInfo.examples.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 0.75 }}>
          {keyInfo.examples.map((ex) => (
            <Box
              key={ex}
              sx={{
                fontFamily: 'monospace',
                fontSize: 11,
                px: 0.75,
                py: 0.2,
                borderRadius: 0.75,
                backgroundColor: 'rgba(0,0,0,0.07)',
                whiteSpace: 'nowrap',
              }}
            >
              {ex}
            </Box>
          ))}
        </Box>
      )}

      {/* Plugins */}
      {plugins.map(({ repo, desc }) => (
        <Box
          key={repo}
          sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, mt: 0.5 }}
        >
          <Typography sx={{ fontSize: 10, opacity: 0.5, flexShrink: 0 }}>
            plugin
          </Typography>
          <Link
            href={`https://github.com/${repo}`}
            target='_blank'
            rel='noopener noreferrer'
            sx={{ fontSize: 11, fontWeight: 600, flexShrink: 0 }}
          >
            {repo}
          </Link>
          {desc && (
            <Typography sx={{ fontSize: 11, opacity: 0.7 }}>
              — {desc}
            </Typography>
          )}
        </Box>
      ))}

      {/* Vim help link */}
      {docsUrl && (
        <Link
          href={docsUrl}
          target='_blank'
          rel='noopener noreferrer'
          sx={{ fontSize: 11, display: 'block', mt: 0.5, opacity: 0.7 }}
        >
          :help {keyInfo.vimHelp?.replace('.html', '').replace(/#.*/, '')}
        </Link>
      )}

      {/* Custom mapping */}
      {customMappings[selectedKey] && (
        <Box
          sx={{
            mt: 0.75,
            p: 0.75,
            borderRadius: 1,
            backgroundColor: '#f5f3ff',
            border: '1px solid #7c3aed',
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              color: '#7c3aed',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              mb: 0.25,
            }}
          >
            Custom mapping
          </Typography>
          <Typography sx={{ fontSize: 12, fontFamily: 'monospace' }}>
            {customMappings[selectedKey]}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
