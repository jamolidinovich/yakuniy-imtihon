import React from "react";
import { Link } from "react-router-dom";
// import "./ProductList.css";

function ProductList({ data }) {
  return (
    <div className="flex flex-wrap m-[auto] w-[1248px] gap-[30px] mt-[50px]">
      {data &&
        data.length > 0 &&
        data.map((el, index) => (
          <Link key={index} to={`/product/${el.id}`}>
            <div className="product-card dd w-[152px] h-[204px] cursor-pointer">
              <div className="bg-slate-300 w-[150px] rounded-full h-[150px]">
                <img className="rounded-full" src={el.images[0]} alt="" />
              </div>
              <p className="text-center mt-1 text-[#191919]">{el.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default ProductList;
