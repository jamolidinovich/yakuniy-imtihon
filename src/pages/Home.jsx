// import React, { useEffect, useState } from "react";
// import AllHeader from "../components/AllHeader";
// import Super from "../components/Super";
// import Mahsulot from "../components/Mahsulot";
// import Shipping from "../components/Shipping";
// import Api from "../components/Api";
// function Home() {
//   const [searchValue, setSearchValue] = useState("");
//   const [data, setData] = useState("");
//   const [filterValue, setFilterValue] = useState("");
//   const [dataa, setDataa] = useState("");
//   useEffect(() => {
//     fetch("https://api.escuelajs.co/api/v1/products")
//       .then((res) => res.json())
//       .then((data) => {
//         // const first14Products = data.slice(0, 14);
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   console.log(20, searchValue);
//   return (
//     <div>
//       <AllHeader
//         data={data}
//         filterValue={filterValue}
//         setFilterValue={setFilterValue}
//         setSearchValue={setSearchValue}
//       />
//       <Super></Super>
//       <Mahsulot filterValue={filterValue}></Mahsulot>
//       <Shipping filterValue={filterValue}></Shipping>
//     </div>
//   );
// }

// export default Home;
// import React, { useEffect, useState } from "react";
// import AllHeader from "../components/AllHeader";
// import Super from "../components/Super";
// import Mahsulot from "../components/Mahsulot";
// import Shipping from "../components/Shipping";
// import "../App.css";

// function Home() {
//   const [searchValue, setSearchValue] = useState("");
//   const [data, setData] = useState([]);
//   const [filterValue, setFilterValue] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://api.escuelajs.co/api/v1/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="loader">Loading...</div>;
//   }

//   return (
//     <div>
//       <AllHeader
//         data={data}
//         filterValue={filterValue}
//         setFilterValue={setFilterValue}
//         setSearchValue={setSearchValue}
//       />
//       <Super />
//       <Mahsulot data={data} filterValue={filterValue} />
//       <Shipping data={data} filterValue={filterValue} />
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import AllHeader from "../components/AllHeader";
import Super from "../components/Super";
import Mahsulot from "../components/Mahsulot";
import Shipping from "../components/Shipping";
import "../App.css";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <AllHeader
        data={data}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        setSearchValue={setSearchValue}
      />
      <Super />
      <Mahsulot
        data={data}
        filterValue={filterValue}
        searchValue={searchValue}
      />
      <Shipping data={data} filterValue={filterValue} />
    </div>
  );
}

export default Home;
