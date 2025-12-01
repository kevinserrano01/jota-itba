import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/Layout/NavBar"
import './styles/mainContent.css'
import { ToastContainer } from "react-toastify"
import { Footer } from "./components/Layout/Footer"
import { CartProvider } from "./contexts/CartContext"
import { AuthProvider } from "./contexts/AuthContext"

export const App = () => {
  const location = useLocation();
  
  const hideNavbarPaths = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <AuthProvider>
    <CartProvider>
      <div className="App">
        {shouldShowNavbar && <NavBar />}
        <div className="d-flex flex-column">
          <div className="main-content">
            <Outlet />
            <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
        <Footer/>
      </div>
    </CartProvider>
    </AuthProvider>
  )
}