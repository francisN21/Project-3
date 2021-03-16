import React, { useState } from "react";
import { deleteEvent } from "../../utils/API";
import DefaultDetails from "./DefaultDetails";
import "./Details.css";
import EditDetails from "./EditDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Event Deleted");

const Details = ({ value, onClose }) => {
  const [details, setDetails] = useState(true);

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
      {details ? (
        <DefaultDetails value={value} />
      ) : (
          <EditDetails value={value} />
        )}
      {/* <h3>{value.name || value.title}</h3>
      {value.special ? <p>{value.special}</p> : null}
      <p className="text-wrap">{value.description}</p>

      <p>{value.date}</p> */}
      <div>
        <button className="icon btn-info" onClick={() => setDetails(!details)}>
          <div class="css-9a5dmo">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
        </button>
        <button className="icon btn-danger" onClick={() => { delEvent(value._id); notify() }}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>

      <ToastContainer />


    </div >
  );
};

export default Details;
