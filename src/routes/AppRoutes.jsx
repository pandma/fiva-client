import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PymePage from "../pages/PymePage/PymePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/loginPage/loginPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import BigServicePage from "../pages/BigServicePage/BigServicePage";
import AdministratorServicePage from "../pages/AdministratorServicePage/AdministratorServicePage";
import PowerOptimitationPage from "../pages/PowerOptimitationPage/PowerOpmtimitationPage";
import EnergyEficyPage from "../pages/EnergyEficyPage/EnergyEficyPage";
import EnergyTransitionPage from "../pages/EnergyTransitionPage/EnergyTransitionPage";
import PriceRatePage from "../pages/PriceRatePage/PriceRatePage";
import SoftwareSolutionsPage from "../pages/SoftwareSolutionsPage/SoftwareSolutionsPage";
import DigitalitationPage from "../pages/DigitalitationPage/DigitalitationPage";
import SingUpPage from "../pages/SingUpPage/SingUpPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import CompaniesPage from "../pages/CompaniesPage/CompaniesPage";
import CompanyAddPage from "../pages/CompanyAddPage/CompanyAddPage";
import CalculateMax50Page from "../pages/CalculateMax50Page/CalculateMax50Page";
import Max50ListPage from "../pages/Max50ListPage/Max50ListPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import NewClientForm from "../pages/NewClientForm/NewClientForm";

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


            <Route path="/admin" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<AdminHomePage />} />
            </Route>
            <Route path="/register" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<SingUpPage />} />
            </Route>
            <Route path="/contact-list" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<ContactPage />} />
            </Route>
            <Route path="/users" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<UsersPage />} />
            </Route>
            <Route path="/companies" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<CompaniesPage />} />
            </Route>
            <Route path="/newcompany" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<CompanyAddPage />} />
            </Route>
            <Route path="/calculatemax50" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<CalculateMax50Page />} />
            </Route>
            <Route path="/getmax50" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<Max50ListPage />} />
            </Route>
            <Route path="/dash" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<DashboardPage />} />
            </Route>
            <Route path="/dash" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<DashboardPage />} />
            </Route>
            <Route path="/newclient" element={<PrivateRoutes requiredRoles={["User"]} />}>
                <Route path="" element={<NewClientForm />} />
            </Route>

        </Routes>
    );
};

export default AppRoutes;
