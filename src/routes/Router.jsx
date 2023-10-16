import {Route, Routes, Navigate} from 'react-router-dom';
import { Home } from '../pages/Home/Home';


function Router () {
        const Local = localStorage.getItem("lenseyewear");
        const userLocal = JSON.parse(Local)

        function PrivateRoute({children} ) {
                return userLocal !== null || userLocal?.type === "client" ? children : <Navigate to="/"/>
            }

    return (
            <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="/"
                    element={ <PrivateRoute> <Home /></PrivateRoute>} />


            </Routes>
           
    )
}

export {Router}