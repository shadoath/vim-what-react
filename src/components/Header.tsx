import { Grid, FormControl, Select, MenuItem, InputBase, Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useBaseContext } from '../contexts/BaseContext'
import { keymaps } from '../lib/layouts'
import logo from './../vim-what.svg'
import { lessonLevels } from '../lib/lessons'

export const Header = () => {
  const { layout, handleLayoutChange, lessonLevel, handleLessonLevelChange, searchQuery, setSearchQuery, prefixMode, setPrefixMode } =
    useBaseContext()
  return (
    <Grid container spacing={2} justifyContent='space-between'>
      <Grid item>
        <a
          href='https://chrome.google.com/webstore/detail/vim-what/ngbehgnlcdjkbnihgpkgdangbhemidge?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Grid item>
            <img src={logo} className='App-logo' alt='logo' />
          </Grid>
        </a>
      </Grid>
      <Grid item>
        <FormControl
          size='small'
          style={{
            minWidth: '100px',
          }}
        >
          <Select
            variant='standard'
            value={layout}
            label='Keyboard'
            onChange={handleLayoutChange}
            size='small'
          >
            {Object.keys(keymaps).map((layout) => {
              return <MenuItem key={layout} value={layout}>{layout}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, px: 1, py: 0.25 }}>
          <Search sx={{ fontSize: 14, opacity: 0.5, mr: 0.5 }} />
          <InputBase
            placeholder='search keys…'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ fontSize: 12, width: 90 }}
            inputProps={{ 'aria-label': 'search keys' }}
          />
        </Box>
      </Grid>
      <Grid item>
        <ToggleButtonGroup
          value={prefixMode}
          exclusive
          onChange={(_e, val) => setPrefixMode(val ?? 'none')}
          size='small'
          sx={{ height: 28 }}
        >
          <ToggleButton value='g' sx={{ fontSize: 11, px: 1, py: 0 }}>g</ToggleButton>
          <ToggleButton value='z' sx={{ fontSize: 11, px: 1, py: 0 }}>z</ToggleButton>
          <ToggleButton value='ctrl' sx={{ fontSize: 11, px: 1, py: 0 }}>^</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item>
        <FormControl
          size='small'
          style={{
            minWidth: '150px',
          }}
        >
          <Select
            fullWidth
            variant='standard'
            value={lessonLevel}
            label='Lesson Level'
            onChange={handleLessonLevelChange}
            size='small'
          >
            <MenuItem value={8}>Full Layout</MenuItem>
            {lessonLevels.map((level) => {
              return <MenuItem key={level} value={level}>{`Level ${level}`}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}
