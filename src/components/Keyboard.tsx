import { Grid } from '@mui/material'
import {
  allKeysWithInfo,
  AllKeyTypes,
  useBaseContext,
} from '../contexts/baseContext'
import { keymaps } from '../lib/layouts'
import { Key } from './Key'

export const Keyboard = () => {
  const { layout, allKeys } = useBaseContext()
  return (
    <Grid container spacing={1} direction='column'>
      {keymaps[layout].map((row, i) => {
        return (
          <Grid item>
            <Grid container spacing={1} justifyContent='center'>
              {row.split('').map((k, j) => {
                const key = allKeys.find((aKey) => aKey === k) as AllKeyTypes
                const keyInfo = allKeysWithInfo[key]
                // @ts-ignore - help is not always defined
                const help = keyInfo?.vimhelp || ''

                return (
                  <Grid item key={`${i}-${j}`}>
                    <Key
                      value={k}
                      text={keyInfo.text}
                      secondaryText={keyInfo.secondaryText}
                      hasBorder={keyInfo.hasBorder}
                      keyType={keyInfo.action}
                      vimhelp={help}
                      hasDot={keyInfo.hasDot}
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
