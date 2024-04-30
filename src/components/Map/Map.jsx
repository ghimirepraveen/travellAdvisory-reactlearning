import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD4_Hs_0Vhhh1f0ghm8_rXvE3XMmMTv2FI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          if (e.bounds) {
            const { ne, sw } = e.bounds;
            if (ne && sw) {
              setBounds({
                ne: { lat: ne.lat, lng: ne.lng },
                sw: { lat: sw.lat, lng: sw.lng },
              });
              console.log("Bounds updated:", {
                ne: { lat: ne.lat, lng: ne.lng },
                sw: { lat: sw.lat, lng: sw.lng },
              });
            } else {
              console.log("Bounds are not properly defined");
            }
          } else {
            console.log("Bounds are null");
          }
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
