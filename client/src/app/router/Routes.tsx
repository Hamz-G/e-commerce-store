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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'Ürünler', element: <Catalog />},
            {path: 'Ürünler/:id', element: <ProductDetails />},
            {path: 'Hakkımızda', element: <AboutPage />},
            {path: 'İletişim', element: <ContactPage />},
            {path: 'server-error', element: <ServerError />},
            {path: 'not-found', element: <NotFound />},
            {path: 'basket', element: <BasketPage />},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
    }
])