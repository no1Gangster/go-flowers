import React from "react";
import QuickLinks from "./quickLinks";
import ProductBody from "./productBody";
import "./productPage.css"
function ProductPage () {
    return(
        <div id = "container">   
            <QuickLinks id = "qlinks"/>
            <ProductBody />
        </div>
    );
}

export default ProductPage;