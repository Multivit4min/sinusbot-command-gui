import { CommandComponent, CodeInterface } from "./Abstract"

export interface CodeComponentConfig {
  displayCode?: (component: CodeComponent) => boolean
  renderCode: (component: CodeComponent) => string
}

export class CodeComponent extends CommandComponent<{}> implements CodeInterface {

  readonly hasConfig: boolean = false
  readonly hasCode: boolean = true
  private displayCodeCallback: (component: CodeComponent) => boolean
  private renderCodeCallback: (component: CodeComponent) => string

  constructor(config: CodeComponentConfig, props: Readonly<{}> = {}) {
    super(props)
    this.displayCodeCallback = config.displayCode || (() => true)
    this.renderCodeCallback = config.renderCode
  }

  displayCode() {
    return this.displayCodeCallback(this)
  }

  renderCode() {
    return this.renderCodeCallback(this)
  }

}