import { COMMAND, CommandActionTypes, Arguments } from "./types"

export function reset() {
  return {
    type: COMMAND.RESET
  }
}

export function setName(name: string): CommandActionTypes {
  return {
    type: COMMAND.SETNAME, name
  }
}

export function setHelp(help: string): CommandActionTypes {
  return {
    type: COMMAND.SETHELP, help
  }
}

export function checkPermission(check: boolean): CommandActionTypes {
  return {
    type: COMMAND.CHECKPERMISSION, check
  }
}

export function setManual(manual: string): CommandActionTypes {
  return {
    type: COMMAND.SETMANUAL, manual
  }
}

export function addArgument(argument: Arguments): CommandActionTypes {
  return {
    type: COMMAND.ADDARGUMENT, argument
  }
}

export function deleteArgument(id: number): CommandActionTypes {
  return {
    type: COMMAND.DELETEARGUMENT, id
  }
}

export function updateArgument(id: number, argument: Partial<Arguments>): CommandActionTypes {
  return {
    type: COMMAND.UPDATEARGUMENT, id, argument
  }
}