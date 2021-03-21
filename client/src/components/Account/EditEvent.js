import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function to Edit the event from the database by ID
const editEvent = (newEditEvent) => {
  console.log(newEditEvent);

  fetch(`/api/location/${newEditEvent._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEditEvent),
    // Json that response
  })
    .then((response) => response.json())
};

// Toast Notification Function to let the user know the event was deleted
const notify = (eventTitle) => toast(`${eventTitle} Event Saved`);

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
            name="title"
            type="text"
            placeholder={editEventForm.title}
            className="form-control text-center border border-dark"
          />
          {/* Input for description */}
          <input
            onChange={onEditChange}
            name="description"
            type="text"
            placeholder={editEventForm.description}
            className="form-control text-center border border-dark"
          />
          {/* Input for latitude */}
          <input
            onChange={onEditChange}
            name="latitude"
            type="number"
            step="0.00001"
            placeholder={editEventForm.location[0].latitude}
            className="form-control text-center border border-dark"
          />
          {/* Input for longitude */}
          <input
            onChange={onEditChange}
            name="longitude"
            type="number"
            step="0.00001"
            placeholder={editEventForm.location[0].longitude}
            className="form-control text-center border border-dark"
          />
          {/* Input for date */}
          <input
            onChange={onEditChange}
            name="date"
            type="date"
            placeholder={editEventForm.date}
            className="form-control text-center border border-dark"
          />

          {/* Button to save the event and call the Toast Notify Function*/}
          <button
            onClick={() => { editEvent(newEditEvent); notify(newEditEvent.title)}}
            className="btn btn-primary"
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
