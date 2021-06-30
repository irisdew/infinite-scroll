import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Wrapper>
        <h2>Rerum voluptatibus et doloremque.</h2>
        <p>
          Ut ut et omnis. Ipsam nihil suscipit. Omnis dolorum at quidem. Omnis sapiente beatae neque facilis ipsum
          suscipit aut. Id voluptatum iusto rerum voluptatibus. Sed commodi ea quaerat ipsum esse quis cum ducimus
          dicta. Enim quia ut velit velit quaerat non laudantium. Eveniet voluptates et repellendus aperiam et
          recusandae dolorum. Vel quisquam et aut sint cupiditate debitis sed. Delectus voluptatem et explicabo quia
          ullam sunt quos. Accusantium neque et possimus quo voluptatum. A voluptatem minima ut in dolor.
        </p>
      </Wrapper>
      <div style={{ width: "80%" }}>
        <Button>뒤로가기</Button>
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
