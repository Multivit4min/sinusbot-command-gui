import { COMMAND, CommandActionTypes, CommandState } from "./types"

const COMMAND_INITIAL: CommandState = {
  argId: 0,
  name: "ping",
  help: "responds with pong!",
  manual: "manual text",
  checkPerm: false,
  argument: [],
  prefix: "!"
}

export function reducer(
  state = {...COMMAND_INITIAL},
  action: CommandActionTypes
): CommandState {
  switch (action.type) {

    case COMMAND.RESET:
      return { ...COMMAND_INITIAL }

    case COMMAND.SETNAME:
      return {
        ...state,
        name: action.name
      }

    case COMMAND.SETHELP:
      return {
        ...state,
        help: action.help
      }

    case COMMAND.SETMANUAL:
      return {
        ...state,
        manual: action.manual
      }

    case COMMAND.CHECKPERMISSION:
      return {
        ...state,
        checkPerm: action.check
      }

    case COMMAND.ADDARGUMENT:
      return {
        ...state,
        argId: state.argId + 1,
        argument: [...state.argument, { ...action.argument }]
      }

    case COMMAND.DELETEARGUMENT:
      return {
        ...state,
        argument: state.argument.filter(arg => arg.id !== action.id)
      }

    case COMMAND.UPDATEARGUMENT:
      return {
        ...state,
        //@ts-ignore
        argument: state.argument.map(arg => {
          if (arg.id !== action.id) return arg
          return { ...arg, ...action.argument }
        })
      } 

    case COMMAND.UPDATEPREFIX:
      return {
        ...state,
        prefix: action.prefix === "" ? COMMAND_INITIAL.prefix : action.prefix
      }                               

    default:
      return state
  }
}