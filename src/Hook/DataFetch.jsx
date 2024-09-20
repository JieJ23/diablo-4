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
