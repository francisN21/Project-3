// Import all the React Goodness!
import React, { useEffect, useState, useContext } from "react";
import { listEvents } from "../../utils/API";
import DashboardEvent from "./DashboardEvent"
import UserContext from "../../Context/UserContext"
import { useHistory } from "react-router-dom";

// Dashboard Page Component
const Dashboard = () => {
  // Set the user data to userContext
  const { userData, setUserData } = useContext(UserContext)
  // const { userData } = useContext(UserContext)
  // Use history to be able to redirect if not logged in
  const history = useHistory()

  // Use effect to see on page load if the user is logged in
  useEffect(() => {
    console.log(userData)
    // If not logged in, send to the login page
    if (!userData.token) {
      history.push("/login");
    }

  }, [userData.user, history])
  // State for getting the list of events saved for the dashboardPage
  const [dashboardList, setDashboardList] = useState([]);


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
    // console.log(userData)

  }, []);

  // Styling for the page
  const pageStyles = {
    backgroundColor: "rgba(255,255, 255, 0.8)"
  };

  // Return the component
  return (
    <div style={pageStyles} className="account-overflow">
      {/* Title of page */}
      <h1 className="text-center" >Events</h1 >
      {/* Set up a div for the table */}
      < div className="table-responsive" >
        {/* Table */}
        < table className="table table-striped text-center table-hover" >
          {/* Table header */}
          < thead >
            <tr>
              <th>Event</th>
              <th>Location</th>
              <th>Date</th>
              <th>Description</th>
              <th>Delete Event</th>
            </tr>
          </ thead>
          {/* Map Through the events and set each on to a DashboardEvent component with props */}
          <tbody>
            {dashboardList.map((event) => (
              <DashboardEvent event={event} key={event._id} />
            ))}
          </tbody>

        </table >
      </div >
    </div >
  );
};
// Export the component
export default Dashboard;
