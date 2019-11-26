import React, { Component } from "react"
import { CommandState } from "../redux/command/types"
import Typography from "@material-ui/core/Typography"


interface IProps {
  command: CommandState
}


export default class HelpPreview extends Component<IProps> {

  getHelp() {
    const { command } = this.props
    return `${command.prefix}${command.name} ${command.help}`
  }

  render() {
    return (
      <>
      <Typography variant="h5">HELP Command:</Typography>
      <pre className="code">
        {`
        <22:01:09> "TeamSpeakClient": !help
        <22:01:09> "Sinusbot": 3 Commands found:
        <22:01:09> "Sinusbot": 
        !help Displays this text
        !man Displays detailed help about a command if available
    >>> ${this.getHelp()}
        `}
    </pre>
      </>
    )
  }
}