import React from "react";

const InfoComponent = (props: any) => {
  const handleCloseModal = () => {
    const modelRef = props.closeModal;
    modelRef.current.checked = false;
  };

  return (
    <div className="my-modal">
      <span
        className="material-symbols-outlined close"
        onClick={handleCloseModal}
      >
        {" "}
        close{" "}
      </span>
      <br />
      <div className="form">
        <h2 className="heading2">Raise A Ticket</h2>
        <form>
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
              <option value={"New"}>New</option>
              <option value={"In Review"}>In Review</option>
              <option value={"Awaiting Response"}>Awaiting Response</option>
              <option value={"Closed"}>Closed</option>
              <option value={"Reopened"}>Reopened</option>
              <option value={"Ended"}>Ended</option>
            </select>
          </div>
          <button className="submit-button">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default InfoComponent;
