import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

function Board({ page, onScroll }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("페이지 변경", page);
    const loadArticles = async (page) => {
      setLoading(true);
      axios.get(baseUrl + token + "/a-posts?page=" + page).then((res) => {
        const newArticles = res.data;
        setArticles((prev) => [...prev, ...newArticles]);
      });
      setLoading(false);
    };
    loadArticles(page);
  }, [page]);

  return (
    <>
      <Container key={page}>
        {articles &&
          articles.map((article) => (
            <ArticleBox key={article.id}>
              <h4>
                {article.id}. {article.title}
              </h4>
              {article.content}
            </ArticleBox>
          ))}
      </Container>
      {loading && <div>Loading...</div>}
    </>
  );
}

export default Board;

const Container = styled.div`
  width: 80%;
  margin: 20px;
  padding: 20px 30px;
  border: solid 0.1px rgba(0, 0, 0, 0.05);
`;

const ArticleBox = styled.div`
  padding: 10px 5px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.1);

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;
