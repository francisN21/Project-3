// Import all the React Goodness!
import React, { useEffect, useState } from "react";
import { listEvents } from "../../utils/API";

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
    margin: "20px",
    width: "18rem"
  }

  // Console log to show that the axios request is working
  console.log(dashboardList);

  return (
    <>
      <h1 className="text-center">Your Events</h1>
      <div className="container">
        <div className="card" style={cardStyles}>
          <h1 className="card-title text-center">Event.title</h1>
          <hr></hr>
          <div className="card-body">
            <h5>Event.latitude</h5>
            <h5>Event.longitude</h5>
            <h5>Event.date</h5>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-info"
              onClick={() => console.log("View Event")}
            >
              View Event
            </button>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => console.log("Delete Event")}
            >
              Delete Event
            </button>
          </div>
        </div>



      </div>
    </>
  )
};

export default Dashboard;
