import React from 'react'
import logo from './vim-what.svg'
import './App.scss'
import { Key } from './Key'
import { Grid } from '@mui/material'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Grid container spacing={2}>
          <Grid item>
            <Key value='q' description='A' keyType={'command'} />
          </Grid>
          <Grid item>
            <Key value='w' description='A' keyType={'motion'} />
          </Grid>
          <Grid item>
            <Key value='e' description='A' keyType={'motion'} />
          </Grid>
          <Grid item>
            <Key value='r' description='A' keyType={'command'} />
          </Grid>
          <Grid item>
            <Key value='t' description='A' keyType={'motion'} />
          </Grid>
          <Grid item>
            <Key value='y' description='A' keyType={'operator'} />
          </Grid>
        </Grid>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Vim... What?
        </a>
      </header>
    </div>
  )
}

export default App
