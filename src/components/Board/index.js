import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { ArticleContext } from "../../context/ArticleContext";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

function Board() {
  const { article, setArticle } = useContext(ArticleContext);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    // console.log("페이지 변경", page);
    const loadArticles = async (page) => {
      setLoading(true);
      axios.get(baseUrl + token + "/a-posts?page=" + page).then((res) => {
        const newArticle = res.data;
        setArticle((prev) => [...prev, ...newArticle]);
      });
      setLoading(false);
    };
    loadArticles(page);
  }, [page]);

  return (
    <>
      <Container key={page}>
        {article &&
          article.map((a) => (
            <ArticleBox key={a.id}>
              <h4>
                {a.id}. {a.title}
              </h4>
              {a.content}
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
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
