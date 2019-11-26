import React, { Component } from "react"
import { CommandState } from "../redux/command/types"
import Typography from "@material-ui/core/Typography"


interface IProps {
  command: CommandState
}


export default class ManPreview extends Component<IProps> {

  argumentUsage() {
    const { command } = this.props
    return command.argument.map(arg => {
      let res = `${arg.display === "" ? arg.name : arg.display}`
      if (arg.displayDefault && arg.default !== undefined)
        res += `=${arg.default}` 
      res = arg.optional ? `[${res}]` : `<${res}>`
      return res
    }).join("")
  }

  getUsage() {
    const { command } = this.props
    return `${command.prefix}${command.name} ${this.argumentUsage()}`
  }

  render() {

    const { command } = this.props

    return (
      <>
      <Typography variant="h5">MAN Command:</Typography>
      <pre className="code">
        {`
        <14:52:43> "TeamSpeakClient": !man ${command.name}
        <14:52:43> "Sinusbot": 
        Manual for command: !${command.name}
        Usage: ${this.getUsage()}
        ${command.manual||command.help}
        `}
        </pre>
      </>
    )
  }
}