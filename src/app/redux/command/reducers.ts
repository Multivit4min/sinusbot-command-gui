import { COMMAND, CommandActionTypes, CommandState } from "./types"

const COMMAND_INITIAL: CommandState = {
  name: "ping",
  help: "responds with pong!",
  manual: "manual text"
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

    default:
      return state
  }
}