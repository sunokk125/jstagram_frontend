import classes from "./PostLikes.module.css";

export const PostLikes = () =>{
    return (
        <div className={classes.post_contents_likes}>
            <span><b>user1</b>님이 <b>여러 명</b>이 좋아합니다.</span>
        </div>
    )
};