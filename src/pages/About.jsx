import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{minHeight:'100vh',
         p: 3, bgcolor: 'background.default' }}>
      <Typography
        variant="h4"
        color={theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}
      >
        About This App
      </Typography>
      <Typography
        paragraph
        color={theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}
      >
        The Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate their loan EMI (Equated Monthly Installment), view an amortization schedule, and convert the EMI into different currencies in real-time. The app features a responsive design with a collapsible mobile header navigation, dark/light mode theming, and robust error handling.
      </Typography>
      <Typography
        paragraph
        color={theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}
      >
        Key features include:
      </Typography>
      <ul style={{ color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000' }}>
        <li>EMI calculation based on loan amount, interest rate, and tenure.</li>
        <li>Amortization schedule with pagination to view monthly payment details.</li>
        <li>Real-time currency conversion using the ExchangeRate-API.</li>
        <li>Dark/light mode toggle for better user experience.</li>
        <li>Responsive design with a mobile-friendly navigation menu.</li>
        <li>Error handling for API failures and invalid inputs.</li>
      </ul>
      <Typography
        paragraph
        color={theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}
      >
        This app was built as part of a technical assessment for Novel Office, demonstrating proficiency in React fundamentals, state management, API integration, and modern web development practices.
      </Typography>
    </Box>
  );
};

export default About;