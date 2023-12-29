import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/Home/HomePage";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetails from "../../features/Catalog/ProductDetails";
import AboutPage from "../../features/About/AboutPage";
import ContactPage from "../../features/Contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/Basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {element: <RequireAuth />, children: [
                { path: '/checkout', element: <CheckoutPage /> }
            ]},
            {path: '', element: <HomePage />},
            {path: 'Ürünler', element: <Catalog />},
            {path: 'Ürünler/:id', element: <ProductDetails />},
            {path: 'Hakkımızda', element: <AboutPage />},
            {path: 'İletişim', element: <ContactPage />},
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},
            {path: 'basket', element: <BasketPage />},
            {path: 'login', element: <Login />},
            {path: 'register', element: <Register />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])