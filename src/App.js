import Footer from "./layout/footer/Footer";
import  Header  from "./layout/header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
          <BrowserRouter>
            <Header />
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/about" element={ <About/> }/>
            </Routes>
            <Footer />
         </BrowserRouter>
  );
}

export default App;
