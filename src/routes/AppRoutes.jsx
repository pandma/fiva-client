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
import PowerOptimitationPage from "../pages/PowerOptimitationPage/PowerOpmtimitationPage"
import EnergyEficyPage from "../pages/EnergyEficyPage/EnergyEficyPage"
import EnergyTransitionPage from "../pages/EnergyTransitionPage/EnergyTransitionPage"
import PriceRatePage from "../pages/PriceRatePage/PriceRatePage"
import SoftwareSolutionsPage from "../pages/SoftwareSolutionsPage/SoftwareSolutionsPage"
import DigitalitationPage from "../pages/DigitalitationPage/DigitalitationPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import ContactList from "../components/ContactList/ContactList"


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
            <Route path="/power" element={<PowerOptimitationPage />} />
            <Route path="/energy" element={<EnergyEficyPage />} />
            <Route path="/transition" element={<EnergyTransitionPage />} />
            <Route path="/price" element={<PriceRatePage />} />
            <Route path="/solutions" element={<SoftwareSolutionsPage />} />
            <Route path="/digitalitation" element={<DigitalitationPage />} />
            <Route path="/register" element={<SingUpPage />} />
            <Route path="/contact-list" element={<ContactList />} />


            <Route path="/admin" element={<PrivateRoutes requiredRoles={["Admin"]} />}>
                <Route path="" element={<AdminHomePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes
