import React, { useState } from "react";
import { createEvent } from "../../utils/API";

const EntryForm = ({ location, onClose }) => {
  const [eventForm, setEvent] = useState({
    name: "",
    special: "",
    category: "",
    location: location,
    description: "",
    // private: false,
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
      <label htmlFor="special">Special Note: </label>
      <input type="text" name="special" onChange={onChange} />
      <label htmlFor="category">Select Category: </label>
      <select name="category" id="category" onChange={onChange}>
        <option value="n/a">Please Select one</option>
        <option value="beach">Beach</option>
        <option value="car">Car</option>
        <option value="default">Default</option>
        <option value="disco">Disco</option>
        <option value="drinks">Drinks</option>
        <option value="food">Food</option>
        <option value="games">Games</option>
        <option value="general">General</option>
        <option value="home">Home</option>
        <option value="karaoke">Karaoke</option>
        <option value="outdoor">Outdoor</option>
        <option value="park">Park</option>
        <option value="party">Party</option>
        <option value="theme-park">Theme Park</option>
        <option value="zoo">Zoo</option>
      </select>
      <label htmlFor="description">Description: </label>
      <textarea type="text" name="description" onChange={onChange}></textarea>
      <label htmlFor="time">Time: </label>
      <input type="time" name="time" onChange={onChange} />
      {/* <label htmlFor="private">Private: </label>
      <input type="checkbox" name="private" value="true" onChange={onChange} /> */}
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" onChange={onChange} />
      <button type="submit" className="btn btn-primary">
        Create event
      </button>
    </form>
  );
};

export default EntryForm;
