import React, {useState} from 'react';
import '../Body.css';

import {BodyType} from "../body";
import {incAC, resAC} from "../../App";
import {useNavigate} from "react-router-dom";


export const BodyButton = (props: BodyType) => {

    const countAddHandler = () => props.dispatch(incAC());
    const countResetHandler = () => props.dispatch(resAC());
    let navigate = useNavigate();

    let onClickBodyButtonHandler = () => {
        navigate('/setting')
    }

    return (
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
            <button onClick={onClickBodyButtonHandler}
                    className='Button'>
                set
            </button>
        </div>
    );
}

