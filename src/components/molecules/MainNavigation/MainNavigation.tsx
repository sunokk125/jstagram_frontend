import IconButton from "../../atoms/IconButton/IconButton";

import { AiOutlineInstagram, AiOutlineHome, AiOutlineSearch, AiOutlineCompass, AiOutlinePlaySquare, AiOutlineMessage, AiOutlineHeart, AiOutlinePlusSquare, AiOutlineMenu } from "react-icons/ai";
import classes from './MainNavigation.module.css'
import Avatar from "../../atoms/Avatar/Avatar";
const MainNavigation = () => {
    return (
        <div className={classes.nav_wrap}>
            <div className={classes.start}>
                <IconButton>
                    <AiOutlineInstagram style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
            </div>
            <div className={classes.center}>
                <IconButton>
                    <AiOutlineHome style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlineSearch style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlineCompass style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlinePlaySquare style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlineMessage style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlineHeart style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <AiOutlinePlusSquare style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
                <IconButton>
                    <Avatar size={"28px"}/>
                </IconButton>
            </div>
            <div className={classes.end}>
                <IconButton>
                    <AiOutlineMenu style={{ "width":"28px", "height":"28px" }}/>
                </IconButton>
            </div>
        </div>
    )
}

export default MainNavigation;