import React from 'react';
import {BodyType} from "../body";
import s from './BodySetting.module.css'
import BodySettingScreen from "./BodySettingScreen";



export const BodySetting = (props: BodyType) => {
    return (
                <div className={s.Body}>
                    <BodySettingScreen State={props.State} dispatch={props.dispatch}/>
                </div>
    );
};

export default BodySetting;