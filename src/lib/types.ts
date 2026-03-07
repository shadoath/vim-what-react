import type { KeyType } from '../components/Key'

export type KeyInfoType = {
  title: string
  action: KeyType
  hasDot?: boolean
  hasBorder?: boolean
  vimHelp: string
  plugins?: string
  text: string
  examples?: string[]
  secondaryText?: string
  shortText?: string
  numberIndicator?: string | string[]
}
