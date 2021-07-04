import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styled from "styled-components";
import { ArticleContext } from "../context/ArticleContext";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

function Detail(props) {
  const history = useHistory();
  const id = props.match.params.id;
  const { type } = useContext(ArticleContext);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.get(baseUrl + token + `/${type}-posts/` + id).then((res) => {
      setArticle(res.data);
    });
  }, [id, type]);

  return (
    <Container>
      <Wrapper>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </Wrapper>
      <div style={{ width: "80%" }}>
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          뒤로가기
        </Button>
      </div>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 70%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 20px;
  padding: 20px 30px 25px;
  border: solid 0.1px rgba(0, 0, 0, 0.05);
  text-align: center;
  box-sizing: border-box;

  h2 {
    margin: 10px 0;
    font-size: 1.7em;
  }
  p {
    text-align: left;
  }
`;

const Button = styled.button`
  background: #0575e6;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  padding: 5px;
  cursor: pointer;

  :hover {
    background: rgba(5, 117, 230, 0.8);
  }
`;
