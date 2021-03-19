import React from "react"
import Box from "@material-ui/core/Box"

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      aria-labelledby={`full-width-tab-${index}`}
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default TabPanel
