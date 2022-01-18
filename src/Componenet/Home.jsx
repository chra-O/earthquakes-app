import React from "react";
import { useEffect, useState } from "react";

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
  }, []);

  //////////
  return <div>{location.type}</div>;
}