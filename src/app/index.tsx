import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { createStyles, withStyles, Theme } from "@material-ui/core"
import { AppState } from "./redux"
import { connect } from "react-redux"

import { fields } from "./fields"
import { CommandState } from "./redux/command/types"

const styles = ({ spacing }: Theme) => createStyles({
  content: {
    flexGrow: 1,
    padding: spacing(3),
    minWidth: 0,
    height: "100vh",
    overflow: "auto"
  },
  code: {
    display: "block",
    whiteSpace: "pre-wrap"
  },
  margin: {
    margin: spacing(1)
  }
})

interface Styles {
  classes: {
    content: string
    code: string
    margin: string
  }
}


class CommandBuilder extends Component<AppProps & Styles> {


  render() {
    const { classes, command } = this.props

    return (
      <Grid container className={classes.content}>
        <Grid item xs={4}>
          <Typography>Sinusbot Command Builder</Typography>

          <div className={classes.margin}>
            {fields.map(config => config.hasConfig ? config.renderConfigField() : null)}
          </div>

        </Grid>
        <Grid item xs={4} justify="center">
          <Typography variant="h5">CODE:</Typography>
          <pre className="code">
            {fields.map(field => field.hasCode && field.displayCode() ? field.renderCode() : "").join("")}
          </pre>
        </Grid>
        <Grid item xs={4} justify="center">
          <Typography variant="h5">HELP Command:</Typography>
          <pre className="code">
  {`
    <22:01:09> "TeamSpeakClient": !help
    <22:01:09> "Sinusbot": 3 Commands found:
    <22:01:09> "Sinusbot": 
    !help Displays this text
    !man Displays detailed help about a command if available
>>> !${command.name} ${command.help}
`}
        </pre>
          <Typography variant="h5">MAN Command:</Typography>
          <pre className="code">
  {`
<14:52:43> "TeamSpeakClient": !man ${command.name}
<14:52:43> "Sinusbot": 
Manual for command: !${command.name}
Usage: !${command.name}
${command.manual||command.help}
`}
        </pre>
        </Grid>
      </Grid>
    )
  }

}



interface AppProps {
  command: CommandState
}

const mapStateToProps = ({ command }: AppState): AppProps => ({
  command
})


export default connect(mapStateToProps)(withStyles(styles)(CommandBuilder))