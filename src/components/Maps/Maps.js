import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const MapContainer = (props) => (
  <Map
    google={props.google}
    zoom={14}
    styles={{ width: "50%", height: "50%", padding: "1000px" }}
    initialCenter={{
      lat: -1.2884,
      lng: 36.8233,
    }}
  />
)

export default GoogleApiWrapper({
  apiKey: "AIzaSyCkTWZ3bNL41TeapwZ0ew1fGbFil0FRhcg",
})(MapContainer)
