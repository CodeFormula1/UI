import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
}

interface VerticalTabsMenuProps {
  menuItems: MenuItem[];
}

const VerticalTabsMenu: React.FC<VerticalTabsMenuProps> = ({ menuItems }) => {
  const [value, setValue] = useState<number>(0);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue); 
    navigate(menuItems[newValue].path); 
  };

  const tabLabelStyle: any = {
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '1.2rem',
    textAlign: "left"
  };

  return (
    <Box display="flex">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        TabIndicatorProps={{
          sx: {
            left: 0,
            width: '5px',
            borderColor: 'rgba(173, 226, 230, 1)',
          }
        }}
      >
        {menuItems.map((menuItem, index) => (
          <Tab key={index} 
          label={menuItem.label} 
          style={{
            ...tabLabelStyle,
            backgroundColor: value === index ? 'rgb(173,221,230, 0.5)' : 'transparent',
            color: value === index ? 'white' : 'white',
            margin: '15px 0'
          }} />
        ))}
      </Tabs>
    </Box>
  );
};


export default VerticalTabsMenu;
