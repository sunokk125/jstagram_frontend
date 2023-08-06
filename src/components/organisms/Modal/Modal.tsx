import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

interface ModalProps{
    children?:React.ReactNode;
}

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = () => {
    return <div className={classes.contents}>
        <header>header</header>
        <div>body</div>
        <footer>footer</footer>
    </div>
}

export const Modal = ({...props}:ModalProps) => {
    const backdropRoot = document.getElementById('backdrop-root') as HTMLElement;
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, backdropRoot)}
            {ReactDOM.createPortal(<ModalOverlay/>, modalRoot)}
        </>
    )
}