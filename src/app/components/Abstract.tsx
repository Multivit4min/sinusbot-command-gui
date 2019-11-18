export interface CommandComponent {
  readonly hasConfig: boolean
  readonly hasCode: boolean
}

export interface ConfigInterface extends CommandComponent {
  readonly hasConfig: true
  renderConfigField(key?: number): JSX.Element
}

export interface CodeInterface extends CommandComponent {
  readonly hasCode: true
  renderCode(): string
  displayCode(): boolean
}