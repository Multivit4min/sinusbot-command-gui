import { TextfieldProps } from "../components/Textfield"

export enum EntryType {
  TEXT = "ENTRY/TEXT",
  CODE = "ENTRY/CODE"
}

export interface BaseEntry<T> {
  type: string
  hasConfig: boolean
  hasCode: boolean
}

export interface TextEntry extends BaseEntry<string> {
  type: typeof EntryType.TEXT
  icon: any
  label: string
  config: (props: TextfieldProps) => any
  onChange: (event: React.ChangeEvent<any>) => void
  multiline?: boolean
  error?: boolean
  displayCode?: (config: TextEntry) => boolean
  getValue: () => string
  code?: (config: TextEntry) => string
}

export interface CodeEntry extends BaseEntry<void> {
  type: typeof EntryType.CODE
  code?: (config: CodeEntry) => string
}

export type Config = 
  TextEntry |
  CodeEntry
