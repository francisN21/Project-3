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
      {/* <div className="container"> */}

      <div className="table-responsive">
        <table className="table table-striped text-center table-hover">
          <thead>
            <tr >
              <th>Event Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Created At</th>
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
                    <td><p>{dashboardEvent.updatedAt}</p></td>


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
                        onClick={() => console.log(`DELETE ${dashboardEvent.title} ID: ${dashboardEvent._id}`)}
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
    </>
  )
};

export default Dashboard;
