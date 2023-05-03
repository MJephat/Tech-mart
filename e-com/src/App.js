import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Menu from "./components/menu"
import Products from "./components/products"
import Signin from "./components/signin"
import Signup  from "./components/singup"
import Footer from './Footer';
// import Electronics from './components/ElectronicsList';
// import Loginform from './components/Loginform';
import BannerCard from './components/BannerCard';

function App() {
  return (
    <Router>
      <Navbar />
      <BannerCard />
      {/* <Loginform /> */}
      {/* <Electronics /> */}
      <Routes>
        <Route path='/' element ={<Menu /> } />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element ={<Signin />} />
        <Route path='/signup' element ={<Signup /> } />
        {/* <Route path='/menu/electronics' element ={<Electronics />} /> */}
      </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;