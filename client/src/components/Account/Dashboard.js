import React from "react";



const cardStyles = {
  margin: "20px",
  width: "18rem"
}
const Dashboard = () => {
  return (
    <>
      <h1>Your Events</h1>
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
              className="btn btn-danger"
              onClick={() => console.log("Delete")}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
