import ProductDesc from "./productDesc/productDesc";
import ProductPage from "./productPage/productPage";
import { Route , Routes } from "react-router-dom";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/summer" element={<ProductPage />} />
            <Route path="/product-desc" element={<ProductDesc />} />
        </Routes>
    );
}

export default AllRoutes;