import React, { useState, useEffect } from "react"
import { TextField } from "@material-ui/core/"
import { SearchContainer, StyledTextField } from "./__styled__/Borrower"

const Borrower = () => {
  return (
    <SearchContainer>
      <StyledTextField
        InputProps={{ borderColor: "#FF744E" }}
        fullWidth
        id="outlined-basic"
        label="Search..."
        variant="outlined"
      />
    </SearchContainer>
  )
}

export default Borrower
