import React, {useState} from 'react';
import '../Body.css';
import {BodyType} from "../body";


export const BodyScreen = (props: BodyType) => {

    return (
                <div className='BodyScreen'>
                    <p className={props.State.count === props.State.maxCount ? 'BodyText' : ''}>{props.State.count}</p>
                </div>
    );
}

