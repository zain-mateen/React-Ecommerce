import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./routes/Home/Home";
import Checkout from "./routes/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
