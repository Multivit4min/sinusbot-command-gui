import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import { ConfigInterface, CodeInterface } from "./Abstract"

export interface TextComponentConfig {
  getValue: (component: TextComponent) => string
  onChange: (component: TextComponent, event: React.ChangeEvent<any>) => void
  isValid?: (component: TextComponent) => boolean
  displayCode?: (component: TextComponent) => boolean
  renderCode: (component: TextComponent) => string
  icon: JSX.Element
  label: string
  multiline?: boolean
}

export class TextComponent implements ConfigInterface, CodeInterface {

  readonly hasConfig = true
  readonly hasCode = true
  private valueCallback: (component: TextComponent) => string
  private changeCallback: (component: TextComponent, event: React.ChangeEvent<any>) => void
  private isValidCallback: (component: TextComponent) => boolean
  private displayCodeCallback: (component: TextComponent) => boolean
  private renderCodeCallback: (component: TextComponent) => string
  private icon: JSX.Element
  private label: string
  private multiline: boolean

  constructor(config: TextComponentConfig) {
    this.valueCallback = config.getValue
    this.changeCallback = config.onChange
    this.isValidCallback = config.isValid || (() => true)
    this.displayCodeCallback = config.displayCode || (() => true)
    this.renderCodeCallback = config.renderCode
    this.icon = config.icon
    this.label = config.label
    this.multiline = config.multiline || false
  }

  private onChange(event: React.ChangeEvent<any>) {
    return this.changeCallback(this, event)
  }

  getValue() {
    return this.valueCallback(this)
  }

  isValid() {
    return this.isValidCallback(this)
  }

  displayCode() {
    return this.displayCodeCallback(this)
  }

  renderCode() {
    return this.renderCodeCallback(this)
  }

  renderConfigField(key?: number) {
    return (
      <Grid key={key} container spacing={1} alignItems="flex-end">
        <Grid item>
          {this.icon}
        </Grid>
        <Grid item>
          <TextField
            label={this.label}
            value={this.getValue()}
            multiline={this.multiline}
            error={!this.isValid()}
            onChange={event => this.onChange(event)}
          />
        </Grid>
      </Grid>
    )
  }

}