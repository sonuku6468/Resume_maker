
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import EducationPage from './EducationPage';
import Experience from './Experience';
import ContactInfo from './ContactInfo';
import Award from './Award';
import { Button, Box } from '@mui/material';

const About = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div>
      {step === 0 && <PersonalInfo />}
      {step === 1 && <EducationPage />}
      {step === 2 && <Experience />}
      {step === 3 && <ContactInfo />}
      {step === 4 && <Award />}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={prevStep}
          disabled={step === 0}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={nextStep}
          disabled={step === 4}
        >
          Next
        </Button>
      </Box>
    </div>
  )
};

export default  About;

