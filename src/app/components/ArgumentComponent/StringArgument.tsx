import React from "react"
import { Argument } from "./Argument"
import { ConfigInterface, CodeInterface } from "../Abstract"
import { ArgumentType, StringArgument as StringArg } from "../../redux/command/types"
import { store } from "../../redux"
import { addArgument } from "../../redux/command/actions"
import { DynamicListComponent } from "../DynamicListComponent"

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

export class StringArgument extends Argument<StringArg> implements ConfigInterface, CodeInterface {

  readonly hasConfig = true
  readonly hasCode = true

  constructor(id: number, parent: DynamicListComponent<any, any>) {
    super(id, ArgumentType.STRING, parent)
  }

  static create(parent: DynamicListComponent<any, any>) {
    const id = store.getState().command.argId
    store.dispatch(addArgument({
      type: ArgumentType.STRING,
      uppercase: false,
      lowercase: false,
      ...Argument.initial(id)
    }))
    return new StringArgument(id, parent)
  }
  
  getRegex() {
    return this.getArgument().regex
  }

  updateRegex(regex: RegExp) {
    return this.update({ regex })
  }
  
  getMaxLen() {
    return this.getArgument().maxlen
  }

  updateMaxLen(maxlen: number|undefined) {
    return this.update({ maxlen })
  }
  
  getMinLen() {
    return this.getArgument().minlen
  }

  updateMinLen(minlen: number|undefined) {
    return this.update({ minlen })
  }
  
  getWhitelist() {
    return this.getArgument().whitelist
  }

  updateWhitelist(whitelist: string[]|undefined) {
    return this.update({ whitelist })
  }
  
  getUpperCase() {
    return this.getArgument().uppercase
  }

  updateUpperCase(uppercase: boolean) {
    const args: Partial<StringArg> = { uppercase }
    if (uppercase) args.lowercase = false
    return this.update(args)
  }
  
  getLowerCase() {
    return this.getArgument().lowercase
  }

  updateLowerCase(lowercase: boolean) {
    const args: Partial<StringArg> = { lowercase }
    if (lowercase) args.uppercase = false
    return this.update(args)
  }

  displayCode() {
    return true
  }

  renderCode() {
    let code = `  .addArgument(arg => arg.string${this.renderBasicCode()}`
    if (this.getUpperCase()) code += ".toUpperCase()"
    if (this.getLowerCase()) code += ".toLowerCase()"
    return `${code})`
  }

  renderConfigField() {
    return (
      <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>String Argument (TODO)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {this.renderBasicConfig()}
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <ArrowUpwardIcon />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.getUpperCase()}
                      onChange={event => this.updateUpperCase(event.target.checked)}
                      color="primary"
                    />
                  }
                  label="To Uppercase"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <ArrowDownwardIcon />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.getLowerCase()}
                      onChange={event => this.updateLowerCase(event.target.checked)}
                      color="primary"
                    />
                  }
                  label="To Lowercase"
                />
              </Grid>
            </Grid>
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button size="small" color="secondary" onClick={() => this.removeArgument()} >Delete</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
      </>
    )
  }
}