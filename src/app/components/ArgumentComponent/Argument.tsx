import React from "react"
import { updateArgument, deleteArgument } from "../../redux/command/actions"
import { store } from "../../redux"
import { Arguments, ArgumentType } from "../../redux/command/types"
import { CommandType } from "../Abstract"
import LabelIcon from "@material-ui/icons/Label"
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { DynamicListComponent } from "../DynamicListComponent"

export abstract class Argument<T extends Arguments> implements CommandType {
  readonly id: number
  readonly type: ArgumentType
  readonly parent: DynamicListComponent<any, any>

  readonly hasCode = true
  readonly hasConfig = true

  abstract renderConfigField(key?: number): JSX.Element
  abstract renderCode(): string
  abstract displayCode(): boolean

  constructor(id: number, type: ArgumentType, parent: DynamicListComponent<any, any>) {
    this.id = id
    this.type = type
    this.parent = parent
  }

  static initial(id: number) {
    return {
      id,
      name: "_",
      optional: false,
      display: "",
      displayDefault: false,
      default: undefined
    }
  }

  protected update(arg: Partial<Arguments>) {
    return store.dispatch(updateArgument(this.id, arg))
  }

  protected getArgument(): T {
    const arg = store.getState().command.argument.find(arg => (
      arg.id === this.id && arg.type === this.type
    )) as T|undefined
    if (!arg) throw new Error(`argument with id ${this.id} not found`)
    return arg
  }

  removeArgument() {
    this.parent.removeElement(this)
    return store.dispatch(deleteArgument(this.id))
  }

  getType() {
    return this.getArgument().type
  }

  updateName(name: string) {
    return this.update({ name })
  }

  getName() {
    return this.getArgument().name
  }

  updateOptional(optional: boolean) {
    return this.update({ optional })
  }

  getOptional() {
    return this.getArgument().optional
  }

  updateDisplay(display: string) {
    return this.update({ display })
  }

  getDisplay() {
    return this.getArgument().display
  }

  updateDisplayDefault(displayDefault: boolean) {
    return this.update({ displayDefault })
  }

  getDisplayDefault() {
    return this.getArgument().displayDefault
  }

  updateDefault(def: any) {
    return this.update({ default: def })
  }

  getDefault() {
    return this.getArgument().default
  }

  renderBasicConfig() {
    return (
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <LabelIcon />
          </Grid>
          <Grid item>
            <TextField
              label={"name"}
              value={this.getName()}
              onChange={event => this.updateName(event.target.value)}
              error={(/\s/).test(this.getName())}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <PlaylistAddIcon />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.getOptional()}
                  onChange={event => this.updateOptional(event.target.checked)}
                  color="primary"
                />
              }
              label="is optional?"
            />
          </Grid>
        </Grid>
      </div>
    )
  }

  renderBasicCode() {
    const initial = Argument.initial(0)
    let code = ""
    if (this.getName() !== initial.name) {
      code += `.setName("${this.getName()}"${this.getDisplay() !== initial.display ? `, "${this.getDisplay()}"` : ""})`
    }
    if (this.getOptional() !== initial.optional) {
      code += `.isOptional()`
    }
    return code
  }

}