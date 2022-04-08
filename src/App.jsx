import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import { CartProvider } from "./CartContext";
import Nav from "./components/Nav";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <CartProvider>
        <Nav />

        <Routes>
          {/* <Route path="/" element={<Product />} /> */}
          <Route index element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
