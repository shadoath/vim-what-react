import { Box, FormControl, InputBase, MenuItem, Select, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'
import type { AllKeyTypes } from '../contexts/BaseContext'
import { keymaps } from '../lib/layouts'
import logo from './../vim-what.svg'
import { lessonLevels } from '../lib/lessons'

export const Header = () => {
  const {
    layout, handleLayoutChange,
    lessonLevel, handleLessonLevelChange,
    searchQuery, setSearchQuery,
    prefixMode, setPrefixMode,
    shiftLocked, setShiftLocked,
    keyOfDay, setSelectedKey, learnedKeys,
  } = useBaseContext()

  const kotdInfo = allKeysWithInfo[keyOfDay as AllKeyTypes]
  const isKotdLearned = learnedKeys.includes(keyOfDay)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 0.75, py: 0.25, width: '100%', boxSizing: 'border-box' }}>
      {/* Left: Logo + KOTD */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <a
          href='https://chrome.google.com/webstore/detail/vim-what/ngbehgnlcdjkbnihgpkgdangbhemidge?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logo} className='App-logo' alt='logo' style={{ display: 'block' }} />
        </a>
        <Tooltip title={kotdInfo?.secondaryText ?? ''} placement='bottom' arrow>
          <Box
            onClick={() => setSelectedKey(keyOfDay)}
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              backgroundColor: isKotdLearned ? '#f0fdf4' : '#fffbeb',
              border: '1px solid', borderColor: isKotdLearned ? '#86efac' : '#fde68a',
              borderRadius: 1, px: 0.5, py: 0.2, cursor: 'pointer', minWidth: 32,
              '&:hover': { opacity: 0.8 },
            }}
          >
            <Typography sx={{ fontSize: 8, textTransform: 'uppercase', opacity: 0.5, lineHeight: 1 }}>Today</Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', lineHeight: 1.1 }}>{keyOfDay}</Typography>
          </Box>
        </Tooltip>
      </Box>

      {/* Center: Search + modifier toggles */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, px: 0.75, py: 0.2 }}>
          <Search sx={{ fontSize: 13, opacity: 0.4, mr: 0.4 }} />
          <InputBase
            placeholder='search…'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ fontSize: 12, width: 68 }}
            inputProps={{ 'aria-label': 'search keys' }}
          />
        </Box>

        <ToggleButtonGroup
          value={prefixMode}
          exclusive
          onChange={(_e, val) => setPrefixMode(val ?? 'none')}
          size='small'
          sx={{ height: 26 }}
        >
          {([
            { val: 'g', label: 'g', tip: 'g prefix — overlay g+key commands' },
            { val: 'z', label: 'z', tip: 'z prefix — overlay z+key commands (folds, scroll)' },
            { val: 'ctrl', label: '^', tip: 'Ctrl prefix — overlay Ctrl+key commands' },
          ] as const).map(({ val, label, tip }) => (
            <Tooltip key={val} title={tip} placement='bottom' arrow>
              <ToggleButton
                value={val}
                sx={{
                  fontSize: 11, px: 0.75, py: 0,
                  '&.Mui-selected': { backgroundColor: '#6366f1 !important', color: '#fff !important' },
                  '&.Mui-selected:hover': { backgroundColor: '#4f46e5 !important' },
                }}
              >
                {label}
              </ToggleButton>
            </Tooltip>
          ))}
        </ToggleButtonGroup>
        <Tooltip title='Shift lock — show uppercase / symbol layer' placement='bottom' arrow>
          <ToggleButton
            value='shift'
            selected={shiftLocked}
            onChange={() => setShiftLocked(!shiftLocked)}
            size='small'
            sx={{
              height: 26, fontSize: 11, px: 0.75, py: 0,
              border: '1px solid rgba(0,0,0,0.12)',
              '&.Mui-selected': { backgroundColor: '#6366f1 !important', color: '#fff !important' },
              '&.Mui-selected:hover': { backgroundColor: '#4f46e5 !important' },
            }}
          >
            ⇧
          </ToggleButton>
        </Tooltip>
      </Box>

      {/* Right: Layout + Lesson selectors */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
        <FormControl size='small' sx={{ minWidth: 78 }}>
          <Select variant='standard' value={layout} onChange={handleLayoutChange} size='small'>
            {Object.keys(keymaps).map((l) => (
              <MenuItem key={l} value={l}>{l}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size='small' sx={{ minWidth: 72 }}>
          <Select variant='standard' value={lessonLevel} onChange={handleLessonLevelChange} size='small' fullWidth>
            <MenuItem value={8}>All</MenuItem>
            {lessonLevels.map((level) => (
              <MenuItem key={level} value={level}>{`Lvl ${level}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
