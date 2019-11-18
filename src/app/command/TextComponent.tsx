import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

import { CommandComponent, ConfigInterface, CodeInterface } from "./Abstract"

export interface TextComponentConfig<T> {
  hasCode?: boolean
  getValue: (component: TextComponent<T>) => T
  onChange: (component: TextComponent<T>, event: React.ChangeEvent<any>) => void
  isValid?: (component: TextComponent<T>) => boolean
  displayCode?: (component: TextComponent<T>) => boolean
  renderCode: (component: TextComponent<T>) => string
  icon: JSX.Element
  label: string
  multiline?: boolean
}

export class TextComponent<T> extends CommandComponent<{}> implements ConfigInterface<T>, CodeInterface {

  readonly hasConfig: boolean = true
  readonly hasCode: boolean
  private valueCallback: (component: TextComponent<T>) => T
  private changeCallback: (component: TextComponent<T>, event: React.ChangeEvent<any>) => void
  private isValidCallback: (component: TextComponent<T>) => boolean
  private displayCodeCallback: (component: TextComponent<T>) => boolean
  private renderCodeCallback: (component: TextComponent<T>) => string
  private icon: JSX.Element
  private label: string
  private multiline: boolean

  constructor(config: TextComponentConfig<T>, props: Readonly<{}> = {}) {
    super(props)
    this.hasCode = config.hasCode || false
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

  getValue(): T {
    return this.valueCallback(this)
  }

  getLabel() {
    return this.label
  }

  getIcon() {
    return this.icon
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

  renderConfigField() {
    return (
      <Grid container spacing={1} alignItems="flex-end">
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