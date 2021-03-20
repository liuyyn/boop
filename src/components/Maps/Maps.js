import React, { useState } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"
import { googleAPIKey } from "../../config/googleAPIKey"
import { Alert, AlertTitle } from "@material-ui/lab"

const MapContainer = (props) => {
  const [book, setBook] = useState(false)

  const handleBook = () => {
    setBook(true)
  }

  return (
    <>
      {book && (
        <Alert severity={"success"} style={{ margin: "20px" }}>
          <AlertTitle>Success !</AlertTitle>
          You have successfully booked some quality time with this pet -{" "}
          <strong>Congrats !</strong>
        </Alert>
      )}
      <Map
        google={props.google}
        zoom={14}
        styles={{ width: "50%", height: "50%", padding: "1000px" }}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: googleAPIKey,
})(MapContainer)
