export enum COMMAND {
  RESET = "COMMAND/RESET",
  SETNAME = "COMMAND/SETNAME",
  SETHELP = "COMMAND/SETHELP",
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

export interface ResetAction {
  type: typeof COMMAND.RESET
}

export type CommandActionTypes =
  SetNameAction   |
  SetHelpAction   |
  SetManualAction |
  ResetAction


export interface CommandState {
  name: string
  help: string
  manual: string
}