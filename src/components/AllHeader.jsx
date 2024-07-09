import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import qungiroq from "../assets/qungiroq.svg";
import korzinka from "../assets/korzinka.svg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import "./AllHeader.css";

function AllHeader({ data, setSearchValue, setFilterValue, filterValue }) {
  const [filterData, setfilterData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
                className="underline signin text-[#0654BA] font-[ABeeZee] font-normal size-[12px]"
                to={"/signin"}
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
            <Link>Sell</Link>
            <select className="headerSelect" name="" id="">
              <option value=""> Watchlist</option>
            </select>
            <select className="headerSelect" name="" id="">
              <option value=""> My eBay</option>
            </select>
            <img src={qungiroq} alt="" />
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <img src={korzinka} alt="" />
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Cart Items</h3>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
        <hr className="w-[1248px] m-[auto] text-[#E5E5E5] mt-1" />
        <div className="flex items-center w-[1248px]  m-[auto]">
          <img src={logo} alt="" />
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
