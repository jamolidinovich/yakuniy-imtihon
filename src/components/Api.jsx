// import React, { useState } from "react";
// import "./AllHeader.css";
// function Api() {
//   const [data, setData] = useState();
//   fetch("https://api.escuelajs.co/api/v1/products/?categoryId=1").then((res) =>
//     res.json().then((data) => {
//       setData(data);
//       const images = JSON.parse(data.images);
//     })
//   );
//   return (
//     <div>
//       {data &&
//         data.map((el, index) => (
//           <div>
//             <h1>{el.title}</h1>
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${el.title} image ${index + 1}`}
//               />
//             ))}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default Api;

import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace with your API call
    fetch("https://api.escuelajs.co/api/v1/products/?categoryId=1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Parse the array string to a JavaScript array
  const images = JSON.parse(data.images);

  return (
    <div>
      <h1>{data.title}</h1>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`${data.title} image ${index + 1}`} />
      ))}
    </div>
  );
};

export default Api;
