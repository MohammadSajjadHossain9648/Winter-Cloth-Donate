import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import HowToHelp from "../components/HowToHelp/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/banners.json'),
                children: [

                ]
            },
            {
                path: "/DonationCampaigns",
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: "/HowToHelp",
                element: <HowToHelp></HowToHelp>
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>
            },

        ]
    }
]);

export default router;