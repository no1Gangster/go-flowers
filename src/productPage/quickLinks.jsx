import React from "react";
import "./quickLinks.css";
import { Link } from "react-router-dom";

function QuickLinks() {
  return (
    <div id="left_box">
      <div id="linkbox1">
        <h4>POPULAR SUMMER FLOWERS</h4>
        <Link to={"/summer"}>Summer</Link>
        <Link>Daises</Link>
        <Link>Roses</Link>
        <Link>Lilies</Link>
      </div>
      <div id="linkbox2">
        <h4>SUMMER OCCASIONS</h4>
        <Link>Pride</Link>
        <Link>Father's day</Link>
        <Link>Fourth of July</Link>
        <Link>Summer BBQs & Grilling</Link>
        <Link>Summer Birthday</Link>
      </div>
    </div>
  );
}

export default QuickLinks;
