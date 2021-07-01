import React, { useContext } from "react";
import styled from "styled-components";
import { ArticleContext } from "../../context/ArticleContext";

function Navbar() {
  const { type, setType } = useContext(ArticleContext);
  return (
    <>
      <div style={{ width: "80%", display: "flex", alignItems: "flex-start" }}>
        <Tab
          color={type === "a"}
          onClick={() => {
            setType("a");
            console.log(type);
          }}
        >
          A Posts
        </Tab>
        <Tab
          color={type === "b"}
          onClick={() => {
            setType("b");
            console.log(type);
          }}
        >
          B Posts
        </Tab>
      </div>
      <div style={{ width: "80%", height: "1px", background: "rgba(0, 0, 0, 0.05)" }}></div>
      <hr />
    </>
  );
}

export default Navbar;

const Tab = styled.div`
  width: 60px;
  height: 40px;
  color: ${(props) => (props.color ? "#0575e6" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  padding: 2px;
  font-weight: 700;
  font-size: 0.9em;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
