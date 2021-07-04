import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import axios from "axios";
import { ArticleContext } from "../../context/ArticleContext";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

function Board() {
  const history = useHistory();
  const { article, setArticle, type, page, setPage } = useContext(ArticleContext);
  const [loading, setLoading] = useState(true);
  const [currentType, setCurrentType] = useState("a");

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log("Scrolltop: ", scrollTop);
    // console.log("clientHeight: ", clientHeight);
    // console.log("scrollHeight: ", scrollHeight);
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => (prev < 9 ? prev + 1 : prev));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prevPage = sessionStorage.getItem("prevPage");
    const prevScroll = sessionStorage.getItem("prevScroll");
    const prevType = sessionStorage.getItem("prevType");

    if (prevPage) {
      console.log("!!!");
      console.log("prevPage: ", prevPage);
      console.log(prevPage, parseInt(prevPage) + 1);
      const temp = parseInt(prevPage) + 1;
      console.log(temp);

      for (var i = 1; i < temp; i++) {
        console.log(i);
        axios.get(baseUrl + token + `/${prevType}-posts?page=` + String(i)).then((res) => {
          console.log("axios working");
          const newArticle = res.data;
          setArticle((prev) => [...new Set([...prev, ...newArticle].map(JSON.stringify))].map(JSON.parse));
        });
      }
      setPage(parseInt(prevPage));
      console.log(prevScroll);
      window.scrollTo(0, prevScroll);
      sessionStorage.removeItem("prevScroll");
      sessionStorage.removeItem("prevPage");
      sessionStorage.removeItem("prevType");
    }
  }, []);

  useEffect(() => {
    console.log("page change tracker", page);
    const loadArticles = async (page) => {
      setLoading(true);
      axios.get(baseUrl + token + `/${type}-posts?page=` + page).then((res) => {
        const newArticle = res.data;
        if (currentType !== type || page === 0) {
          setArticle([...new Set([...newArticle].map(JSON.stringify))].map(JSON.parse));
          setPage(0);
          setCurrentType(type);
        } else {
          setArticle((prev) => [...new Set([...prev, ...newArticle].map(JSON.stringify))].map(JSON.parse));
        }
      });
      setLoading(false);
    };
    loadArticles(page);
  }, [page, type]);

  const saveScroll = (id) => {
    const { scrollTop } = document.documentElement;
    sessionStorage.setItem("prevScroll", scrollTop);
    sessionStorage.setItem("prevPage", page);
    sessionStorage.setItem("prevType", type);
  };

  return (
    <>
      <Container key={page}>
        {/* <button
          onClick={() => {
            const x = sessionStorage.getItem("scroll");
            const prevPage = sessionStorage.getItem("prevPage");
            console.log(x, prevPage);
          }}
        >
          temp
        </button> */}
        {article &&
          article.map((a) => (
            <ArticleBox
              key={a.id}
              onClick={() => {
                console.log(a.id);
                history.push(`/article/${a.id}`);
                saveScroll(a.id);
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
  margin: 5px 20px 20px;
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
