import React, { Component, useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = () => {
  const api = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });
  useEffect(() => {
    console.log(api);
  }, []);
  return (
    <div id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={api}
        onViewportChange={setViewport}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
