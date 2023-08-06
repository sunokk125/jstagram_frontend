import classes from "./IconButton.module.css";

interface IconButtonProps {
    children?: React.ReactNode;
    primary?: boolean;
    background?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?:() => void;
}

const IconButton = ({...props}: IconButtonProps) => {
    return <div className={classes.icon_button_wrap}>
        <button className={classes.icon_button}>
            {props.children}
        </button>
    </div>
}

export default IconButton