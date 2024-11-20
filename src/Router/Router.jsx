import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import Help from "../components/Help/Help";
import Dashboard from "../components/Dashboard/Dashboard";
import Banner from "../components/Banner/Banner";

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
                    {
                        path: "/",
                        element: <Banner></Banner>,
                    }
                ]
            },
            {
                path: "/DonationCampaigns",
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: "/Help",
                element: <Help></Help>
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>
            },

        ]
    }
]);

export default router;