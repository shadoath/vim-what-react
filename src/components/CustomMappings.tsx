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
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { useBaseContext } from '../contexts/BaseContext'

export const CustomMappings = () => {
  const { customMappings, setCustomMapping, deleteCustomMapping } = useBaseContext()
  const [keyInput, setKeyInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [error, setError] = useState('')

  const handleAdd = () => {
    const key = keyInput.trim()
    const desc = descInput.trim()
    if (!key) { setError('Enter a key or sequence'); return }
    if (!desc) { setError('Enter a description'); return }
    setCustomMapping(key, desc)
    setKeyInput('')
    setDescInput('')
    setError('')
  }

  const entries = Object.entries(customMappings)

  return (
    <Box sx={{ px: 1.5, pb: 1, pt: 0.5 }}>
      <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#7c3aed', mb: 1 }}>Custom Mappings</Typography>
      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'flex-start', mb: 1 }}>
        <TextField
          size='small'
          label='Key / Sequence'
          value={keyInput}
          onChange={(e) => { setKeyInput(e.target.value); setError('') }}
          inputProps={{ style: { fontWeight: 'bold', fontFamily: 'monospace' } }}
          sx={{ width: 130 }}
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
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: '#7c3aed', fontFamily: 'monospace', minWidth: 20 }}>{key}</Typography>
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
  )
}
