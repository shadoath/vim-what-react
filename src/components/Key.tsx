import { Card, Typography, Box } from '@mui/material'
import {
  Circle,
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material'
import { useBaseContext } from '../contexts/BaseContext'

export type KeyType = 'motion' | 'operator' | 'command' | 'extra'

type KeyProps = {
  value: string
  text: string
  keyType: KeyType
  isActive?: boolean
  hasDot?: boolean
  hasBorder?: boolean
  vimHelp?: string
  secondaryText?: string
  shortText?: string
  numberIndicator?: string | string[]
  hasFocus?: boolean
  isSearchMatch?: boolean
  prefixOverride?: string
  hasCustomMapping?: boolean
  isAnimating?: boolean
  isLearned?: boolean
  isSecondary?: boolean
}

// Helper function to render arrow icons
const renderArrowIcon = (text: string) => {
  const iconStyle = { fontSize: 10, opacity: 0.7 }
  switch (text) {
    case '←':
      return <ArrowBack sx={iconStyle} />
    case '→':
      return <ArrowForward sx={iconStyle} />
    case '↑':
      return <ArrowUpward sx={iconStyle} />
    case '↓':
      return <ArrowDownward sx={iconStyle} />
    default:
      return null
  }
}

const INSERT_MODE_KEYS = new Set([
  'R',
  'I',
  'O',
  'i',
  'o',
  'A',
  'a',
  'S',
  's',
  'C',
  'c',
])

export const Key = ({
  value,
  text,
  secondaryText,
  shortText,
  numberIndicator,
  keyType = 'motion',
  isActive = true,
  hasFocus = false,
  hasDot,
  hasBorder,
  isSearchMatch = false,
  prefixOverride = undefined,
  hasCustomMapping = false,
  isAnimating = false,
  isLearned = false,
  isSecondary = false,
}: KeyProps) => {
  const { setSelectedKey } = useBaseContext()

  const displayText = shortText || secondaryText
  const isArrow = displayText && ['←', '→', '↑', '↓'].includes(displayText)
  const arrowIcon = isArrow ? renderArrowIcon(displayText) : null
  const insertsMode = INSERT_MODE_KEYS.has(value)

  const keyH = isSecondary ? '26px' : '30px'
  const letterSize = isSecondary ? 11 : 13
  const labelSize = isSecondary ? 7 : 8

  return (
    <Card
      onClick={() => setSelectedKey(value)}
      sx={{
        border: 1,
        borderColor: hasBorder ? 'text.primary' : 'transparent',
        ...(prefixOverride ? { backgroundColor: '#dbeafe !important' } : {}),
        ...(isSecondary ? { filter: 'brightness(0.88)' } : {}),
        opacity: isSearchMatch ? 1 : hasFocus ? 1 : isActive ? 0.8 : 0.3,
        outline: isSearchMatch ? '2px solid #3b82f6' : 'none',
        zIndex: isSearchMatch ? 1 : 'auto',
        padding: '2px',
        margin: 0,
        width: '50px',
        height: keyH,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          opacity: 1,
          transform: 'scale(1.05)',
          transition: 'all 0.2s ease',
        },
        ...(isAnimating
          ? {
              animation: 'keyPulse 0.4s ease-out',
              '@keyframes keyPulse': {
                '0%': {
                  transform: 'scale(1.2)',
                  boxShadow: '0 0 10px rgba(59,130,246,0.7)',
                },
                '100%': { transform: 'scale(1)', boxShadow: 'none' },
              },
            }
          : {}),
      }}
      className={`key ${keyType}`}
    >
      {numberIndicator && (
        <Typography
          sx={{
            position: 'absolute',
            top: '1px',
            right: '2px',
            fontSize: 7,
            color: 'red',
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          {Array.isArray(numberIndicator)
            ? numberIndicator.join(',')
            : numberIndicator}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            fontSize={letterSize}
            fontWeight='bold'
            component='span'
            sx={{ lineHeight: 1, color: insertsMode ? 'red' : 'inherit' }}
          >
            {value}
          </Typography>
          {hasDot && <Circle sx={{ fontSize: 3 }} />}
        </Box>
        {(prefixOverride ?? displayText) &&
          ((!prefixOverride && arrowIcon) || (
            <Typography
              fontSize={labelSize}
              component='span'
              sx={{
                opacity: 0.7,
                lineHeight: 1.1,
                textAlign: 'center',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                color: prefixOverride ? '#1d4ed8' : 'inherit',
              }}
            >
              {prefixOverride ?? displayText}
            </Typography>
          ))}
      </Box>
      {hasCustomMapping && (
        <Circle
          sx={{
            fontSize: 4,
            color: '#7c3aed',
            position: 'absolute',
            bottom: 1,
            left: 2,
          }}
        />
      )}
      {isLearned && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 1,
            right: 1,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#16a34a',
          }}
        />
      )}
    </Card>
  )
}
