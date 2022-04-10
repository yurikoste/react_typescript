import React from "react";
import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1>Info page</h1>
        <button className="btn" onClick={() => navigate("/")}>Back to the todo list</button>
        </>
    )
}