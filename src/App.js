import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import SidebarCatagory from "./Pages/Shared/SidebarCatagory";
import Allcaetgory from "./Pages/Dashboard/Allcaetgory";
import MensItem from "./Pages/Dashboard/MensItem";
import WomensItem from "./Pages/Dashboard/WomensItem";
import KidsItem from "./Pages/Dashboard/KidsItem";
import MenCollection from "./Pages/Product/MenCollection";
import AllCollection from "./Pages/Product/AllCollection";
import WomenCollection from "./Pages/Product/WomenCollection";
import KidsCollection from "./Pages/Product/KidsCollection";
import PrivateRoute from "./componets/privateroute/PrivateRoute";
import AddToCart from "./Pages/AddToCart/AddToCart";
import Orders from "./Pages/Dashboard/Orders";
import NotFound from "./Pages/NotFound";
import Customers from "./Pages/Dashboard/Customers";
import StatisticsComponent from "./Pages/Dashboard/StatisticsComponent";
import Details from "./Pages/Details";

function App() {
  const [desktop, setDesktop] = useState(window.innerWidth > 650);
  const updatePic = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updatePic);
    return () => window.removeEventListener("resize", updatePic);
  });
  const location = useLocation();

  return (
    <div className="App">
      {desktop ? <Navbar></Navbar> : <MegaNavbar></MegaNavbar>}

      <div className="flex">
        {location.pathname !== "/dashboard" &&
        location.pathname !== "/dashboard/allcategory" &&
        location.pathname !== "/dashboard/editproduct" &&
        location.pathname !== "/dashboard/allcategory/womensitem" &&
        location.pathname !== "/dashboard/orders" &&
        location.pathname !== "/dashboard/customers" &&
        location.pathname !== "/dashboard/statistics" &&
        location.pathname !== "/dashboard/allcategory/kidsItem" ? (
          <div className="w-1/5 z-10">
            {desktop && location.pathname !== "/dashboard" ? (
              <SidebarCatagory></SidebarCatagory>
            ) : null}
          </div>
        ) : null}

        <div
          className={`${
            desktop &&
            location.pathname !== "/dashboard" &&
            location.pathname !== "/dashboard/allcategory" &&
            location.pathname !== "/dashboard/orders" &&
            location.pathname !== "/dashboard/customers" &&
            location.pathname !== "/dashboard/statistics" &&
            location.pathname !== "/dashboard/allcategory/womensitem"
              ? "w-4/5"
              : "w-full"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home></Home>}>
              <Route index element={<AllCollection></AllCollection>}></Route>
              <Route
                path="mencollection"
                element={<MenCollection></MenCollection>}
              ></Route>

              <Route
                path="womencollection"
                element={<WomenCollection></WomenCollection>}
              ></Route>
              <Route
                path="kidcollection"
                element={<KidsCollection></KidsCollection>}
              ></Route>
            </Route>
            <Route path="/details/:productId" element={<Details />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/addtocart" element={<AddToCart></AddToCart>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashborad></Dashborad>
                </PrivateRoute>
              }
            >
              <Route path="orders" element={<Orders></Orders>}></Route>
              <Route path="customers" element={<Customers></Customers>}></Route>
              <Route
                path="statistics"
                element={<StatisticsComponent></StatisticsComponent>}
              ></Route>
              <Route path="allcategory" element={<Allcaetgory></Allcaetgory>}>
                <Route index element={<MensItem></MensItem>}></Route>
                <Route
                  path="womensitem"
                  element={<WomensItem></WomensItem>}
                ></Route>
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
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
