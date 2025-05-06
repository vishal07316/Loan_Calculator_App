import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CurrencyConverter from '../components/CurrencyConverter';

const Converter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 600 },
          ...(theme.palette.mode === 'dark'
            ? {
                border: '1px solid',
                borderColor: 'text.secondary',
                boxShadow: 'none',
              }
            : {
                boxShadow: 1,
              }),
        }}
      >
        <Typography variant="h4" gutterBottom color="text.primary">
          Convert EMI to Another Currency
        </Typography>
        <CurrencyConverter />
      </Box>
    </Box>
  );
};

export default Converter;