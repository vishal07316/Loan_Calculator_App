import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const ErrorPage = ({ error }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
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
      <Typography variant="h5" color="error">
        Something went wrong!
      </Typography>
      <Typography color="text.primary">{error || 'Please try again later.'}</Typography>
    </Box>
  );
};

export default ErrorPage;