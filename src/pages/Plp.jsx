// import React from "react";
// import AllHeader from "../components/AllHeader";
// import img from "../assets/div1.png";
// import { useNavigate } from "react-router-dom";
// function Plp() {
//   const navigate = useNavigate();
//   function handelClick() {
//     navigate("/pdp/4");
//   }
//   return (
//     <div>
//       <div>
//         <AllHeader></AllHeader>
//         <div className="w-[1028px] m-[auto]">
//           <div className="flex flex-wrap justify-between">
//             <div
//               id="6"
//               onClick={handelClick}
//               className="w-[257px] h-[472px] p-2 bg-slate-300"
//             >
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//             <div className="w-[257px] h-[472px] p-2 bg-slate-300">
//               <img
//                 className="w-[241px] rounded-xl h-[241px]"
//                 src={img}
//                 alt=""
//               />
//               <p className="mb-2 text-[#111820]">
//                 Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB -
//                 3 YEAR WARRANTY
//               </p>
//               <h3 className="text-[#111820] font-bold">$299.00</h3>
//               <span className="block mt-2">Was: $598.00</span>
//               <span>Free shipping</span>
//               <div className="flex items-center justify-between mt-7">
//                 <h2>SPONSORED</h2>
//                 <span>🖤</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plp;
//  const products = [
//    {
//      id: 1,
//      name: 'Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB - 3 YEAR WARRANTY',
//      price: "$299.00",
//      oldPrice: "Was: $598.00",
//      free: "Free shipping",
//      img: img1,
//      category: "Clothes",
//    },
//    {
//      id: 2,
//      name: 'Apple MacBook Pro 15" 16GB i7 3.7Ghz - Retina 1TB SSD Monterey - 3 Year Warranty',
//      price: "$599.00",
//      oldPrice: "Was: $1,198.00",
//      free: "",
//      img: img2,
//      category: "Clothes",
//    },
//    {
//      id: 3,
//      name: "Apple iPhone 11 - 64GB - Factory Unlocked - Very Good Condition",
//      color: "black",
//      price: "$294.99",
//      oldPrice: "398 sold",
//      free: "",
//      img: img3,
//      category: "Clothes",
//    },
//    {
//      id: 4,
//      name: "Apple iPhone 11 64GB Factory Unlocked 4G LTE Smartphone - Very Good",
//      color: "black",
//      price: "$289.99",
//      oldPrice: "Was: $699.99",
//      free: "eBay Refurbished",
//      img: img4,
//    },
//    {
//      id: 5,
//      name: "Apple iPhone 11 - 128GB 64GB - GSM+CDMA Factory Unlocked 'Excellent'",
//      color: "black",
//      price: "$224.00 to $410.00",
//      oldPrice: "18 watching",
//      free: "Free shipping",
//      img: img5,
//    },
//    {
//      id: 6,
//      name: "Apple iPhone 12 Pro - 128GB - All Colors - (Unlocked) - C Stock'",
//      price: "$399.99",
//      oldPrice: "89 watching",
//      free: "Free shipping",
//      img: img6,
//    },
//    {
//      id: 7,
//      name: "Apple iPhone 12 mini 64GB Unlocked AT&T T-Mobile Verizon Very Good Condition",
//      color: "black",
//      price: "$294.95",
//      oldPrice: "Was: $699.00",
//      free: "eBay Refurbished",
//      img: img7,
//    },
//    {
//      id: 8,
//      name: "Apple iPhone 12 Pro Max 5G A2342 128/256/512GB AT&T Verizon Unlocked Good",
//      price: "$459.99 to $649.99",
//      oldPrice: "Free shipping",
//      free: "",
//      img: img8,
//    },
//    {
//      id: 9,
//      name: "Apple iPhone 12 Pro Max A2342 128GB Unlocked Good Condition",
//      color: "black",
//      price: "$545.00 to $585.99",
//      oldPrice: "76 sold",
//      free: "eBay Refurbished",
//      img: img9,
//    },
//    {
//      id: 10,
//      name: "Apple iPhone 11 64GB 128GB 256GB GSM UNLOCKED, VERIZON UNLOCKED Fair",
//      color: "black",
//      price: "$239.99 to $309.99",
//      oldPrice: "10 sold",
//      free: "Free shipping",
//      img: img10,
//    },
//    {
//      id: 11,
//      name: "Apple iPhone 12 64GB Unlocked Smartphone - Very Good",
//      color: "black",
//      price: "$379.95",
//      oldPrice: "Was: $799.00",
//      free: "Free shipping",
//      img: img11,
//    },
//    {
//      id: 12,
//      name: "Apple iPad Mini 2 2nd Gen 16GB Wi-Fi 7.9 Space Gray A1489 Tested Good Condition",
//      price: "$39.95",
//      oldPrice: "or Best Offer",
//      free: "Free shipping",
//      img: img12,
//    },

//    // Other products here...
//  ];

// import React, { useState, useEffect } from "react";
// import AllHeader from "../components/AllHeader";
// import { useNavigate } from "react-router-dom";
// import img1 from "../assets/div (4).png";
// import img2 from "../assets/div (5).png";
// import img3 from "../assets/div (6).png";
// import img4 from "../assets/div (7).png";
// import img5 from "../assets/div (8).png";
// import img6 from "../assets/div (9).png";
// import img7 from "../assets/div (10).png";
// import img8 from "../assets/div (11).png";
// import img9 from "../assets/div (12).png";
// import img10 from "../assets/div (13).png";
// import img11 from "../assets/div (14).png";
// import img12 from "../assets/div (15).png";

// function Plp() {
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const products = [
//     {
//       id: 1,
//       name: 'Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB - 3 YEAR WARRANTY',
//       price: "$299.00",
//       oldPrice: "Was: $598.00",
//       free: "Free shipping",
//       img: img1,
//       category: "Clothes",
//     },
//     {
//       id: 2,
//       name: 'Apple MacBook Pro 15" 16GB i7 3.7Ghz - Retina 1TB SSD Monterey - 3 Year Warranty',
//       price: "$599.00",
//       oldPrice: "Was: $1,198.00",
//       free: "",
//       img: img2,
//       category: "Clothes",
//     },
//     {
//       id: 3,
//       name: "Apple iPhone 11 - 64GB - Factory Unlocked - Very Good Condition",
//       color: "black",
//       price: "$294.99",
//       oldPrice: "398 sold",
//       free: "",
//       img: img3,
//       category: "Clothes",
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 11 64GB Factory Unlocked 4G LTE Smartphone - Very Good",
//       color: "black",
//       price: "$289.99",
//       oldPrice: "Was: $699.99",
//       free: "eBay Refurbished",
//       img: img4,
//     },
//     {
//       id: 5,
//       name: "Apple iPhone 11 - 128GB 64GB - GSM+CDMA Factory Unlocked 'Excellent'",
//       color: "black",
//       price: "$224.00 to $410.00",
//       oldPrice: "18 watching",
//       free: "Free shipping",
//       img: img5,
//     },
//     {
//       id: 6,
//       name: "Apple iPhone 12 Pro - 128GB - All Colors - (Unlocked) - C Stock'",
//       price: "$399.99",
//       oldPrice: "89 watching",
//       free: "Free shipping",
//       img: img6,
//     },
//     {
//       id: 7,
//       name: "Apple iPhone 12 mini 64GB Unlocked AT&T T-Mobile Verizon Very Good Condition",
//       color: "black",
//       price: "$294.95",
//       oldPrice: "Was: $699.00",
//       free: "eBay Refurbished",
//       img: img7,
//     },
//     {
//       id: 8,
//       name: "Apple iPhone 12 Pro Max 5G A2342 128/256/512GB AT&T Verizon Unlocked Good",
//       price: "$459.99 to $649.99",
//       oldPrice: "Free shipping",
//       free: "",
//       img: img8,
//     },
//     {
//       id: 9,
//       name: "Apple iPhone 12 Pro Max A2342 128GB Unlocked Good Condition",
//       color: "black",
//       price: "$545.00 to $585.99",
//       oldPrice: "76 sold",
//       free: "eBay Refurbished",
//       img: img9,
//     },
//     {
//       id: 10,
//       name: "Apple iPhone 11 64GB 128GB 256GB GSM UNLOCKED, VERIZON UNLOCKED Fair",
//       color: "black",
//       price: "$239.99 to $309.99",
//       oldPrice: "10 sold",
//       free: "Free shipping",
//       img: img10,
//     },
//     {
//       id: 11,
//       name: "Apple iPhone 12 64GB Unlocked Smartphone - Very Good",
//       color: "black",
//       price: "$379.95",
//       oldPrice: "Was: $799.00",
//       free: "Free shipping",
//       img: img11,
//     },
//     {
//       id: 12,
//       name: "Apple iPad Mini 2 2nd Gen 16GB Wi-Fi 7.9 Space Gray A1489 Tested Good Condition",
//       price: "$39.95",
//       oldPrice: "or Best Offer",
//       free: "Free shipping",
//       img: img12,
//     },

//     // Other products here...
//   ];
//   const [likedProducts, setLikedProducts] = useState({});

//   useEffect(() => {
//     const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
//     setLikedProducts(storedLikes);
//   }, []);

//   function handleClick(id) {
//     const product = products.find((p) => p.id === id);
//     if (product) {
//       localStorage.setItem("selectedProduct", JSON.stringify(product));
//       navigate(`/pdp/${id}`);
//     }
//   }

//   function handleLike(id) {
//     const updatedLikes = { ...likedProducts, [id]: !likedProducts[id] };
//     setLikedProducts(updatedLikes);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
//   }

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <div>
//       <AllHeader
//         data={products}
//         setSearchValue={setSearchValue}
//         setFilterValue={setFilterValue}
//         filterValue={filterValue}
//       />
//       <div className="w-[1028px] m-[auto]">
//         <div className="flex flex-wrap justify-between">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="w-[257px] h-[472px] p-2 cursor-pointer"
//             >
//               <div
//                 className="h-[435px]"
//                 onClick={() => handleClick(product.id)}
//               >
//                 <img
//                   className="w-[241px] rounded-xl h-[241px]"
//                   src={product.img}
//                   alt={product.name}
//                 />
//                 <p className="mb-2 text-[14px] text-[#111820]">
//                   {product.name}
//                 </p>
//                 <span>{product.color} </span>
//                 <h3 className="text-[#111820] font-bold">{product.price}</h3>
//                 <span className="block mt-2">{product.oldPrice}</span>
//                 <span>{product.free}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <h2>SPONSORED</h2>
//                 <span
//                   onClick={() => handleLike(product.id)}
//                   style={{ cursor: "pointer" }}
//                   className="block w-[28px] h-[28px] border rounded-full pl-[2px]"
//                 >
//                   {likedProducts[product.id] ? "💙" : "🤍"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plp;

// import React, { useState, useEffect } from "react";
// import AllHeader from "../components/AllHeader";
// import { useNavigate } from "react-router-dom";
// import img1 from "../assets/div (4).png";
// import img2 from "../assets/div (5).png";
// import img3 from "../assets/div (6).png";
// import img4 from "../assets/div (7).png";
// import img5 from "../assets/div (8).png";
// import img6 from "../assets/div (9).png";
// import img7 from "../assets/div (10).png";
// import img8 from "../assets/div (11).png";
// import img9 from "../assets/div (12).png";
// import img10 from "../assets/div (13).png";
// import img11 from "../assets/div (14).png";
// import img12 from "../assets/div (15).png";

// function Plp() {
//   const navigate = useNavigate();
//   const [searchValue, setSearchValue] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const products = [
//     {
//       id: 1,
//       name: 'Apple 13" MacBook Air Big Sur 2.7Ghz i5 TURBO - 256GB SSD 8GB - 3 YEAR WARRANTY',
//       price: "$299.00",
//       oldPrice: "Was: $598.00",
//       free: "Free shipping",
//       img: img1,
//       category: "Electronics",
//     },
//     {
//       id: 2,
//       name: 'Apple MacBook Pro 15" 16GB i7 3.7Ghz - Retina 1TB SSD Monterey - 3 Year Warranty',
//       price: "$599.00",
//       oldPrice: "Was: $1,198.00",
//       free: "",
//       img: img2,
//       category: "Electronics",
//     },
//     {
//       id: 3,
//       name: "Apple iPhone 11 - 64GB - Factory Unlocked - Very Good Condition",
//       color: "black",
//       price: "$294.99",
//       oldPrice: "398 sold",
//       free: "",
//       img: img3,
//       category: "Electronics",
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 11 64GB Factory Unlocked 4G LTE Smartphone - Very Good",
//       color: "black",
//       price: "$289.99",
//       oldPrice: "Was: $699.99",
//       free: "eBay Refurbished",
//       img: img4,
//       category: "Electronics",
//     },
//     {
//       id: 5,
//       name: "Apple iPhone 11 - 128GB 64GB - GSM+CDMA Factory Unlocked 'Excellent'",
//       color: "black",
//       price: "$224.00 to $410.00",
//       oldPrice: "18 watching",
//       free: "Free shipping",
//       img: img5,
//       category: "Electronics",
//     },
//     {
//       id: 6,
//       name: "Apple iPhone 12 Pro - 128GB - All Colors - (Unlocked) - C Stock'",
//       price: "$399.99",
//       oldPrice: "89 watching",
//       free: "Free shipping",
//       img: img6,
//       category: "Electronics",
//     },
//     {
//       id: 7,
//       name: "Apple iPhone 12 mini 64GB Unlocked AT&T T-Mobile Verizon Very Good Condition",
//       color: "black",
//       price: "$294.95",
//       oldPrice: "Was: $699.00",
//       free: "eBay Refurbished",
//       img: img7,
//       category: "Electronics",
//     },
//     {
//       id: 8,
//       name: "Apple iPhone 12 Pro Max 5G A2342 128/256/512GB AT&T Verizon Unlocked Good",
//       price: "$459.99 to $649.99",
//       oldPrice: "Free shipping",
//       free: "",
//       img: img8,
//       category: "Electronics",
//     },
//     {
//       id: 9,
//       name: "Apple iPhone 12 Pro Max A2342 128GB Unlocked Good Condition",
//       color: "black",
//       price: "$545.00 to $585.99",
//       oldPrice: "76 sold",
//       free: "eBay Refurbished",
//       img: img9,
//       category: "Electronics",
//     },
//     {
//       id: 10,
//       name: "Apple iPhone 11 64GB 128GB 256GB GSM UNLOCKED, VERIZON UNLOCKED Fair",
//       color: "black",
//       price: "$239.99 to $309.99",
//       oldPrice: "10 sold",
//       free: "Free shipping",
//       img: img10,
//       category: "Electronics",
//     },
//     {
//       id: 11,
//       name: "Apple iPhone 12 64GB Unlocked Smartphone - Very Good",
//       color: "black",
//       price: "$379.95",
//       oldPrice: "Was: $799.00",
//       free: "Free shipping",
//       img: img11,
//       category: "Electronics",
//     },
//     {
//       id: 12,
//       name: "Apple iPad Mini 2 2nd Gen 16GB Wi-Fi 7.9 Space Gray A1489 Tested Good Condition",
//       price: "$39.95",
//       oldPrice: "or Best Offer",
//       free: "Free shipping",
//       img: img12,
//       category: "Electronics",
//     },
//     // Other products here...
//   ];
//   const [likedProducts, setLikedProducts] = useState({});

//   useEffect(() => {
//     const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
//     setLikedProducts(storedLikes);
//   }, []);

//   function handleClick(id) {
//     const product = products.find((p) => p.id === id);
//     if (product) {
//       localStorage.setItem("selectedProduct", JSON.stringify(product));
//       navigate(`/pdp/${id}`);
//     }
//   }

//   function handleLike(id) {
//     const updatedLikes = { ...likedProducts, [id]: !likedProducts[id] };
//     setLikedProducts(updatedLikes);
//     localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
//   }

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchValue.toLowerCase());
//     const matchesCategory = filterValue
//       ? product.category === filterValue
//       : true;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div>
//       <AllHeader
//         data={products}
//         setSearchValue={setSearchValue}
//         setFilterValue={setFilterValue}
//         filterValue={filterValue}
//       />
//       <div className="w-[1028px] m-[auto]">
//         <div className="flex flex-wrap justify-between">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="w-[257px] h-[472px] p-2 cursor-pointer"
//             >
//               <div
//                 className="h-[435px]"
//                 onClick={() => handleClick(product.id)}
//               >
//                 <img
//                   className="w-[241px] rounded-xl h-[241px]"
//                   src={product.img}
//                   alt={product.name}
//                 />
//                 <p className="mb-2 text-[14px] text-[#111820]">
//                   {product.name}
//                 </p>
//                 <span>{product.color} </span>
//                 <h3 className="text-[#111820] font-bold">{product.price}</h3>
//                 <span className="block mt-2">{product.oldPrice}</span>
//                 <span>{product.free}</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <h2>SPONSORED</h2>
//                 <span
//                   onClick={() => handleLike(product.id)}
//                   style={{ cursor: "pointer" }}
//                   className="block w-[28px] h-[28px] border rounded-full pl-[2px]"
//                 >
//                   {likedProducts[product.id] ? "💙" : "🤍"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Plp;

import React, { useState, useEffect } from "react";
import AllHeader from "../components/AllHeader";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/div (4).png";
import img2 from "../assets/div (5).png";
import img3 from "../assets/div (6).png";
import img4 from "../assets/div (7).png";
import img5 from "../assets/div (8).png";
import img6 from "../assets/div (9).png";
import img7 from "../assets/div (10).png";
import img8 from "../assets/div (11).png";
import img9 from "../assets/div (12).png";
import img10 from "../assets/div (13).png";
import img11 from "../assets/div (14).png";
import img12 from "../assets/div (15).png";
import img16 from "../assets/div (16).png";
import span from "../assets/span.svg";
import "./Plp.css";
function Plp() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const products = [
    {
      id: 1,
      name: 'Apple 13" MacBook Air ',
      price: "$299.00",
      oldPrice: "Was: $598.00",
      free: "Free shipping",
      img: img1,
      category: {
        name: "Electronics",
      },
      ebay: "eBay Refurbished",
      sold: "",
      Carrier: "Big Sur",
      gb: "256GB SSD 8GB",
      Cosmetic: "YEAR WARRANTY",
    },
    {
      id: 2,
      name: "Apple MacBook Pro 15",
      price: "$599.00",
      oldPrice: "Was: $1,198.00",
      free: "",
      img: img2,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "",
      Carrier: "Retina Monterey",
      gb: "16GB",
      Cosmetic: "Year Warranty",
    },
    {
      id: 3,
      name: "Apple iPhone 11",
      color: "black",
      price: "$294.99",
      oldPrice: "398 sold",
      free: "",
      img: img3,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "389 sold",
      Carrier: "Factory Unlocked",
      gb: "64GB",
      Cosmetic: "Very Good Condition",
    },
    {
      id: 4,
      name: "Apple iPhone 11",
      color: "black",
      price: "$289.99",
      oldPrice: "Was: $699.99",
      free: "",
      img: img4,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "8,061 sold",
      Carrier: "Factory Unlocked",
      gb: "64GB",
      Cosmetic: "Smartphone - Very Good",
    },
    {
      id: 5,
      name: "Apple iPhone 11",
      color: "black",
      price: "$224.00 to $410.00",
      free: "Free shipping",
      img: img5,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "18 watching",
      Carrier: "Factory Unlocked",
      gb: "128GB 64GB",
      Cosmetic: "Excellent",
    },
    {
      id: 6,
      name: "Apple iPhone 12 Pro",
      price: "$399.99",
      oldPrice: "89 watching",
      free: "Free shipping",
      img: img6,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "89 watching",
      Carrier: "All Colors",
      gb: "128GB",
      Cosmetic: "C Stock",
    },
    {
      id: 7,
      name: "Apple iPhone 12 mini",
      color: "black",
      price: "$294.95",
      oldPrice: "Was: $699.00",
      free: "",
      img: img7,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "239 sold",
      Carrier: "T-Mobile Verizon",
      gb: "64GB",
      Cosmetic: "Very Good Condition",
    },
    {
      id: 8,
      name: "Apple iPhone 12 Pro Max",
      price: "$459.99 to $649.99",
      oldPrice: "Free shipping",
      free: "",
      img: img8,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "76 sold",
      Carrier: "Verizon",
      gb: "128/256/512GB",
      Cosmetic: "Unlocked Good",
    },
    {
      id: 9,
      name: "Apple iPhone 12 Pro Max",
      color: "black",
      price: "$545.00 to $585.99",
      oldPrice: "76 sold",
      free: "",
      img: img9,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "10 sold",
      Carrier: " Unlocked",
      gb: "128GB",
      Cosmetic: "Condition",
    },
    {
      id: 10,
      name: "Apple iPhone 11",
      color: "black",
      price: "$239.99 to $309.99",
      free: "Free shipping",
      img: img10,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "233 sold",
      Carrier: " Unlocked",
      gb: " 64GB 128GB 256GB",
      Cosmetic: "VERIZON UNLOCKED ",
    },
    {
      id: 11,
      name: "Apple iPhone 12 ",
      color: "black",
      price: "$379.95",
      oldPrice: "Was: $799.00",
      free: "Free shipping",
      img: img11,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "77 sold",
      Carrier: " Unlocked",
      gb: " 64GB ",
      Cosmetic: "Smartphone - Very Good",
    },
    {
      id: 12,
      name: "Apple iPad Mini",
      price: "$39.95",
      oldPrice: "or Best Offer",
      free: "Free shipping",
      img: img12,
      category: "Electronics",
      ebay: "eBay Refurbished",
      sold: "14 sold",
      Carrier: " Space Gray",
      gb: " 16GB ",
      Cosmetic: " Good Condition",
    },
    // Other products here...
  ];
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem("likedProducts")) || {};
    setLikedProducts(storedLikes);
  }, []);

  function handleClick(id) {
    const product = products.find((p) => p.id === id);
    if (product) {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      navigate(`/pdp/${id}`);
    }
  }

  function handleLike(id) {
    const updatedLikes = { ...likedProducts, [id]: !likedProducts[id] };
    setLikedProducts(updatedLikes);
    localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesCategory = filterValue
      ? product.category === filterValue
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <AllHeader
        data={products}
        setSearchValue={setSearchValue}
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />
      <div className="m-[auto] w-[1004px]">
        <h1 className="text-2xl  font-normal text-[#333333] mt-2 mb-2">
          Featured Event
        </h1>
        <img className="m-[auto]" src={img16} alt="" />
        <h2 className="text-xl ml-2 mt-7 text-[#333333]">
          Up to 60% off Apple tech
        </h2>
        <p className="ml-2 mb-7">Save on AirPods, iPhones, and more.</p>
        <hr />
      </div>
      <div className="w-[1028px] m-[auto] mt-14">
        <div className="flex flex-wrap  justify-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[257px] mb-5 h-[480px] p-2 cursor-pointer card-container"
            >
              <div
                className="h-[435px]"
                onClick={() => handleClick(product.id)}
              >
                <img
                  className="w-[241px] rounded-xl h-[241px]"
                  src={product.img}
                  alt={product.name}
                />
                <p className="mb-2 text-[14px] text-[#111820]">
                  {product.name}
                </p>
                <span>{product.color || ""} </span>
                <h3 className="text-[#111820] font-bold">{product.price}</h3>
                <span className="text-[#DD1E31]">{product.sold}</span>
                <span className="block mt-2">{product.oldPrice}</span>
                <span> {product.free}</span>
                <span className="flex ">
                  {" "}
                  <img src={span} alt="" />
                  {product.ebay}
                </span>
              </div>
              <div className="flex items-center mt-2 justify-between">
                <h2>SPONSORED</h2>
                <span
                  onClick={() => handleLike(product.id)}
                  style={{ cursor: "pointer" }}
                  className="block w-[28px] h-[28px] border rounded-full pl-[2px]"
                >
                  {likedProducts[product.id] ? "💙" : "🤍"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="mt-20 mb-10" />
      </div>
      <div className="w-[1280px] m-[auto]">
        <div className="flex gap-[30px]">
          <Link className="footer_link">About eBay</Link>
          <Link className="footer_link">Announcements</Link>
          <Link className="footer_link">Community</Link>
          <Link className="footer_link">Security Center</Link>
          <Link className="footer_link">Seller Center</Link>
          <Link className="footer_link">Policies</Link>
          <Link className="footer_link">Affiliates</Link>
          <Link className="footer_link">Help & Contact</Link>
          <Link className="footer_link">Site Map</Link>
        </div>
        <Link className="mt-10 block">
          Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility
          User Agreement Privacy Payments Terms of Use Cookies Your Privacy
          Choices and AdChoice
        </Link>
      </div>
    </div>
  );
}

export default Plp;
