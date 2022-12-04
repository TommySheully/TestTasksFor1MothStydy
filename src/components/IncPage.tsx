import React, {useCallback} from 'react';
import {actionType, incAC, resAC, stateType} from "../state/reduser";
import './Body.css';
import {NavLink} from "react-router-dom";

export type propsType = {
    State: stateType
    dispatch: (action: actionType) => void
}

const IncPage = React.memo((props: propsType) => {
    const countAddHandler = useCallback(() => props.dispatch(incAC()), [props.dispatch])
    const countResetHandler = useCallback(() => props.dispatch(resAC()), [props.dispatch])


    return (
        <div className='Body'>
            <div className='BodyScreen'>
                <p className={props.State.count === props.State.maxCount ? 'BodyText' : ''}>{props.State.count}</p>
            </div>
            <div className='BodyButton'>
                <button onClick={countAddHandler}
                        className='Button'
                        disabled={props.State.count >= props.State.maxCount}>
                    inc
                </button>
                <button onClick={countResetHandler}
                        className='Button'
                        disabled={props.State.count <= props.State.minCount}>
                    reset
                </button>
                <NavLink to="/SettingPage">
                    <button className='Button'>
                        setting
                    </button>
                </NavLink>
            </div>
        </div>
    );
});

export default IncPage;