import React, { useRef, useState, useEffect, useCallback } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import { listEvents } from "../../utils/API";
import ControlPanel from "./Control-Panel";
import Pin from "./pin";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./Map.css";
import pin from "./location64x64.png";

require("dotenv").config();

const Map = () => {
  // map setup
  const api = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
  const mapstyle = "mapbox://styles/francisn21/cklv81byf44mx17ql4bv4chxl";
  const [showevents, setEvents] = useState([]);
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
      setEvents(showMarkers);
    })();
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
  const controlStyle = {
    position: "auto",
    top: 150,
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
  const sticky = {
    transform: "translate(-50%, -50%) rotateX(0deg) rotateZ(0deg) !important",
  };
  return (
    <div id="map">
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={api}
        mapStyle={mapstyle}
        onViewportChange={handleViewportChange}
      >
        {/* display marker section */}
        {showevents.map((event, index) => {
          return (
            <Marker
              key={index}
              // className="event-pin"
              latitude={event.latitude}
              longitude={event.longitude}
              offsetLeft={-24}
              offsetTop={-24}
              style={sticky}
            >
              <img className="event-pin" src={pin} alt="event" />
            </Marker>
          );
        })}

        {/* location search */}
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={api}
          position="top-left"
        />

        {/* Components for testing lat and long */}
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
        <ControlPanel events={events} style={controlStyle} />
      </ReactMapGL>
    </div>
  );
};

export default Map;
