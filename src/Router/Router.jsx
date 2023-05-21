import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Regiser from "../Components/Register/Regiser";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import AllChefs from "../Components/AllChefs/AllChefs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Blogs from "../Components/Blogs/Blogs";
import PrivateRoute from "../Routes/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register', 
                element: <Regiser></Regiser>
            }, 
            {
                path: 'chefData/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blogs></Blogs>
            },
            {
                path: 'all-chefs', 
                element: <AllChefs></AllChefs>,
                loader: () => fetch(`http://localhost:5000/chefData`)
            },
            {
                path: '*', 
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;