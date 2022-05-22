import React from "react";
import style from "../styles/Button.module.css";

const buttonValue = {
  1: "High to Low",
  2: "Low to High",
};
const SortingButton = ({ dataSortBy }) => {
  return (
    <div className={style.rating_div}>
      <h3>Sort by:</h3>
      {Object.entries(buttonValue).map(([key, value]) => (
        <button key={key}
          type="button"
          className="btn btn-warning "
          onClick={() => {
            dataSortBy(key);
          }}
        >
          <span className="material-icons">sort</span>{value}
        </button>
      ))}

      {/* <button  type="button" className="btn btn-info "
     onClick={(e)=>{
      dataSortBy(2)
     }}> <span className="material-icons">sort</span>Low to high</button> */}
    </div>
  );
};

export default SortingButton;
