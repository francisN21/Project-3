import React, { useEffect, useState } from "react";
import { listEvents } from "../../utils/API";


const Dashboard = () => {

  // 
  const [dashboardList, setDashboardList] = useState([]);


  // useeffect for calling API to load saved events to markers on the map
  // reusable backend call to fetch event database
  const getListEvents = async () => {
    const showList = await listEvents();
    console.log(showList);
    setDashboardList(showList);
  };

  useEffect(() => {
    getListEvents();
  }, []);

  const cardStyles = {
    margin: "20px",
    width: "18rem"
  }

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
