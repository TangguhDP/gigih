import React from "react";

export default function index(props) {
  return (
    <>
      <h6>{props.title}</h6>
      <img alt={props.title} src={props.url} />
    </>
  );
}
