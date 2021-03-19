import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toast Notification Function to let the user know the event was updated
const notify = () => toast(`Event Updated`);

const EditDetails = (props) => {

  return (
    <form className="new-event-f">
      <label htmlFor="name">Event Name: </label>
      <input type="text" name="name" />
      <label htmlFor="special">Special Note: </label>
      <input type="text" name="special" />
      <label htmlFor="category">Select Category: </label>
      <select name="category" id="category">
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
      <textarea type="text" name="description"></textarea>
      <label htmlFor="time">Time: </label>
      <input type="time" name="time" />
      {/* <label htmlFor="private">Private: </label>
  <input type="checkbox" name="private" value="true" onChange={onChange} /> */}
      <label htmlFor="date">Date: </label>
      <input type="date" name="date" />
      <button type="submit" className="btn btn-primary"
        onClick={() => notify()}
      >
        Save Edit
      </button>
      {/* Toast Container Notification */}
      <ToastContainer />
    </form>
  );
};

export default EditDetails;
