import styled from "styled-components"
import { withStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core/"

export const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FF744E",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#FF744E",
      },
    },
  },
})(TextField)

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  .search {
    color: #ff744e;
  }
`

export const MapContainer = styled.div`
  /* display: block; */
  padding: 50px;
`
