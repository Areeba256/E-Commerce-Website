import React from "react";
import { Link } from "react-router-dom";
import "./Topheader.css";

const Topheader = () => {
  return (
    <>
      <div className="main-header">
        <div className="header">
          <p className="para-1"></p>
          <p className="para-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link to="/" className="shop-now">
              ShopNow
            </Link>
          </p>
          <p className="para-3">English</p>
        </div>
      </div>
    </>
  );
};

export default Topheader;
