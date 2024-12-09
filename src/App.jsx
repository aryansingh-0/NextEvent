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
import AdminNavbar from "./component/navbarComponent/AdminNavbar.jsx";
import PublicNavbar from "./component/navbarComponent/PublicNavbar.jsx";
import SuperAdminNavbar from "./component/navbarComponent/SuperAdminNavbar";
import AllPosts from "./component/publicComponent/AllPosts.jsx";
import Login from "./component/publicComponent/userLogin.jsx";
import SignUp from "./component/publicComponent/userSingup.jsx";
import ApproveAdmins from "./component/superAdmin/superAdmin.jsx";
import SuperAdminLogin from "./component/superAdmin/superAdminLogin.jsx";
import LandingPage from "./component/LandingPage.jsx";

function App() {
  console.log(import.meta.env.VITE_ARYAN);
  console.log(import.meta.env.VITE_BACKENED);
  const Navbar = () => {
    const location = useLocation();

    if (location.pathname.startsWith("/admin/superAdmin")) {
      return <SuperAdminNavbar />;
    } else if (location.pathname.startsWith("/admin")) {
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
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<AllPosts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Route for Admin  Routes  */}
        <Route path="admin/adminRequest" element={<AdminSignupRequest />} />
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/post" element={<AdminPost />} />
        <Route path="admin/dashboard" element={<AdminDashboard />} />
        {/* Route for Super Admin */}
        <Route path="admin/superAdmin/login" element={<SuperAdminLogin />} />
        <Route path="admin/superAdmin/allRequest" element={<ApproveAdmins />} />
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
