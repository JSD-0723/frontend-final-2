import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderforMobile } from "./layout/header/HeaderforMobile";
import ImageCarousel from "./pages/Home/components/ImageCarousel";
import { carouselData } from "./data/carouselData";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderforMobile />
      <ImageCarousel data={carouselData} />

      <Routes>
        <Route path="/frontend-final-2" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
