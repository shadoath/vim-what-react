import { useEffect, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'
import { useBaseContext } from '../contexts/BaseContext'
import { InfoArea } from './InfoArea'
import { TextObjects } from './TextObjects'
import { ProgressPanel } from './ProgressPanel'
import { CustomMappings } from './CustomMappings'

export const BottomTabs = ({ sx }: { sx?: SxProps<Theme> }) => {
  const { selectedKey } = useBaseContext()
  const [tab, setTab] = useState(0)

  // Auto-switch to Info tab when a key is selected
  useEffect(() => {
    if (selectedKey) setTab(0)
  }, [selectedKey])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', borderTop: '1px solid rgba(0,0,0,0.1)', ...sx as object }}>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant='fullWidth'
        sx={{
          flexShrink: 0,
          minHeight: 30,
          '& .MuiTab-root': { minHeight: 30, fontSize: 11, py: 0, textTransform: 'none' },
          '& .MuiTabs-indicator': { height: 2 },
        }}
      >
        <Tab label='Info' />
        <Tab label='Text Objects' />
        <Tab label='Progress' />
        <Tab label='My Maps' />
      </Tabs>
      <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <Box sx={{ display: tab === 0 ? 'block' : 'none' }}><InfoArea /></Box>
        <Box sx={{ display: tab === 1 ? 'block' : 'none' }}><TextObjects /></Box>
        <Box sx={{ display: tab === 2 ? 'block' : 'none' }}><ProgressPanel /></Box>
        <Box sx={{ display: tab === 3 ? 'block' : 'none' }}><CustomMappings /></Box>
      </Box>
    </Box>
  )
}
