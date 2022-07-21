import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import CarouselSlider from './componets/CarouselSlider/CarouselSlider';
import Footer from './Pages/Shared/Footer';
import Contact from './component/ContactUs/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App () {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>
        <Route path='/contact' element={<Contact/>} ></Route>

      </Routes>
      {/* <CarouselSlider></CarouselSlider> */}
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
