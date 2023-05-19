import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Regiser from "../Components/Register/Regiser";
import ChefDetails from "../Components/ChefDetails/ChefDetails";


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
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/chefData/${params.id}`)
            }
        ]
    }
])

export default router;