import React, { useState, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState([]);
  const [type, setType] = useState("a");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <ArticleContext.Provider value={{ article, setArticle, type, setType, isSearching, setIsSearching }}>
      {children}
    </ArticleContext.Provider>
  );
};
