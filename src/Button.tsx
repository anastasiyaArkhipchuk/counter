import React from "react";
import './App.css';
type ButtonPropsType = {
    title:string
    callback: ()=>void
    disabled: boolean
}
export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <div>
            <button
                disabled={props.disabled}
                onClick={onClickHandler}
            className={'button'}>{props.title}</button>
        </div>
    )
}