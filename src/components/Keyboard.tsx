import { Grid } from '@mui/material'
import {
  allKeysWithInfo,
  type AllKeyTypes,
  useBaseContext,
} from '../contexts/BaseContext'
import { keymaps } from '../lib/layouts'
import { Key } from './Key'
import { getActiveKeys, getFocusedKeys } from '../lib/lessons'
import { useKeyboardNav } from '../hooks/useKeyboardNav'

export const Keyboard = () => {
  const { layout, lessonLevel, setSelectedKey, searchQuery } = useBaseContext()
  useKeyboardNav(setSelectedKey)
  const activeKeys = getActiveKeys(lessonLevel)
  const focusedKeys = getFocusedKeys(lessonLevel)

  return (
    <Grid container spacing={0.8} direction='column'>
      {keymaps[layout].map((row, i) => {
        // Add extra spacing after every second row (0-1, 2-3, 4-5, 6-7)
        const extraSpacing = i % 2 === 1 ? { marginBottom: '8px' } : {}

        return (
          <Grid item key={i} style={extraSpacing}>
            <Grid container spacing={0.3} justifyContent='center'>
              {row.split('').map((k, j) => {
                const keyInfo = allKeysWithInfo[k as AllKeyTypes]
                if (!keyInfo) return null
                const help = keyInfo?.vimHelp ?? ''
                // make use of lessonLevel if the keyboard key is not in that level then change display to dark for that key
                const isActive = activeKeys.includes(k)
                const hasFocus = focusedKeys.includes(k)
                const isSearchMatch =
                  searchQuery.length > 0 &&
                  (k.toLowerCase() === searchQuery.toLowerCase() ||
                    keyInfo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (keyInfo.secondaryText?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false))

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
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}
