import {combineReducers, legacy_createStore} from 'redux'
import {countReducer} from "./reduser";

export const rootReducer = combineReducers({
    countReducer: countReducer,
})

export const store = legacy_createStore(countReducer)

export type AppRootStateType = ReturnType<typeof countReducer>
