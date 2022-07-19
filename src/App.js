import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        {/* <Route path='/' element={<Navbar></Navbar>} >Home</Route> */}

      </Routes>

    </div>
  );
}

export default App;
