import { useState, useCallback } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
  allKeysWithInfo,
  type AllKeyTypes,
  useBaseContext,
} from '../contexts/BaseContext'
import { keymaps, shiftRowIndices, getShiftRowForNormalRow } from '../lib/layouts'
import { Key } from './Key'
import { getActiveKeys, getFocusedKeys } from '../lib/lessons'
import { useKeyboardNav } from '../hooks/useKeyboardNav'
import { prefixKeyMaps } from '../lib/prefixKeys'

export const Keyboard = () => {
  const { layout, lessonLevel, setSelectedKey, searchQuery, prefixMode, customMappings, learnedKeys } = useBaseContext()
  const [animatingKey, setAnimatingKey] = useState('')

  const handleKeyboardSelect = useCallback(
    (key: string) => {
      setSelectedKey(key)
      setAnimatingKey(key)
      setTimeout(() => setAnimatingKey(''), 400)
    },
    [setSelectedKey],
  )

  useKeyboardNav(handleKeyboardSelect)
  const activeKeys = getActiveKeys(lessonLevel)
  const focusedKeys = lessonLevel >= 10 ? [] : getFocusedKeys(lessonLevel)
  const dimActive = focusedKeys.length > 0

  const shiftIndices = shiftRowIndices[layout] ?? []
  const allRows = keymaps[layout]

  // Always show normal rows with shift key stacked above each
  const normalRowsWithIdx = allRows
    .map((row, originalIdx) => ({ row, originalIdx }))
    .filter(({ originalIdx }) => !shiftIndices.includes(originalIdx))

  return (
    <Box sx={{ px: 1 }}>
      <Grid container spacing={0.4} direction='column'>
        {normalRowsWithIdx.map(({ row, originalIdx }, i) => {
          const extraSpacing = i === 0 ? { marginBottom: '4px' } : {}
          const shiftRowStr = getShiftRowForNormalRow(layout, originalIdx)

          return (
            <Grid item key={originalIdx} style={extraSpacing}>
              <Grid container spacing={0.3} justifyContent='center'>
                {row.split('').map((k, j) => {
                  const keyInfo = allKeysWithInfo[k as AllKeyTypes]
                  if (!keyInfo) return null
                  const isActive = activeKeys.includes(k)
                  const hasFocus = focusedKeys.includes(k)
                  const plainText = keyInfo.text.replace(/<[^>]+>/g, '')
                  const isSearchMatch =
                    searchQuery.length > 0 &&
                    (k.toLowerCase() === searchQuery.toLowerCase() ||
                      plainText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (keyInfo.secondaryText?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false))
                  const prefixKeyInfo = prefixMode !== 'none' ? prefixKeyMaps[prefixMode]?.[k] : undefined

                  const shiftKey = shiftRowStr?.[j]
                  const shiftKeyInfo = shiftKey ? allKeysWithInfo[shiftKey as AllKeyTypes] : undefined

                  return (
                    <Grid item key={`${originalIdx}-${j}`}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        {shiftKey && shiftKeyInfo && (
                          <Key
                            value={shiftKey}
                            text={shiftKeyInfo.text}
                            secondaryText={shiftKeyInfo.secondaryText}
                            shortText={shiftKeyInfo.shortText}
                            hasBorder={shiftKeyInfo.hasBorder}
                            keyType={shiftKeyInfo.action}
                            vimHelp={shiftKeyInfo.vimHelp}
                            hasDot={shiftKeyInfo.hasDot}
                            isActive={isActive}
                            hasFocus={focusedKeys.includes(shiftKey)}
                            isSearchMatch={isSearchMatch}
                            prefixOverride={prefixMode !== 'none' ? prefixKeyMaps[prefixMode]?.[shiftKey] : undefined}
                            hasCustomMapping={shiftKey in customMappings}
                            isLearned={learnedKeys.includes(shiftKey)}
                            dimActive={dimActive}
                            isSecondary
                          />
                        )}
                        <Key
                          value={k}
                          text={keyInfo.text}
                          secondaryText={keyInfo.secondaryText}
                          shortText={keyInfo.shortText}
                          numberIndicator={keyInfo.numberIndicator}
                          hasBorder={keyInfo.hasBorder}
                          keyType={keyInfo.action}
                          vimHelp={keyInfo.vimHelp}
                          hasDot={keyInfo.hasDot}
                          isActive={isActive}
                          hasFocus={hasFocus}
                          isSearchMatch={isSearchMatch}
                          prefixOverride={prefixKeyInfo}
                          hasCustomMapping={k in customMappings}
                          isAnimating={k === animatingKey}
                          isLearned={learnedKeys.includes(k)}
                          dimActive={dimActive}
                        />
                      </Box>
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
              backgroundColor: '#e5e7eb',
              border: '1px solid rgba(0,0,0,0.15)',
              boxShadow: '0 0 0 2px #f59e0b',
              flexShrink: 0,
            }}
          />
          <Typography sx={{ fontSize: 9, opacity: 0.6 }}>current level</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: 0.5,
              backgroundColor: '#fbbf24',
              border: '1px solid rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#ef4444' }} />
          </Box>
          <Typography sx={{ fontSize: 9, opacity: 0.6 }}>insert mode</Typography>
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
