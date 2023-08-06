import classes from "./PostComments.module.css";

interface Comment{
    commentId: Number;
    contents:string;
}

interface PostCommentsProps{
    children?: React.ReactNode;
    comments:Array<Comment>
}

export const PostComments = ({...props}:PostCommentsProps) => {
    return (
        <div className={classes.post_contents_comments}>
            {
                props.comments.length > 0 ? 
                    <div>댓글 {props.comments.length}개 보기 </div> : <></>
            }
        </div>
    )
}