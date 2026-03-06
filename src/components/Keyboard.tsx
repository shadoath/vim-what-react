import { useState, useCallback } from 'react'
import { Box, Chip, Grid } from '@mui/material'
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
  const { layout, lessonLevel, setSelectedKey, searchQuery, prefixMode, customMappings, learnedKeys } = useBaseContext()
  const [animatingKey, setAnimatingKey] = useState('')
  const [shiftLocked, setShiftLocked] = useState(false)
  const [shiftHeld, setShiftHeld] = useState(false)
  const shiftMode = shiftLocked || shiftHeld

  const handleKeyboardSelect = useCallback((key: string) => {
    setSelectedKey(key)
    setAnimatingKey(key)
    setTimeout(() => setAnimatingKey(''), 400)
  }, [setSelectedKey])

  useKeyboardNav(handleKeyboardSelect, setShiftHeld)
  const activeKeys = getActiveKeys(lessonLevel)
  const focusedKeys = getFocusedKeys(lessonLevel)

  const shiftIndices = shiftRowIndices[layout] ?? []
  const visibleRows = keymaps[layout].filter((_, i) =>
    shiftMode ? shiftIndices.includes(i) : !shiftIndices.includes(i)
  )

  return (
    <Box>
      {/* Shift toggle bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, py: 0.5 }}>
        <Chip
          label={shiftLocked ? '⇧ Locked' : shiftHeld ? '⇧ Shift' : '⇧'}
          size='small'
          onClick={() => setShiftLocked(!shiftLocked)}
          variant={shiftLocked ? 'filled' : 'outlined'}
          sx={{
            cursor: 'pointer',
            fontSize: 11,
            height: 22,
            backgroundColor: shiftLocked ? '#6366f1' : shiftHeld ? '#e0e7ff' : 'transparent',
            color: shiftLocked ? '#fff' : shiftHeld ? '#4338ca' : 'rgba(0,0,0,0.4)',
            borderColor: shiftMode ? '#6366f1' : 'rgba(0,0,0,0.2)',
            '&:hover': { opacity: 0.8 },
          }}
        />
      </Box>

      {/* Keyboard rows — only showing shift or normal layer */}
      <Grid container spacing={0.8} direction='column'>
        {visibleRows.map((row, i) => {
          const extraSpacing = i === 1 ? { marginBottom: '8px' } : {}
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
                      keyInfo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (keyInfo.secondaryText?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false))
                  const prefixKeyInfo = prefixMode !== 'none' ? prefixKeyMaps[prefixMode]?.[k] : undefined
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
    </Box>
  )
}
