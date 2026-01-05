import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactUs";

import Home from "./pages/HomePage";
import VideoEditing from "./pages/VideoEditing";
import LogoDesign from "./pages/LogoDesign";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import Uipage from "./pages/Uipage";
import AiMarketing from "./pages/AiMarketing";
import AboutUs
 from "./pages/AboutUs";
import "./App.css";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUsPage";
import ScrollToTop from "./helper/ScrollToTop"; 
import GraphicDesign from "./pages/GraphicDesign";

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <Router>
     
       <ScrollToTop />
       
       {/* NAVBAR */}
      <Navbar onContactClick={() => setOpenContact(true)} />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/ui-development" element={<Uipage />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/logo-design" element={<LogoDesign />} />
        <Route path="/ai-marketing" element={<AiMarketing />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />



      </Routes>

      {/* FOOTER */}
      <Footer />

      <ContactModal
        open={openContact}
        onClose={() => setOpenContact(false)}
      />
    </Router>
  );
}

export default App;
