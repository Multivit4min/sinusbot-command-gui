import React, { Component, SyntheticEvent } from "react"
import { SvgIconComponent } from "@material-ui/icons"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { render } from "react-dom"

type TextFieldProps = {
  value: boolean
  icon: SvgIconComponent
  label: string
  onChange: (event: SyntheticEvent) => void
  error?: boolean
}

export default class CheckBox extends Component<TextFieldProps> {

  constructor(props: TextFieldProps) {
    super(props)
  }
  
  render() {
    return (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          {this.props.icon}
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.value}
                onChange={event => this.props.onChange(event)}
                color="primary"
              />
            }
            label={this.props.label}
          />
        </Grid>
      </Grid>
    )
  }
 } 