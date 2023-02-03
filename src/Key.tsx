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
  vimhelp?: string
  notes?: string[]
}
export const Key = ({
  value,
  description,
  keyType = 'motion',
  disabled,
  hasDot,
  hasBorder,
  vimhelp,
  notes,
}: KeyProps) => {
  const openHelpLink = () => {
    window.open(`http://vimhelp.appspot.com/${vimhelp}`, '_blank')
  }

  return (
    <Card onClick={openHelpLink} className={`key ${keyType}`}>
      {value}
    </Card>
  )
}
