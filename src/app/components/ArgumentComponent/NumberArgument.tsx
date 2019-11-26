import React from "react"
import { Argument } from "./Argument"
import { ConfigInterface, CodeInterface } from "../Abstract"
import { ArgumentType, NumberArgument as NumberArg } from "../../redux/command/types"
import { store } from "../../redux"
import { addArgument } from "../../redux/command/actions"
import { DynamicListComponent } from "../DynamicListComponent"

import ThumpDownIcon from "@material-ui/icons/ThumbDown"
import ThumpUpIcon from "@material-ui/icons/ThumbUp"
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined"
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

export class NumberArgument extends Argument<NumberArg> implements ConfigInterface, CodeInterface {

  readonly hasConfig = true
  readonly hasCode = true

  constructor(id: number, parent: DynamicListComponent<any, any>) {
    super(id, ArgumentType.NUMBER, parent)
  }

  static create(parent: DynamicListComponent<any, any>) {
    const id = store.getState().command.argId
    store.dispatch(addArgument({
      type: ArgumentType.NUMBER,
      int: false,
      forcePositive: false,
      forceNegative: false,
      ...Argument.initial(id)
    }))
    return new NumberArgument(id, parent)
  }
  
  getInt() {
    return this.getArgument().int
  }

  updateInt(int: boolean) {
    return this.update({ int })
  }
  
  getForcePositive() {
    return this.getArgument().forcePositive
  }

  updateForcePositive(forcePositive: boolean) {
    const args: Partial<NumberArg> = { forcePositive }
    if (forcePositive) args.forceNegative = false
    return this.update(args)
  }
  
  getForceNegative() {
    return this.getArgument().forceNegative
  }

  updateForceNegative(forceNegative: boolean) {
    const args: Partial<NumberArg> = { forceNegative }
    if (forceNegative) args.forcePositive = false
    return this.update(args)
  }

  displayCode() {
    return true
  }

  renderCode() {
    let code = `  .addArgument(arg => arg.number${this.renderBasicCode()}`
    if (this.getInt()) code += ".integer()"
    if (this.getForcePositive()) code += ".forcePositive()"
    if (this.getForceNegative()) code += ".forceNegative()"
    return `${code})`
  }

  renderConfigField() {
    return (
      <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Number Argument</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {this.renderBasicConfig()}
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <FlagOutlinedIcon />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.getInt()}
                      onChange={event => this.updateInt(event.target.checked)}
                      color="primary"
                    />
                  }
                  label="want an integer number (whole number)"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <ThumpUpIcon />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.getForcePositive()}
                      onChange={event => this.updateForcePositive(event.target.checked)}
                      color="primary"
                    />
                  }
                  label="expect positive number"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <ThumpDownIcon />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.getForceNegative()}
                      onChange={event => this.updateForceNegative(event.target.checked)}
                      color="primary"
                    />
                  }
                  label="expect negative number"
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