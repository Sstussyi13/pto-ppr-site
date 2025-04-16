import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Steps from "./pages/Steps";
import Contacts from "./pages/Contacts";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // длительность анимации
      once: true       // анимация один раз при скролле
    });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
}
