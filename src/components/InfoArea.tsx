import { Box, Grid } from '@mui/material'
import { useBaseContext } from '../contexts/baseContext'

export const InfoArea = () => {
  const { docs, info } = useBaseContext()
  return (
    <Box sx={{ p: 1 }}>
      <Grid
        container
        justifyContent='space-between'
        direction='column'
        spacing={2}
      >
        <Grid item>{info}</Grid>
        <Grid item>
          Read the{' '}
          <a href={docs} target='_blank' rel='noopener noreferrer'>
            docs
          </a>{' '}
          for more info.
        </Grid>
      </Grid>
    </Box>
  )
}
