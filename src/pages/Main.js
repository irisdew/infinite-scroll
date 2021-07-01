import React from "react";
import styled from "styled-components";

import Board from "../components/Board";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

function Main() {
  return (
    <Container>
      <h1>Solidarite Board</h1>
      <p>게시물을 검색해보세요</p>
      <br />
      <Search />
      <Navbar />
      <Board />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 70%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;
