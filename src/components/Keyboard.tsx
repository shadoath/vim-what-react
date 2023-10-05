import { Grid } from '@mui/material'
import {
  allKeysWithInfo,
  AllKeyTypes,
  useBaseContext,
} from '../contexts/baseContext'
import { keymaps } from '../lib/layouts'
import { Key } from './Key'
import { getActiveKeys, getFocusedKeys } from '../lib/lessons'

export const Keyboard = () => {
  const { layout, allKeys, lessonLevel } = useBaseContext()
  const activeKeys = getActiveKeys(lessonLevel)
  const focusedKeys = getFocusedKeys(lessonLevel)

  return (
    <Grid container spacing={1} direction='column'>
      {keymaps[layout].map((row, i) => {
        return (
          <Grid item>
            <Grid container spacing={1} justifyContent='center'>
              {row.split('').map((k, j) => {
                const key = allKeys.find((aKey) => aKey === k) as AllKeyTypes
                const keyInfo = allKeysWithInfo[key]
                const help = keyInfo?.vimHelp ?? ''
                // make use of lessonLevel if the keyboard key is not in that level then change display to dark for that key
                const isActive = activeKeys.includes(k)
                const hasFocus = focusedKeys.includes(k)

                return (
                  <Grid item key={`${i}-${j}`}>
                    <Key
                      value={k}
                      text={keyInfo.text}
                      secondaryText={keyInfo.secondaryText}
                      hasBorder={keyInfo.hasBorder}
                      keyType={keyInfo.action}
                      vimHelp={help}
                      hasDot={keyInfo.hasDot}
                      isActive={isActive}
                      hasFocus={hasFocus}
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
