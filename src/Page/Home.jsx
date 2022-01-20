import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function Home() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=10"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setstate(data.features);
      });
  }, []);
  console.log("hi");
  return (
    <>
      {state.map((location) => {
        return (
          <Card className=" cardstyle" key={location.id}>
            <Card.Body>
              <Card.Title>{location.type}</Card.Title>
              <hr></hr>
              <Card.Text id="textstyling">
                place : {location.properties.place}
              </Card.Text>
              <Card.Text id="textstyling">
                time : {location.properties.time}
              </Card.Text>
              <Card.Text id="textstyling">
                time : {location.properties.detail}
              </Card.Text>
              <Button id="button" variant="success">
                <Link to={`/details/${location.id}`} className="linkstyle">
                  Detail
                </Link>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
