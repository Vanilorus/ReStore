import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/Homepage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/catalog/contactPage";

export const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {path: " ", element: <HomePage/>},
        {path: "catalog", element: <Catalog/>},
        {path: "catalog/:id", element:<ProductDetails/>},
        {path: "about", element:<AboutPage/>},
        {path: "contact", element: <ContactPage/>},
    ]   
}

])