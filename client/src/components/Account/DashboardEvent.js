// Import all the React Goodness!
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Notify Function for Toastify Alert
const notify = (event) => toast(`${event.title} Deleted`);

// DashboardEvent Component
const DashboardEvent = ({ event }) => {
    // To change the address from lat/lon to real address
    let x = event.location[0].longitude;
    let y = event.location[0].latitude;
    const [address, setAddress] = useState();
    // USe effect to get the address
    useEffect(() => {
        getAddress(x, y);
    }, []);

    // Function to delete the event from the database by ID
    const deleteEvent = (dashboardEvent) => {
        fetch(`/api/location/${dashboardEvent._id}`, {
            method: "DELETE",
            // Json that response
        })
            .then((response) => response.json())

        // Refresh the page so that the event is no longer shown
        window.location.reload();
    };

    // Styling for the buttons
    const buttonStyles = {
        width: '150px',
        margin: "5px"
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
                    let realAddress = data.features[0].place_name;
                    // console.log(realAddress);
                    setAddress(realAddress);
                });
            // Gotta catch them errors
        } catch (error) {
            console.log(error);
        }

    };

    // Return the component
    return (
        // Each event a table row
        <tr key={event._id}>
            <td><h5>{event.name}</h5></td>
            {/* Address from the get address function */}
            <td>{address}</td>
            <td>
                <p>{event.date}</p>
            </td>
            <td>
                <p>{event.description}</p>
            </td>
            <td>
                {/* Link to send you to edit event page  */}
                <Link style={buttonStyles}
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
                <button style={buttonStyles}
                    className="btn btn-danger"
                    //   Call the delete Event by it's ID function on click and Toast Notify Function
                    onClick={() => { deleteEvent(event); notify(event) }}
                >
                    Delete Event
                    </button>
            </td>
            <td>
                {/* Toast container for the toast alerts */}
                <ToastContainer />
            </td>
        </tr>
    )
}
// Export the component
export default DashboardEvent
