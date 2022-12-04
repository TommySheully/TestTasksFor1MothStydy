import React, {ChangeEvent, useState} from 'react';
import {BodyType} from "../body";
import s from '../../BodySetting.module.css'
import {NavLink, useNavigate} from "react-router-dom";

export const BodySettingScreen = (props: BodyType) => {
    let navigate = useNavigate();
    let [titleMax, setTitleMax] = useState<number>(props.State.maxCount)
    let [titleMin, setTitleMin] = useState<number>(props.State.minCount)
    let [error, setError] = useState(false)


    const onChangedMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleMax(+e.currentTarget.value)
        if (titleMax < titleMin) {
            setError(true)
        } else {
            setError(false)
        }
        localStorage.setItem('titleMax', JSON.stringify(e.currentTarget.value))
    }

    const onChangedMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleMin(e.currentTarget.valueAsNumber)
        if (titleMax < titleMin) {
            setError(true)
        } else {
            setError(false)
        }
        localStorage.setItem('titleMin', JSON.stringify(e.currentTarget.value))
    }


    let onClickSettingHandler = () => {
        if (titleMax < titleMin) {
            setError(true)
        } else {
            props.dispatch({type: 'max', maxValue: titleMax})
            props.dispatch({type: 'start', minCount: titleMin})
            navigate("page")
        }
    }

    return (
        <div>

            <div className={s.BodyScreen}>
                <>
                    <p className={s.text}>Max value</p>
                    <input className={(titleMin > titleMax) ? s.InputError : s.Input}
                           type={"number"}
                           onChange={onChangedMaxHandler}/>
                </>
                {error && <div className={s.BodyText}>Incorrect VALUE</div>}
                <>
                    <p>Start value</p>
                    <input className={titleMin > titleMax ? s.InputError : s.Input}
                           onChange={onChangedMinHandler}
                           type={"number"}
                    />
                </>
            </div>
            <NavLink to="/Page">
                <button className={s.Button}
                        onClick={onClickSettingHandler}
                disabled={titleMin > titleMax}>
                    Set
                </button>
            </NavLink>
        </div>
    );
};

export default BodySettingScreen;