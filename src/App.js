import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderforMobile } from "./layout/header/HeaderforMobile";
import ImageCarousel from "./pages/Home/components/ImageCarousel";
import { carouselData } from "./data/carouselData";
import MakeupAndSkinCare from "../src/pages/Home/components/MakeupAndSkinCare";
import CategoryPage from "./pages/Category/Category";
import ProductPage from "./pages/Product/Product";
// import SearchResult from "./components/SearchResult";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderforMobile />
      <Routes>
        <Route path="/frontend-final-2" element={<Home />} />
        <Route path="/frontend-final-2/about" element={<About />} />
        <Route
          path="/frontend-final-2/category/:categoryName/:id"
          element={<ProductPage />}
        />   
        {/* <Route path="/frontend-final-2/SearchResult" element={<SearchResult />} /> */}

        <Route
          path="/frontend-final-2/category/:categoryName"
          element={<CategoryPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
