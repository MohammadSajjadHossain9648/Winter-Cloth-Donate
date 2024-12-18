import { createBrowserRouter, useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCampaigns from "../components/DonationCampaigns/DonationCampaigns";
import Dashboard from "../components/Dashboard/Dashboard";
import LogIn from "../components/LogIn/LogIn";
import SignUp from "../components/SignUp/SignUp";
import DonationDetail from "../components/DonationDetail/DonationDetail";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import MainErrorLayout from "../components/MainErrorLayout/MainErrorLayout";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";

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
                loader: () => fetch('/campaigns.json')
            },
            {
                path: "/DonationDetail/:id",
                element: <PrivateRoute>
                    <DonationDetail></DonationDetail>
                </PrivateRoute>,
                loader: async({params}) => {
                    const dataJSON = await fetch('/campaigns.json');
                    const dataObj = await dataJSON.json();

                    const campaigns = dataObj.find((campaign) => campaign.id === parseInt(params.id));
                    return campaigns;
                }
            },
            {
                path: "/Dashboard",
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            },
            {
                path: "/UpdateProfile",
                element: <PrivateRoute>
                     <UpdateProfile></UpdateProfile>
                 </PrivateRoute>
            },
            {
                path: "/LogIn",
                element: <LogIn></LogIn>
            },
            {
                path: "/ForgetPassword",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: "/SignUp",
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        element: <MainErrorLayout></MainErrorLayout>,
        children: [
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);

export default router;