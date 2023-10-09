import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import VerticalTabsMenu from "../../../components/common/VerticalTabsMenu";
import WECFormRoutes from "../utils/WECFormRoutes";
import HorizontalStepper from "../../../components/common/HorizontalStepper";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';


const buttonTextStyle: React.CSSProperties = {
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    fontFamily: 'Audiowide',
    fontSize: '1.5rem',
    textAlign: "center"
};

const menuItems = [
    { label: "Tyre Degradation Calculations", path: "/wec/models/tyre-deg-calculations" },
    { label: "Monte Carlo Simulation", path: "/wec/models/monte-carlo" },
    { label: "Reinforcement Learning", path: "/wec/models/reinforcement-learning" },
];



const Models = () => {

    const navigate = useNavigate();
    // Initialize the activeStep state
    const [activeStep, setActiveStep] = useState(0);

    const steps: any = [
        { label: "Step 1", path: "/wec/models/tyre-deg-calculations"  },
        { label: "Step 2", path: "/wec/models/pit-stop-loss"  },
        { label: "Step 3", path: "/wec/models/avg-lap-number" },
        { label: "Step 4", path: "/wec/models/avg-tyre-pace"},
        { label: "Step 5", path: "/wec/models/deg-new-tyre" },
        // Add more steps as needed
    ];
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        navigate(steps[activeStep + 1].path); // Use navigate to move to the next step's path
    };

    // Define a function to handle the back button click
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        navigate(steps[activeStep - 1].path); // Use navigate to move to the previous step's path
    };

    return (
        <Stack direction="row" sx={{ marginTop: "4rem" }} spacing={6}>
            {/* Content for the left section */}
            <div style={{ flex: 1 }}>
                <VerticalTabsMenu menuItems={menuItems} />
            </div>
            {/* <Divider orientation="vertical" flexItem sx={{ background: 'white' }} />
            Content for the right section */}
            <div style={{ flex: 3 }}>
                <HorizontalStepper
                    steps={steps}
                    activeStep={activeStep}
                />
                <WECFormRoutes />
                <Stack
                    direction="row"
                    justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}
                    alignItems="center"
                >
                    {activeStep !== 0 && (
                        <IconButton
                            onClick={handleBack}
                            style={buttonTextStyle}
                        >
                            <ArrowBackIcon fontSize="large" />
                            <span>Back</span>
                        </IconButton>
                    )}
                    {activeStep < steps.length - 1 ? (
                        <IconButton
                            onClick={handleNext}
                            style={buttonTextStyle}
                        >
                            <span>Next</span>
                            <ArrowForwardIcon fontSize="large" />
                        </IconButton>
                    ) : (
                        <button>Finish</button>
                    )}
                </Stack>

            </div>
        </Stack>
    );
};


export default Models;
