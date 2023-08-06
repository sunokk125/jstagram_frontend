import LoginBox from "../../components/organisms/LoginBox/LoginBox";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={classes.login_page_wrap}>
            <LoginBox/>
        </div>
    )
}

export default LoginPage;