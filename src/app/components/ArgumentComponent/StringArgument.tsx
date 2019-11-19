import React from "react"
import { Argument } from "./Argument"
import { ConfigInterface, CodeInterface } from "../Abstract"
import { Typography } from "@material-ui/core"
import { ArgumentType, StringArgument as StringArg } from "../../redux/command/types"
import { store } from "../../redux"
import { addArgument } from "../../redux/command/actions"

export class StringArgument extends Argument<StringArg> implements ConfigInterface, CodeInterface {

  readonly hasConfig = true
  readonly hasCode = true

  constructor(id: number) {
    super(id, ArgumentType.STRING)
  }

  static create() {
    const id = store.getState().command.argId
    store.dispatch(addArgument({
      type: ArgumentType.STRING,
      uppercase: false,
      lowercase: false,
      ...Argument.initial(id)
    }))
    return new StringArgument(id)
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
    return this.getArgument().uppercase
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
    return `  .addArgument(arg => arg.string)`
  }

  renderConfigField() {
    return (
      <Typography>TODO StringArgument</Typography>
    )
  }
}