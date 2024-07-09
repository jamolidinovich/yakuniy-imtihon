// import React, { useEffect, useState } from "react";
// import Frame from "../assets/Frame.png";
// import svg from "../assets/svg.png";
// import div1 from "../assets/div (1).png";
// import div2 from "../assets/div (2).png";
// import div from "../assets/div.png";
// import "./AllHeader.css";
// function Mahsulot({ filterValue }) {
//   console.log(9, filterValue);
//   const [data, setData] = useState();
//   const [dataSecond, setDatasecond] = useState([]);
//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const first14Products = data.slice(0, 14);
//         setData(first14Products);
//         setDatasecond(first14Products);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   console.log(data);
//   useEffect(() => {
//     if (filterValue) {
//       const filterData = dataSecond.filter(
//         (el) => el.category.name == filterValue
//       );

//       setData(filterData);
//     } else {
//       setData(dataSecond);
//     }

//   }, [filterValue]);
//   return (
//     <div className="flex flex-wrap m-[auto] w-[1248px] gap-[30px] mt-[50px]">
//       {data &&
//         data.length > 0 &&
//         data.map((el, index) => (
//           <div key={index} className=" dd w-[152px] h-[204px]  cursor-pointer">
//             <div className="bg-slate-300 w-[150px] rounded-full h-[150px]">
//               <img className=" rounded-full" src={el.images[0]} alt="" />
//             </div>
//             <p className="text-center mt-1 text-[#191919]">{el.title}</p>
//           </div>
//         ))}
//       <div>
//         <div className="flex items-center gap-[30px] mt-10 ml-[-12px]">
//           <h3 className="Score text-[#191919] ">Score these trending kicks</h3>
//           <button className="See_all text-[#191919]">
//             {" "}
//             See all <img className=" w-[18px] h-[18px]" src={Frame} alt="" />
//           </button>
//         </div>
//         <div className="flex items-center justify-between">
//           <div className=" border-2 h-[250px] w-[932px] mt-2 flex justify-between">
//             <div className="w-[332px] pl-[32px] pt-[16px]">
//               <p className="upp mt-2">Featured</p>
//               <img className="mb-3" src={div} alt="" />
//               <h2 className=" text-xl text-[#191919]">
//                 Deals made easy all year long.
//               </h2>
//               <p className="upp mt-1">Free shipping. Best prices.</p>
//               <button className="flex items-center mt-[15px] w-[180px] h-[43px] Shop">
//                 Get your thing
//                 <img className="mt-1" src={svg} alt="" />
//               </button>
//             </div>
//             <div>
//               <img src={div1} alt="" />
//             </div>
//           </div>
//           <img className="h-[249px] mt-2 " src={div2} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mahsulot;

import React, { useEffect, useState } from "react";
import Frame from "../assets/Frame.png";
import svg from "../assets/svg.png";
import div1 from "../assets/div (1).png";
import div2 from "../assets/div (2).png";
import div from "../assets/div.png";
import "./AllHeader.css";

function Mahsulot({ data, filterValue, searchValue }) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredProducts = data;

    if (filterValue) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.name === filterValue
      );
    }

    if (searchValue) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredData(filteredProducts.slice(0, 14)); // Limiting to first 14 filtered products
  }, [data, filterValue, searchValue]);

  return (
    <div className="flex flex-wrap m-[auto] w-[1248px] gap-[30px] mt-[50px]">
      {filteredData.map((product, index) => (
        <div key={index} className=" dd w-[152px] h-[204px]  cursor-pointer">
          <div className="bg-slate-300 w-[150px] rounded-full h-[150px]">
            <img className=" rounded-full" src={product.images[0]} alt="" />
          </div>
          <p className="text-center mt-1 text-[#191919]">{product.title}</p>
        </div>
      ))}
      <div>
        <div className="flex items-center gap-[30px] mt-10 mb-10 ml-[-12px]">
          <h3 className="Score text-[#191919]  ">Score these trending kicks</h3>
          <button className="See_all text-[#191919]">
            {" "}
            See all <img className=" w-[18px] h-[18px]" src={Frame} alt="" />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className=" border-2 h-[250px] w-[932px] mt-2 flex justify-between">
            <div className="w-[332px] pl-[32px] pt-[16px]">
              <p className="upp mt-2">Featured</p>
              <img className="mb-3" src={div} alt="" />
              <h2 className=" text-xl text-[#191919]">
                Deals made easy all year long.
              </h2>
              <p className="upp mt-1">Free shipping. Best prices.</p>
              <button className="flex items-center mt-[15px] w-[180px] h-[43px] Shop">
                Get your thing
                <img className="mt-1" src={svg} alt="" />
              </button>
            </div>
            <div>
              <img src={div1} alt="" />
            </div>
          </div>
          <img className="h-[249px] mt-2 " src={div2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Mahsulot;
