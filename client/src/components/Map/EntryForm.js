import React, { useState } from "react";
import axios from "axios";

import { createEvent } from "../../utils/API";

const EntryForm = ({ location, onClose }) => {
  //   const createEvent = () => {
  //   use onSubmit
  const [eventForm, setEvent] = useState({
    name: "",
    location: location,
    description: "",
    time: "",
    date: "",
  });

  const onChange = (e) => {
    setEvent({ ...eventForm, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {

    console.log(eventForm)
    let newEvent = {
      name: eventForm.name,
      description: eventForm.description,
      location: eventForm.location,
      date: eventForm.date,
      timestamps: eventForm.time,
    }

    // // Send fetch request to post it to the database
    fetch(`/api/location/`, {
      method: 'POST',
      body: JSON.stringify(newEvent),
      headers: { "Content-Type": "application/json" }
    })
      // json that response and let the user know that it was saved
      .then((response) => response.json())
      .then((data) => {
        console.log(`${newEvent.name} saved`)
      })
    // }
    // e.preventDefault(e);
    // try {
    //   //   await axios.post("/api/location/", eventForm);
    //   await createEvent(newEvent);
    //   onClose();
    //   //   console.log(location);
    //   console.log(newEvent);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <form className="new-event-f" onSubmit={submit}>
      <label htmlFor="name">Event Name: </label>
      <input type="text" name="name" onChange={onChange} />
      <label htmlFor="description">Description: </label>
      <textarea type="text" name="description" onChange={onChange}></textarea>
      <label htmlFor="time">Time: </label>
      <input type="time" name="time" onChange={onChange} />
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" onChange={onChange} />
      <button type="submit" className="btn btn-primary">
        Create event
      </button>
    </form>
  );
};

export default EntryForm;
