import { Card, Grid, Tooltip, Typography, Box } from '@mui/material'
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
  keyType: string //KeyType
  isActive?: boolean
  hasDot?: boolean
  hasBorder?: boolean
  vimHelp?: string
  notes?: string[]
  secondaryText?: string
  shortText?: string
  hasFocus?: boolean
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
  keyType = 'motion',
  isActive = true,
  hasFocus = false,
  hasDot,
  hasBorder,
  vimHelp,
  notes,
}: KeyProps) => {
  const { setDocs, setInfo } = useBaseContext()

  const onClick = () => {
    setInfo(text)
    if (vimHelp) setDocs(`http://vimHelp.appspot.com/${vimHelp}`)
  }

  // Use shortText if available, otherwise fallback to secondaryText
  const displayText = shortText || secondaryText

  // Check if displayText is an arrow
  const isArrow = displayText && ['←', '→', '↑', '↓'].includes(displayText)
  const arrowIcon = isArrow ? renderArrowIcon(displayText) : null

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
          opacity: hasFocus ? 1 : isActive ? 0.8 : 0.3,
          padding: '2px',
          margin: 0,
          width: '50px',
          minHeight: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            opacity: 1,
            transform: 'scale(1.05)',
            transition: 'all 0.2s ease',
          },
        }}
        className={`key ${keyType}`}
      >
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
              sx={{ lineHeight: 1 }}
            >
              {value}
            </Typography>
            {hasDot && <Circle sx={{ fontSize: 3 }} />}
          </Box>

          {/* Secondary text or arrow */}
          {displayText &&
            (arrowIcon || (
              <Typography
                fontSize={9}
                component='span'
                sx={{
                  opacity: 0.7,
                  lineHeight: 0.9,
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  display: 'block',
                }}
              >
                {displayText}
              </Typography>
            ))}
        </Box>
      </Card>
    </Tooltip>
  )
}
