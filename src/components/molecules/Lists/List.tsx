import Avatar from "components/atoms/Avatar/Avatar";

import classes from "./List.module.css";

import React from "react";
import { classJoin } from "utils/common";

interface ListProps {
    children?:React.ReactNode;
    className?:string;
    avatar?:string;
    icon?:string;
    subtitle?:string | React.ReactNode;
    onClick?:() => void;
};

export const List = ({
    ...props
}: ListProps) => {
    if( props.avatar && props.icon ) throw "Select one thing";

    return <li 
        className={classJoin(props.className,classes.list_wrap)}
        onClick={props.onClick}
    >
        {
            props.avatar ? <Avatar size="32px"/>  : <></>
        }
        <div className={classes.title_wrap}>
            <p className={classes.title}>{ props.children }</p>
            {
                props.subtitle ? <span className={classes.subtitle}>{props.subtitle}</span> : <></>
            }
        </div>
    </li>
};