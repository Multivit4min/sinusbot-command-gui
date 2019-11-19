import React from "react"
import { updateArgument } from "../../redux/command/actions"
import { store } from "../../redux"
import { Arguments, ArgumentType } from "../../redux/command/types"
import { CommandType } from "../Abstract"
import { Typography } from "@material-ui/core"

export abstract class Argument<T extends Arguments> implements CommandType {
  readonly id: number
  readonly type: ArgumentType

  readonly hasCode = true
  readonly hasConfig = true

  abstract renderConfigField(key?: number): JSX.Element
  abstract renderCode(): string
  abstract displayCode(): boolean

  constructor(id: number, type: ArgumentType) {
    this.id = id
    this.type = type
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

  renderBasicConfig() {
    return (<Typography>Todo Abstract Config</Typography>)
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

  renderBasicCode() {
    const initial = Argument.initial(0)
    let code = ""
    if (this.getName() !== initial.name) {
      code += `.setName("${this.getName()}"${this.getDisplay() !== initial.display ? `, "${this.getDisplay()}"` : ""})`
    }
    return code
  }

}