import {
  SearchContainer,
  StyledTextField,
  // MapContainer,
} from "./__styled__/Borrower"
import GoogleMaps from "../../Maps/Maps"

const Borrower = () => {
  return (
    <>
      <SearchContainer>
        <StyledTextField
          InputProps={{ borderColor: "#FF744E" }}
          fullWidth
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
      </SearchContainer>

      {/* <MapContainer> */}
      <GoogleMaps />
      {/* </MapContainer> */}
    </>
  )
}

export default Borrower
