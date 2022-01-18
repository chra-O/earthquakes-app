import React from "react";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  const [location, setLocation] = useState({});

  let hadelCilick = () => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=20"
    )
      .then((response) => response.json())

      .then((response) => setLocation(response));
  };

  // ********************************
  useEffect(() => {
    hadelCilick();
  });

  //////////

  return (
    <>
      <Card className=" cardstyle">
        <Card.Img style={{ width: "18rem" }} />
        <Card.Body>
          <Card.Title>{location.type}</Card.Title>
          <hr></hr>
          <Card.Text  id="textstyling">place : {location.type}</Card.Text>

          <Button id="button" variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
