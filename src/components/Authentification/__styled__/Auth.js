import styled from "styled-components"
import theme from "../../../color"
import { withStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core/"

export const AuthBox = styled.div`
  padding: 150px 60px;
  /* border: 3px solid ${theme.color.blue}; */
  /* margin: 80px 20px; */
  position: relative;
  text-align: center;
  justify-content: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  display: block;
  margin: auto;
  max-width: 800px;
`

export const Title = styled.h2`
  color: ${theme.color.blue};
  margin-bottom: 80px;
  font-weight: 500;
`

export const Text = styled.p`
  color: ${theme.color.blue};
  margin-bottom: 70px;
`

export const StyledInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: `${theme.color.blue}`,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: `${theme.color.blue}`,
      },
    },
    margin: "15px 0",
  },
})(TextField)

export const InputBox = styled.div`
  margin: 40px 150px;
`
