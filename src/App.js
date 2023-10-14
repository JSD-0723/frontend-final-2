import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BannerLayout } from "./layout/BannerLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderforMobile } from "./layout/header/HeaderforMobile";
import ImageCarousel from "./components/ImageCarousel";
import { carouselData } from "./helper/carouselData";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderforMobile />
      <BannerLayout />
      {/*<ImageCarousel data={carouselData} />*/}
      <Routes>
        <Route path="/frontend-final-2" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
