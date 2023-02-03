import React from 'react'
import { Card } from '@mui/material'

export type KeyType = 'motion' | 'operator' | 'command' | 'extra'

type KeyProps = {
  value: string
  description: string
  keyType: string //KeyType
  disabled?: boolean
  hasDot?: boolean
  hasBorder?: boolean
  notes?: string[]
}
export const Key = ({
  value,
  description,
  keyType = 'motion',
  disabled,
  hasDot,
  hasBorder,
  notes,
}: KeyProps) => {
  return <Card className={`key ${keyType}`}>{value}</Card>
}
