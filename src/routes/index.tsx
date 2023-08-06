import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/wrapper/RootLayout/RootLayout";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";

const routes: RouteObject[] = [
    { 
        path:'/', 
        element: <RootLayout/>, 
        // errorElement: <ErrorPage/>,
        children:[
          // { index:true, 
          //   element:
          //     <LoginPage/>
          // },
          {
            index:true,
            // id:'video-detail',
            element: <MainPage/>
          }
        ], 
      },
      {
        path:'/login',
        element:<LoginPage/>
      }
]

const router = createBrowserRouter(routes)

export default router;