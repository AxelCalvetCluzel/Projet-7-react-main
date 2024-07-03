
import Header from "./Header";
import{BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Appartement from "./Appartement";
import Footer from "./Footer";
import NotFound from "./NotFound"; 
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="appartement/:id" element={<Appartement/>} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
