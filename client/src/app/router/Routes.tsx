import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetails from "../../features/Catalog/ProductDetails";
import AboutPage from "../../features/About/AboutPage";
import ContactPage from "../../features/Contact/ContactPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/Basket/BasketPage";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import RequireAuth from "./RequireAuth";
import Orders from '../../features/orders/Orders';
import CheckoutWrapper from "../../features/checkout/CheckoutWrapper";
import Inventory from "../../features/admin/Inventory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // auth routes
            {element: <RequireAuth />, children: [
                { path: '/checkout', element: <CheckoutWrapper /> },
                { path: '/orders', element: <Orders /> },
            ]},
            // admin routes
            {element: <RequireAuth roles ={['Admin']}/>, children: [
                { path: '/inventory', element: <Inventory    /> },
            ]},
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