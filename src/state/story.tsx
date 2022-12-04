import {combineReducers, legacy_createStore} from 'redux'
import {countReducer} from "./reduser";

export const rootReducer = combineReducers({
    countReducer: countReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
