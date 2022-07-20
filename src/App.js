import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import CarouselSlider from './componets/CarouselSlider/CarouselSlider';


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>

      </Routes>
      <CarouselSlider></CarouselSlider>

    </div>
  );
}

export default App;
