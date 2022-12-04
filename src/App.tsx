import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "./state/reduser";
import {AppRootStateType} from "./state/story";
import IncPage from "./components/IncPage";
import SettingPage from "./components/SettingPage";


const App = React.memo(() =>{

    const count = useSelector<AppRootStateType, stateType>(state => state)
    const dispatch = useDispatch()
    console.log(count)

return (
    <BrowserRouter>
    <div>
        <Routes>
            <Route path='/' element={<Navigate to={'/incPage'}/>}/>
            <Route path='/TestTasksFor1MothStydy' element={<Navigate to={'/incPage'}/>}/>
            <Route path='/incPage' element={<IncPage State={count} dispatch={dispatch}/>}/>
            <Route path='/SettingPage' element={<SettingPage State={count} dispatch={dispatch}/>}/>
            </Routes>
    </div>
        </BrowserRouter>
    )
})

export default App;