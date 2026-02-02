import React from "react";
import "./Flashsales.css";
import Timer from "./Timer";

const Flashsales = () => {
  return (
    <>
      <div className="flashSaleMain">
        <div className="flashSalesContainer">
          <div className="head">
            <div className="today">
              <div className="sidedec"></div>
              <div className="todayText">Today's</div>
            </div>
            <div className="flashsales">
              <div className="headings">
                <div className="Flashhead">
                  <h1>Flash Sales</h1>
                </div>
                <div className="timer">
                  <Timer endDate={"2024-09-30"} />
                </div>
              </div>
              <div className="left-right-buttons">
                <button className="left">left</button>
                <button className="right">right</button>
              </div>
            </div>
            <div className="cards"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashsales;
