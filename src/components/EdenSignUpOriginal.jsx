import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';

const steps = ['', '', '', ''];

export default function EdenSignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const styles = {
    cardSelected: {
      // background: "#f1f1f1",
      '&:hover': {
        background: "blue",
      }
    }
  };


  return (
    <Box sx={{ width: '100%' }} style={{marginTop:'25px'}}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
           activeStep + 1 ==1?  
           (
            <>
            <Grid align="center" style={{marginTop:'100px'}}>
            <FirstStep> </FirstStep>
           
            </Grid>
            <br></br>

            <Box 
            // sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}
            >
              {/* <Button 
             
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}

              <Box sx={{ flex: '1 1 auto' }} />

              <Grid align="center">
              <Button onClick={handleComplete} sx={{ mr: 1 }} variant ='contained'
               style={{align:"center",marginLeft:'0px',width:'250px'}}
               
              >
                {/* Next */}
                Create Workspace
              </Button>
              </Grid>
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
               
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))} */}
            </Box>
</>)
             :activeStep + 1 ==2 ? 
             (
              <>
              <Grid align="center" style={{marginTop:'100px'}}>
            <SecondStep> </SecondStep>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleComplete} sx={{ mr: 1 }}
              variant ='contained'
              style={{align:"left",marginRight:'650px',width:'250px'}}
              >
              Create Workspace
              </Button>
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
               
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))} */}
            </Box>
</>

             ):activeStep + 1 == 3 ? 
             (

              <>
              <Grid align="center" style={{marginTop:'100px'}}>
            <ThirdStep
            > </ThirdStep>
            </Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleComplete} sx={{ mr: 1 }}
              variant ='contained'
              style={{align:"left",marginRight:'650px',width:'250px'}}
              >
              Create Workspace
              </Button>
              {/* {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
               
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))} */}
            </Box>
</>

             ):<><Grid align="center"><FourthStep/>
             <Button variant="contained"
             onClick={handleComplete}
             style={{width:300}}>Launch Eden</Button>
             </Grid></>
          
        )}
      </div>
    </Box>
  );
}
