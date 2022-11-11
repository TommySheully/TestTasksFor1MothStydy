import React, {useState} from 'react';
import '../Body.css';

import {BodyType} from "../body";
import {incAC, resAC} from "../../App";
import {useNavigate} from "react-router-dom";



export const BodyButton = (props: BodyType) => {

    const countAddHandler = () => props.dispatch(incAC());
    const countResetHandler = () => props.dispatch(resAC());
    let navigate = useNavigate();

    return (
        <div className='BodyButton'>
            <button onClick={countAddHandler}
                    className='Button'
                    disabled={props.State.count === 5}>
                inc
            </button>
            <button onClick={countResetHandler}
                    className='Button'
                    disabled={props.State.count === 0 ? true : false}>
                reset
            </button>
            <button onClick={() => navigate('setting')}
                    className='Button'
            >
                set
            </button>
        </div>
    );
}

