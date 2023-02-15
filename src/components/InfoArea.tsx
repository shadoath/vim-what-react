import { Box } from '@mui/material'
import { useBaseContext } from '../contexts/baseContext'

export const InfoArea = () => {
  const { info } = useBaseContext()
  return <Box sx={{ p: 2 }}>{info}</Box>
}
