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
    margin: "10px",
    width: "18rem"
  }

  // Console log to show that the axios request is working
  console.log(dashboardList);

  return (
    <>
      <h1 className="text-center">Your Events</h1>
      <div className="container">
        {dashboardList.map((dashboardEvent) => (

          <div className="card"
            style={cardStyles}
            key={dashboardEvent._id}>
            <h2 className="card-title text-center">{dashboardEvent.title}</h2>
            <hr></hr>
            <div className="card-body">
              <h5>{dashboardEvent.latitude}</h5>
              <h5>{dashboardEvent.longitude}</h5>
              <h5>{dashboardEvent.updatedAt}</h5>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info"
                onClick={() => console.log(`VIEW ${dashboardEvent.title} ID: ${dashboardEvent._id}`)}
              >
                View Event
              </button>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => console.log(`DELETE ${dashboardEvent.title} ID: ${dashboardEvent._id}`)}
              >
                Delete Event
              </button>
            </div>

          </div>

        ))


        }




      </div>
    </>
  )
};

export default Dashboard;
