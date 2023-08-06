import { Modal } from "components/organisms/Modal/Modal";
import Avatar from "../../components/atoms/Avatar/Avatar";
import classes from "./MainPage.module.css"

import { Post } from "components/molecules/Post/Post";
import { useState } from "react";
import Button from "components/atoms/Button/Button";

const POSTS = [
    {
        postId: 0,
        userId: 0,
        userName: "user1",
        contents:"asd",
        images:[],
        comments:[
            {
                commentId:0,
                contents:"하이"
            },
            {
                commentId:1,
                contents:"좋아요"
            },
            {
                commentId:2,
                contents:"바이"
            }
        ],
        createAt: new Date("2023-07-01 19:03:23")
    },
    {
        postId: 1,
        userId: 0,
        userName: "user1",
        contents:"asd",
        images:[],
        comments:[],
        createAt: new Date("2023-07-01 19:03:23")
    },
    {
        postId: 2,
        userId: 0,
        userName: "user1",
        contents:"asd",
        images:[],
        comments:[],
        createAt: new Date("2023-07-01 19:03:23")
    }
];

const STORIES = [
    {
        storyId: 0,
        userId: 0,
        userName: "user1",
        images:[],
        createAt: new Date("2023-07-02 19:03:23")
    },
    {
        storyId: 1,
        userId: 1,
        userName: "user2",
        images:[],
        createAt: new Date("2023-07-02 19:04:23")
    }
]


const MainPage = () => {
    const [error, setError] = useState(false);

    const ErrorHandler  = () => {
        setError(prev=>!prev)
    }

    return <div className={classes.page_wrap}>
        {error && <Modal/>}
        <div><Button onClick={ErrorHandler}>asd</Button></div>
        <div className={classes.left_contents}>
            <div className={classes.stories_wrap}>
                <ul>
                    {
                        STORIES.map((story) => (
                            <li key={story.storyId}>
                                <Avatar size="48px"/>
                                {story.userName}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={classes.posts_wrap}>
                {
                    POSTS.map((post)=>(
                        <Post
                            post={post}
                        />
                        
                    ))
                }
            </div>
        </div>
        <div className={classes.right_contents}>
            <h2>Right Contents</h2>
        </div>
    </div>
}

export default MainPage;