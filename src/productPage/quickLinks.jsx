import React from "react";
import "./quickLinks.css";
import { Link } from "react-router-dom";

function QuickLinks () {
    return(
        <div>
            <div id="linkbox1">
                <h4>Popular Categeories</h4>
                <Link to = {"/summer"}><a>Summer</a></Link>
                <a href="#">Birthday</a>
                <a href="#">Plants</a>
            </div>
            <div id="linkbox2">
                <h4>Popular Categeories</h4>
                <a href="#">Summer</a>
                <a href="#">Birthday</a>
                <a href="#">Plants</a>
            </div>
        </div>
    );
}

export default QuickLinks;