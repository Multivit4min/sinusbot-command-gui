import React, { Component } from "react"

import { withStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"

const styles = ({ spacing }: Theme) => createStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: spacing(1),
    minWidth: 120,
  },
})

interface IState {
  open: boolean
  selected: string
}

interface IProps {
  classes: Record<string, string>
  icon: JSX.Element
  label: string
  listItems: string[]
  select: (item: string) => void
}

class ListSelect extends Component<IProps, IState> {

  constructor(props: Readonly<IProps>) {
    super(props)
    this.state = {
      selected: "",
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = (submit: boolean = false) => () => {
    const { selected } = this.state
    const { select, listItems } = this.props
    if (submit && listItems.includes(selected)) select(selected)
    this.setState({ open: false, selected: "" })
  }

  handleChange = (event: React.ChangeEvent<any>) => {
    this.setState({ selected: event.target.value || "" })
  }

  render() {
    const { open, selected } = this.state
    const { classes, label, icon, listItems } = this.props

    return (
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          {icon}
        </Grid>
        <Grid item>
          <Button onClick={this.handleOpen}>{label}</Button>
          <Dialog open={open} onClose={this.handleClose(false)}>
            <DialogContent>
              <form className={classes.container}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="demo-dialog-native">{label}</InputLabel>
                  <Select
                    native
                    value={selected}
                    onChange={this.handleChange}
                    input={<Input id="demo-dialog-native" />}
                  >
                    <option value="" />
                    {listItems.map((item, i) => <option key={i} value={item}>{item}</option>)}
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose(true)} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(ListSelect)