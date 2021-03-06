import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export default function Header({ type }) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  return (
    <Wrapper>
      <Description>
        <h1>{type}</h1>
        <h2>Today</h2>
        <h2>{today}</h2>
      </Description>
      {!isTabletOrMobile ? (
        <>
          <ImageFood src={"/Boba.svg"} alt="Boba" />
          <ImageFood src={"/Cake.svg"} alt="Cake" />
          <ImageFood src={"/Fries.svg"} alt="Fries" />
          <ImageFood src={"/IceCream.svg"} alt="IceCream" />
          <ImageFood src={"/Pizza.svg"} alt="Pizza" />
          <ImageFood src={"/Ramen.svg"} alt="Ramen" />
          <ImageFood src={"/Shake.svg"} alt="Shake" />{" "}
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-around;
  margin: 20px;
  align-items: center;
  @media screen and (max-width: 1000px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageFood = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 10px;
`;
