import React from "react"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import { CommandComponent, ConfigInterface, CodeInterface } from "./Abstract"

export interface CheckBoxComponentConfig {
  getValue: (component: CheckBoxComponent) => boolean
  onChange: (component: CheckBoxComponent, event: React.ChangeEvent<any>) => void
  displayCode?: (component: CheckBoxComponent) => boolean
  renderCode: (component: CheckBoxComponent) => string
  icon: JSX.Element
  label: string
}

export class CheckBoxComponent extends CommandComponent<{}> implements ConfigInterface, CodeInterface {

  readonly hasConfig = true
  readonly hasCode = true
  private valueCallback: (component: CheckBoxComponent) => boolean
  private changeCallback: (component: CheckBoxComponent, event: React.ChangeEvent<any>) => void
  private displayCodeCallback: (component: CheckBoxComponent) => boolean
  private renderCodeCallback: (component: CheckBoxComponent) => string
  private icon: JSX.Element
  private label: string

  constructor(config: CheckBoxComponentConfig, props: Readonly<{}> = {}) {
    super(props)
    this.valueCallback = config.getValue
    this.changeCallback = config.onChange
    this.displayCodeCallback = config.displayCode || (() => true)
    this.renderCodeCallback = config.renderCode
    this.icon = config.icon
    this.label = config.label
  }

  private onChange(event: React.ChangeEvent<any>) {
    return this.changeCallback(this, event)
  }

  getValue() {
    return this.valueCallback(this)
  }

  getLabel() {
    return this.label
  }

  getIcon() {
    return this.icon
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
          <FormControlLabel
            control={
              <Checkbox
                checked={this.getValue()}
                onChange={event => this.onChange(event)}
                color="primary"
              />
            }
            label={this.label}
          />
        </Grid>
      </Grid>
    )
  }

}