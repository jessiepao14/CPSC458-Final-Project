import BasicTable from "./table";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

export default function DailyConsumptionCard({
  type,
  rows,
  adding,
  addingItem,
}) {
  return (
    <CardWrapper className="p-4">
      <div className="d-flex flex-row justify-content-between">
        <h1 className="my-3">{type}</h1>
        {/* <h1>{type}</h1> */}
        {adding ? (
          <button
            type="button"
            className="btn btn-secondary my-4"
            onClick={addingItem}
          >
            Add Item
          </button>
        ) : null}
      </div>
      {rows.length ? (
        <BasicTable type={type} rows={rows} />
      ) : (
        <h1>Please add {type} to list</h1>
      )}
    </CardWrapper>
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
