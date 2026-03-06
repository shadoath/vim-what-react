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
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1, py: 0.5, width: '100%', boxSizing: 'border-box' }}>
      {/* Logo + KOTD */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexShrink: 0 }}>
        <a
          href='https://chrome.google.com/webstore/detail/vim-what/ngbehgnlcdjkbnihgpkgdangbhemidge?hl=en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logo} className='App-logo' alt='logo' style={{ display: 'block' }} />
        </a>
        <Box
          onClick={() => setSelectedKey(keyOfDay)}
          sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            backgroundColor: isKotdLearned ? '#f0fdf4' : '#fffbeb',
            border: '1px solid', borderColor: isKotdLearned ? '#86efac' : '#fde68a',
            borderRadius: 1, px: 0.75, py: 0.25, cursor: 'pointer',
            '&:hover': { opacity: 0.8 },
          }}
        >
          <Typography sx={{ fontSize: 9, textTransform: 'uppercase', opacity: 0.5, lineHeight: 1 }}>Today</Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 'bold', lineHeight: 1 }}>{keyOfDay}</Typography>
          <Typography sx={{ fontSize: 10, opacity: 0.65, maxWidth: 70, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: 1 }}>
            {kotdInfo?.secondaryText ?? ''}
          </Typography>
        </Box>
      </Box>

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />

      {/* Layout selector */}
      <FormControl size='small' sx={{ minWidth: 90 }}>
        <Select variant='standard' value={layout} onChange={handleLayoutChange} size='small'>
          {Object.keys(keymaps).map((l) => (
            <MenuItem key={l} value={l}>{l}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Search */}
      <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(0,0,0,0.2)', borderRadius: 1, px: 0.75, py: 0.2 }}>
        <Search sx={{ fontSize: 13, opacity: 0.4, mr: 0.4 }} />
        <InputBase
          placeholder='search…'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ fontSize: 12, width: 72 }}
          inputProps={{ 'aria-label': 'search keys' }}
        />
      </Box>

      {/* Modifier toggles: prefix modes + shift lock */}
      <ToggleButtonGroup
        value={prefixMode}
        exclusive
        onChange={(_e, val) => setPrefixMode(val ?? 'none')}
        size='small'
        sx={{ height: 26 }}
      >
        <Tooltip title='g prefix — overlay g+key commands' placement='bottom' arrow>
          <ToggleButton value='g' sx={{ fontSize: 11, px: 0.75, py: 0 }}>g</ToggleButton>
        </Tooltip>
        <Tooltip title='z prefix — overlay z+key commands (folds, scroll)' placement='bottom' arrow>
          <ToggleButton value='z' sx={{ fontSize: 11, px: 0.75, py: 0 }}>z</ToggleButton>
        </Tooltip>
        <Tooltip title='Ctrl prefix — overlay Ctrl+key commands' placement='bottom' arrow>
          <ToggleButton value='ctrl' sx={{ fontSize: 11, px: 0.75, py: 0 }}>^</ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>
      <Tooltip title='Shift lock — show uppercase / symbol layer' placement='bottom' arrow>
        <ToggleButton
          value='shift'
          selected={shiftLocked}
          onChange={() => setShiftLocked(!shiftLocked)}
          size='small'
          sx={{
            height: 26, fontSize: 11, px: 0.75, py: 0,
            '&.Mui-selected': { backgroundColor: '#6366f1', color: '#fff', '&:hover': { backgroundColor: '#4f46e5' } },
          }}
        >
          ⇧
        </ToggleButton>
      </Tooltip>

      {/* Lesson selector */}
      <FormControl size='small' sx={{ minWidth: 100 }}>
        <Select variant='standard' value={lessonLevel} onChange={handleLessonLevelChange} size='small' fullWidth>
          <MenuItem value={8}>Full Layout</MenuItem>
          {lessonLevels.map((level) => (
            <MenuItem key={level} value={level}>{`Level ${level}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
