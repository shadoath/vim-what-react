import { Card, Tooltip, Typography, Box } from '@mui/material'
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
  vimHelp,
  isSearchMatch = false,
  prefixOverride = undefined,
  hasCustomMapping = false,
  isAnimating = false,
  isLearned = false,
}: KeyProps) => {
  const { setSelectedKey } = useBaseContext()

  const onClick = () => {
    setSelectedKey(value)
  }

  // Use shortText if available, otherwise fallback to secondaryText
  const displayText = shortText || secondaryText

  // Check if displayText is an arrow
  const isArrow = displayText && ['←', '→', '↑', '↓'].includes(displayText)
  const arrowIcon = isArrow ? renderArrowIcon(displayText) : null
  
  // Check if this key enters insert mode
  const insertsMode = ['R', 'I', 'O', 'i', 'o', 'A', 'a', 'S', 's', 'C', 'c'].includes(value)

  return (
    <Tooltip
      title={
        <>
          {text && (
            <Typography textAlign='left' fontSize={14} component='span'>
              {text}
            </Typography>
          )}
        </>
      }
      placement='top'
    >
      <Card
        key={value}
        onClick={onClick}
        sx={{
          border: 1,
          borderColor: hasBorder ? 'text.primary' : 'transparent',
          ...(prefixOverride ? { backgroundColor: '#dbeafe !important' } : {}),
          opacity: isSearchMatch ? 1 : hasFocus ? 1 : isActive ? 0.8 : 0.3,
          outline: isSearchMatch ? '2px solid #3b82f6' : 'none',
          zIndex: isSearchMatch ? 1 : 'auto',
          padding: '2px',
          margin: 0,
          width: '50px',
          minHeight: '34px',
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
          ...(isAnimating ? {
            animation: 'keyPulse 0.4s ease-out',
            '@keyframes keyPulse': {
              '0%': { transform: 'scale(1.2)', boxShadow: '0 0 10px rgba(59,130,246,0.7)' },
              '100%': { transform: 'scale(1)', boxShadow: 'none' },
            },
          } : {}),
        }}
        className={`key ${keyType}`}
      >
        {/* Number indicator - absolute positioned */}
        {numberIndicator && (
          <Typography
            sx={{
              position: 'absolute',
              top: '1px',
              right: '2px',
              fontSize: '10px',
              color: 'red',
              fontWeight: 'bold',
              lineHeight: 1,
            }}
          >
            {Array.isArray(numberIndicator) ? numberIndicator.join(',') : numberIndicator}
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
          {/* Main key with dot */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              fontSize={14}
              fontWeight='bold'
              component='span'
              sx={{ 
                lineHeight: 1,
                color: insertsMode ? 'red' : 'inherit'
              }}
            >
              {value}
            </Typography>
            {hasDot && <Circle sx={{ fontSize: 3 }} />}
            {hasCustomMapping && (
              <Circle sx={{ fontSize: 4, color: '#7c3aed', position: 'absolute', bottom: 2, left: 2 }} />
            )}
            {isLearned && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 1,
                  right: 1,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            )}
          </Box>

          {/* Secondary text or arrow */}
          {(prefixOverride ?? displayText) &&
            ((!prefixOverride && arrowIcon) || (
              <Typography
                fontSize={9}
                component='span'
                sx={{
                  opacity: 0.7,
                  lineHeight: 1,
                  textAlign: 'center',
                  wordBreak: 'break-word',
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
      </Card>
    </Tooltip>
  )
}
