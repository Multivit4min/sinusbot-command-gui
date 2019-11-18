import React from "react"
import { TextComponent } from "./command/TextComponent"
import { CodeComponent } from "./command/CodeComponent"

import FeedbackIcon from "@material-ui/icons/Feedback"
import HelpIcon from "@material-ui/icons/Help"
import AssignmentIcon from "@material-ui/icons/Assignment"

import { setName, setHelp, setManual } from "./redux/command/actions"
import { store } from "./redux"

type CommandComponent = TextComponent<any> | CodeComponent


export const fields: CommandComponent[] = [
  new TextComponent<string>({
    hasCode: true,
    getValue: () => store.getState().command.name,
    onChange: (field, event) => store.dispatch(setName(event.target.value)),
    renderCode: (field) => `commander.createCommand(${field.getValue()})\n`,
    icon: <FeedbackIcon />,
    label: "Command Name",
    isValid: field => !(/\s/).test(field.getValue()),
  }),
  new TextComponent<string>({
    hasCode: true,
    getValue: () => store.getState().command.help,
    onChange: (field, event) => store.dispatch(setHelp(event.target.value)),
    renderCode: (field) => `  .setHelp("${field.getValue()}"))\n`,
    icon: <HelpIcon />,
    label: "Help Text",
    isValid: field => field.getValue().length > 0,
  }),
  new TextComponent<string>({
    hasCode: true,
    getValue: () => store.getState().command.manual,
    onChange: (field, event) => store.dispatch(setManual(event.target.value)),
    multiline: true,
    displayCode: field => field.getValue().length > 0, 
    renderCode: (field) => `${field.getValue().split("\n").map(m => `  .setManual("${m}")`).join("\n")}\n`,
    icon: <AssignmentIcon />,
    label: "Manual Text"
  }),
  new CodeComponent({
    renderCode: () => `  .exec((client, args, reply) => {
    //your logic here
  })`
  })
]