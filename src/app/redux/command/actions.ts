import { COMMAND, CommandActionTypes } from "./types"

export function reset() {
  return {
    type: COMMAND.RESET
  }
}

export function setName(name: string): CommandActionTypes {
  return {
    type: COMMAND.SETNAME,
    name
  }
}

export function setHelp(help: string): CommandActionTypes {
  return {
    type: COMMAND.SETHELP,
    help
  }
}

export function checkPermission(check: boolean): CommandActionTypes {
  return {
    type: COMMAND.CHECKPERMISSION,
    check
  }
}

export function setManual(manual: string): CommandActionTypes {
  return {
    type: COMMAND.SETMANUAL,
    manual
  }
}