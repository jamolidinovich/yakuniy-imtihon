import React, { useEffect, useState } from "react";
import Frame from "../assets/Frame.png";
import Footer from "./Footer";
function Shipping({ filterValue }) {
  const [dataa, setDataa] = useState();
  const [dataSecond, setDatasecond] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const first14Products = data.slice(15, 30);
        setDataa(first14Products);
        setDatasecond(first14Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (filterValue) {
      const filterData = dataSecond.filter(
        (el) => el.category.name == filterValue
      );

      setDataa(filterData);
    } else {
      setDataa(dataSecond);
    }
  }, [filterValue]);
  return (
    <div>
      <div className="w-[1248px] m-[auto]">
        <div className="flex items-center gap-[30px]  mt-10 mb-10 text-[#191919] mb-[15px] ">
          <h3 className="Score  text-[#191919]">
            Today's Deals – All With Free Shipping
          </h3>
          <button className="See_all">
            See all <img className=" w-[18px] h-[18px]" src={Frame} alt="" />
          </button>
        </div>
        <div className="flex flex-wrap w-[1248px] m-[auto] gap-11">
          {dataa &&
            dataa.length > 0 &&
            dataa.map((el, index) => (
              <div
                key={index}
                className="dd w-[210px] h-[265px] cursor-pointer"
              >
                <div className="bg-[#FAFAFA] w-[210px]  h-[210px] pt-[30px]">
                  <img
                    className="w-[150px] h-[150px] ml-[30px] "
                    src={el.images[0]}
                    alt=""
                  />
                </div>
                <p className=" text-xl mt-1 text-[#191919] font-bold">
                  ${el.price}
                </p>
                <p className="line-through">$119.99 · 80% OFF </p>
              </div>
            ))}
        </div>
      </div>
      <hr className="text-[#CCCCCC] mt-[50px] mb-[50px] border" />
      <Footer></Footer>
    </div>
  );
}

export default Shipping;
