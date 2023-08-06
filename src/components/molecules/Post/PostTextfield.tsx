import classes from "./PostTextfield.module.css";

export const PostTextfield = () => {
    return (
        <div className={classes.post_contents_textfields}>
            <div className={classes.emoji}>😀</div>
            <textarea placeholder="댓글 달기..." autoComplete="off" autoCorrect="off"/>
            <div className={classes.enter}>게시</div>
        </div>
    )
}