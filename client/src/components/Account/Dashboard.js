// Import all the React Goodness!
import React, { useEffect, useState } from "react";
import { listEvents } from "../../utils/API";
import { Link } from "react-router-dom";
import DashboardEvent from "./DashboardEvent"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Function to change the location from lat/lon to an address
const getAddress = (lon, lat) => {

  // Url for the mapbox API request
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?types=address&access_token=pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`

  // Fetch Get request
  fetch(url, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
    cache: "reload",
  })
    // return to json format
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      // console.log(data.features[0].place_name)
      // let address = ""
      let addressTest = data.features[0].place_name
      console.log(addressTest)
      // let address = data.features[0].place_name
      return addressTest

      // setAddress(adressTest)
    })

}

// Function to delete the event from the database by ID
const deleteEvent = (dashboardEvent) => {
  fetch(`/api/location/${dashboardEvent._id}`, {
    method: "DELETE",
    // Json that response
  })
    .then((response) => response.json())
    .then((data) => {
      // Console log the data
      // console.log(data)
    });

  // Refresh the page so that the event is no longer shown
  window.location.reload();
};

// Toast Notification Function to let the user know the event was deleted
const notify = (event) => toast(`${event.title} Deleted`);

// Dashboard Page Component
const Dashboard = () => {
  // State for getting the list of events saved for the dashboardPage
  const [dashboardList, setDashboardList] = useState([]);
  // const [address, setAddress] = useState([]);

  // getListEvents function gets the list of events from the Mongo Database
  const getListEvents = async () => {
    // Await the List events function in Utils/API
    const showList = await listEvents();
    // Console.log it
    console.log(showList);
    // Set State for the event list
    setDashboardList(showList);
  };

  // UseEffect to call the function when the page loads
  useEffect(() => {
    getListEvents();
  }, []);

  // Styles for the cards.
  const cardStyles = {
    margin: "10px",
    width: "18rem",
  };

  const pageStyles = {
    backgroundColor: "rgba(255,255, 255, 0.8)"
  };

  // Return the component
  return (
    <div  style={pageStyles}  className="account-overflow">
      {/* Title of page */}
      <h1 className="text-center" > Your Events</h1 >
      {/* Set up a div for the table */}
      < div className="table-responsive" >
        {/* Table */}
        < table className="table table-striped text-center table-hover" >
          {/* Table header */}
          < thead >
            <tr>
              <th>Event Name</th>
              <th>Latitude/Longitude</th>

              <th>Date</th>
              <th>Description</th>
              <th>Delete Event</th>
            </tr>
          </ thead>
            <tbody>
              {/* <tr> */}
              {dashboardList.map((event) => (
             <DashboardEvent event={event} key={event._id}/>
              ))}
              {/* </tr> */}
  
        

            </tbody>
 
        </table >
      </div >
      {/* Toast Container Notification */}
      {/* <ToastContainer /> */}
    </div >
  );
};

export default Dashboard;
