import React from "react"
import { TextComponent } from "./components/TextComponent"
import { CodeComponent } from "./components/CodeComponent"
import { CheckBoxComponent } from "./components/CheckBoxComponent"
import { DynamicListComponent } from "./components/DynamicListComponent/"

import FeedbackIcon from "@material-ui/icons/Feedback"
import HelpIcon from "@material-ui/icons/Help"
import AssignmentIcon from "@material-ui/icons/Assignment"
import LockIcon from "@material-ui/icons/Lock"
import ReorderIcon from "@material-ui/icons/Reorder"

import { setName, setHelp, setManual, checkPermission } from "./redux/command/actions"
import { ArgumentType } from "./redux/command/types"
import { store } from "./redux"
import { StringArgument } from "./components/ArgumentComponent/StringArgument"
import { Argument } from "./components/ArgumentComponent/Argument"
import { NumberArgument } from "./components/ArgumentComponent/NumberArgument"

interface ArgumentCreator {
  create(parent: DynamicListComponent<any, any>): Argument<any>
}

type CommandComponent =
  TextComponent                   |
  CodeComponent                   |
  CheckBoxComponent               |
  DynamicListComponent<any, any>


export const fields: CommandComponent[] = [
  new TextComponent({
    getValue: () => store.getState().command.name,
    onChange: (field, event) => store.dispatch(setName(event.target.value)),
    renderCode: (field) => `commander.createCommand(${field.getValue()})\n`,
    icon: <FeedbackIcon />,
    label: "Command Name",
    isValid: field => !(/\s/).test(field.getValue()),
  }),
  new TextComponent({
    getValue: () => store.getState().command.help,
    onChange: (field, event) => store.dispatch(setHelp(event.target.value)),
    renderCode: (field) => `  .setHelp("${field.getValue()}")\n`,
    icon: <HelpIcon />,
    label: "Help Text",
    isValid: field => field.getValue().length > 0,
  }),
  new TextComponent({
    getValue: () => store.getState().command.manual,
    onChange: (field, event) => store.dispatch(setManual(event.target.value)),
    multiline: true,
    displayCode: field => field.getValue().length > 0, 
    renderCode: (field) => `${field.getValue().split("\n").map(m => `  .setManual("${m}")`).join("\n")}\n`,
    icon: <AssignmentIcon />,
    label: "Manual Text"
  }),
  new CheckBoxComponent({
    icon: <LockIcon />,
    label: "check permissions",
    displayCode: field => field.getValue(),
    getValue: () => store.getState().command.checkPerm,
    onChange: (field, event) => store.dispatch(checkPermission(event.target.checked)),
    renderCode: field => `  .checkPermissions(client => {
    //retrieves as first argument the requesting sinusbot client
    //return either true or false in order to allow the client to use this command
  })\n`
  }),
  new DynamicListComponent<ArgumentCreator, Argument<any>>({
    icon: <ReorderIcon />,
    label: "Add Argument",
    listItems: {
      "StringArgument": StringArgument,
      "NumberArgument": NumberArgument
    },
    onSelect: (list, arg) => {
      list.addElement(arg.create(list))
    }
  }),
  new CodeComponent({
    renderCode: () => `  .exec((client, args, reply) => {
    //your logic here
    //arguments:
    //  client   -> the client which issued this command
    //  args     -> all parsed arguments
    //  reply    -> a function which takes a string as parameter
    //              it responds to the source where the client has sent a command
${
      store.getState().command.argument.length > 0 ?
      `${store.getState().command.argument.map(arg => {
        return `    arg.${arg.name} //is a ${ArgumentType[arg.type]}`
      }).join("\n")}\n  )` : "  )"
    }`
  })
]