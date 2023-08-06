import React from "react";

import { classJoin } from "../../../utils/common";

import classes from './Card.module.css';

interface CardProps {
    children?: React.ReactNode;
    width?:string
    margin?:string
    padding?:string
}

const Card = ({...props}: CardProps) => {
    const style = {
        "width": props.width ? props.width : "60%",
        "margin": props.margin ? props.margin : "0" ,
        "padding": props.padding ? props.padding : "0" 
    }
    return (
        <div 
            className={classJoin(classes.card)}
            style={style}
        >
            {props.children}
        </div>
     )
};

export default Card;