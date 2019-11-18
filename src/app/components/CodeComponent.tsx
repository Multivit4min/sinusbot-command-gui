import { CodeInterface } from "./Abstract"

export interface CodeComponentConfig {
  displayCode?: (component: CodeComponent) => boolean
  renderCode: (component: CodeComponent) => string
}

export class CodeComponent implements CodeInterface {

  readonly hasConfig = false
  readonly hasCode = true
  private displayCodeCallback: (component: CodeComponent) => boolean
  private renderCodeCallback: (component: CodeComponent) => string

  constructor(config: CodeComponentConfig) {
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