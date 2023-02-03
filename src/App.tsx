import React, { useState } from 'react';
import logo from './vim-what.svg';
import './App.scss';
import { Key } from './Key';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { numbers } from './lib/numbers';
import { symbols } from './lib/symbols';
import { keymaps } from './lib/layouts';
import { letters } from './lib/letters';

type LayoutTypes = 'qwerty' | 'colemack' | 'colemack-ergo';

function App() {
  const allLettersNumberSymbols = { ...letters, ...numbers, ...symbols };
  const allKeys = Object.keys(allLettersNumberSymbols);
  type AllKeyTypes = keyof typeof allLettersNumberSymbols;

  const [layout, setLayout] = useState<LayoutTypes>('qwerty');

  const handleLayoutChange = (
    event: SelectChangeEvent<'qwerty' | 'colemack' | 'colemack-ergo'>
  ) => {
    setLayout(event.target.value as LayoutTypes);
  };
  return (
    <div className='App'>
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
                  return <MenuItem value={layout}>{layout}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </header>
      <Grid container spacing={1} direction='column'>
        {keymaps[layout].map((row, i) => {
          return (
            <Grid item>
              <Grid container spacing={1} justifyContent='center'>
                {row.split('').map((k, j) => {
                  const key = allKeys.find((aKey) => aKey === k) as AllKeyTypes;
                  const keyInfo = allLettersNumberSymbols[key];
                  // @ts-ignore - help is not always defined
                  const help = keyInfo?.vimhelp || '';

                  return (
                    <Grid item key={`${i}-${j}`}>
                      <Key
                        value={k}
                        description={keyInfo.text}
                        secondaryText={keyInfo.secondaryText}
                        keyType={keyInfo.action}
                        vimhelp={help}
                        hasDot={keyInfo.hasDot}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
