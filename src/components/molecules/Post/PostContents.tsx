import classes from "./PostContents.module.css";

interface PostContentsProps{
    children?: React.ReactNode;
    userName:string;
    contents:string;
}

export const PostContents = ({...props}:PostContentsProps) => {
    return (
        <div className={classes.post_contents_contents}>
            <span><b>{props.userName}</b> {props.contents}</span>
            <p style={{margin:"0"}}>더 보기</p>
        </div>
    )
}