import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArticleProvider } from "./context/ArticleContext";
import Board from "./components/Board";
import Search from "./components/Search";

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
        <Container>
          <h1>Solidarite Board</h1>
          <p>게시물을 검색해보세요</p>
          <br />
          <Search />
          <br />
          <Board />
        </Container>
      </ArticleProvider>
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
