import React from 'react';
import { Box } from '@mui/material';
import LoanForm from '../components/LoanForm';
import AmortizationTable from '../components/AmortizationTable';

const Home = () => (
  <Box
    sx={{
      minHeight: '100vh', // Full viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      bgcolor: 'background.default',
      p: { xs: 2, sm: 3 },
    }}
  >
    <Box sx={{ width: '100%' }}>
      <LoanForm />
      <Box sx={{ mt: 4 }}> {/* Add margin-top to create gap */}
        <AmortizationTable />
      </Box>
    </Box>
  </Box>
);

export default Home;