import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import AdminDashboard from "./component/admin/AdminDashboard.jsx";
import AdminLogin from "./component/admin/AdminLoginpage.jsx";
import AdminPost from "./component/admin/AdminPost.jsx";
import AdminSignupRequest from "./component/admin/adminSignup.jsx";
import LandingPage from "./component/LandingPage.jsx";
import AdminNavbar from "./component/navbarComponent/AdminNavbar.jsx";
import PublicNavbar from "./component/navbarComponent/PublicNavbar.jsx";
import SuperAdminNavbar from "./component/navbarComponent/SuperAdminNavbar";
import AllPosts from "./component/publicComponent/AllPosts.jsx";
import Login from "./component/publicComponent/userLogin.jsx";
import SignUp from "./component/publicComponent/userSingup.jsx";
import ApproveAdmins from "./component/superAdmin/superAdmin.jsx";
import SuperAdminLogin from "./component/superAdmin/superAdminLogin.jsx";

function App() {
  console.log(import.meta.env.VITE_ARYAN);
  console.log(import.meta.env.VITE_BACKENED);
  const Navbar = () => {
    const location = useLocation();

    if (location.pathname.startsWith("/NextEvent/admin/superAdmin")) {
      return <SuperAdminNavbar />;
    } else if (location.pathname.startsWith("/NextEvent/admin")) {
      return <AdminNavbar />;
    } else {
      return <PublicNavbar />;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path="/NextEvent/" element={<LandingPage />} />
        <Route path="/NextEvent/events" element={<AllPosts />} />
        <Route path="/NextEvent/login" element={<Login />} />
        <Route path="/NextEvent/signup" element={<SignUp />} />
        {/* Route for Admin  Routes  */}
        <Route
          path="/NextEvent/admin/adminRequest"
          element={<AdminSignupRequest />}
        />
        <Route path="/NextEvent/admin/login" element={<AdminLogin />} />
        <Route path="/NextEvent/admin/post" element={<AdminPost />} />
        <Route path="/NextEvent/admin/dashboard" element={<AdminDashboard />} />
        {/* Route for Super Admin */}
        <Route
          path="/NextEvent/admin/superAdmin/login"
          element={<SuperAdminLogin />}
        />
        <Route
          path="/NextEvent/admin/superAdmin/allRequest"
          element={<ApproveAdmins />}
        />
        {/* Optional: Default Route */}
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>} // Handle undefined routes
        />
      </Routes>
    </Router>
  );
}

export default App;
