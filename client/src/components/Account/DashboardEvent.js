import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = (event) => toast(`${event.title} Deleted`);

const DashboardEvent = ({event}) => {
    let x = event.location[0].longitude;
    let y = event.location[0].latitude;
    const [address, setAddress] = useState();
    useEffect(() => {
      getAddress(x, y);
  
      console.log(address);
    }, []);

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
  const getAddress = async (lon, lat) => {
    // Url for the mapbox API request
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?types=address&access_token=pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
    try {
      await fetch(url, {
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
          let addressTest = data.features[0].place_name;
          console.log(addressTest);
          // let address = data.features[0].place_name

          setAddress(addressTest);
        });
    } catch (error) {
      console.log(error);
    }
    // Fetch Get request
  };

    return (
        <tr key={event._id}>
    <td><h5>{event.title}</h5></td>
                <td>{address}</td>
                <td>
                  <p>{event.date}</p>
                </td>
                <td>
                  <p>{event.description}</p>
                </td>
                <td>
                     {/* Link to send you to edit event page  */}
                     <Link
                       className="btn btn-info"
                       to={{
                         pathname: "/editEvent",
                        // event sent via props
                         editEventProps: {
                           event
     
                         },
                       }}
                     >
                       Edit Event
                       </Link>
                     {/* Button to delete the event */}
                     <button
                       className="btn btn-danger"
                    //   Call the delete Event by it's ID function on click and Toast Notify Function
                    onClick={() => { deleteEvent(event); notify(event) }}
                     >
                       Delete Event
                       </button>
                   </td>
           <td>
                    <ToastContainer />
                    </td>
    </tr>
    )
}

export default DashboardEvent
