import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useBaseContext } from '../contexts/baseContext'
import { keymaps } from '../lib/layouts'
import logo from './../vim-what.svg'

export const Header = () => {
  const { layout, handleLayoutChange } = useBaseContext()
  return (
    <header className='App-header'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item>
          <a
            href='https://chrome.google.com/webstore/detail/vim-what/ngbehgnlcdjkbnihgpkgdangbhemidge?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={logo} className='App-logo' alt='logo' />
          </a>
        </Grid>
        <Grid item>
          <FormControl>
            <InputLabel>Keyboard</InputLabel>
            <Select
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
      </Grid>
    </header>
  )
}
