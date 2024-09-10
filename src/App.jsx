import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hiredriver from "./pages/Hiredriver/Hiredriver";
import Corporaterent from "./pages/Corporaterent/Corporaterent";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import RegisterAsVendor from "./pages/RegisterAsVendor/RegisterAsVendor";
import Privacy from "./pages/Privacy/Privacy";
import Form from "./pages/RegisterAsVendor/Form";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireadriver" element={<Hiredriver />} />
          <Route path="/corporate-rent" element={<Corporaterent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerasvendor" element={<RegisterAsVendor />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
