import React, { useState } from "react"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import TabPanel from "./TabPanel"
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly"
import SportsHandballIcon from "@material-ui/icons/SportsHandball"
import Borrower from "./Borrower/Borrower"

const Home = () => {
  const [tabValue, setTabValue] = useState(0)

  const onTabChange = (event, tabValue) => {
    setTabValue(tabValue)
  }

  const a11yProps = (index) => ({
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  })

  return (
    <>
      <Tabs
        TabIndicatorProps={{ style: { background: "#FF744E" } }}
        value={tabValue}
        variant="fullWidth"
        onChange={onTabChange}
      >
        <Tab icon={<SportsHandballIcon />} label="Borrower" {...a11yProps} />
        <Tab icon={<ChildFriendlyIcon />} label="Owner" />
      </Tabs>

      <TabPanel index={0} value={tabValue}>
        <Borrower />
      </TabPanel>
    </>
  )
}

export default Home
