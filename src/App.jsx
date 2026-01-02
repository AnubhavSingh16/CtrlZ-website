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

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <Router>
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
        <Route path="/about" element={<AboutUs />} />
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
