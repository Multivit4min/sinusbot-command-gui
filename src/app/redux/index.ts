import { createStore, combineReducers } from "redux"
import { reducer as commandReducer } from "./command/reducers"

const rootReducer = combineReducers({
  command: commandReducer
})

export const store = createStore(rootReducer)

export type AppState = ReturnType<typeof rootReducer>