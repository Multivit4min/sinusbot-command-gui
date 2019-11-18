import { Component } from "react"


export abstract class CommandComponent<T> extends Component<T> {

  abstract readonly hasConfig: boolean
  abstract readonly hasCode: boolean

}

export interface ConfigInterface {
  readonly hasConfig: true
  getValue(): any
  renderConfigField(): JSX.Element
}

export interface CodeInterface {
  readonly hasCode: true
  renderCode(): string
  displayCode(): boolean
}