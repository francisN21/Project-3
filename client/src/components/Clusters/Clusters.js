import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './ClusterLayers';
import { listEvents } from "../../utils/API";
import Pin from "../Map/pin";


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
            interactiveLayerIds={[clusterLayer.id]}
        >
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

                        <Pin color="#1f4980" />

                    </Marker>
                </React.Fragment>
            ))}
            <Source
                id="earthquakes"
                type="geojson"
                data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
            >
                <Layer {...clusterLayer} />
                <Layer {...clusterCountLayer} />
                <Layer {...unclusteredPointLayer} />
            </Source>


        </ReactMapGL>
    )
}

export default Clusters








