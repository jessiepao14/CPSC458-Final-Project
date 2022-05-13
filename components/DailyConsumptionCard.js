import BasicTable from "./table";
import "bootstrap/dist/css/bootstrap.css";

export default function DailyConsumptionCard({
  type,
  rows,
  adding,
  addingItem,
}) {
  return (
    <div className="container p-5">
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
      <BasicTable type={type} rows={rows} />
    </div>
  );
}

// export default DailyConsumptionCard;
