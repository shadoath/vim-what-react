import { Card, Grid, Typography } from '@mui/material'
import { Circle } from '@mui/icons-material'
import { useBaseContext } from '../contexts/baseContext'

export type KeyType = 'motion' | 'operator' | 'command' | 'extra'

type KeyProps = {
  value: string
  text: string
  keyType: string //KeyType
  disabled?: boolean
  hasDot?: boolean
  hasBorder?: boolean
  vimhelp?: string
  notes?: string[]
  secondaryText?: string
}
export const Key = ({
  value,
  text,
  secondaryText,
  keyType = 'motion',
  disabled,
  hasDot,
  hasBorder,
  vimhelp,
  notes,
}: KeyProps) => {
  const { setInfo } = useBaseContext()
  const openHelpLink = () => {
    window.open(`http://vimhelp.appspot.com/${vimhelp}`, '_blank')
  }

  const onClick = () => {
    setInfo(text)
  }
  return (
    <Card
      key={value}
      onClick={onClick}
      sx={{
        border: 1.5,
        borderColor: hasBorder ? 'text.primary' : 'transparent',
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
