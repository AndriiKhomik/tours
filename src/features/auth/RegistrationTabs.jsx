import React, { useState } from "react";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "./TabPanel";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { FormattedMessage } from "react-intl";

const allyProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tab-${index}`,
  };
};

const RegistrationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={8} md={4}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "white",
            },
          }}
        >
          <Tab
            sx={{ width: "50%" }}
            label={
              <Typography variant="body1">
                <FormattedMessage id="user.tab.signIn" />
              </Typography>
            }
            {...allyProps(0)}
          />
          <Tab
            sx={{ width: "50%" }}
            label={
              <Typography variant="body1">
                <FormattedMessage id="user.tab.signUp" />
              </Typography>
            }
            {...allyProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SignInForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpForm />
      </TabPanel>
    </Grid>
  );
};

export default RegistrationTabs;
