import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
// import { clusterLayer, clusterCountLayer, unclusteredPointLayer, pointLayer } from './ClusterLayers';
import { listEvents } from "../../utils/API";
import Pin from "../Map/pin";
import supercluster from 'supercluster'
import useSupercluster from "use-supercluster"
import "./Clusters.css"


const Clusters = () => {
    const [showevents, setEvents] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 35.95626,
        longitude: -121.8657,
        width: "100vw",
        height: "100vh",
        zoom: 4,
    });



    const mapRef = useRef(null);

    const MAPBOX_TOKEN = `pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`
    const map_style = "mapbox://styles/mapbox/dark-v9"

    const points = showevents.map(point => ({
        type: "Feature",
        properties: {
            cluster: false,
            pointId: point._id,
            category: point.category
        },
        geometry: { type: "Point", coordinates: [point.location[0].longitude, point.location[0].latitude] }
    }))

    const bounds = mapRef.current
        ? mapRef.current
            .getMap()
            .getBounds()
            .toArray()
            .flat()
        : null

    // Get clusters:
    const { clusters, supercluster } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    })




    // console.log(points)
    // const index = new Supercluster({
    //     map: (props) => ({ sum: props.myValue }),
    //     reduce: (accumulated, props) => { accumulated.sum += props.sum }
    // })



    // const {clusters} = 
    // const { clusters } = useSupercluster({
    //     points,
    //     zoom: viewport.zoom,
    //     bounds,
    //     options: { radius: 75, maxZoom: 20 }
    // })



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


    console.log(clusters)

    return (
        <ReactMapGL
            {...viewport}
            maxZoom={20}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={setViewport}
            mapStyle={map_style}
            ref={mapRef}
        // interactiveLayerIds={[clusterLayer.id]}
        >
            {clusters.map((cluster) => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const {
                    cluster: isCluster,
                    point_count: pointCount
                } = cluster.properties

                if (isCluster) {
                    return (
                        <Marker key={cluster.id}
                            latitude={latitude}
                            longitude={longitude}>
                            <div className={`cluster-marker ${pointCount >= 10 ? "cluster-large" : ""} `}
                                style={{
                                    width: `${10 + (pointCount) / points.length * 50}px`,
                                    height: `${10 + (pointCount) / points.length * 50}px`
                                }}
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
                                {pointCount}
                            </div>
                        </Marker>
                    )
                }
                return (
                    <Marker
                        className="event-pin"
                        key={cluster.properties.pointId}
                        latitude={latitude}
                        longitude={longitude}
                    // offsetTop={-20}
                    // offsetLeft={-10}
                    >
                        {/* <div className="event-marker">

                        </div> */}
                        {/* div wrapper to add onclick to the markers on the map to show the event info */}

                        <Pin color="#FFFFFF" />

                    </Marker>
                )
            })}

            {/* // <React.Fragment key={event._id}>
            //     return( <Marker
            //         // className="event-pin"
            //         key={event._id}
            //         latitude={event.location[0].latitude}
            //         longitude={event.location[0].longitude}
            //     // offsetTop={-20}
            //     // offsetLeft={-10}
            //     >
            //         {/* div wrapper to add onclick to the markers on the map to show the event info */}

            {/* //         <Pin color="#FFFFFF" /> */}

            {/* //     </Marker> */}
            {/* //     // </React.Fragment> */}
            {/* // ))}
            // ) */}


            {/* <Source
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
            <Source
                id="events"
                type="geojson"
                data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
            >

                <Layer {...pointLayer} />
            </Source> */}


        </ReactMapGL >
    )
}

export default Clusters








