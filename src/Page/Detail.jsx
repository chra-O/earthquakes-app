import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function Detail() {
  const { id } = useParams();
  const [s, ss] = useState([{}]);

  ////////////////////////
  useEffect(() => {
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        ss(data.properties);
      });
  }, []);
  //i have problem with map . so i can access longitude and latitude

  return (
    <>
      <Card className=" cardstyle">
        <Card.Body>
          <Card.Title> palce : {s.place}</Card.Title>
          <hr></hr>
          <Card.Text id="textstyling">Time : {s.time}</Card.Text>
          <Card.Text id="textstyling">Type : {s.type}</Card.Text>
          <Card.Text id="textstyling"></Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
