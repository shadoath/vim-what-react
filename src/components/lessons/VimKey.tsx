import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

export type KeyVariant =
  | 'motion'
  | 'command'
  | 'operator'
  | 'extra'
  | 'insert'
  | 'default'

const styles: Record<
  KeyVariant,
  { bg: string; color: string; border?: string }
> = {
  motion: { bg: '#7dd3c0', color: '#0f172a' },
  command: { bg: '#fbbf24', color: '#0f172a' },
  operator: { bg: '#fb923c', color: '#0f172a' },
  extra: { bg: '#e5e7eb', color: '#0f172a', border: '1px solid #9ca3af' },
  insert: { bg: '#ef4444', color: '#fff' },
  default: { bg: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1' },
}

export const VimKey = ({ k, v = 'default' }: { k: string; v?: KeyVariant }) => {
  const s = styles[v]
  return (
    <Box
      component='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 11,
        px: 0.5,
        lineHeight: '17px',
        borderRadius: 0.5,
        backgroundColor: s.bg,
        color: s.color,
        border: s.border,
        mx: 0.15,
        whiteSpace: 'nowrap',
      }}
    >
      {k}
    </Box>
  )
}

export const T = ({ children }: { children: ReactNode }) => (
  <Typography
    component='div'
    sx={{
      fontSize: 10,
      lineHeight: 1.5,
      textAlign: 'left',
      py: 0.35,
      borderBottom: '1px solid rgba(0,0,0,0.06)',
      '&:last-child': { borderBottom: 'none' },
    }}
  >
    {children}
  </Typography>
)

export const H = ({ children }: { children: ReactNode }) => (
  <Typography
    sx={{ fontWeight: 'bold', fontSize: 10.5, mb: 0.3, textAlign: 'left' }}
  >
    {children}
  </Typography>
)

export const TwoCol = ({
  left,
  right,
}: {
  left: ReactNode
  right: ReactNode
}) => (
  <Box sx={{ p: 1, display: 'flex', gap: 1.5, textAlign: 'left' }}>
    <Box sx={{ flex: 1 }}>{left}</Box>
    <Box sx={{ flex: 1, borderLeft: '1px solid rgba(0,0,0,0.1)', pl: 1.5 }}>
      {right}
    </Box>
  </Box>
)
