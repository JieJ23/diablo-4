// import React, { createContext, useContext, useState, useEffect } from "react";
// import { fetchdomain } from "./Loader";
// import { fetchurl, secondURL } from "./Fetch";

// const DataContext = createContext();

// export const useData = () => useContext(DataContext);

// export const DataProvider = ({ children }) => {
//   const [posts, setPosts] = useState([]);
//   const [loader, setLoader] = useState(true);

//   const baseURL = fetchdomain;

//   useEffect(() => {
//     async function load() {
//       try {
//         const response = await fetch(`${baseURL}${fetchurl}${secondURL}`);
//         const data = await response.json();
//         const posts = await data.filter((obj) => obj.Validate === "y");

//         setPosts(posts);
//         setLoader(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoader(false);
//       }
//     }

//     load();
//   }, []);

//   return (
//     <DataContext.Provider value={{ posts, loader }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

import React, { useEffect, useState } from "react";

const TestingFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my-worker.diablo4pit.workers.dev/api/data"
        ); // Use your Worker preview URL
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <div className="text-white">
      <h1>Data from Cloudflare Worker</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestingFetch;
