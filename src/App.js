import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Contact from "./component/ContactUs/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./componets/Register/Register";
import Login from "./componets/Login/Login";
import Dashborad from "./Pages/Dashboard/Dashborad";
import AddProducts from "./Pages/Dashboard/AddProducts";
import AllProducts from "./Pages/Dashboard/AllProducts";
import EditProduct from "./Pages/Dashboard/EditProduct";
import { useEffect, useState } from "react";
import MegaNavbar from "./Pages/Shared/MegaNavbar";
import Allcaetgory from "./Pages/Dashboard/Allcaetgory";
import MensItem from "./Pages/Dashboard/MensItem";
import WomensItem from "./Pages/Dashboard/WomensItem";
import KidsItem from "./Pages/Dashboard/KidsItem";
import MenCollection from "./Pages/Product/MenCollection";
import AllCollection from "./Pages/Product/AllCollection";
import WomenCollection from "./Pages/Product/WomenCollection";
import KidsCollection from "./Pages/Product/KidsCollection";

function App() {
  const [desktop, setDesktop] = useState(window.innerWidth > 650);
  const updatePic = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updatePic);
    return () => window.removeEventListener("resize", updatePic);
  });
  return (
    <div className="App">
      {desktop ? <Navbar></Navbar> : <MegaNavbar></MegaNavbar>}

      <Routes>
        {/* <Route path="/" element={<Home></Home>}>
          Home
        </Route> */}
        <Route path="/" element={<Home></Home>}>
          <Route index element={<AllCollection></AllCollection>}></Route>
          <Route path="mencollection" element={<MenCollection></MenCollection>}></Route>
          <Route path="womencollection" element={<WomenCollection></WomenCollection>}></Route>
          <Route path="kidcollection" element={<KidsCollection></KidsCollection>}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/dashboard" element={<Dashborad></Dashborad>}>
          <Route path="allcategory" element={<Allcaetgory></Allcaetgory>}>
            <Route index element={<MensItem></MensItem>}></Route>
            <Route path="womensitem" element={<WomensItem></WomensItem>}></Route>
            <Route path="kidsItem" element={<KidsItem></KidsItem>}></Route>
          </Route>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route
            path="addproduct"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="editproduct"
            element={<EditProduct></EditProduct>}
          ></Route>
        </Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
