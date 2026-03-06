import React, { useState } from 'react'
import { numbers } from '../lib/numbers'
import { symbols } from '../lib/symbols'
import { letters } from '../lib/letters'
import type { SelectChangeEvent } from '@mui/material'

type BaseContextType = {
  selectedKey: string
  setSelectedKey: React.Dispatch<React.SetStateAction<string>>
  infoImage: string
  allKeys: string[]
  layout: LayoutTypes
  handleLayoutChange: (event: SelectChangeEvent<LayoutTypes>) => void
  lessonLevel: number
  handleLessonLevelChange: (event: SelectChangeEvent<number>) => void
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
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

  const [layout, setLayout] = useState<LayoutTypes>(() => (localStorage.getItem('vim-what-layout') as LayoutTypes) ?? 'Qwerty')
  const [selectedKey, setSelectedKey] = useState('')
  const [infoImage, setInfoImage] = useState('/about/all.png')
  const [lessonLevel, setLessonLevel] = useState<number>(() => { const saved = localStorage.getItem('vim-what-lesson'); return saved !== null ? Number(saved) : 8 })
  const [searchQuery, setSearchQuery] = useState('')

  const handleLessonLevelChange = (event: SelectChangeEvent<number>) => {
    const level = Number(event.target.value)
    setLessonLevel(level)
    localStorage.setItem('vim-what-lesson', String(level))
    if (level === 8) {
      setInfoImage('/about/all.png')
    } else {
      setInfoImage('/about/lesson_' + level + '.png')
    }
    setSelectedKey('')
  }

  const handleLayoutChange = (event: SelectChangeEvent<LayoutTypes>) => {
    const layout = event.target.value as LayoutTypes
    setLayout(layout)
    localStorage.setItem('vim-what-layout', layout)
  }

  return (
    <BaseContext.Provider
      value={{
        allKeys,
        handleLayoutChange,
        handleLessonLevelChange,
        infoImage,
        layout,
        lessonLevel,
        selectedKey,
        setSelectedKey,
        searchQuery,
        setSearchQuery,
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
