import React, {useState} from 'react';
import '../Body.css';
import {incCountAC, reduser, resCountAC} from "../../State/reduser/reduser";
import {BodyType} from "../body";


export const BodyButton = (props: BodyType) => {

    const countAddHandler = () => reduser(props.State, incCountAC());
    const countResetHandler = () => reduser(props.State, resCountAC());

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
        </div>
    );
}

