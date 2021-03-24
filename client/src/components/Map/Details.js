import React, { useState } from "react";
import { deleteEvent } from "../utils/API";
import DefaultDetails from "./DefaultDetails";
import "./Details.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateEvent } from "../utils/API";

// Toast Notification Function to let the user know the event was deleted
const notify = () => toast("Event Deleted");

const Details = ({ value, onClose }) => {
  const [details, setDetails] = useState(true);
  const [newValue, setNewValue] = useState({
    _id: value._id,
    name: "",
    special: "",
    category: "",
    location: value.location,
    description: "",
    // private: ,
    date: "",
  });
  const onChange = (e) => {
    setNewValue({ ...newValue, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(newValue);
      onClose();
      toast(`sucess`);
    } catch (error) {
      toast(`${error}`);
    }
  };

  const delEvent = async (event) => {
    try {
      await deleteEvent(event);
      console.log(value);
      setDetails(false);
      onClose();
      toast(`deleted`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup">
      {details ? (
        <DefaultDetails value={value} />
      ) : (
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
          <textarea
            type="text"
            name="description"
            onChange={onChange}
          ></textarea>
          <label htmlFor="time">Time: </label>
          <input type="time" name="time" onChange={onChange} />
          {/* <label htmlFor="private">Private: </label>
      <input type="checkbox" name="private" value="true" onChange={onChange} /> */}
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" onChange={onChange} />
          <button className="btn btn-primary">Save</button>
          {/* Toast Container Notification */}
        </form>
      )}

      <div>
        <button className="icon btn-info" onClick={() => setDetails(!details)}>
          <div>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
        </button>

        <button
          className="icon btn-danger"
          onClick={() => {
            delEvent(value._id);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
      {/* Toast Container Notification */}
    </div>
  );
};

export default Details;
