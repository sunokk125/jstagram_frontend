import { AiOutlineHeart, AiOutlineMessage, AiOutlineShareAlt } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"

import classes from "./PostIcons.module.css";

export const PostIcons = () => {
    return (
        <div className={classes.post_contents_icons}>
            <div className={classes.left_icons}>
                <AiOutlineHeart style={{ "width":"28px", "height":"28px" }}/>
                <AiOutlineMessage style={{ "width":"28px", "height":"28px", marginLeft:"4px" }}/>
                <AiOutlineShareAlt style={{ "width":"28px", "height":"28px", marginLeft:"4px" }}/>
            </div>
            <div className={classes.right_icons}>
                <BsBookmark style={{ "width":"28px", "height":"28px" }}/>
            </div>
        </div>
    )
};