import React, { useEffect, useState } from "react";
import moment from "moment"
// import "../../.env";
require("dotenv").config();
const DefaultDetails = (props) => {
  let x = props.value.location[0].longitude;
  let y = props.value.location[0].latitude;
  const [address, setAddress] = useState();
  useEffect(() => {
    getAddress(x, y);

    console.log(address);
  }, []);
  // const { Access_Token } = process.env;

  const getAddress = async (lon, lat) => {
    // Url for the mapbox API request
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?types=address&access_token=pk.eyJ1IjoiZnJhbmNpc24yMSIsImEiOiJja2x1amVuNGQwYmVkMm9vZW9xc3VwOW9jIn0.eh8hBFzSr0tJUxungpfu3A`;
    try {
      await fetch(url, {
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        cache: "reload",
      })
        // return to json format
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // console.log(data);
          // console.log(data.features[0].place_name)
          // let address = ""
          let realAddress = data.features[0].place_name;
          console.log(realAddress);
          // let address = data.features[0].place_name

          setAddress(realAddress);
        });
    } catch (error) {
      console.log(error);
    }
    // Fetch Get request
  };
  return (
    <>
      <h3>{props.value.name || props.value.title}</h3>
      {props.value.special ? <p>{props.value.special}</p> : null}
      <p className="text-wrap">{props.value.description}</p>
      <p>{moment(props.value.date).format('DD-MM-YYYY')}</p>
      <p className="client-address">
        <a href={address} target={"_blank"} rel="noreferrer">
          {address}
        </a>
      </p>
    </>
  );
};

export default DefaultDetails;
