import { Box, Grid } from '@mui/material'
import { useBaseContext } from '../contexts/baseContext'

export const InfoArea = () => {
  const { docs, info, infoImage } = useBaseContext()
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={2}>
        {!info && !docs && infoImage && (
          <Grid item>
            <img
              src={infoImage}
              alt='info'
              style={{ width: '100%', float: 'left' }}
            />
          </Grid>
        )}
        {info && <Grid item>{info}</Grid>}
        {docs && (
          <Grid item>
            Read the{' '}
            <a href={docs} target='_blank' rel='noopener noreferrer'>
              docs
            </a>{' '}
            for more info.
          </Grid>
        )}
      </Grid>
    </Box>
  )
}
