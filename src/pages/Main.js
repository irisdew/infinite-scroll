import React from "react";
import styled from "styled-components";
import { ArticleProvider } from "../context/ArticleContext";
import Board from "../components/Board";
import Search from "../components/Search";

function Main() {
  return (
    <ArticleProvider>
      <Container>
        <h1>Solidarite Board</h1>
        <p>게시물을 검색해보세요</p>
        <br />
        <Search />
        <br />
        <Board />
      </Container>
    </ArticleProvider>
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
