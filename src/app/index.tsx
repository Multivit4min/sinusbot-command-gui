import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, withStyles, Theme } from "@material-ui/core"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import { AppState } from "./redux"
import { connect } from "react-redux"

import { fields } from "./fields"
import { CommandState } from "./redux/command/types"
import ManPreview from "./preview/man"
import HelpPreview from "./preview/help"

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

  copyCode = () => {
    const el = document.createElement("textarea")
    el.value = this.renderCode()
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  renderCode = () => {
    return fields.map(field => field.hasCode && field.displayCode() ? field.renderCode() : "").join("")
  }

  render() {
    const { classes, command } = this.props

    return (
      <Grid container className={classes.content}>
        <Grid item sm={12} md={6} lg={3}>
          <Typography>Sinusbot Command Builder</Typography>

          <div className={classes.margin}>
            {fields.map((config, i) => config.hasConfig ? config.renderConfigField(i) : null)}
          </div>

        </Grid>
        <Grid item sm={12} md={6} lg={5}>
          <Typography variant="h5"><IconButton onClick={this.copyCode}><FileCopyIcon /></IconButton> CODE:</Typography>
          
          <pre className="code">
            {this.renderCode()}
          </pre>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <HelpPreview command={command} />
          <ManPreview command={command} />
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