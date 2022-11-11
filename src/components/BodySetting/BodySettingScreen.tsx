import React from 'react';
import {BodyType} from "../body";
import {BodyButton} from "../BodyButton/bodyButton";
import s from './BodySetting.module.css'
import {NavLink, useNavigate} from "react-router-dom";

export const BodySettingScreen = (props: BodyType) => {
    let navigate = useNavigate();

    return (
        <div>
            <div className={s.BodyScreen}>
                <>
                    <p className={s.text}>Max value</p>
                    <input className={s.Input}/>
                </>
                <>
                    <p>Start value</p>
                    <input  className={s.Input}/>
                </>
            </div>
            <NavLink to="/Page" ><button className={s.Button} onClick={() => navigate("page")}>Set</button></NavLink>

        </div>
    );
};

export default BodySettingScreen;