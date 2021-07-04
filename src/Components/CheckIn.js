import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import{ Button, Typography, StepConnector, Box, }from '@material-ui/core';

//icon
import Check from '@material-ui/icons/Check';
import person from '../image/person.svg'
import personAdd from '../image/personAdd.svg'
import personCheck from '../image/personCheck.svg'

import {useStyles as styles} from '../Styles';
import FormOne from './FormValid/FormOne'
import FormTwo from './FormValid/FormTwo'
import FormThreeValid from './FormValid/FormThreeValid'



// линия прогреса style
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 23,
    left: 'calc(-50% + 48px)',
    right: 'calc(50% + 48px)',
  },
  active: {
    '& $line': {
      backgroundColor: '#ccc'
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#4CAF50'
    },
  },
  line: {
    height: 2,
    border: 0,
    backgroundColor: '#eaeaf0',
    
  },
})(StepConnector);

// стиль иконки
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#1A73E8'         
  },
  completed: {
    backgroundColor: '#4CAF50'
  },

  
});

// icon

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <img src = { person }  alt = "Person"/>,
    2: <img src = { personAdd } alt = "PersonAdd"/>,
    3: <img src = { personCheck } alt = "PersonCheck"/>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      
      { completed ? <Check className={classes.completed} /> :  {...icons[String(props.icon)]} }
    </div>
  );
}

// Метка, отображаемая на значке шага.

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


//style

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 0,
    padding: 0,
  },

  buttonRoot:{
    
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },

  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textCheck: {
    fontWeight: '300',
    fontSize: '30px',
    lineHeight: '35px', 
    margin: '20px',
  },

  rootForm: {
    backgroundColor: '#FFFFFF',
    width: '818px',
    height: '604px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    marginTop: theme.spacing(2),

  },
}));


//text

function getSteps() {
  return ['Персональные данные', 'Ещё данные', 'Финиш'];
}


//content

function getStepContent(step) {
  switch (step) {
    case 0:
      return < FormOne /> ;
    case 1:
      return < FormTwo />;
    case 2:
      return < FormThreeValid />;
    default:
      return 'Unknown step';
  }
}


function CheckIn() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>

      <h1 className={classes.textCheck}>Регестрация</h1>

      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} style={{ backgroundColor: '#FAFAFA '}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>

            <Box display="flex" /* flexDirection="column" */ justifyContent="center" alignItems="center">

              <main className={classes.rootForm}>

                
                
                  {getStepContent(activeStep)}

                    
                  <div className={classes.buttonRoot}>
                      {activeStep > 0 ? <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                          Back
                      </Button> : null }
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div> 
                

              </main>

              

            </Box>

              
              
            </Typography>

            
          </div>
        )}
      </div>
    </div>
  );
}


export default withStyles(styles) (CheckIn); 
   

