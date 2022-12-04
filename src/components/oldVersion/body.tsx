import React, {useState} from 'react';
import '../Body.css';
import {BodyScreen} from "./BodyScreen/bodyScreen";
import {BodyButton} from "./BodyButton/bodyButton";
import {actionType, stateType} from "../../state/reduser";

export type BodyType = {
    State: stateType
    dispatch: (action: actionType) => void
}

export const Body = (props: BodyType) => {

    return (
            <div className='Body'>
                <BodyScreen State={props.State} dispatch={props.dispatch}/>
                <BodyButton State={props.State} dispatch={props.dispatch}/>
            </div>
    );
}

