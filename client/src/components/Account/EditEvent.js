import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateEvent } from "../utils/API";
import API from "../utils/API";


// Toast Notification Function to let the user know the event was deleted
const notify = (eventName) => toast(`${eventName} Event Saved`);

// Edit event Component using props
const EditEvent = (props) => {
  // Set up state
  const [newEditEvent, setNewEditEvent] = useState();

  // On edit change to update state
  const onEditChange = (e) => {
    setNewEditEvent({ ...newEditEvent, [e.target.name]: e.target.value });
  };

  // Set it to a variable
  let editEventForm = "";
  editEventForm = props.location.editEventProps.event;

  // On Submit to prevent default behavior of the form
  const onSubmit = (e) => {
    // Gotta prevent the default!
    e.preventDefault();
  };

  // UseEffect to call the function when the page loads
  useEffect(() => {
    setNewEditEvent(editEventForm);
  }, []);

  const formStyles = {
    margin: "10px"
  }

  // Return the component
  return (
    // Div to center the content
    <div className="container text-center justify-content-center account-overflow">
      {/* Title of page */}
      <h1>Edit Event</h1>

      <form className="border-dark" onSubmit={onSubmit}>
        <div className="form-group">
          {/* Input forms to add the event */}
          {/* Input for title */}
          <input
            onChange={onEditChange}
            name="name"
            type="text"
            placeholder={editEventForm.name}
            className="form-control text-center border border-dark"
            style={formStyles}
          />
          {/* Input for description */}
          <input
            onChange={onEditChange}
            name="description"
            type="text"
            placeholder={editEventForm.description}
            className="form-control text-center border border-dark"
            style={formStyles}
          />
          {/* Input for latitude */}
          <input
            onChange={onEditChange}
            name="latitude"
            type="number"
            step="0.00001"
            placeholder={editEventForm.location[0].latitude}
            className="form-control text-center border border-dark"
            style={formStyles}
          />
          {/* Input for longitude */}
          <input
            onChange={onEditChange}
            name="longitude"
            type="number"
            step="0.00001"
            placeholder={editEventForm.location[0].longitude}
            className="form-control text-center border border-dark"
            style={formStyles}
          />
          {/* Input for date */}
          <input
            onChange={onEditChange}
            name="date"
            type="date"
            placeholder={editEventForm.date}
            className="form-control text-center border border-dark"
            style={formStyles}
          />

          {/* Button to save the event and call the Toast Notify Function*/}
          <button
            onClick={() => { API.updateEvent(newEditEvent); notify(newEditEvent.name) }}
            className="justify-content-md-center col-md-12 btn btn-primary"
            style={formStyles}
          >
            Save Edits
          </button>
          {/* Toast Container Notification */}
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
