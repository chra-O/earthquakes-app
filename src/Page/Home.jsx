import React from "react";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  const [location, setLocation] = useState({});
  const [featuer, setfeauer] = useState();
  // ********************************

  //////////
  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=10"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLocation(data);

        data.map((index) => {
          console.log(index.metadata);
        });
      });
  }, []);

  return (
    <>
      <p>{location["bbox"]}</p>

      {/* {location.map((product) => {
        return (
          <div>
            {product.type}
         </div>
          
        );
      })} */}
      {/* <Card className=" cardstyle">
        <Card.Img style={{ width: "18rem" }} />
        <Card.Body>
         
          <Card.Title>{location.type}</Card.Title>
          <hr></hr>
          <Card.Text id="textstyling">place :</Card.Text>

          <Button id="button" variant="success">
            Go somewhere
          </Button>
        </Card.Body>
      </Card> */}
    </>
  );
}
