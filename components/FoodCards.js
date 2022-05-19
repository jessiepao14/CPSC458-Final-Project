import styled from "styled-components";

export default function FoodCards({ type, amount }) {
  return (
    <Wrapper>
      <h1>{type}</h1>
      <h1>{amount}g</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  width: 30%;
  height: 10%;
  border: 1px solid transparent;
  padding: 20px;
  border-radius: 30px;
  background-color: #ff725e;

  box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1000px) {
    width: 70%;
    height: 50%;
    flex-direction: row;
  }
`;
