import { useEffect } from 'react'
import { allKeysWithInfo } from '../contexts/BaseContext'

export const useKeyboardNav = (
  setSelectedKey: (key: string) => void,
  selectedKey: string,
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return
      const key = e.key
      if (key in allKeysWithInfo) {
        e.preventDefault()
        setSelectedKey(key)
      }
      if (key === 'Escape') {
        e.preventDefault()
        if (selectedKey) {
          setSelectedKey('')
        } else {
          window.close()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setSelectedKey, selectedKey])
}
