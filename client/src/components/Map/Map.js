import React, { Component, useState, useEffect, useCallback } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import { listEvents } from "../../utils/API";
import ControlPanel from "./Control-Panel";
import Pin from "./pin";
require("dotenv").config();

const Map = () => {
  // map setup
  const api = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
  const mapstyle = "mapbox://styles/francisn21/cklv81byf44mx17ql4bv4chxl";
  const [location, setLocation] = useState();
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.0902,
    longitude: -95.7129,
    zoom: 10,
  });

  // useeffect for calling API to load saved events to markers on the map
  useEffect(() => {
    (async () => {
      const showMarkers = await listEvents();
      console.log(showMarkers);
    })();
  }, []);
  // =========== GeoLocation =========== //
  // useeffect for geolocation
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
    setLocation(userLocation);
  };
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
    top: 0,
    left: 0,
    padding: "10px",
  };
  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100,
  });
  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDrag: event.lngLat }));
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents((_events) => ({ ..._events, onDragEnd: event.lngLat }));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  // ===========ENDS HERE============ //
  return (
    <div id="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={api}
        mapStyle={mapstyle}
        onViewportChange={setViewport}
      >
        <Marker
          latitude={37.7523728}
          longitude={-122.4819459}
          offsetLeft={-24}
          offsetTop={-24}
        >
          <div>
            <svg
              className="marker"
              style={{
                height: `${6 * viewport.zoom}px`,
                width: `${6 * viewport.zoom}px`,
              }}
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Marker>
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </ReactMapGL>
      <ControlPanel events={events} />
    </div>
  );
};

export default Map;
