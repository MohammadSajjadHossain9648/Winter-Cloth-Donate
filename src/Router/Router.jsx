import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import HowToHelp from "../components/HowToHelp/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async() => {
                    const bannersJSON = await fetch('/banners.json');
                    const banners = await bannersJSON.json();

                    const faqsJSON = await fetch('/faqs.json');
                    const faqs = await faqsJSON.json();

                    return { banners, faqs };
                },
            },
            {
                path: "/DonationCampaigns",
                element: <DonationCampaigns></DonationCampaigns>,
                loader: async() => {
                    const dataJSON = await fetch('/campaigns.json');
                    const dataObj = await dataJSON.json();

                    const campaigns = dataObj.filter((campaign) => campaign.status === "Active");
                    return campaigns;
                }
            },
            {
                path: "/HowToHelp",
                element: <HowToHelp></HowToHelp>
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/LogIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/SignUp",
                element: <SignUp></SignUp>
            },

        ]
    }
]);

export default router;