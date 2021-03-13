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
    date: "",
  });

  const onChange = (e) => {
    setEvent({ ...eventForm, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault(e);
    try {
      //   await axios.post("/api/location/", eventForm);
      await createEvent(eventForm);
      onClose();
      //   console.log(location);
      console.log(eventForm);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="new-event-f" onSubmit={submit}>
      <label htmlFor="name">Event Name: </label>
      <input type="text" name="name" onChange={onChange} />
      <label htmlFor="description">Description: </label>
      <textarea type="text" name="description" onChange={onChange}></textarea>
      <label htmlFor="">Time: </label>
      <input type="time" onChange={onChange} />
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" onChange={onChange} />
      <input type="checkbox" />
      <button type="submit" className="btn btn-primary">
        Create event
      </button>
    </form>
  );
};

export default EntryForm;
