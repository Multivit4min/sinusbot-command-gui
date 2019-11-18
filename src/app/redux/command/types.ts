export enum COMMAND {
  RESET = "COMMAND/RESET",
  SETNAME = "COMMAND/SETNAME",
  SETHELP = "COMMAND/SETHELP",
  CHECKPERMISSION = "COMMAND/CHECKPERMISSION",
  SETMANUAL = "COMMAND/SETMANUAL"
}

export interface SetNameAction {
  type: COMMAND.SETNAME
  name: string
}

export interface SetHelpAction {
  type: typeof COMMAND.SETHELP
  help: string
}

export interface SetManualAction {
  type: typeof COMMAND.SETMANUAL
  manual: string
}

export interface CheckPermissionAction {
  type: typeof COMMAND.CHECKPERMISSION
  check: boolean
}

export interface ResetAction {
  type: typeof COMMAND.RESET
}

export type CommandActionTypes =
  SetNameAction            |
  SetHelpAction            |
  SetManualAction          |
  CheckPermissionAction    |
  ResetAction


export interface CommandState {
  name: string
  help: string
  manual: string
  checkPerm: boolean
}