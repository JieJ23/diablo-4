import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to hold the fetched data
const DataContext = createContext();
import { firstpart, secondpart } from "./pass";
import { thirdpart } from "./Loader";
// Create a custom hook to consume the context
export const useData = () => useContext(DataContext);

// Create a provider component to wrap your application and provide the data
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${firstpart}${secondpart}${thirdpart}`);
        const data = await response.json();
        const posts = await data.filter((obj) => obj.Validate === "y");
        // const posts = await response.json();
        setPosts(posts);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoader(false);
      }
    }

    load();
  }, []);

  return (
    <DataContext.Provider value={{ posts, loader }}>
      {children}
    </DataContext.Provider>
  );
};
