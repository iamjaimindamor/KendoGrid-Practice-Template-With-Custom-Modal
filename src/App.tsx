import "./App.css";
import { Grid } from "@progress/kendo-react-grid";
import { GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import { useRef, useState } from "react";
import { stateData } from "./initialData";
import InfoComponent from "./InfoComponent";
import { DataState } from "../interface/dataState";

function App() {
  const modalRef = useRef<any>();
  const [result, setResult] = useState<DataState[]>(stateData);
  const [editorMode,SetEditorMode] = useState<Boolean>(false);
  const [editState,SetEditState] = useState<DataState>();

  const CommandCell = (dataItem:any) => {
    return (
      <td key={"command"} className="commandCell">
        <span onClick={()=>handleEdit(dataItem)}>Edit</span>
        <span onClick={()=>handleDelete(dataItem)}>Delete</span>
      </td>
    );
  };

  const addTicket = () =>{
    if(!modalRef.current.checked){
      modalRef.current.checked = true;
    }
  }

  const closeModal = () => {
    if(modalRef.current.checked){
      modalRef.current.checked = false;
    }
  }

  const handleEdit = (item:any) =>{
    SetEditorMode(true);
    if(!modalRef.current.checked){
      modalRef.current.checked = true;
    }
    const data : DataState = item.dataItem;
    SetEditState(data);
    return data;
  }
 
  const handleDelete = (items:any)=>{
    const val = result.filter(item=>item!=items.dataItem);
    setResult(val);
  }

  const ticketGenerator = () => {
    let ticketId;
    ticketId = Math.random() * 10000 + 1;
    return Math.ceil(ticketId);
  };

  const handleInputData = (event:any,ticketID?:any) =>{

    if(!editorMode){
      let formattedData :DataState = {
        ticketID:ticketGenerator().toString(),
        title:event.target[0].value,
        assignedTo:event.target[1].value,
        Requester:event.target[2].value,
        ticketStatus:event.target[3].value,
      }
      setResult([...result,formattedData]);
    }else{
      setResult(result.map(ticket => ticket.ticketID == ticketID?{...ticket, title:event.target[0].value,
        assignedTo:event.target[1].value,
        Requester:event.target[2].value,
        ticketStatus:event.target[3].value,}:ticket));
        SetEditorMode(false);
    }
    closeModal();
  }

  return (
    <>
      <input type="checkbox" id="modalCheckbox" ref={modalRef}/>

      <InfoComponent editor={editorMode} SetEditorMode={SetEditorMode} dataItem={editState} callback={handleInputData} closeModal={modalRef}/>
      <div id="body" className="myContent">
        <h1 className="heading">Ticketing System</h1>
        <div className="actionButton">
          <button className="add-button" onClick={addTicket}>
            ADD
          </button>
        </div>
        <Grid style={{ height: "500px" }} data={result} pageable={{ pageSizes: true }} sortable={true}>
          <Column field="ticketID" title="Ticket ID" width="230px" />
          <Column field="title" title="Title" width="230px" />
          <Column field="assignedTo" title="Assigned To" width="230px" />
          <Column field="Requester" title="Requested By" width="230px" />
          <Column field="ticketStatus" title="Ticket Status" width="230px" />
          <Column cell={CommandCell} />
        </Grid>
      </div>
    </>
  );
}

export default App;
