// Import all the Goodness
import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
// import { clusterLayer, clusterCountLayer, unclusteredPointLayer, pointLayer } from './ClusterLayers';
import { listEvents } from "../utils/API";
import ClusterPins from "./ClusterPins";
import useSupercluster from "use-supercluster"
import "./Clusters.css"
import API from "../utils/API";

// Clusters component function
const Clusters = () => {

    // Set the State to show events
    const [showevents, setEvents] = useState([]);
    // Set the state for viewport
    const [viewport, setViewport] = useState({
        latitude: 35.95626,
        longitude: -121.8657,
        width: "100vw",
        height: "100vh",
        zoom: 4,
    });
    // Set Mapref to null
    const mapRef = useRef(null);

    // Declare the mapbox token and map style
    const MAPBOX_TOKEN = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`
    const map_style = "mapbox://styles/mapbox/dark-v9"

    // Function to set each event to a point and to GEOJSON object
    const points = showevents.map(point => ({
        type: "Feature",
        properties: {
            cluster: false,
            pointId: point._id,
            category: point.category
        },
        geometry: { type: "Point", coordinates: [point.location[0].longitude, point.location[0].latitude] }
    }))

    // Set bounds for the view window
    const bounds = mapRef.current
        ? mapRef.current
            .getMap()
            .getBounds()
            .toArray()
            .flat()
        : null

    // Get clusters and set clusters using the superclusters
    const { clusters, supercluster } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    })


    // Get the events from the database
    const getEvents = async () => {
        try {
            const showMarkers = await API.listEvents();
            // console.log(showMarkers)
            setEvents(showMarkers);
        } catch (error) {
            console.log(error);
        }
    };

    // Use effect to get the events on load
    useEffect(() => {
        getEvents();
    }, []);

    // Return everything to display on the page
    return (
        <ReactMapGL
            {...viewport}
            maxZoom={20}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={setViewport}
            mapStyle={map_style}
            ref={mapRef}
        >
            {/* Map through the clusters to display them */}
            {clusters.map((cluster) => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const {
                    cluster: isCluster,
                    point_count: pointCount
                } = cluster.properties
                // If it is a cluster display them
                if (isCluster) {
                    return (
                        <Marker key={cluster.id}
                            latitude={latitude}
                            longitude={longitude}>
                            {/* Set the cluster to a different color if it more then 10 events */}
                            <div className={`cluster-marker ${pointCount >= 10 ? "cluster-large" : ""} `}
                                style={{
                                    width: `${10 + (pointCount) / points.length * 50}px`,
                                    height: `${10 + (pointCount) / points.length * 50}px`
                                }}
                                // Onclick functino that lets user click on a cluster to zoom into it
                                onClick={() => {
                                    const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20);
                                    setViewport({
                                        ...viewport,
                                        latitude,
                                        longitude,
                                        zoom: expansionZoom,
                                        transitionInterpolator: new FlyToInterpolator({
                                            speed: 2
                                        }),
                                        transitionDuration: "auto"
                                    })
                                }}

                            >
                                {/* In the center of the cluster display the amount of events */}
                                {pointCount}
                            </div>
                        </Marker>
                    )
                }

                // Return the pins, not the clusters
                return (
                    <Marker
                        className="event-pin"
                        key={cluster.properties.pointId}
                        latitude={latitude}
                        longitude={longitude}
                    >
                        {/* Pin component to dispaly an event, color is yellow */}
                        <ClusterPins color="#FFFF00" />

                    </Marker>
                )
            })}

        </ReactMapGL >
    )
}

// Export the clusters component
export default Clusters








