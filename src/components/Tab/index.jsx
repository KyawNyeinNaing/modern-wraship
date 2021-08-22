import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Ship from "./Ship";
import Submarine from "./Submarine";
import AircraftCareer from "./AircraftCareer";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
};

const TabsWrappedLabel = ({ ships }) => {
  const [value, setValue] = useState("Ships");
  const [getText, setGetText] = useState("");

  console.log(getText);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOnClick = (e) => {
    setGetText(e.nativeEvent.path[0].innerText.toLowerCase());
  };

  return (
    <>
      <TabHeader className="tab-header" position="static">
        <Tabs
          className="asdadasd"
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="Ship"
            label="Ship"
            wrapped
            {...a11yProps("Ship")}
            onClick={(e) => handleOnClick(e)}
          />
          <Tab
            value="Submarine"
            label="Submarine"
            {...a11yProps("Submarine")}
            onClick={(e) => handleOnClick(e)}
          />
          <Tab
            value="Carrier"
            label="Carrier"
            {...a11yProps("Carrier")}
            onClick={(e) => handleOnClick(e)}
          />
        </Tabs>
      </TabHeader>
      <TabPanel value={value} index="Ship">
        <Ship ships={ships} getText={getText} />
      </TabPanel>
      <TabPanel value={value} index="Submarine">
        <Submarine ships={ships} getText={getText} />
      </TabPanel>
      <TabPanel value={value} index="Carrier">
        <AircraftCareer ships={ships} getText={getText} />
      </TabPanel>
    </>
  );
};

export default TabsWrappedLabel;

const TabHeader = styled(AppBar)`
  &.tab-header {
    background-color: var(--background-color-dark);
    box-shadow: none;
    button {
      color: var(--text-color);
    }
  }
`;
