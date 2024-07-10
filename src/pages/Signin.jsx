// import React, { useState } from "react";
// import "./Signin.css"; // CSS faylni ulaymiz
// import { Link, useNavigate } from "react-router-dom";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");
//     navigate("/");
//     if (email === storedEmail && password === storedPassword) {
//       alert("Login successful!");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h1 className="text-[#151E27] ">Hello</h1>
//       <p className="text-[#000000]">
//         Sign in to eBay or{" "}
//         <a className="text-[#3665F3] underline" href="/Signup">
//           create an account
//         </a>
//       </p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signin</button>

//         <div className="stay-signed-in">
//           <input type="checkbox" id="staySignedIn" />
//           <label className="text-[#000000]" htmlFor="staySignedIn ">
//             Stay signed in
//           </label>
//         </div>

//         <p className=" text-[#000000]">
//           Using a public or shared device? <br /> Uncheck to protect your
//           account.
//         </p>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Signin;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css"; // CSS faylni ulaymiz
import logo from "../assets/logo.svg";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };
  function handelHome() {
    navigate("/");
  }
  return (
    <div>
      {" "}
      <div className="signin-container">
        <img
          className="absolute ml-[-500px] cursor-pointer"
          onClick={handelHome}
          src={logo}
          alt=""
        />
        <h1 className="text-[#151E27] mt-14 ">Hello</h1>

        <p className="text-[#000000]">
          Sign in to eBay or
          <a className="text-[#3665F3] ml-1 underline" href="/Signup">
            create an account
          </a>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Continue</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signin;
