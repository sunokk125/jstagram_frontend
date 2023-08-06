import { PostIcons } from "./PostIcons";
import { PostLikes } from "./PostLikes";

import Avatar from "components/atoms/Avatar/Avatar";

import classes from "./Post.module.css";
import { AiOutlineEllipsis } from "react-icons/ai";
import { PostContents } from "./PostContents";
import { PostComments } from "./PostComments";
import { PostTextfield } from "./PostTextfield";

interface Comment{
    commentId: Number;
    contents:string;
}

interface PostProps {
    children?: React.ReactNode;
    post:{
        postId: Number;
        userId: Number;
        userName: string;
        contents: string;
        images: Array<string>;
        comments: Array<Comment>;
        createAt: Date;

    };
}

export const Post = ({...props}:PostProps) => {
    return (
        <div className={classes.post_wrap}>
            <div className={classes.post_user_wrap}>
                <div className={classes.post_user_info}>
                    <Avatar size="32px"/> 
                    <div className={classes.user_name}>{props.post.userName}</div>
                    <span className={classes.split}>•</span>
                    <span className={classes.timestamp}>1일전</span>
                </div>
                <AiOutlineEllipsis style={{ "width":"28px", "height":"28px" }}/>
                
            </div>
            <div className={classes.post_images_wrap}>
                {
                    props.post.images.length > 0 ? 
                        <div>
                            <div>img</div>
                        </div> : <div style={{width:"100%",height:"470px",backgroundColor:"#cccccc"}}>no image</div>
                }
            </div>
            <div className={classes.post_contents_wrap}>
                <PostIcons/>
                <PostLikes/>
                <PostContents 
                    userName={props.post.userName} 
                    contents={props.post.contents}
                />
                <PostComments
                    comments={props.post.comments}
                />
                <PostTextfield/>
            </div>
        </div>
    )
}

