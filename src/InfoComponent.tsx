import { useEffect, useRef } from "react";

const InfoComponent = (props: any) => {
  const formRef = useRef<any>();

  const handleCloseModal = () => {
    formRef.current.reset();
    const modelRef = props.closeModal;
    modelRef.current.checked = false;

    props.SetEditorMode(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.callback(e,props.dataItem.ticketID);
    props.formRef(formRef);
  };
  useEffect(() => {
    console.log(formRef.current);
    console.log(props);
    // formRef.current[1].value = props.dataItem.ticketID;
    if (props.dataItem&&props.editor) {
      formRef.current[0].value = props.dataItem.title;
      formRef.current[1].value = props.dataItem.assignedTo;
      formRef.current[2].value = props.dataItem.Requester;
      formRef.current[3].value = props.dataItem.ticketStatus;
    }
  }, [props]);

  return (
    <div className="my-modal">
      <span
        className="material-symbols-outlined close"
        onClick={handleCloseModal}
      >
        close
      </span>
      <br />
      <div className="form">
        <h2 className="heading2">Raise A Ticket</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label htmlFor="title">Title :</label>
            <br />
            <input id="title" name="title" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="assignedTo">Assigned To :</label>
            <br />
            <input id="assignedTo" name="assignedTo" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="Requester">Requested By :</label>
            <br />
            <select name="Requeseter" id="Requeseter">
              <option>Select Requestee</option>
              <option value={"Patrick Jane"}>Patrick Jane</option>
              <option value={"Dexter"}>Dexter</option>
              <option value={"Sherlock Holmes"}>Sherlock Holmes</option>
              <option value={"Matt Murdock"}>Matt Murdock</option>
              <option value={"K.D. Paathak"}>K.D. Paathak</option>
              <option value={"Patil"}>Sub Cont. Patil</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="ticketStatus">Ticket Status :</label>
            <br />
            <select name="ticketStatus" id="ticketStatus">
              <option>Select Status</option>
              <option value={"New"}>New</option>
              <option value={"In Review"}>In Review</option>
              <option value={"Awaiting Response"}>Awaiting Response</option>
              <option value={"Closed"}>Closed</option>
              <option value={"Reopened"}>Reopened</option>
              <option value={"Ended"}>Ended</option>
            </select>
          </div>
          {!props.editor ? (
            <button type="submit" className="submit-button">
              Submit Ticket
            </button>
          ) : (
            <button
              type="submit"
              className="submit-button"
              style={{ backgroundColor: "blueviolet" }}
            >
              Update Ticket
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default InfoComponent;
