import React from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"
import { googleAPIKey } from "../../config/googleAPIKey"

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
  apiKey: googleAPIKey,
})(MapContainer)
