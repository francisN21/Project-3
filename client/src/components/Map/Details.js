import React from "react";
import { deleteEvent } from "../../utils/API";

const Details = ({ value, onClose }) => {
  const delEvent = async (event) => {
    try {
      await deleteEvent(event);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup">
      <h3>{value.name}</h3>
      <p>{value.description}</p>
      <p>{value.category}</p>
      <p>{value.date}</p>
      <button className="btn btn-primary" onClick={() => console.log(value)}>
        edit
      </button>
      <button className="btn btn-danger" onClick={() => delEvent(value._id)}>
        Delete
      </button>
    </div>
  );
};

export default Details;
