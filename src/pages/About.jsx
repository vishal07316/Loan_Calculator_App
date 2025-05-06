import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4">About This App</Typography>
    <Typography paragraph>
      The Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate their loan EMI (Equated Monthly Installment), view an amortization schedule, and convert the EMI into different currencies in real-time. The app features a responsive design with a collapsible mobile header navigation, dark/light mode theming, and robust error handling.
    </Typography>
    <Typography paragraph>
      Key features include:
    </Typography>
    <ul>
      <li>EMI calculation based on loan amount, interest rate, and tenure.</li>
      <li>Amortization schedule with pagination to view monthly payment details.</li>
      <li>Real-time currency conversion using the ExchangeRate-API.</li>
      <li>Dark/light mode toggle for better user experience.</li>
      <li>Responsive design with a mobile-friendly navigation menu.</li>
      <li>Error handling for API failures and invalid inputs.</li>
    </ul>
    <Typography paragraph>
      This app was built as part of a technical assessment for Novel Office, demonstrating proficiency in React fundamentals, state management, API integration, and modern web development practices.
    </Typography>
  </Box>
);

export default About;