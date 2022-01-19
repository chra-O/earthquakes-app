import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function Detail() {
  const { id } = useParams();
  const [state, setstate] = useState([]);
  const [s, ss] = useState([]);
  const url = [];
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
  state.map((index) => {
    return url.push(index.properties.detail);
  });
  ////////////////////////
  useEffect(() => {
    url.map((index) => {
      fetch(index)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          ss(data.properties);
        });
    });
  }, []);
  console.log(state);
  console.log(s);

  return <> </>;
}
