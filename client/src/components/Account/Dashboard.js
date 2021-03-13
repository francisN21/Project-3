// Import all the React Goodness!
import React, { useEffect, useState } from "react";
import { listEvents } from "../../utils/API";



// Function to delete the book from the database by ID
const deleteEvent = (id) => {
  fetch(`/api/events/${id}`, {
    method: 'DELETE'
    // Json that response
  })
    .then((response) => response.json())
    .then((data) => {
      // Console log the data
      console.log(data)
    })
  // Refresh the page so that the book is no longer shown
  window.location.reload()

}



// Dashboard Page Component
const Dashboard = () => {

  // State for getting the list of events saved for the dashboardPage
  const [dashboardList, setDashboardList] = useState([]);

  // getListEvents function gets the list of events from the Mongo Database
  const getListEvents = async () => {
    // Await the List events function in Utils/API
    const showList = await listEvents();
    // Console.log it
    // console.log(showList);
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
    width: "18rem"
  }

  // const pageStyles = {
  //   height: "5000px"
  // }

  // Console log to show that the axios request is working
  console.log(dashboardList);

  return (
    <div>
      <h1 className="text-center">Your Events</h1>
      {/* <div className="container"> */}

      <div className="table-responsive">
        <table className="table table-striped text-center table-hover">
          <thead>
            <tr >
              <th>Event Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Date</th>
              <th>Description</th>
              <th>View Event</th>
              <th>Delete Event</th>
            </tr>
          </thead>

          {dashboardList.length ? (

            <tbody>

              {
                dashboardList.map((dashboardEvent) => (

                  <tr key={dashboardEvent._id}>
                    <td><h2>{dashboardEvent.title}</h2></td>


                    <td><p>{dashboardEvent.latitude}</p></td>
                    <td><p>{dashboardEvent.longitude}</p></td>
                    <td><p>{dashboardEvent.date}</p></td>
                    <td><p>{dashboardEvent.description}</p></td>


                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => console.log(`VIEW ${dashboardEvent.title} ID: ${dashboardEvent._id}`)}
                      >
                        View Event
                      </button>
                    </td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteEvent(dashboardEvent._id)}
                      >
                        Delete Event
                    </button>
                    </td>
                  </tr>

                ))


              }
            </tbody>
          ) : (
              <tbody>
                <tr>
                  <td><h1>No Events yet, save some events!  Have some fun!</h1></td>
                </tr>
              </tbody>
            )
          }

          {/* </div> */}
        </table>
      </div>
    </div>
  )
};

export default Dashboard;
