import CartBody from "./cart/cartBody";
import Orders from "./orders/orders";
import Payment from "./payment/payment";
import ProductDesc from "./productDesc/productDesc";
import ProductPage from "./productPage/productPage";
import { Route , Routes } from "react-router-dom";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/summer" element={<ProductPage />} />
            <Route path="/product-desc" element={<ProductDesc />} />
            <Route path="/cart" element={<CartBody />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
    );
}

export default AllRoutes;