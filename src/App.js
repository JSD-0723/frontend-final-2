import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HeaderforMobile } from "./layout/header/HeaderforMobile";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/Category/Category";
import ProductPage from "./pages/Product/Product";
import SignUp from "./pages/Registration/Registration";
import Login from "./pages/Registration/Login";
import "./App.css";
import SearchResult from "./components/SearchResult";
import Checkout from "./pages/Checkout/Checkout";
import ProductsPage from "./pages/Products/Products";
import BrandsPage from "./pages/Brands/Brands";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserName] = useState(null);
  return (
    <BrowserRouter>
      <Header setIsLoggedIn={setIsLoggedIn} isloggedIn={isLoggedIn} setUserName={setUserName}/>
      {/* {isLoggedIn ? `${userDetails} is Logged in!` : `User is not logged in`} */}

      <HeaderforMobile />
      <Routes>
        <Route path="/frontend-final-2" element={<Home />} />
        <Route path="/frontend-final-2/about" element={<About />} />
        <Route path="/frontend-final-2/signup" element={<SignUp />} />
        <Route path="/frontend-final-2/checkout" element={<Checkout />} />

        <Route
          path="/frontend-final-2/login"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} isloggedIn={isLoggedIn} setUserName={setUserName} />
          }
        />

      
        <Route
          path="/frontend-final-2/category/:categoryName/:id"
          element={<ProductPage />}
        />
        <Route
          path="/frontend-final-2/searchresult/:search"
          element={<SearchResult />}
        />

        <Route
          path="/frontend-final-2/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route path="/frontend-final-2/checkout" element={<Checkout />} />
        <Route path="/frontend-final-2/products" element={<ProductsPage />} />
        <Route path="/frontend-final-2/brands/:brandName" element={<BrandsPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
