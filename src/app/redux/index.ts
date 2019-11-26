import { createStore, combineReducers } from "redux"
import { reducer as commandReducer } from "./command/reducers"

const rootReducer = combineReducers({
  command: commandReducer
})

export const store = createStore(
  rootReducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export type AppState = ReturnType<typeof rootReducer>