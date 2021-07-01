import React, { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";

function Navbar() {
  const { type, setType } = useContext(ArticleContext);
  return (
    <>
      <div style={{ width: "80%", display: "flex", alignItems: "flex-start" }}>
        <button
          onClick={() => {
            setType("a");
            console.log(type);
          }}
        >
          A Posts
        </button>
        <button
          onClick={() => {
            setType("b");
            console.log(type);
          }}
        >
          B Posts
        </button>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
