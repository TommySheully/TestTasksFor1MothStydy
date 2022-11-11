import React, {useState} from 'react';
import './Body.css';
import {BodyScreen} from "./BodyScreen/bodyScreen";
import {BodyButton} from "./BodyButton/bodyButton";
import {StateType} from "../App";



export type BodyType = {
    State: StateType
}

export const Body = (props: BodyType) => {

    return (
        <div>
            <div className='Body'>
                <BodyScreen State={props.State}/>
                <BodyButton State={props.State}/>
            </div>

        </div>

    );
}

