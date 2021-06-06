// Import all the react goodness
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const axios = require("axios");
const API_URL = process.env.PORT || "http://localhost:5000";
const EntryForm = ({ location, onClose }) => {
  async function createEvent(query) {
    try {
      const response = await axios.post(`/api/location/`, query);
    } catch (error) {
      console.log(error);
    }
  }
  const [eventForm, setEvent] = useState({
    name: "",
    special: "",
    category: "",
    location: location,
    description: "",
    // private: ,
    date: "",
  });
  const success = () =>
    toast("Event Created", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // let eventButton = document.querySelector(".create-event");
  const onChange = (e) => {
    // console.log(eventForm);
    // if ((e = unde)) {
    //   console.log(e);
    //   eventButton.classList.add("disabled");
    // } else {
    //   console.log(e);
    //   eventButton.classList.remove("disabled");
    // }
    setEvent({ ...eventForm, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault(e);
    try {
      //   await axios.post("/api/location/", eventForm);
      await createEvent(eventForm);
      onClose();
      success();
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
        <option value="anime">Anime</option>
        <option value="beach">Beach</option>
        <option value="birthday">Birthday</option>
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
      <button type="submit" className="btn btn-primary create-event">
        Create event
        <ToastContainer />
      </button>
    </form>
  );
};

export default EntryForm;
