import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ArticleContext } from "../../context/ArticleContext";

const baseUrl = "https://recruit-api.yonple.com/recruit/";
const token = process.env.REACT_APP_TOKEN;

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

function Search() {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 150);
  const queryInput = useRef();
  const { setArticle, type } = useContext(ArticleContext);

  useEffect(() => {
    if (debounceQuery) {
      console.log("now searching");

      axios.get(baseUrl + token + `/${type}-posts?search=` + debounceQuery).then((res) => {
        const searchedArticles = res.data;
        console.log(debounceQuery, searchedArticles);
        setArticle(searchedArticles);
      });
    } else {
    }
  }, [setArticle, type, debounceQuery]);

  return (
    <>
      <Wrapper>
        <SearchIcon
          icon={faSearch}
          onClick={() => {
            queryInput.current.focus();
            // document.getElementsByTagName("input").select();
          }}
        />
        <Input
          type="text"
          ref={queryInput}
          value={query}
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(query);
          }}
        ></Input>
      </Wrapper>
    </>
  );
}

export default Search;

const Wrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 20px;
  top: 23px;
  color: #c4c4c4;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 5px 7px 5px 30px;
  margin: 10px;
  width: 300px;
  height: 30px;
  border: solid 0.1px rgba(0, 0, 0, 0.1);
  :focus {
    outline: none;
  }
`;
