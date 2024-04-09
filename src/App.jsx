import React from 'react';
import Navbar from "./Navbar.jsx";
import Blogs from './Blogs.jsx';
import Product from './Product.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import Cart from './Cart.jsx';
import SignIn from './auth/SignIn.jsx';
import SignUp from './auth/SignUp.jsx';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
    }, []);
    
     

  return (
    <>
      
      <Router>
     <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/shop" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/" element={<SignUp/>} />

      </Routes>
      </Router>
    </>
    
  );
};

export default App;