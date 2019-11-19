export enum COMMAND {
  RESET = "COMMAND/RESET",
  SETNAME = "COMMAND/SETNAME",
  SETHELP = "COMMAND/SETHELP",
  CHECKPERMISSION = "COMMAND/CHECKPERMISSION",
  ADDARGUMENT = "COMMAND/ADDARGUMENT",
  DELETEARGUMENT = "COMMAND/DELETEARGUMENT",
  UPDATEARGUMENT = "COMMAND/UPDATEARGUMENT",
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

export interface AddArgumentAction {
  type: typeof COMMAND.ADDARGUMENT
  argument: Arguments
}

export interface DeleteArgumentAction {
  type: typeof COMMAND.DELETEARGUMENT
  id: number
}

export interface UpdateArgumentAction {
  type: typeof COMMAND.UPDATEARGUMENT
  id: number
  argument: Partial<Arguments>
}

export interface ResetAction {
  type: typeof COMMAND.RESET
}

export type CommandActionTypes =
  SetNameAction              |
  SetHelpAction              |
  SetManualAction            |
  CheckPermissionAction      |
  AddArgumentAction          |
  DeleteArgumentAction       |
  UpdateArgumentAction       |
  ResetAction

/** Arguments */
export type Arguments = 
  StringArgument             |
  NumberArgument             |
  ClientArgument             |
  RestArgument

export enum ArgumentType {
  STRING,
  NUMBER,
  CLIENT,
  REST
}

export interface Argument {
  id: number
  type: ArgumentType
  optional: boolean
  name: string
  display: string
  displayDefault: boolean
  default: any
}

export interface StringArgument extends Argument {
  type: typeof ArgumentType.STRING
  regex?: RegExp
  maxlen?: number
  minlen?: number
  whitelist?: string[]
  uppercase: boolean
  lowercase: boolean
}

export interface NumberArgument extends Argument {
  type: typeof ArgumentType.NUMBER
  min?: number
  max?: number
  int: boolean
  forcePositive: boolean
  forceNegative: boolean
}

export interface ClientArgument extends Argument {
  type: typeof ArgumentType.CLIENT
}

export interface RestArgument extends Omit<StringArgument, "type"> {
  type: typeof ArgumentType.REST
}

/** Store State */
export interface CommandState {
  argId: number
  name: string
  help: string
  manual: string
  checkPerm: boolean
  argument: Arguments[]
}