// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import qungiroq from "../assets/qungiroq.svg";
// import korzinka from "../assets/korzinka.svg";
// import logo from "../assets/logo.svg";
// import search from "../assets/search.svg";
// import "./AllHeader.css";

// function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
//   const [filterData, setfilterData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(data && data.map((el) => el.category.name)),
//     ];
//     setfilterData(uniqueCategories);
//   }, [data]);

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     setSearchValue(inputValue);
//   };

//   return (
//     <div>
//       <div className="ml-[auto] mr-[auto] w-[1500px] ">
//         <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
//           <div className="flex items-center">
//             <p className="signin">
//               Hi!
//               <NavLink
//                 className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
//                 to={"/signin"}
//               >
//                 Sign in
//               </NavLink>
//             </p>
//             <p className="signin">
//               or
//               <NavLink
//                 className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
//                 to={"/signin"}
//               >
//                 register
//               </NavLink>
//             </p>
//             <div className="gap-[26px] flex ml-[30px]">
//               <Link className=" linkfont-[ABeeZee] font-normal ">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Help & Contact
//               </Link>
//             </div>
//           </div>
//           <div className="flex right-nav">
//             <Link>Sell</Link>
//             <select className="headerSelect" name="" id="">
//               <option value=""> Watchlist</option>
//             </select>
//             <select className="headerSelect" name="" id="">
//               <option value=""> My eBay</option>
//             </select>
//             <img src={qungiroq} alt="" />
//             <button
//               className="btn"
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//             >
//               <img src={korzinka} alt="" />
//             </button>
//             <dialog id="my_modal_2" className="modal">
//               <div className="modal-box">
//                 <h3 className="font-bold text-lg">Cart Items</h3>
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                 <button>close</button>
//               </form>
//             </dialog>
//           </div>
//         </div>
//         <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
//         <div className="flex items-center w-[1248px]  m-[auto]">
//           <img src={logo} alt="" />
//           <select className=" flex items-center cursor-pointer  ">
//             <option className="w-[50px] " value="">
//               Shop by category
//             </option>
//           </select>

//           <div className="search-container">
//             <div className="search-icon">
//               <img src={search} alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />

//             <select
//               value={filterValue}
//               className="cursor-pointer"
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {filterData &&
//                 filterData.map((el, index) => (
//                   <option key={index} value={el}>
//                     {el}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <button className="searchBtn">Search</button>
//           <p className="Advanced">Advanced</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllHeader;

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "../Redux/cartSlice";
// import qungiroq from "../assets/qungiroq.svg";
// import korzinka from "../assets/korzinka.svg";
// import logo from "../assets/logo.svg";
// import search from "../assets/search.svg";
// import "./AllHeader.css";

// function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
//   const [filterData, setfilterData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(data && data.map((el) => el.category.name)),
//     ];
//     setfilterData(uniqueCategories);
//   }, [data]);

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     setSearchValue(inputValue);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   return (
//     <div>
//       <div className="ml-[auto] mr-[auto] w-[1500px] ">
//         <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
//           <div className="flex items-center">
//             <p className="signin">
//               Hi!
//               <NavLink
//                 className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
//                 to={"/signin"}
//               >
//                 Sign in
//               </NavLink>
//             </p>
//             <p className="signin">
//               or
//               <NavLink
//                 className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
//                 to={"/signin"}
//               >
//                 register
//               </NavLink>
//             </p>
//             <div className="gap-[26px] flex ml-[30px]">
//               <Link className=" linkfont-[ABeeZee] font-normal ">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Help & Contact
//               </Link>
//             </div>
//           </div>
//           <div className="flex right-nav">
//             <Link>Sell</Link>
//             <select className="headerSelect" name="" id="">
//               <option value=""> Watchlist</option>
//             </select>
//             <select className="headerSelect" name="" id="">
//               <option value=""> My eBay</option>
//             </select>
//             <img src={qungiroq} alt="" />
//             <button
//               className="btn border-none bg-transparent ml-[-10px]"
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//             >
//               <img src={korzinka} alt="" />
//             </button>
//             <dialog id="my_modal_2" className="modal">
//               <div className="modal-box">

//                 {cartItems.length > 0 ? (
//                   <ul>
//                     {cartItems.map((item) => (
//                       <li key={item.id}>
//                         <img src={item.img} alt={item.name} />
//                         <h4>{item.name}</h4>
//                         <p>Price: {item.price}</p>
//                         <button onClick={() => handleRemoveFromCart(item.id)}>
//                           Remove
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>Your cart is empty.</p>
//                 )}
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                 <button>close</button>
//               </form>
//             </dialog>
//           </div>
//         </div>
//         <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
//         <div className="flex items-center w-[1248px]  m-[auto]">
//           <img src={logo} alt="" />
//           <select className=" flex items-center cursor-pointer  ">
//             <option className="w-[50px] " value="">
//               Shop by category
//             </option>
//           </select>

//           <div className="search-container">
//             <div className="search-icon">
//               <img src={search} alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />

//             <select
//               value={filterValue}
//               className="cursor-pointer"
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {filterData &&
//                 filterData.map((el, index) => (
//                   <option key={index} value={el}>
//                     {el}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <button className="searchBtn">Search</button>
//           <p className="Advanced">Advanced</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllHeader;

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "../Redux/cartSlice";
// import qungiroq from "../assets/qungiroq.svg";
// import korzinka from "../assets/korzinka.svg";
// import logo from "../assets/logo.svg";
// import search from "../assets/search.svg";
// import "./AllHeader.css";

// function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
//   const [filterData, setfilterData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(data && data.map((el) => el.category.name)),
//     ];
//     setfilterData(uniqueCategories);
//   }, [data]);

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     setSearchValue(inputValue);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   return (
//     <div>
//       <div className="ml-[auto] mr-[auto] w-[1500px] ">
//         <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
//           <div className="flex items-center">
//             <p className="signin">
//               Hi!
//               <NavLink
//                 className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
//                 to={"/signin"}
//               >
//                 Sign in
//               </NavLink>
//             </p>
//             <p className="signin">
//               or
//               <NavLink
//                 className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
//                 to={"/signin"}
//               >
//                 register
//               </NavLink>
//             </p>
//             <div className="gap-[26px] flex ml-[30px]">
//               <Link className=" linkfont-[ABeeZee] font-normal ">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Help & Contact
//               </Link>
//             </div>
//           </div>
//           <div className="flex right-nav">
//             <Link>Sell</Link>
//             <select className="headerSelect" name="" id="">
//               <option value=""> Watchlist</option>
//             </select>
//             <select className="headerSelect" name="" id="">
//               <option value=""> My eBay</option>
//             </select>
//             <img src={qungiroq} alt="" />
//             <button
//               className="btn border-none bg-transparent ml-[-10px]"
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//             >
//               <img src={korzinka} alt="" />
//               {cartItems.length > 0 && (
//                 <span className="cart-count">{cartItems.length}</span>
//               )}
//             </button>
//             <dialog id="my_modal_2" className="modal">
//               <div className="modal-box">
//                 {cartItems.length > 0 ? (
//                   <ul>
//                     {cartItems.map((item) => (
//                       <div
//                         key={item.id}
//                         className="remove-container flex items-center w-[460px] h-[100px] mb-3 bg-slate-100"
//                       >
//                         <div>
//                           <img
//                             className="w-[100px] h-[100px]"
//                             src={item.img}
//                             alt={item.name}
//                           />
//                         </div>
//                         <div>
//                           <h4>{item.name}</h4>
//                           <p>Price: {item.price}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>Your cart is empty.</p>
//                 )}
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                 <button>close</button>
//               </form>
//             </dialog>
//           </div>
//         </div>
//         <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
//         <div className="flex items-center w-[1248px]  m-[auto]">
//           <img src={logo} alt="" />
//           <select className=" flex items-center cursor-pointer  ">
//             <option className="w-[50px] " value="">
//               Shop by category
//             </option>
//           </select>

//           <div className="search-container">
//             <div className="search-icon">
//               <img src={search} alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />

//             <select
//               value={filterValue}
//               className="cursor-pointer"
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {filterData &&
//                 filterData.map((el, index) => (
//                   <option key={index} value={el}>
//                     {el}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <button className="searchBtn">Search</button>
//           <p className="Advanced">Advanced</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllHeader;

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "../Redux/cartSlice";
// import qungiroq from "../assets/qungiroq.svg";
// import korzinka from "../assets/korzinka.svg";
// import logo from "../assets/logo.svg";
// import search from "../assets/search.svg";
// import "./AllHeader.css";

// function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
//   const [filterData, setfilterData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(data && data.map((el) => el.category.name)),
//     ];
//     setfilterData(uniqueCategories);
//   }, [data]);

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     setSearchValue(inputValue);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   return (
//     <div>
//       <div className="ml-[auto] mr-[auto] w-[1500px] ">
//         <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
//           <div className="flex items-center">
//             <p className="signin">
//               Hi!
//               <NavLink
//                 className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
//                 to={"/signin"}
//               >
//                 Sign in
//               </NavLink>
//             </p>
//             <p className="signin">
//               or
//               <NavLink
//                 className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
//                 to={"/signin"}
//               >
//                 register
//               </NavLink>
//             </p>
//             <div className="gap-[26px] flex ml-[30px]">
//               <Link className=" linkfont-[ABeeZee] font-normal ">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Help & Contact
//               </Link>
//             </div>
//           </div>
//           <div className="flex right-nav">
//             <Link>Sell</Link>
//             <select className="headerSelect" name="" id="">
//               <option value=""> Watchlist</option>
//             </select>
//             <select className="headerSelect" name="" id="">
//               <option value=""> My eBay</option>
//             </select>
//             <img src={qungiroq} alt="" />
//             <button
//               className="btn border-none bg-transparent ml-[-10px]"
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//             >
//               <img src={korzinka} alt="" />
//               {totalQuantity > 0 && (
//                 <span className="cart-count">{totalQuantity}</span>
//               )}
//             </button>
//             <dialog id="my_modal_2" className="modal">
//               <div className="modal-box">
//                 {cartItems.length > 0 ? (
//                   <ul>
//                     {cartItems.map((item) => (
//                       <div
//                         key={item.id}
//                         className="remove-container flex items-center w-[460px] h-[100px] mb-3 bg-slate-100"
//                       >
//                         <div>
//                           <img
//                             className="w-[100px] h-[100px]"
//                             src={item.img}
//                             alt={item.name}
//                           />
//                         </div>
//                         <div>
//                           <h4>{item.name}</h4>
//                           <p>Price: {item.price}</p>
//                           <p>Quantity: {item.quantity}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>Your cart is empty.</p>
//                 )}
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                 <button>close</button>
//               </form>
//             </dialog>
//           </div>
//         </div>
//         <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
//         <div className="flex items-center w-[1248px]  m-[auto]">
//           <img src={logo} alt="" />
//           <select className=" flex items-center cursor-pointer  ">
//             <option className="w-[50px] " value="">
//               Shop by category
//             </option>
//           </select>

//           <div className="search-container">
//             <div className="search-icon">
//               <img src={search} alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />

//             <select
//               value={filterValue}
//               className="cursor-pointer"
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {filterData &&
//                 filterData.map((el, index) => (
//                   <option key={index} value={el}>
//                     {el}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <button className="searchBtn">Search</button>
//           <p className="Advanced">Advanced</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllHeader;

// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "../Redux/cartSlice";
// import qungiroq from "../assets/qungiroq.svg";
// import korzinka from "../assets/korzinka.svg";
// import logo from "../assets/logo.svg";
// import search from "../assets/search.svg";
// import { FaRegTrashCan } from "react-icons/fa6";
// import "./AllHeader.css";

// function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
//   const [filterData, setfilterData] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const uniqueCategories = [
//       ...new Set(data && data.map((el) => el.category.name)),
//     ];
//     setfilterData(uniqueCategories);
//   }, [data]);

//   const handleSearchChange = (e) => {
//     const inputValue = e.target.value;
//     setSearchInput(inputValue);
//     setSearchValue(inputValue);
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   const handleAddToCart = (item) => {
//     dispatch(addItem(item));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   const handleCartItemClick = (itemId) => {
//     // Simulating single-click item display logic
//     console.log(`Clicked item with ID: ${itemId}`);
//     // Implement your logic to display the clicked item details
//   };

//   return (
//     <div>
//       <div className="ml-[auto] mr-[auto] w-[1500px] ">
//         <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
//           <div className="flex items-center">
//             <p className="signin">
//               Hi!
//               <NavLink
//                 className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
//                 to={"/signin"}
//               >
//                 Sign in
//               </NavLink>
//             </p>
//             <p className="signin">
//               or
//               <NavLink
//                 className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
//                 to={"/signin"}
//               >
//                 register
//               </NavLink>
//             </p>
//             <div className="gap-[26px] flex ml-[30px]">
//               <Link className=" linkfont-[ABeeZee] font-normal ">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Daily Deals
//               </Link>
//               <Link className=" linkfont-[ABeeZee] font-normal">
//                 Help & Contact
//               </Link>
//             </div>
//           </div>
//           <div className="flex right-nav">
//             <Link>Sell</Link>
//             <select className="headerSelect" name="" id="">
//               <option value=""> Watchlist</option>
//             </select>
//             <select className="headerSelect" name="" id="">
//               <option value=""> My eBay</option>
//             </select>
//             <img src={qungiroq} alt="" />
//             <button
//               className="btn border-none bg-transparent ml-[-10px]"
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//             >
//               <img src={korzinka} alt="" />
//               {totalQuantity > 0 && (
//                 <span className="cart-count">{totalQuantity}</span>
//               )}
//             </button>
//             <dialog id="my_modal_2" className="modal">
//               <div className="modal-box">
//                 {cartItems.length > 0 ? (
//                   <ul>
//                     {cartItems.map((item) => (
//                       <li
//                         key={item.id}
//                         className="cart-item"
//                         onClick={() => handleCartItemClick(item.id)}
//                       >
//                         <div className="remove-container flex items-center w-[460px] h-[100px] mb-3 gap-3 rounded-lg p-2 bg-slate-100">
//                           <div>
//                             <img
//                               className="w-[100px] h-[100px] rounded-lg"
//                               src={item.img}
//                               alt={item.name}
//                             />
//                           </div>
//                           <div>
//                             <h4>{item.name}</h4>
//                             <p>Price: {item.price}</p>
//                             <p>Quantity: {item.quantity}</p>
//                           </div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>Your cart is empty.</p>
//                 )}
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                 <button>close</button>
//               </form>
//             </dialog>
//           </div>
//         </div>
//         <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
//         <div className="flex items-center w-[1248px]  m-[auto]">
//           <img src={logo} alt="" />
//           <select className=" flex items-center cursor-pointer  ">
//             <option className="w-[50px] " value="">
//               Shop by category
//             </option>
//           </select>

//           <div className="search-container">
//             <div className="search-icon">
//               <img src={search} alt="" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               value={searchInput}
//               onChange={handleSearchChange}
//             />

//             <select
//               value={filterValue}
//               className="cursor-pointer"
//               onChange={(e) => setFilterValue(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {filterData &&
//                 filterData.map((el, index) => (
//                   <option key={index} value={el}>
//                     {el}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <button className="searchBtn">Search</button>
//           <p className="Advanced">Advanced</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllHeader;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/cartSlice";
import qungiroq from "../assets/qungiroq.svg";
import korzinka from "../assets/korzinka.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import { FaRegTrashCan } from "react-icons/fa6";
import "./AllHeader.css";

const ItemDetails = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};

function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
  const [filterData, setfilterData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const watchlistItems = useSelector((state) => state.watchlist.items);
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(data && data.map((el) => el.category.name)),
    ];
    setfilterData(uniqueCategories);
  }, [data]);

  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearchValue(inputValue);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleCartItemClick = (itemId) => {
    // Find the item in the cartItems array
    const item = cartItems.find((item) => item.id === itemId);

    // If the item is found, display its details
    if (item) {
      console.log(`Clicked item with ID: ${itemId}`);
      return <ItemDetails item={item} />;
    } else {
      console.error(`Item with ID ${itemId} not found in cart`);
    }
  };
  const handleWatchlistSelect = (e) => {
    const selectedItem = watchlistItems.find(
      (item) => item.name === e.target.value
    );
    if (selectedItem) {
      setSelectedWatchlistItem(selectedItem);
      navigate(`/pdp/${selectedItem.id}`);
    }
  };
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <div className="ml-[auto] mr-[auto] w-[1500px] ">
        <div className="flex items-center w-[1248px] justify-between ml-[auto] mr-[auto] ">
          <div className="flex items-center">
            <p className="signin">
              Hi!
              <NavLink
                className=" signin underline text-[#0654BA] font-[ABeeZee] font-normal ml-1 mr-2 size-[12px]"
                to={"/signin"}
              >
                Sign in
              </NavLink>
            </p>
            <p className="signin">
              or
              <NavLink
                className="underline signin ml-2 text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
                to={"/signup"}
              >
                register
              </NavLink>
            </p>
            <div className="gap-[26px] flex ml-[30px]">
              <Link className=" linkfont-[ABeeZee] font-normal ">
                Daily Deals
              </Link>
              <Link className=" linkfont-[ABeeZee] font-normal">
                Daily Deals
              </Link>
              <Link className=" linkfont-[ABeeZee] font-normal">
                Help & Contact
              </Link>
            </div>
          </div>
          <div className="flex right-nav">
            <Link className="mt-[12px]">Sell</Link>
            <select
              className="headerSelect"
              name=""
              id=""
              onChange={handleWatchlistSelect}
            >
              <option value="">Select Watchlist</option>
              {watchlistItems.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <select className="headerSelect" name="" id="">
              <option value=""> My eBay</option>
            </select>
            <img className="cursor-pointer" src={qungiroq} alt="" />
            <button
              className="btn border-none bg-transparent ml-[-10px]"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <img src={korzinka} alt="" />
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                {cartItems.length > 0 ? (
                  <ul>
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="cart-item"
                        onClick={() => handleCartItemClick(item.id)}
                      >
                        <div className="remove-container flex items-center w-[460px] h-[100px] mb-3 gap-3 rounded-lg p-2 bg-slate-100">
                          <div>
                            <img
                              className="w-[100px] h-[100px] rounded-lg"
                              src={item.img}
                              alt={item.name}
                            />
                          </div>
                          <div>
                            <h4>{item.name}</h4>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
        <div className="flex items-center w-[1248px]  m-[auto]">
          <img
            className="cursor-pointer"
            onClick={handleClick}
            src={logo}
            alt=""
          />
          <select className=" flex items-center cursor-pointer  ">
            <option className="w-[50px] " value="">
              Shop by category
            </option>
          </select>

          <div className="search-container">
            <div className="search-icon">
              <img src={search} alt="" />
            </div>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchInput}
              onChange={handleSearchChange}
            />

            <select
              value={filterValue}
              className="cursor-pointer"
              onChange={(e) => setFilterValue(e.target.value)}
            >
              <option value="">All Categories</option>
              {filterData &&
                filterData.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
            </select>
          </div>
          <button className="searchBtn">Search</button>
          <p className="Advanced">Advanced</p>
        </div>
      </div>
    </div>
  );
}

export default AllHeader;
