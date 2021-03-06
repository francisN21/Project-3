import React, { Component, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
require("dotenv").config();

const Map = () => {
  const api = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
  const mapstyle = "mapbox://styles/francisn21/cklv81byf44mx17ql4bv4chxl";
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.971763873568634,
    longitude: -122.35046482943676,
    zoom: 12,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      console.log("no geocode");
    }
    //   console.log(userLocation);
  }, []);

  const setPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const userLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    console.log(userLocation);
  };
  const style = {
    background: "black",
  };

  const geolocateStyle = {
    top: 0,
    right: 0,
    margin: 10,
  };
  const positionOptions = { enableHighAccuracy: true };
  return (
    <div id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={api}
        mapStyle={mapstyle}
        onViewportChange={setViewport}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
