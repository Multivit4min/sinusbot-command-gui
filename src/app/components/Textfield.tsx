import React, { Component, SyntheticEvent } from "react"
import { SvgIconComponent } from "@material-ui/icons"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"

export type TextfieldProps = {
  value: string
  icon: SvgIconComponent
  label: string
  onChange: (event: SyntheticEvent) => void
  multiline?: boolean
  error?: boolean
}

export class Textfield extends Component<TextfieldProps> {
  
  render() {
    const { icon, label, value, multiline, error, onChange } = this.props

    return (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <TextField
            label={label}
            value={value}
            multiline={multiline}
            error={error}
            onChange={event => onChange(event)}
          />
        </Grid>
      </Grid>
    )
  }
}

