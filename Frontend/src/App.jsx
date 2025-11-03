import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tablet from "./components/Cards/Tablet.jsx";
import Ointment from "./components/Cards/Ointments.jsx";
import Syrup from "./components/Cards/Syrup.jsx";
import Drop from "./components/Cards/Drops.jsx";
import MyNavbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
function App() {
  

  return (
    <BrowserRouter>

    <MyNavbar />
    
   


    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products />} />
      
      <Route path="/products/tablets" element={<Tablet />} />
      <Route path="/products/creams" element={<Ointment />} />
      <Route path="/products/syrups" element={<Syrup />} />
      <Route path="/products/drops" element={<Drop />} />
    </Routes>
      </BrowserRouter>
  )
}

export default App
