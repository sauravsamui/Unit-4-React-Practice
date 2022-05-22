import React, { useState } from "react";
import CashButton from "./CashButton";
import Ratingbutton from "./Ratingbutton";
import Restaurants from "./Restaurants";
import SortingButton from "./SortingButton";
import data from "../data/data.json";
const Restaurantapp = () => {
  const [data1, setData1] = useState(data);
  let dataSortBy = (newData) => {
    //console.log(typeof newData)
    // if (newData == 1) {
      data1.sort((a,b) => b.costForTwo - a.costForTwo);
      setData1(data1);
      console.log(data1)
    //   // console.log(restauraData)
    // } else {
    //   data1.sort((a,b) => a.costForTwo - b.costForTwo);
    //   setData1(data1);
    //   //console.log(restauraData)
    // }
  //   switch (Number(newData)) {
  //     case 1:
  //       data1.sort((a,b) => b.costForTwo - a.costForTwo);
  //       setData1(data1);
  //       console.log(data1)
  //       break;
  //    default:
  //     data1.sort((a,b) => a.costForTwo - b.costForTwo);
  //     setData1(data1);
  // };
}
  let sortByRating = (rate) => {
    setData1(data);
    switch (rate) {
      case 1:
        let one = data1.filter((el) => el.rating > 1);
        setData1(one);
        break;
      case 2:
       
        let two = data1.filter((el) => el.rating > 2);
        setData1(two);
        break;
        case 3:
        let three = data1.filter((el) => el.rating > 3);
        setData1(three);
        break;
      default:
        let four = data1.filter((el) => el.rating > 4);
        setData1(four);
    }
  };

let sortByPayment=(value)=>{
  setData1(data);
  switch(value){
    case 1:
      data1.filter((el)=>(
        el.payment_methods.card === true
      ))
      setData1(data1);
      break;

      case 2:
        data1.filter((el)=>(
          el.payment_methods.cash === true
        ))
        setData1(data1);
        break;

        default:
          data1.filter((el)=>(
            el.payment_methods.card === true && el.payment_methods.cash === true && el.payment_methods.upi === true
          ))
          setData1(data1);
          break;
  }
}

  return (
    <>
      <div className="button_div">
        {/* <Ratingbutton sortByRating={sortByRating} />
        <CashButton sortByPayment={sortByPayment} /> */}
        <SortingButton dataSortBy={dataSortBy} />
      </div>
      {/* {console.log(data1)} */}
      <Restaurants restauraData={data1} />
    </>
  );
};

export default Restaurantapp;
