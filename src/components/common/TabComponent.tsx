import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";

const TabsWrapper = styled(Tabs)({
  backgroundColor: "primary", // Customize the background color
  color: "#fff"
});

const TabWrapper = styled(Tab)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.common.white,
  },
  WebkitFontSmoothing: "antialiased",
  color: "#fff",
  fontFamily: "Audiowide",
  fontSize: "1.5rem",
  padding: "8px 16px",
   // Add space between the tabs
   marginRight: "30px", // Adjust the value to control the spacing
  // Add a custom width to the Tab
  width: "auto",
  minWidth: 0,
}));

const Divider = styled("div")({
  width: "0.5rem",
  height: "100%",
  backgroundColor: "white", // Color of the vertical line
  marginRight: "10px", // Adjust the spacing between tabs and the divider
});

const CustomIndicator = styled("span")(({ theme }) => ({
  // Customize the width of the indicator line here
  width: "75%", // Change this value as needed
  backgroundColor: theme.palette.primary.main,
  height: "3px", // Customize the height of the indicator line
  position: "absolute",
  bottom: 0,
  transition: "width 0.2s", // Optional: Add transition for smoother effect
}));


interface TabData {
  label: string;
  path: string;
}

interface TabComponentProps {
  tabs: TabData[];
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    // Find the index of the currently active tab based on the route
    const activeTabIndex = tabs.findIndex((tab) =>
      location.pathname.startsWith(tab.path)
    );
    if (activeTabIndex !== -1) {
      setSelectedTab(activeTabIndex);
    }
  }, [location.pathname, tabs]);

  return (
      <TabsWrapper
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        // Disable the default indicator
        sx={{ "& .MuiTabs-indicator": { display: "none" } }}
      >
        {tabs.map((tab, index) => (
          <div key={index} style={{ display: "flex", position: "relative" }}>
            {index > 0 && <Divider />}
            <Link to={tab.path} style={{ textDecoration: "none" }}>
              <TabWrapper
                label={tab.label}
                sx={{ position: "relative" }}
              />
              {selectedTab === index && (
                <CustomIndicator style={{ left: `${index * 10}%` }} />
              )}
            </Link>
          </div>
        ))}
      </TabsWrapper>
  );
};

export default TabComponent;
