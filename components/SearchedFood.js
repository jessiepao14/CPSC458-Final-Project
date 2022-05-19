import BasicTable from "./table";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

export default function SearchedFood({ food, addingItem }) {
  const addFood = () => {
    addingItem(
      food.item_name,
      food.nf_calories,
      food.nf_protein,
      food.nf_total_carbohydrate,
      food.nf_total_fat
    );
  };
  return (
    <Wrapper>
      <ItemName className="my-3 overflow-auto">{food.item_name}</ItemName>
      <p className="my-3">{food.nf_calories}</p>
      <button
        type="button"
        className="btn btn-secondary my-4"
        onClick={addFood}
      >
        Add Food
      </button>
    </Wrapper>
  );
}

const CardWrapper = styled.div`
  border: 1px solid clear;
  background-color: #fff8eb;
  border-radius: 32px;
  box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 10px 10px 27px 7px rgba(0, 0, 0, 0.15);
  margin: 20px;

  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 40vw;
`;

const ItemName = styled.p`
  width: 45%;
`;
