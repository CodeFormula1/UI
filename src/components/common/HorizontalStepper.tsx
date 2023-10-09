import React from "react";
import { Stepper, Step, StepLabel, Box, SvgIcon } from "@mui/material";
import MedTyres from "../images/MedTyre";

// Define the Step type
interface StepType {
    label: string;
    path: string;
}

// Define the HorizontalStepperProps type
interface HorizontalStepperProps {
    steps: StepType[];
    activeStep: number;
}

function HorizontalStepper({
    steps,
    activeStep,
}: HorizontalStepperProps) {
    return (
        <div>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>
                            <Box textAlign="center" sx={{  color: 'white',
    fontFamily: 'Audiowide',     fontSize: '1rem',}}>
                                {step.label}
                            </Box>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default HorizontalStepper;
