import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@mui/material'
import { Delete, ExpandMore, ExpandLess } from '@mui/icons-material'
import { allKeysWithInfo, useBaseContext } from '../contexts/BaseContext'

export const CustomMappings = () => {
  const { customMappings, setCustomMapping, deleteCustomMapping } = useBaseContext()
  const [open, setOpen] = useState(false)
  const [keyInput, setKeyInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [error, setError] = useState('')

  const handleAdd = () => {
    const key = keyInput.trim()
    const desc = descInput.trim()
    if (!key) { setError('Enter a key character'); return }
    if (key.length !== 1) { setError('Must be a single character'); return }
    if (!(key in allKeysWithInfo)) { setError(`'${key}' is not a recognized vim key`); return }
    if (!desc) { setError('Enter a description'); return }
    setCustomMapping(key, desc)
    setKeyInput('')
    setDescInput('')
    setError('')
  }

  const entries = Object.entries(customMappings)

  return (
    <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.1)', mt: 1 }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', px: 1.5, py: 0.75 }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 'bold', flex: 1, color: '#7c3aed' }}>
          Custom mappings {entries.length > 0 ? `(${entries.length})` : ''}
        </Typography>
        {open ? <ExpandLess sx={{ fontSize: 16 }} /> : <ExpandMore sx={{ fontSize: 16 }} />}
      </Box>

      <Collapse in={open}>
        <Box sx={{ px: 1.5, pb: 1 }}>
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-start', mb: 1 }}>
            <TextField
              size='small'
              label='Key'
              value={keyInput}
              onChange={(e) => { setKeyInput(e.target.value); setError('') }}
              inputProps={{ maxLength: 1, style: { width: 24, textAlign: 'center', fontWeight: 'bold' } }}
              sx={{ width: 60 }}
            />
            <TextField
              size='small'
              label='Description'
              value={descInput}
              onChange={(e) => { setDescInput(e.target.value); setError('') }}
              sx={{ flex: 1 }}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAdd() }}
            />
            <Button
              size='small'
              variant='contained'
              onClick={handleAdd}
              sx={{ minWidth: 36, backgroundColor: '#7c3aed', '&:hover': { backgroundColor: '#6d28d9' } }}
            >
              Add
            </Button>
          </Box>

          {error && (
            <Typography sx={{ fontSize: 11, color: 'error.main', mb: 0.5 }}>{error}</Typography>
          )}

          {entries.length > 0 && (
            <List dense disablePadding>
              {entries.map(([key, desc]) => (
                <ListItem
                  key={key}
                  disablePadding
                  secondaryAction={
                    <IconButton size='small' onClick={() => deleteCustomMapping(key)} edge='end'>
                      <Delete sx={{ fontSize: 14 }} />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontSize: 13, fontWeight: 'bold', color: '#7c3aed', minWidth: 16 }}>{key}</Typography>
                        <Typography sx={{ fontSize: 12 }}>{desc}</Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}

          {entries.length === 0 && (
            <Typography sx={{ fontSize: 11, opacity: 0.5, textAlign: 'center', py: 0.5 }}>
              No custom mappings yet
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
