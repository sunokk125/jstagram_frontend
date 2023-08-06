// import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import classes from "./RootLayout.module.css";
import MainNavigation from "../../molecules/MainNavigation/MainNavigation";

const RootLayout = () => {
    return (
        <>
            {/* <MainNavigation/> */}
            <div className={classes.main_wrap}>
                <MainNavigation/>
                <main className={classes.main_contents}>
                    {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                    <Outlet/>
                </main>
            </div>
        </>
        
    )
};

export default RootLayout;