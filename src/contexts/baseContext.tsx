import React, { useState } from 'react'
import { numbers } from './../lib/numbers'
import { symbols } from './../lib/symbols'
import { letters } from './../lib/letters'
import { SelectChangeEvent } from '@mui/material'

type BaseContextType = {
  info: string | number
  setInfo: React.Dispatch<React.SetStateAction<string | number>>
  allKeys: string[]
  layout: LayoutTypes
  handleLayoutChange: (
    event: SelectChangeEvent<'qwerty' | 'colemack' | 'colemack-ergo'>
  ) => void
}
type LayoutTypes = 'qwerty' | 'colemack' | 'colemack-ergo'

const BaseContext = React.createContext<BaseContextType | undefined>(undefined)
export const allKeysWithInfo = { ...letters, ...numbers, ...symbols }

export type AllKeyTypes = keyof typeof allKeysWithInfo
export const BaseContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const allKeys = Object.keys(allKeysWithInfo)

  const [layout, setLayout] = useState<LayoutTypes>('qwerty')
  const [info, setInfo] = useState<AllKeyTypes>('')

  const handleLayoutChange = (
    event: SelectChangeEvent<'qwerty' | 'colemack' | 'colemack-ergo'>
  ) => {
    setLayout(event.target.value as LayoutTypes)
  }

  return (
    <BaseContext.Provider
      value={{ layout, handleLayoutChange, allKeys, info, setInfo }}
    >
      {children}
    </BaseContext.Provider>
  )
}

export const useBaseContext = () => {
  const context = React.useContext(BaseContext)

  if (context === undefined) {
    throw new Error('useBaseContext must be used in a context provider')
  }
  return context
}
