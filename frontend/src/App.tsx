import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VideoPortfolio from "./pages/VideoPortfolio";
import Teaching_Resources from "./pages/Teaching_Resources";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/video_portfolio" element={<VideoPortfolio />} />
          <Route path="/teaching_resources" element={<Teaching_Resources />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
};

export default App;
