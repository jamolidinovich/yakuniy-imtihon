// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import AllHeader from "../components/AllHeader";
// import exit from "../assets/exit.svg";
// import "./Plp.css";

// function Pdp() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const storedProduct = localStorage.getItem("selectedProduct");
//     if (storedProduct) {
//       setProduct(JSON.parse(storedProduct));
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }
//   function handelAdd() {}
//   return (
//     <div>
//       <AllHeader />
//       <div className="w-[1460px] m-[auto] flex justify-between mb-[150px] items-center">
//         <div className="gap-6 flex items-center">
//           <Link to={"/plp"}>
//             <img src={exit} alt="exit" />
//           </Link>
//           <Link className="Back">Back to home page</Link>
//           <Link>| Listed in category:</Link>
//           <Link className="Back">Electronics</Link>
//           <Link className="Back">Cell Phones & Accessories</Link>
//           <Link className="Back">Cell Phones & Smartphones</Link>
//         </div>
//         <div className="flex gap-2 items-center">
//           <Link className="Back">Share</Link>|
//           <Link className="Back">Add to Watchlist</Link>
//         </div>
//       </div>
//       <div className="w-[1457px] m-[auto]">
//         <div className="flex ">
//           <h1 className="flex font-bold text-xl text-[#555555] ml-[-20px] mb-5">
//             EXTRA <h1 className="text-[red] ml-2 mr-2">$10</h1>OFF 3+ ITEMS WITH
//             CODE <h1 className="text-[red] ml-2 mr-2">10OFF2023TECH</h1>
//           </h1>
//           <p className="mt-2 ml-7 Back font-bold">
//             See all eligible items and terms
//           </p>
//         </div>
//         <div className="flex gap-10">
//           <div>
//             <div className="border w-[502px] h-[502px]">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-[366px] rounded-xl m-[auto]  h-[502px]"
//               />
//             </div>
//             <hr className="w-[499px] mt-10 mb-10" />
//             <div className="flex items-center ml-16 gap-7 mb-[89px]">
//               <h2 className=" font-bold">
//                 Upgrading? Sell it, don't trade it.
//               </h2>
//               <button className="border pl-7 pt-1 pb-1 text-[#0654BA] rounded  pr-7">
//                 Sell now
//               </button>
//             </div>
//           </div>
//           <div>
//             <h1 className="text-xl text-[#333333] font-bold">
//               Apple iPhone 11 A2111 - 64GB - Verizon GSM Unlocked AT&T <br />{" "}
//               T-Mobile Metro Cricket
//             </h1>
//             <hr className="w-[577px] mt-5 mb-5 text-[#CCCCCC] border" />
//             <div className="flex gap-5">
//               <h1 className="text-[#191919]">Condition:</h1>
//               <h2 className="">
//                 <h1 className="font-bold text-[#333333]">Open box</h1> <br />
//                 <h1 className="mt-[-17px]">
//                   “These phones are fully functional and will work on the
//                   network you <br /> choose. This listing contains ”...{" "}
//                   <span className="Back">Read more</span>
//                 </h1>
//               </h2>
//             </div>
//             <div className="flex gap-5">
//               <div>
//                 <h1>Model:</h1>
//                 <br />
//                 <h1>Carrier:</h1>
//                 <br />
//                 <h1>
//                   Storage <br /> Capacity:
//                 </h1>
//                 <br />
//                 <h1>Color:</h1>
//                 <br />
//                 <h1>Cosmetic:</h1>
//                 <br />
//                 <h1>Quantity:</h1>
//                 <br />
//               </div>
//               <div>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.name}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.Cosmetic}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-12">
//                   {product.gb}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.color ? product.color : "Not color"}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-4">
//                   {product.Cosmetic}
//                 </h1>
//                 <div className="flex gap-5">
//                   <div className="custom-select-container">
//                     <select className="custom-select">
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                     </select>
//                   </div>
//                   <h1 className="text-xl font-bold text-[#DD1E31]">
//                     Last One /{product.sold ? product.sold : "Not sold"}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="flex">
//               <div className="">
//                 <div className="flex gap-2">
//                   <h1>Price:</h1>
//                   <h2 className="text-2xl font-bold text-[#333333]">
//                     {product.price}
//                   </h2>
//                 </div>
//                 <p className="text-[#3665F3] ml-12 underline">
//                   No Interest if paid in full in 6 <br /> mo on $99+*
//                 </p>
//               </div>
//               <div className="ml-14 mt-[-10px]">
//                 <button className="now mt-2">Buy It Now</button>
//                 <br />
//                 <button className="add mt-2" onClick={handelAdd}>
//                   Add to cart
//                 </button>
//                 <br />
//                 <button className="to mt-2">Add to Watchlist</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Pdp;

// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import AllHeader from "../components/AllHeader";
// import exit from "../assets/exit.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../Redux/cartSlice";

// function Pdp() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedQuantity, setSelectedQuantity] = useState(1);
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   useEffect(() => {
//     const storedProduct = localStorage.getItem("selectedProduct");
//     if (storedProduct) {
//       setProduct(JSON.parse(storedProduct));
//     }
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   function handelAdd() {
//     // dispatch(addItem(product));
//     dispatch(addItem({ ...product, quantity: selectedQuantity }));
//   }

//   return (
//     <div>
//       <AllHeader />
//       <div className="w-[1460px] m-[auto] flex justify-between mb-[150px] items-center">
//         <div className="gap-6 flex items-center">
//           <Link to={"/plp"}>
//             <img src={exit} alt="exit" />
//           </Link>
//           <Link className="Back">Back to home page</Link>
//           <Link>| Listed in category:</Link>
//           <Link className="Back">Electronics</Link>
//           <Link className="Back">Cell Phones & Accessories</Link>
//           <Link className="Back">Cell Phones & Smartphones</Link>
//         </div>
//         <div className="flex gap-2 items-center">
//           <Link className="Back">Share</Link>|
//           <Link className="Back">Add to Watchlist</Link>
//         </div>
//       </div>
//       <div className="w-[1457px] m-[auto]">
//         <div className="flex ">
//           <h1 className="flex font-bold text-xl text-[#555555] ml-[-20px] mb-5">
//             EXTRA <h1 className="text-[red] ml-2 mr-2">$10</h1>OFF 3+ ITEMS WITH
//             CODE <h1 className="text-[red] ml-2 mr-2">10OFF2023TECH</h1>
//           </h1>
//           <p className="mt-2 ml-7 Back font-bold">
//             See all eligible items and terms
//           </p>
//         </div>
//         <div className="flex gap-10">
//           <div>
//             <div className="border w-[502px] h-[502px]">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-[366px] rounded-xl m-[auto]  h-[502px]"
//               />
//             </div>
//             <hr className="w-[499px] mt-10 mb-10" />
//             <div className="flex items-center ml-16 gap-7 mb-[89px]">
//               <h2 className=" font-bold">
//                 Upgrading? Sell it, don't trade it.
//               </h2>
//               <button className="border pl-7 pt-1 pb-1 text-[#0654BA] rounded  pr-7">
//                 Sell now
//               </button>
//             </div>
//           </div>
//           <div>
//             <h1 className="text-xl text-[#333333] font-bold">
//               Apple iPhone 11 A2111 - 64GB - Verizon GSM Unlocked AT&T <br />{" "}
//               T-Mobile Metro Cricket
//             </h1>
//             <hr className="w-[577px] mt-5 mb-5 text-[#CCCCCC] border" />
//             <div className="flex gap-5">
//               <h1 className="text-[#191919]">Condition:</h1>
//               <h2 className="">
//                 <h1 className="font-bold text-[#333333]">Open box</h1> <br />
//                 <h1 className="mt-[-17px]">
//                   “These phones are fully functional and will work on the
//                   network you <br /> choose. This listing contains ”...{" "}
//                   <span className="Back">Read more</span>
//                 </h1>
//               </h2>
//             </div>
//             <div className="flex gap-5">
//               <div>
//                 <h1>Model:</h1>
//                 <br />
//                 <h1>Carrier:</h1>
//                 <br />
//                 <h1>
//                   Storage <br /> Capacity:
//                 </h1>
//                 <br />
//                 <h1>Color:</h1>
//                 <br />
//                 <h1>Cosmetic:</h1>
//                 <br />
//                 <h1>Quantity:</h1>
//                 <br />
//               </div>
//               <div>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.name}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.Cosmetic}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-12">
//                   {product.gb}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
//                   {product.color ? product.color : "Not color"}
//                 </h1>
//                 <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-4">
//                   {product.Cosmetic}
//                 </h1>
//                 <div className="flex gap-5">
//                   <div className="custom-select-container">
//                     <select
//                       className="custom-select"
//                       value={selectedQuantity}
//                       onChange={(e) =>
//                         setSelectedQuantity(parseInt(e.target.value))
//                       }
//                     >
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                       <option value="5">5</option>
//                     </select>
//                   </div>
//                   <h1 className="text-xl font-bold text-[#DD1E31]">
//                     Last One /{product.sold ? product.sold : "Not sold"}
//                   </h1>
//                 </div>
//               </div>
//             </div>
//             <div className="flex">
//               <div className="">
//                 <div className="flex gap-2">
//                   <h1>Price:</h1>
//                   <h2 className="text-2xl font-bold text-[#333333]">
//                     {product.price}
//                   </h2>
//                 </div>
//                 <p className="text-[#3665F3] ml-12 underline">
//                   No Interest if paid in full in 6 <br /> mo on $99+*
//                 </p>
//               </div>
//               <div className="ml-14 mt-[-10px]">
//                 <button className="now mt-2">Buy It Now</button>
//                 <br />
//                 <button className="add mt-2" onClick={handelAdd}>
//                   Add to cart
//                 </button>
//                 <br />
//                 <button className="to mt-2">Add to Watchlist</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pdp;

// Pdp.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AllHeader from "../components/AllHeader";
import exit from "../assets/exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { addToWatchlist } from "../Redux/watchlistSlice";
function Pdp() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  function handelAdd() {
    dispatch(addItem({ ...product, quantity: selectedQuantity }));
    alert("Malumotlar cardga qushildi");
  }
  function handelTo() {
    dispatch(addToWatchlist(product));
    alert("Malumotlar watchlistga saqlandi");
  }
  return (
    <div>
      <AllHeader />
      <div className="w-[1460px] m-[auto] flex justify-between mb-[150px] items-center">
        <div className="gap-6 flex items-center">
          <Link to={"/plp"}>
            <img src={exit} alt="exit" />
          </Link>
          <Link className="Back">Back to home page</Link>
          <Link>| Listed in category:</Link>
          <Link className="Back">Electronics</Link>
          <Link className="Back">Cell Phones & Accessories</Link>
          <Link className="Back">Cell Phones & Smartphones</Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link className="Back">Share</Link>|
          <Link className="Back">Add to Watchlist</Link>
        </div>
      </div>
      <div className="w-[1457px] m-[auto]">
        <div className="flex ">
          <h1 className="flex font-bold text-xl text-[#555555] ml-[-20px] mb-5">
            EXTRA <h1 className="text-[red] ml-2 mr-2">$10</h1>OFF 3+ ITEMS WITH
            CODE <h1 className="text-[red] ml-2 mr-2">10OFF2023TECH</h1>
          </h1>
          <p className="mt-2 ml-7 Back font-bold">
            See all eligible items and terms
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <div className="border w-[502px] h-[502px]">
              <img
                src={product.img}
                alt={product.name}
                className="w-[366px] rounded-xl m-[auto]  h-[502px]"
              />
            </div>
            <hr className="w-[499px] mt-10 mb-10" />
            <div className="flex items-center ml-16 gap-7 mb-[89px]">
              <h2 className=" font-bold">
                Upgrading? Sell it, don't trade it.
              </h2>
              <button className="border pl-7 pt-1 pb-1 text-[#0654BA] rounded  pr-7">
                Sell now
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-xl text-[#333333] font-bold">
              Apple iPhone 11 A2111 - 64GB - Verizon GSM Unlocked AT&T <br />{" "}
              T-Mobile Metro Cricket
            </h1>
            <hr className="w-[577px] mt-5 mb-5 text-[#CCCCCC] border" />
            <div className="flex gap-5">
              <h1 className="text-[#191919]">Condition:</h1>
              <h2 className="">
                <h1 className="font-bold text-[#333333]">Open box</h1> <br />
                <h1 className="mt-[-17px]">
                  "These phones are fully functional and will work on the
                  network you <br /> choose. This listing contains "...{" "}
                  <span className="Back">Read more</span>
                </h1>
              </h2>
            </div>
            <div className="flex gap-5">
              <div>
                <h1>Model:</h1>
                <br />
                <h1>Carrier:</h1>
                <br />
                <h1>
                  Storage <br /> Capacity:
                </h1>
                <br />
                <h1>Color:</h1>
                <br />
                <h1>Cosmetic:</h1>
                <br />
                <h1>Quantity:</h1>
                <br />
              </div>
              <div>
                <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
                  {product.name}
                </h1>
                <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
                  {product.Cosmetic}
                </h1>
                <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-12">
                  {product.gb}
                </h1>
                <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-6">
                  {product.color ? product.color : "Not color"}
                </h1>
                <h1 className="w-[200px] bg-[#D3D3D3] text-[#333333] rounded pl-2 mb-4">
                  {product.Cosmetic}
                </h1>
                <div className="flex gap-5">
                  <div className="custom-select-container">
                    <select
                      className="custom-select"
                      value={selectedQuantity}
                      onChange={(e) =>
                        setSelectedQuantity(parseInt(e.target.value))
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <h1 className="text-xl font-bold text-[#DD1E31]">
                    Last One /{product.sold ? product.sold : "Not sold"}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="">
                <div className="flex gap-2">
                  <h1>Price:</h1>
                  <h2 className="text-2xl font-bold text-[#333333]">
                    {product.price}
                  </h2>
                </div>
                <p className="text-[#3665F3] ml-12 underline">
                  No Interest if paid in full in 6 <br /> mo on $99+*
                </p>
              </div>
              <div className="ml-14 mt-[-10px]">
                <button className="now mt-2">Buy It Now</button>
                <br />
                <button className="add mt-2" onClick={handelAdd}>
                  Add to cart
                </button>
                <br />
                <button className="to mt-2" onClick={handelTo}>
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdp;
