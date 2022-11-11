import React, {useEffect, useState} from 'react';
import './App.css';
import {Body} from "./components/body";
import BodySetting from "./components/BodySetting/BodySetting";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

export type stateType = {
    count: number,
    maxCount: number
    minCount: number
}

export type actionType = incACType | resACType | startACType | maxACType;

export type incACType = ReturnType<typeof incAC>
export type resACType = ReturnType<typeof resAC>
export type startACType = ReturnType<typeof startAC>
export type maxACType = ReturnType<typeof maxAC>

export const incAC = () => {
    return {type: 'inc'} as const
}

export const resAC = () => {
    return {type: 'res'} as const
}
export const startAC = (newCount: number) => {
    return {
        type: 'start',
        startValue: newCount
    } as const
}

export const maxAC = (newCount: number) => {
    return {
        type: 'max',
        maxValue: newCount
    } as const
}

function App() {

    let [state, setState] = useState<stateType>({
        count: 0,
        maxCount: 5,
        minCount: 0
    })


    useEffect(() => {
        let valueAsStr = localStorage.getItem('titleMax')
        let value2AsStr = localStorage.getItem('titleMin')
        if (valueAsStr) {
            setState({...state, maxCount: JSON.parse(valueAsStr)})
        } else if (value2AsStr ) {
            setState({...state, minCount: JSON.parse(value2AsStr)})
        }
    }, [])


    const dispatch = (action: actionType) => {
        switch (action.type) {
            case 'inc': {
                return setState({...state, count: state.count = state.count + 1})
            }
            case 'res': {
                return setState({...state, count: state.count = 0})
            }
            case 'start': {
                return setState({...state, minCount: state.minCount = action.startValue})
            }
            case 'max': {
                return setState({...state, maxCount: state.maxCount = action.maxValue})
            }
        }
    }

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to={'/Page'}/>}/>
                    <Route path='/Page' element={<Body State={state} dispatch={dispatch}/>}/>
                    <Route path='/Setting' element={<BodySetting State={state} dispatch={dispatch}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;