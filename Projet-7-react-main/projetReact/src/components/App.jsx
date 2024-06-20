
import Header from "./Header";
import{BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Appartement from "./Appartement";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="appartement/:id" element={<Appartement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
