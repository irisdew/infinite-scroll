import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Board from "./components/Board";

function App() {
  const [page, setPage] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log("Scrolltop: ", scrollTop);
    // console.log("clientHeight: ", clientHeight);
    // console.log("scrollHeight: ", scrollHeight);
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          background: "linear-gradient(to right, #0575e6, #00f260)",
          width: "100%",
          height: "13px",
        }}
      ></div>
      <Container>
        <h1>Solidarite Board</h1>
        <br />
        <input type="text"></input>
        <br />
        <Board page={page} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
