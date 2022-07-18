import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PymePage from "../pages/PymePage/PymePage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/loginPage/loginPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import BigServicePage from "../pages/BigServicePage/BigServicePage"
import AdministratorServicePage from "../pages/AdministratorServicePage/AdministratorServicePage"

const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/pyme" element={<PymePage />} />
            <Route path="/bigconstumer" element={<BigServicePage />} />
            <Route path="/administrator" element={<AdministratorServicePage />} />

            <Route path="/admin" element={<PrivateRoutes requiredRoles={["Admin"]} />}>
                <Route path="" element={<AdminHomePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes
