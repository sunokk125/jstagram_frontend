import Card from "../../atoms/Card/Card";
import LoginForm from "../../molecules/LoginForm/LoginForm";

import classes from "./LoginBox.module.css";

const LoginBox = () => {
    return (
        <Card
            width="30%"
            padding="40px 0"
        >
            <div className={classes.logo}></div>
            <LoginForm/>
        </Card>
    )
}

export default LoginBox;