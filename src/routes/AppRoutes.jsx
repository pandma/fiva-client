import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import LoginPage from "../pages/loginPage/loginPage"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import PrivateRoutes from "./PrivateRoutes"


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<PrivateRoutes requiredRoles={["Admin"]} />}>
                <Route path="" element={<AdminHomePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes
