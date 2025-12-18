import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import './App.css'
// Service Pages

import VideoEditing from "./pages/VideoEditing";
import LogoDesign from "./pages/LogoDesign";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import Uipage from "./pages/Uipage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/ui-development" element={<Uipage />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/logo-design" element={<LogoDesign />} />

        {/* Add more pages later */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
