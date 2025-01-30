import "./App.css";
import { Grid } from "@progress/kendo-react-grid";
import { GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { useState } from "react";
import { stateData } from "./initialData";

function App() {
  const [result, setResult] = useState(stateData);

  const CommandCell = () => {
    return (
      <div className="commandCell">
        <span>Edit</span>
        <span>Delete</span>
      </div>
    );
  };

  const ticketGenerator = () => {
    let ticketId;
    ticketId = Math.random() * 10000 + 1;
    return ticketId;
  };

  return (
    <>
      <h1 className="heading">Ticketing System</h1>
      <div className="actionButton">
        <button className="add-button">Add</button>
      </div>
      <Grid style={{ height: "500px" }} data={result} pageable={{ pageSizes: true }} sortable={true}>
        <Column field="ticketID" title="Ticket ID" width="230px" />
        <Column field="title" title="Title" width="230px" />
        <Column field="assignedTo" title="Assigned To" width="230px" />
        <Column field="Requester" title="Requested By" width="230px" />
        <Column field="ticketStatus" title="Ticket Status" width="230px" />
        <Column cell={CommandCell} />
      </Grid>

      <div className="my-modal">

      </div>
    </>
  );
}

export default App;
