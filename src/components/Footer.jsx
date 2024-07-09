import React from "react";
import { Link } from "react-router-dom";
import twiter from "../assets/twiter.svg";
import fez from "../assets/fez.svg";
import "./AllHeader.css";
function Footer() {
  return (
    <div>
      <div className="w-[1268px]  m-[auto] flex justify-between">
        <div className="w-[245px]">
          <Link className="buy ">Buy</Link>
          <br />
          <Link className="footer_link ">Registration</Link> <br />
          <Link className="footer_link">eBay Money Back Guarantee</Link> <br />
          <Link className="footer_link">Bidding & buying help</Link> <br />
          <Link className="footer_link">Stores</Link> <br />
          <Link className="footer_link">eBay for Charity</Link> <br />
          <Link className="footer_link">Charity Shop</Link> <br />
          <Link className="footer_link">Seasonal Sales and events</Link>
        </div>
        <div className="w-[242px]">
          <Link className="buy">Sell</Link> <br />
          <Link className="footer_link">Start selling</Link> <br />
          <Link className="footer_link">How to sell</Link> <br />
          <Link className="footer_link">Business sellers</Link> <br />
          <Link className="footer_link">Affiliates</Link> <br />
          <Link className="buy mt-[20px]">Tools & apps</Link> <br />
          <Link className="footer_link">Developers</Link> <br />
          <Link className="footer_link">Security center</Link> <br />
          <Link className="footer_link">Site map</Link>
        </div>
        <div className="w-[240px]">
          <Link className="buy">Stay connected</Link>
          <Link className="flex gap-1 footer_link">
            <img src={twiter} alt="" />
            Facebook
          </Link>
          <Link className="flex mt-[6px] gap-1 footer_link">
            <img src={fez} alt="" />
            Twitter
          </Link>
        </div>
        <div className="w-[297px]">
          <Link className="buy">About eBay</Link> <br />
          <Link className="footer_link">Company info</Link> <br />
          <Link className="footer_link">News</Link> <br />
          <Link className="footer_link">Investors</Link> <br />
          <Link className="footer_link">Careers</Link> <br />
          <Link className="footer_link">Diversity & Inclusion</Link> <br />
          <Link className="footer_link">Global Impact</Link> <br />
          <Link className="footer_link">Government relations</Link> <br />
          <Link className="footer_link">Advertise with us</Link> <br />
          <Link className="footer_link">Policies</Link> <br />
          <Link className="footer_link">
            Verified Rights Owner (VeRO) Program
          </Link>{" "}
          <br />
          <Link className="footer_link">eCI Licenses</Link>
        </div>
        <div className="w-[240px]">
          <Link className="buy">Help & Contact</Link> <br />
          <Link className="footer_link">Seller Center</Link> <br />
          <Link className="footer_link">Contact Us</Link> <br />
          <Link className="footer_link">eBay Returns</Link> <br />
          <Link className="buy mt-[20px]">Community</Link> <br />
          <Link className="footer_link">Announcements</Link> <br />
          <Link className="footer_link">eBay Community</Link> <br />
          <Link className="footer_link">eBay for Business Podcast</Link> <br />
          <Link className="buy mt-[20px]">eBay Sites</Link>
        </div>
      </div>
      <p className="p ml-[140px] mt-4 mb-5">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved.Accessibility,User
        Agreement User Agreement Payments Terms of Use Cookies Your Privacy
        Choices and AdChoice
      </p>
    </div>
  );
}

export default Footer;
