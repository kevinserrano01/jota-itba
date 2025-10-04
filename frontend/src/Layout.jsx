import { Outlet, useLocation } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import NavBar from "./components/Layout/NavBar"
import './styles/mainContent.css'
import { ToastContainer } from "react-toastify"

export const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <AuthProvider>
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
      </div>
    </AuthProvider>
  )
}