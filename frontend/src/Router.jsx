import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { NotFound } from "./components/error/NotFound";
import { Home } from "./components/Layout/Home";
import { ProtectedRoute } from "./secutiry/ProtectedRouter"; // Usar para cuando tengamos Login
import { Login } from "./components/Auth/Login";
import { ProductsList } from "./components/products/ProductsList";
import { ProductDetail } from "./components/products/ProductDetail";
import { CrearProducto } from "./components/products/CrearProducto";
import { Contact } from "./components/contact/Contact";
import { Carrito } from "./components/products/Carrito";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: "/productos",
                children: [
                    {
                        index: true,
                        element: <ProductsList />
                    },
                    {
                        path: ":id",
                        element: <ProductDetail />
                    }
                ]
            },
            {
                path: "/carrito",
                element: <Carrito />
            },
            {
                path: "/contacto",
                element: <Contact />
            },
            {
                path: "/admin/crear-producto",
                element: <CrearProducto />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])