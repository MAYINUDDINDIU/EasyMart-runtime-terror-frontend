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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      {/* <MegaNavbar></MegaNavbar> */}
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/dashboard" element={<Dashborad></Dashborad>}>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path="addproduct" element={<AddProducts></AddProducts>}></Route>
          <Route path="editproduct" element={<EditProduct></EditProduct>}></Route>
        </Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
