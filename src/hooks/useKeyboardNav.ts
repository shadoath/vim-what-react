import { useEffect } from 'react'
import { allKeysWithInfo } from '../contexts/BaseContext'

export const useKeyboardNav = (
  setSelectedKey: (key: string) => void,
  setShiftHeld: (held: boolean) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore modifier-only keypresses and keypresses in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      if (e.key === 'Shift') { setShiftHeld(true); return }

      const key = e.key
      if (key in allKeysWithInfo) {
        e.preventDefault()
        setSelectedKey(key)
      }
      if (key === 'Escape') {
        e.preventDefault()
        setSelectedKey('')
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') setShiftHeld(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [setSelectedKey, setShiftHeld])
}
