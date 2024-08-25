import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to hold the fetched data
const DataContext2 = createContext();

// Create a custom hook to consume the context
export const useData2 = () => useContext(DataContext2);

// Create a provider component to wrap your application and provide the data
export const DataProvider2 = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(
          `https://script.google.com/macros/s/AKfycbzKI9ohG72T3WxF7upkp5Bs2ItPfqN1GIDvJqTxSDyZLXuU--njiY6pDnvInplMDeVz/exec`
        );
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
    <DataContext2.Provider value={{ posts, loader }}>
      {children}
    </DataContext2.Provider>
  );
};
