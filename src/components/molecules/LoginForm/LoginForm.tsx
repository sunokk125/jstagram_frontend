import { Link } from "react-router-dom";

import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

import classes from "./LoginForm.module.css"

const LoginForm = () => {
    // const navigate = useNavigate();

    // const onSubmitHandler = () => {
    //     navigate('/test')
    // }
    return <form className={classes.login_form}>
        <Input 
            type="text" 
            text="전화번호, 사용자 이름 또는 이메일" 
        />
        <Input type="password" text="비밀번호"/>
        <Link to="/">
        <Button
            background="#0095F6"
        >
            로그인
        </Button>
        </Link>
        
</form>
}

export default LoginForm;