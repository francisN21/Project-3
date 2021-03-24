import React, { useRef, useState, useEffect, useCallback, useContext } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import EntryForm from "./EntryForm";
import { listEvents } from "../../utils/API";
import Pin from "./pin";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Map.css";
import Details from "./Details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../Context/UserContext"
require("dotenv").config();

const Map = () => {
  // Set the user data to userContext
  const { userData } = useContext(UserContext)
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

  // map setup
  const api = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
  // mapbox://styles/francisn21/cklv81byf44mx17ql4bv4chxl
  const mapstyle = "mapbox://styles/mapbox/dark-v9";
  const [showevents, setEvents] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEventLocation, setEventLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.0902,
    longitude: -95.7129,
    zoom: 10,
  });
  // toastify
  const success = () => toast("Hello !");
  // useeffect for calling API to load saved events to markers on the map
  // reusable backend call to fetch event database
  const getEvents = async () => {
    try {
      const showMarkers = await listEvents();

      setEvents(showMarkers);
    } catch (error) {
      console.log(error);
    }
  };
  // const history = useHistory();
  // const getUserData = async () => {
  //   try {
  //     const res = await axios.get("/api", {
  //       headers: { "x-auth-token": localStorage.getItem("auth-token") },
  //     });
  //     if (!res) {
  //       return history.push("/login");
  //     }
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // getUserData();
    getEvents();
  }, []);

  //
  const geolocateStyle = {
    top: 0,
    right: 0,
    margin: 10,
  };
  const positionOptions = { enableHighAccuracy: true };

  //===========TEST CONTAINER============//
  const navStyle = {
    position: "absolute",
    top: 40,
    right: 30,
    padding: "10px",
  };

  // ===========ENDS HERE============ //
  //  GeoCoder Location //
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  // new Event section //

  const addEventPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setEventLocation({
      latitude,
      longitude,
    });
  };
  //  delete and edit popup ==== //

  return (
    <div className="map" id="map">
      <ToastContainer />
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={api}
        mapStyle={mapstyle}
        doubleClickZoom={false}
        onClick={() => setShowPopup({})}
        onDblClick={addEventPopup}
        onViewportChange={handleViewportChange}
      >
        {/* display marker section */}
        {showevents.map((event) => (
          <React.Fragment key={event._id}>
            <Marker
              // className="event-pin"
              latitude={event.location[0].latitude}
              longitude={event.location[0].longitude}
              offsetTop={-20}
              offsetLeft={-10}
            >
              {/* div wrapper to add onclick to the markers on the map to show the event info */}
              <div
                onClick={() =>
                  setShowPopup({
                    // ...showPopup,
                    [event._id]: true,
                  })
                }
              >
                <Pin type={event} />
              </div>
            </Marker>
            {showPopup[event._id] ? (
              <Popup
                latitude={event.location[0].latitude}
                longitude={event.location[0].longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => {
                  setShowPopup({});
                  getEvents();
                }}
                anchor="top"
              >
                <Details
                  value={event}
                  onClose={() => {
                    setShowPopup({});
                    getEvents();
                  }}
                />
              </Popup>
            ) : null}
          </React.Fragment>
        ))}
        {/* display marker section END*/}
        {/* New Location section */}
        {addEventLocation ? (
          <>
            <Marker
              latitude={addEventLocation.latitude}
              longitude={addEventLocation.longitude}
              offsetTop={-30}
              offsetLeft={-10}
            >
              <div>
                <svg
                  style={{ fill: "red" }}
                  height="20"
                  viewBox="0 0 24 24"
                  x="0px"
                  y="0px"
                >
                  <path
                    d="M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
      c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
      C20.1,15.8,20.2,15.8,20.2,15.7z"
                  />
                </svg>
              </div>
            </Marker>
            <Popup
              latitude={addEventLocation.latitude}
              longitude={addEventLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => {
                setEventLocation(null);
                // success();
              }}
              anchor="top"
            >
              <div className="popup">
                <EntryForm
                  onClose={() => {
                    setEventLocation(null);
                    getEvents();
                    console.log(addEventLocation);
                  }}
                  location={addEventLocation}
                />
              </div>
            </Popup>
          </>
        ) : null}
        {/* New Location section end*/}
        {/* location search */}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={api}
          position="top-left"
        />

        {/* Utilities Section */}

        {/* looks for user location */}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
        {/*  */}
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    </div>
  );
};

export default Map;
