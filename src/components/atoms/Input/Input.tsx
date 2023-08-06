import React from "react";

// import { classJoin } from "../../../utils/common";

import classes from './Input.module.css';

interface InputProps {
    children?: React.ReactNode;
    type:string;
    text?:string;
    style?:object;
}

const Input = ({...props}: InputProps) => {
    return (
            <div className={classes.input_wrap}>
                <input
                    type={props.type}
                    required
                />
                <label>{props.text}</label>
            </div>
    )
}

export default Input;