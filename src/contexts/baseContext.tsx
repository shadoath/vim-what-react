import React, { useState } from 'react'
import { numbers } from './../lib/numbers'
import { symbols } from './../lib/symbols'
import { letters } from './../lib/letters'
import { SelectChangeEvent } from '@mui/material'

type BaseContextType = {
  docs: string
  info: string | number
  setDocs: React.Dispatch<React.SetStateAction<string>>
  setInfo: React.Dispatch<React.SetStateAction<string | number>>
  allKeys: string[]
  layout: LayoutTypes
  handleLayoutChange: (event: SelectChangeEvent<LayoutTypes>) => void

  lessonLevel: number
  handleLessonLevelChange: (event: SelectChangeEvent<number>) => void
}
type LayoutTypes = 'Qwerty' | 'Colemak'

const BaseContext = React.createContext<BaseContextType | undefined>(undefined)
export const allKeysWithInfo = { ...letters, ...numbers, ...symbols }

export type AllKeyTypes = keyof typeof allKeysWithInfo
export const BaseContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const allKeys = Object.keys(allKeysWithInfo)

  const [layout, setLayout] = useState<LayoutTypes>('Qwerty')
  const [info, setInfo] = useState<AllKeyTypes>('')
  const [docs, setDocs] = useState('')
  const [lessonLevel, setLessonLevel] = useState<number>(1)

  const handleLessonLevelChange = (event: SelectChangeEvent<number>) => {
    setLessonLevel(Number(event.target.value))
  }

  const handleLayoutChange = (event: SelectChangeEvent<LayoutTypes>) => {
    setLayout(event.target.value as LayoutTypes)
  }

  return (
    <BaseContext.Provider
      value={{
        layout,
        handleLayoutChange,
        allKeys,
        info,
        setInfo,
        docs,
        setDocs,
        lessonLevel,
        handleLessonLevelChange,
      }}
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
