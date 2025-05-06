import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const NotFound = () => {
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
      <Typography variant="h5" color="text.primary">
        404 - Page Not Found
      </Typography>
      <Typography color="text.primary">The page you are looking for does not exist.</Typography>
    </Box>
  );
};

export default NotFound;