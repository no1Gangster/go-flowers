import CartBody from "./cart/cartBody";
import Orders from "./orders/orders";
import Payment from "./payment/payment";
import ProductDesc from "./productDesc/productDesc";
import ProductPage from "./productPage/productPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import Signin from "./signin/signin";
import Auth from "./Auth.js";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/summer" element={<ProductPage />} />
      <Route path="/product-desc" element={<ProductDesc />} />
      <Route path="/cart" element={<Auth><CartBody /></Auth>} />
      <Route path="/payment" element={<Auth><Payment /></Auth>} />
      <Route path="/orders" element={<Auth><Orders /></Auth>} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}
 
export default AllRoutes;
