import { useState, useCallback } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
  allKeysWithInfo,
  type AllKeyTypes,
  useBaseContext,
} from '../contexts/BaseContext'
import { keymaps } from '../lib/layouts'
import { shiftRowIndices } from '../lib/layouts'
import { Key } from './Key'
import { getActiveKeys, getFocusedKeys } from '../lib/lessons'
import { useKeyboardNav } from '../hooks/useKeyboardNav'
import { prefixKeyMaps } from '../lib/prefixKeys'

export const Keyboard = () => {
  const {
    layout,
    lessonLevel,
    setSelectedKey,
    searchQuery,
    prefixMode,
    customMappings,
    learnedKeys,
    shiftLocked,
  } = useBaseContext()
  const [animatingKey, setAnimatingKey] = useState('')
  const [shiftHeld, setShiftHeld] = useState(false)
  const shiftMode = shiftLocked || shiftHeld

  const handleKeyboardSelect = useCallback(
    (key: string) => {
      setSelectedKey(key)
      setAnimatingKey(key)
      setTimeout(() => setAnimatingKey(''), 400)
    },
    [setSelectedKey],
  )

  useKeyboardNav(handleKeyboardSelect, setShiftHeld)
  const activeKeys = getActiveKeys(lessonLevel)
  const focusedKeys = getFocusedKeys(lessonLevel)

  const shiftIndices = shiftRowIndices[layout] ?? []
  const visibleRows = keymaps[layout].filter((_, i) =>
    shiftMode ? shiftIndices.includes(i) : !shiftIndices.includes(i),
  )

  return (
    <Box sx={{ px: 1 }}>
      {/* Keyboard rows — only showing shift or normal layer */}
      <Grid container spacing={0.4} direction='column'>
        {visibleRows.map((row, i) => {
          const extraSpacing = i === 0 ? { marginBottom: '4px' } : {}
          return (
            <Grid item key={i} style={extraSpacing}>
              <Grid container spacing={0.3} justifyContent='center'>
                {row.split('').map((k, j) => {
                  const keyInfo = allKeysWithInfo[k as AllKeyTypes]
                  if (!keyInfo) return null
                  const help = keyInfo?.vimHelp ?? ''
                  const isActive = activeKeys.includes(k)
                  const hasFocus = focusedKeys.includes(k)
                  const isSearchMatch =
                    searchQuery.length > 0 &&
                    (k.toLowerCase() === searchQuery.toLowerCase() ||
                      keyInfo.text
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      (keyInfo.secondaryText
                        ?.toLowerCase()
                        .includes(searchQuery.toLowerCase()) ??
                        false))
                  const prefixKeyInfo =
                    prefixMode !== 'none'
                      ? prefixKeyMaps[prefixMode]?.[k]
                      : undefined
                  const hasCustomMapping = k in customMappings
                  const isLearned = learnedKeys.includes(k)

                  return (
                    <Grid item key={`${i}-${j}`}>
                      <Key
                        value={k}
                        text={keyInfo.text}
                        secondaryText={keyInfo.secondaryText}
                        shortText={keyInfo.shortText}
                        numberIndicator={keyInfo.numberIndicator}
                        hasBorder={keyInfo.hasBorder}
                        keyType={keyInfo.action}
                        vimHelp={help}
                        hasDot={keyInfo.hasDot}
                        isActive={isActive}
                        hasFocus={hasFocus}
                        isSearchMatch={isSearchMatch}
                        prefixOverride={prefixKeyInfo}
                        hasCustomMapping={hasCustomMapping}
                        isAnimating={k === animatingKey}
                        isLearned={isLearned}
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          )
        })}
      </Grid>

      {/* Legend */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 0.75,
          px: 1,
        }}
      >
        {[
          { color: '#7dd3c0', label: 'motion' },
          { color: '#fb923c', label: 'operator' },
          { color: '#fbbf24', label: 'command' },
          { color: '#e5e7eb', label: 'extra' },
        ].map(({ color, label }) => (
          <Box
            key={label}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: 0.5,
                backgroundColor: color,
                border: '1px solid rgba(0,0,0,0.15)',
                flexShrink: 0,
              }}
            />
            <Typography sx={{ fontSize: 9, opacity: 0.6 }}>{label}</Typography>
          </Box>
        ))}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: 0.5,
              backgroundColor: '#fbbf24',
              border: '2px solid #000',
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: 9, opacity: 0.6 }}>
            enters insert mode
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#16a34a',
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: 9, opacity: 0.6 }}>learned</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#7c3aed',
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: 9, opacity: 0.6 }}>custom map</Typography>
        </Box>
      </Box>
    </Box>
  )
}
