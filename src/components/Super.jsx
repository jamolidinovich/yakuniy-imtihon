import React, { useState } from "react";
import { Link } from "react-router-dom";
import love from "../assets/love.svg";
import svg from "../assets/svg.png";
import div1 from "../assets/div1.png";
import div2 from "../assets/div2.png";
import div3 from "../assets/image.png";
import div4 from "../assets/div (3).png";
import div5 from "../assets/img.png";
import "./AllHeader.css";
function Super() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="w-[1312px] m-[auto]">
      <hr className="text-[#DDDDDD] mb-2 mt-[52px]" />

      <div className="justify-between saved flex">
        <Link
          className={`ml-[35px] ${activeLink === "home" ? "active" : ""}`}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </Link>
        <Link
          className={`flex items-center gap-[2px] ${
            activeLink === "saved" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("saved")}
        >
          <img className="mt-[3px]" src={love} alt="" /> Saved
        </Link>
        <Link
          className={`${activeLink === "motors" ? "active" : ""}`}
          onClick={() => handleLinkClick("motors")}
        >
          Motors
        </Link>
        <Link
          className={`${activeLink === "electronics" ? "active" : ""}`}
          onClick={() => handleLinkClick("electronics")}
        >
          Electronics
        </Link>
        <Link
          className={`${activeLink === "collectibles" ? "active" : ""}`}
          onClick={() => handleLinkClick("collectibles")}
        >
          Collectibles
        </Link>
        <Link
          className={`${activeLink === "home-garden" ? "active" : ""}`}
          onClick={() => handleLinkClick("home-garden")}
        >
          Home & Garden
        </Link>
        <Link
          className={`${activeLink === "fashion" ? "active" : ""}`}
          onClick={() => handleLinkClick("fashion")}
        >
          Fashion
        </Link>
        <Link
          className={`${activeLink === "sporting-goods" ? "active" : ""}`}
          onClick={() => handleLinkClick("sporting-goods")}
        >
          Sporting Goods
        </Link>
        <Link
          className={`${activeLink === "business-industrial" ? "active" : ""}`}
          onClick={() => handleLinkClick("business-industrial")}
        >
          Business & Industrial
        </Link>
        <Link
          className={`${activeLink === "jewelry-watches" ? "active" : ""}`}
          onClick={() => handleLinkClick("jewelry-watches")}
        >
          Jewelry & Watches
        </Link>
        <Link
          className={`${activeLink === "ebay" ? "active" : ""}`}
          onClick={() => handleLinkClick("ebay")}
        >
          eBay
        </Link>
        <Link
          className={`mr-[32px] ${
            activeLink === "refurbished" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("refurbished")}
          to={"/plp"}
        >
          Refurbished
        </Link>
      </div>
      <div class="scroller-container">
        <div class="scroller">
          <div class="slide">
            <div class="contentt bg-[#FEB786] h-[330px] mt-2 flex justify-between">
              <div>
                <img src={div4} alt="" />
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="contentt  h-[330px] mt-2 flex justify-between">
              <div className="w-full">
                <img className="w-[1000px]" src={div5} alt="" />
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="contentt  h-[330px] mt-2 flex justify-between">
              <div className="w-full">
                <img className="w-[1000px] h-[full]" src={div3} alt="" />
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="contentt  h-[330px] mt-2 flex justify-between">
              <div className="w-full">
                <img className="w-[1000px]" src={div5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Super;
