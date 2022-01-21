import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
export default function Detail() {
  const { id } = useParams();
  const [s, ss] = useState([]);

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

  let latitude;
  if (s) {
    if (s.products) {
      if (s.products.origin[0]) {
        if (s.products.origin[0].properties) {
          latitude = s.products.origin[0].properties.latitude;
        }
      }
    }
  }
  let longitude;
  if (s) {
    if (s.products) {
      if (s.products.origin[0]) {
        if (s.products.origin[0].properties) {
          longitude = s.products.origin[0].properties.longitude;
        }
      }
    }
  }

  return (
    <>
      <Card className=" cardstyle">
        <Card.Body>
          <Card.Title> palce : {s.place}</Card.Title>
          <hr></hr>
          <Card.Text id="textstyling">Time : {s.time}</Card.Text>
          <Card.Text id="textstyling">Type : {s.type}</Card.Text>
          <Card.Text id="textstyling"> latitude : {latitude} </Card.Text>
          <Card.Text id="textstyling"> longitude : {longitude} </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
