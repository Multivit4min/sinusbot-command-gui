import React from "react"
import FeedbackIcon from "@material-ui/icons/Feedback"
import HelpIcon from "@material-ui/icons/Help"
import AssignmentIcon from "@material-ui/icons/Assignment"
import LockIcon from "@material-ui/icons/Lock"
import { Textfield } from "../components/Textfield"

import { Config, EntryType } from "./types"

import { setName, setHelp, setManual } from "../redux/command/actions"
import { store } from "../redux"
import { CommandState } from "../redux/command/types"


export const config: Config[] = [{
  type: EntryType.TEXT,
  label: "Command Name",
  hasConfig: true,
  hasCode: true,
  getValue: () => store.getState().command.name,
  config: props => <Textfield {...props} />,
  icon: <FeedbackIcon />,
  onChange: (ev) => store.dispatch(setName(ev.target.value)),
  error: ({ getValue }) => (/\s/).test(getValue()),
  code: ({ getValue }) => `commander.createCommand(${getValue()})\n`
}, {
  type: EntryType.TEXT,
  label: "Help Text",
  hasConfig: true,
  hasCode: true,
  getValue: () => store.getState().command.help,
  config: props => <Textfield {...props} />,
  icon: <HelpIcon />,
  onChange: (ev) => store.dispatch(setHelp(ev.target.value)),
  code: ({ getValue }) => `  .setHelp("${getValue()}"))\n`
}, {
  type: EntryType.TEXT,
  label: "Manual Text",
  hasConfig: true,
  hasCode: true,
  multiline: true,
  getValue: () => store.getState().command.manual,
  config: props => <Textfield {...props} />,
  icon: <AssignmentIcon />,
  onChange: (ev) => store.dispatch(setManual(ev.target.value)),
  code: ({ getValue }) => `${getValue().split("\n").map(m => `  .setManual("${m}")`).join("\n")}\n`
}, {
  type: EntryType.CODE,
  hasConfig: false,
  hasCode: true,
  code: () => `  .exec((client, args, reply) => {
    //your logic here
  })`
}]