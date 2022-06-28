import { Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/loginPage/loginPage"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />


        </Routes>
    )
}

export default AppRoutes
