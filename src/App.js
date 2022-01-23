import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EarphonePage from "./pages/EarphonePage";
import HeadphonePage from "./pages/HeadphonePage";
import SpeakerPage from "./pages/SpeakerPage";
import CheckoutPage from "./pages/CheckoutPage";
import SingleProductPage from "./pages/SingleProductPage";
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/earphones" element={<EarphonePage />} />
          <Route exact path="/headphones" element={<HeadphonePage />} />
          <Route exact path="/speakers" element={<SpeakerPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path='/product/:id' element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
