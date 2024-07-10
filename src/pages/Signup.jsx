// import React, { useState } from "react";
// import "./Signup.css"; // CSS faylni ulaymiz
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     alert("Registration successful!");
//     navigate("/signin");
//   };

//   return (
//     <div className="signup-container">
//       <h1>Signup</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Surname"
//           value={surname}
//           onChange={(e) => setSurname(e.target.value)}
//           required
//         />
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
//         <button type="submit">Signup</button>
//         <Link
//           className="ml-[310px] mt-[-10px] text-[#3665F3] block"
//           to={"/signin"}
//         >
//           Sign in
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import "./Signup.css"; // CSS faylni ulaymiz
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = storedUsers.some((user) => user.email === email);

    if (emailExists) {
      setError("Bunday email mavjud");
      return;
    }

    const newUser = { name, surname, email, password };
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("Registration successful!");
    navigate("/signin");
  };
  function handelHome() {
    navigate("/");
  }
  return (
    <div>
      <div className="signup-container">
        <img
          className="absolute ml-[-500px] cursor-pointer"
          onClick={handelHome}
          src={logo}
          alt=""
        />
        <h1 className="text-black mt-16">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
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
          <button type="submit">Signup</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Link
            className="ml-[310px] mt-[-10px] text-[#3665F3] block"
            to={"/signin"}
          >
            Sign in
          </Link>
        </form>
      </div>
      <hr className="border mt-[150px]" />
      <Link className="text-center block mt-16">
        Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility .User
        Agreement Privacy Payments Terms of Use Cookies Your Privacy Choices and
        AdChoice
      </Link>
    </div>
  );
};

export default Signup;
