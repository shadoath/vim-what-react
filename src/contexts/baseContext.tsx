import React, { useState } from 'react'
import { numbers } from '../lib/numbers'
import { symbols } from '../lib/symbols'
import { letters } from '../lib/letters'
import type { SelectChangeEvent } from '@mui/material'
import type { PrefixMode } from '../lib/prefixKeys'

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
  prefixMode: PrefixMode
  setPrefixMode: React.Dispatch<React.SetStateAction<PrefixMode>>
  shiftLocked: boolean
  setShiftLocked: React.Dispatch<React.SetStateAction<boolean>>
  customMappings: Record<string, string>
  setCustomMapping: (key: string, description: string) => void
  deleteCustomMapping: (key: string) => void
  learnedKeys: string[]
  toggleLearned: (key: string) => void
  keyOfDay: string
}
type LayoutTypes = 'Qwerty' | 'Colemak' | 'Colemak-DH' | 'Dvorak' | 'Workman'

const BaseContext = React.createContext<BaseContextType | undefined>(undefined)
export const allKeysWithInfo = { ...letters, ...numbers, ...symbols }

export type AllKeyTypes = keyof typeof allKeysWithInfo
export const BaseContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const keysList = Object.keys(allKeysWithInfo)

  const getKeyOfDay = (): string => {
    const now = new Date()
    const dayOfYear = Math.floor(
      (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000,
    )
    // Only cycle through letter keys for key of the day (more educational)
    const letterKeys = keysList.filter((k) => /^[a-zA-Z]$/.test(k))
    return letterKeys[dayOfYear % letterKeys.length]
  }

  const DEFAULT_LEARNED = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const loadLearnedKeys = (): string[] => {
    try {
      const saved = localStorage.getItem('vim-what-learned')
      return saved !== null ? JSON.parse(saved) : DEFAULT_LEARNED
    } catch {
      return DEFAULT_LEARNED
    }
  }

  const loadCustomMappings = (): Record<string, string> => {
    try {
      return JSON.parse(localStorage.getItem('vim-what-custom') ?? '{}')
    } catch {
      return {}
    }
  }

  const allKeys = Object.keys(allKeysWithInfo)

  const [layout, setLayout] = useState<LayoutTypes>(
    () => (localStorage.getItem('vim-what-layout') as LayoutTypes) ?? 'Qwerty',
  )
  const [selectedKey, setSelectedKey] = useState('')
  const [infoImage, setInfoImage] = useState('/about/all.png')
  const [lessonLevel, setLessonLevel] = useState<number>(() => {
    const saved = localStorage.getItem('vim-what-lesson')
    return saved !== null ? Number(saved) : 8
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [prefixMode, setPrefixMode] = useState<PrefixMode>('none')
  const [shiftLocked, setShiftLocked] = useState(false)
  const [customMappings, setCustomMappings] =
    useState<Record<string, string>>(loadCustomMappings)
  const [learnedKeys, setLearnedKeys] = useState<string[]>(loadLearnedKeys)
  const keyOfDay = getKeyOfDay()

  const toggleLearned = (key: string) => {
    const updated = learnedKeys.includes(key)
      ? learnedKeys.filter((k) => k !== key)
      : [...learnedKeys, key]
    setLearnedKeys(updated)
    localStorage.setItem('vim-what-learned', JSON.stringify(updated))
  }

  const handleLessonLevelChange = (event: SelectChangeEvent<number>) => {
    const level = Number(event.target.value)
    setLessonLevel(level)
    localStorage.setItem('vim-what-lesson', String(level))
    if (level === 8) {
      setInfoImage('/about/all.png')
    } else {
      setInfoImage(`/about/lesson_${level}.png`)
    }
    setSelectedKey('')
  }

  const setCustomMapping = (key: string, description: string) => {
    const updated = { ...customMappings, [key]: description }
    setCustomMappings(updated)
    localStorage.setItem('vim-what-custom', JSON.stringify(updated))
  }

  const deleteCustomMapping = (key: string) => {
    const updated = { ...customMappings }
    delete updated[key]
    setCustomMappings(updated)
    localStorage.setItem('vim-what-custom', JSON.stringify(updated))
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
        prefixMode,
        setPrefixMode,
        shiftLocked,
        setShiftLocked,
        customMappings,
        setCustomMapping,
        deleteCustomMapping,
        learnedKeys,
        toggleLearned,
        keyOfDay,
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
