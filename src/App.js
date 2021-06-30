import React from "react";
import { ArticleProvider } from "./context/ArticleContext";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <ArticleProvider>
        <div
          style={{
            position: "absolute",
            top: "0",
            background: "linear-gradient(to right, #0575e6, #00f260)",
            width: "100%",
            height: "13px",
          }}
        ></div>
        <Main />
      </ArticleProvider>
    </>
  );
}

export default App;
