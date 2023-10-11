import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home";
import { BannerLayout } from './layout/BannerLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HeaderforMobile } from "./layout/header/HeaderforMobile";
import Carousel from '../src/components/Carousel';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderforMobile />
      <BannerLayout />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
