import { Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"




const AppRoutes = () => {




    return (
        <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/home" element={<HomePage />} />

        </Routes>
    )
}

export default AppRoutes
