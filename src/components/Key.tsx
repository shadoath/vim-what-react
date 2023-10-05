import { Card, Grid, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material'
import { useBaseContext } from '../contexts/baseContext'

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
  hasFocus?: boolean
}
export const Key = ({
  value,
  text,
  secondaryText,
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
  return (
    <Card
      key={value}
      onClick={onClick}
      sx={{
        border: 1.5,
        borderColor: hasBorder ? 'text.primary' : 'transparent',
        opacity: hasFocus ? 1 : isActive ? 0.8 : 0.3,
      }}
      className={`key ${keyType}`}
    >
      <Grid container>
        <Grid item>{value}</Grid>
        <Grid item>
          {hasDot && <Circle style={{ marginLeft: 2, fontSize: 6 }} />}
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-start' alignItems='flex-end'>
        <Typography textAlign='left' fontSize={8}>
          <b>{secondaryText}</b>
        </Typography>
      </Grid>
    </Card>
  )
}
