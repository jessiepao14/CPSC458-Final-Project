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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
`;

const ItemName = styled.p`
  width: 30%;
`;
