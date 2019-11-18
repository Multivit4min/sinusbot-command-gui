import { Component } from "react"


export abstract class CommandComponent<T> extends Component<T> {

  abstract readonly hasConfig: boolean
  abstract readonly hasCode: boolean

}

export interface ConfigInterface<T> {
  getIcon(): any
  getLabel(): string
  getValue(): T
  isValid(): boolean
  renderConfigField(): JSX.Element
}

export interface CodeInterface {
  renderCode(): string
  displayCode(): boolean
}