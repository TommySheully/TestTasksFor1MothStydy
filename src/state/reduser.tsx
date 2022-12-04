import React from "react";


export type stateType = {
    count: number,
    maxCount: number
    minCount: number
}

export type actionType = incACType | resACType | startACType | maxACType | setACType;

export type incACType = ReturnType<typeof incAC>
export type resACType = ReturnType<typeof resAC>
export type startACType = ReturnType<typeof startAC>
export type maxACType = ReturnType<typeof maxAC>
export type setACType = ReturnType<typeof setAC>


const initialState: stateType = {
    count: 0,
    maxCount: 5,
    minCount: 0
}

export const countReducer = (State = initialState, action: actionType): stateType => {
    switch (action.type) {
        case 'inc': {
            return {...State, count: State.count + 1}
        }
        case 'res': {
            return {...State, count: State.count = State.minCount}
        }
        case 'start': {
            return {...State, minCount: action.minCount}
        }
        case 'max': {
            return {...State, maxCount: action.maxValue}
        }
        case 'set': {
            return {...State, count: State.minCount}
        }
        default:
            return {...State}
    }
}

export const incAC = () => ({type: 'inc'} as const)
export const resAC = () => ({type: 'res'} as const)
export const startAC = (newCount: number) => ({
    type: 'start',
    minCount: newCount
} as const)
export const maxAC = (newCount: number) => {
    return {
        type: 'max',
        maxValue: newCount
    } as const
}
export const setAC = () => {
    return {
        type: 'set',
    } as const
}