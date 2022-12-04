import React, {ChangeEvent, useCallback} from 'react';
import {propsType} from "./IncPage";
import s from './BodySetting.module.css'
import {maxAC, setAC, startAC} from "../state/reduser";
import {NavLink} from "react-router-dom";

const SettingPage = React.memo((props: propsType) => {

    const onChangedMaxHandler = useCallback((e: ChangeEvent<HTMLInputElement>) =>   props.dispatch(maxAC(+e.currentTarget.value)), [props.dispatch])
    const onChangedMinHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => props.dispatch(startAC(e.currentTarget.valueAsNumber)), [props.dispatch])
    const onClickSettingHandler = useCallback(() => props.dispatch(setAC()), [props.dispatch])
    const error = () => props.State.minCount > props.State.maxCount


    return (
        <div className={s.Body}>
            <div className={s.BodyScreen}>
                <>
                    <p className={s.text}>Max value</p>
                    <input className={error() ? s.InputError : s.Input}
                           type={"number"}
                           onChange={onChangedMaxHandler}/>
                </>
                {error() && <div className={s.BodyText}>Incorrect VALUE</div>}
                <>
                    <p>Min value</p>
                    <input className={error() ? s.InputError : s.Input}
                           onChange={onChangedMinHandler}
                           type={"number"}
                    />
                </>

            </div>
            <div>
                <NavLink to="/incPage">
                <button className={s.Button}
                        onClick={onClickSettingHandler}
                        disabled={error()}>
                    Set
                </button>
            </NavLink>
            </div>
        </div>
    );
})

export default SettingPage;