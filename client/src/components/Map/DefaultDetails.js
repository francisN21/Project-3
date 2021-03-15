import React from "react";

const DefaultDetails = (props) => {
  return (
    <>
      <h3>{props.value.name || props.value.title}</h3>
      {props.value.special ? <p>{props.value.special}</p> : null}
      <p className="text-wrap">{props.value.description}</p>
      <p>{props.value.date}</p>
    </>
  );
};

export default DefaultDetails;
