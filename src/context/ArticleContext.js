import React, { useState, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState([]);
  const [type, setType] = useState("a");

  return <ArticleContext.Provider value={{ article, setArticle, type, setType }}>{children}</ArticleContext.Provider>;
};
