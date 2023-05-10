import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useBaseContext } from '../contexts/baseContext'
import { keymaps } from '../lib/layouts'
import logo from './../vim-what.svg'
import { lessonLevels } from '../lib/lessons'

export const Header = () => {
  const { layout, handleLayoutChange, lessonLevel, handleLessonLevelChange } =
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
          <InputLabel>Keyboard</InputLabel>
          <Select
            variant='standard'
            value={layout}
            label='Keyboard'
            onChange={handleLayoutChange}
          >
            {Object.keys(keymaps).map((layout) => {
              return <MenuItem value={layout}>{layout}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl
          size='small'
          style={{
            minWidth: '150px',
          }}
        >
          <InputLabel>Lesson Level</InputLabel>
          <Select
            fullWidth
            variant='standard'
            value={lessonLevel}
            label='Lesson Level'
            onChange={handleLessonLevelChange}
          >
            <MenuItem value={8}>Full Layout</MenuItem>
            {lessonLevels.map((level) => {
              return <MenuItem value={level}>{`Level ${level}`}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}
