import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import MyNavbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Blog from "./pages/Blog.jsx";

import Medicines from "./components/Cards/Medicines.jsx";
import PersonalCare from "./components/Cards/PersonalCare.jsx";
import CovidPage from "./components/Cards/Covid.jsx";
import HealthCarePage from "./components/Cards/HealthCare.jsx";
import Vitamins from "./components/Cards/Vitamins.jsx";
import Ayurveda from "./components/Cards/Ayurveda.jsx";
import AboutUs from "./pages/AboutUs.jsx";


import DashboardHome from "./pages/Admin/DashboardHome.jsx";
import ManageProducts from "./pages/Admin/ManageProducts.jsx";
import ManageOrders from "./pages/Admin/ManageOrders.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";


import AdminSidebar from "./components/AdminSidebar.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
     
      {!isAdminRoute && <MyNavbar />}

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/vitamins" element={<Vitamins />} />
        <Route path="/healthcare" element={<HealthCarePage />} />
        <Route path="/ayurveda" element={<Ayurveda />} />
        <Route path="/covid" element={<CovidPage />} />

        
        <Route
          path="/admin/*"
          element={
            <div style={{ display: "flex" }}>
              <AdminSidebar />
              <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
                <Routes>
                  <Route path="dashboard" element={<DashboardHome />} />
                  <Route path="products" element={<ManageProducts />} />
                  <Route path="orders" element={<ManageOrders />} />
                  <Route path="users" element={<ManageUsers />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
