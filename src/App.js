import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.component";
import Home from "./routes/Home/Home";
import Checkout from './routes/Checkout/Checkout';
import WishList from "./routes/WishList/WishList";
import About from "./routes/About/About";
import Lookbook from './routes/Lookbook/Lookbook';
import TermsAndConditions from "./routes/TermsAndConditions/TermsAndConditions";
import PageNotFound from './routes/PageNotFound/PageNotFound';
import ComingSoon from './routes/ComingSoon/ComingSoon';
import Blog from "./routes/Blog/Blog";
import BlogDetail from "./routes/BlogDetail/BlogDetail";
import Authentication from "./routes/Authentication/Authentication";
import Footer from './components/Footer/Footer.component';
import Shop from "./routes/Shop/Shop";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="about" element={<About />} />
        <Route path="lookbook" element={<Lookbook />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="page-not-found" element={<PageNotFound />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-detail" element={<BlogDetail />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
