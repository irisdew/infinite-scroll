import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { ArticleContext } from "../../context/ArticleContext";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

function Board() {
  const history = useHistory();
  const { article, setArticle, type } = useContext(ArticleContext);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [currentType, setCurrentType] = useState("a");

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
      axios.get(baseUrl + token + `/${type}-posts?page=` + page).then((res) => {
        const newArticle = res.data;
        if (currentType !== type || page === 0) {
          setArticle(newArticle);
          setPage(0);
          setCurrentType(type);
        } else {
          setArticle((prev) => [...prev, ...newArticle]);
        }
      });
      setLoading(false);
    };
    loadArticles(page);
  }, [page, type, setArticle, currentType]);

  return (
    <>
      <Container key={page}>
        {article &&
          article.map((a) => (
            <ArticleBox
              key={a.id}
              onClick={() => {
                console.log(a.id);
                history.push(`/article/${a.id}`);
              }}
            >
              <h4>
                <Number>{a.id}.</Number> {a.title}
              </h4>
              <p>{a.content}</p>
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
  box-sizing: border-box;
`;

const ArticleBox = styled.div`
  padding: 15px;
  margin: 5px;
  box-shadow: rgba(0, 0, 0, 0.1);

  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  h4 {
    display: flex;
    margin-bottom: 3px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const Number = styled.h4`
  color: #0575e6;
  display: flex;
  margin-right: 5px;
`;
