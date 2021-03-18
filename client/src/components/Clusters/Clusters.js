import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './ClusterLayers';
import { listEvents } from "../../utils/API";


const Clusters = () => {
    const [showevents, setEvents] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 40.67,
        longitude: -103.59,
        width: "100vw",
        height: "100vh",
        zoom: 3,
    });
    const mapRef = useRef(null);

    const MAPBOX_TOKEN = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`
    const map_style = "mapbox://styles/mapbox/dark-v9"


    const getEvents = async () => {
        try {
            const showMarkers = await listEvents();
            console.log(showMarkers)
            setEvents(showMarkers);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);


    return (
        <ReactMapGL
            {...viewport}
            maxZoom={20}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={setViewport}
            mapStyle={map_style}
        >



        </ReactMapGL>
    )
}

export default Clusters








