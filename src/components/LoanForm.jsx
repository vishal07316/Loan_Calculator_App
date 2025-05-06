import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';

const LoanForm = () => {
  const { setEMI, setAmortization } = useContext(AppContext);
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [error, setError] = useState('');

  const calculateEMI = () => {
    setError(''); // Clear previous errors
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(loanTenure);

    if (!P || !R || !N || P <= 0 || R <= 0 || N <= 0) {
      setError('Please enter valid positive values for all fields.');
      return;
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEMI(emi.toFixed(2));

    const schedule = [];
    let balance = P;
    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;
      schedule.push({
        month: i,
        emi: emi.toFixed(2),
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2), // Ensure balance doesn't go negative
      });
    }
    setAmortization(schedule);
  };

  const resetForm = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTenure('');
    setEMI(null);
    setAmortization([]);
    setError('');
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: { xs: '100%', sm: 600 }, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Loan EMI Calculator
      </Typography>
      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <TextField
        label="Loan Amount"
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ min: 0 }}
      />
      <TextField
        label="Annual Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ min: 0 }}
      />
      <TextField
        label="Loan Tenure (Months)"
        type="number"
        value={loanTenure}
        onChange={(e) => setLoanTenure(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ min: 0 }}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={calculateEMI} sx={{ mr: 2 }}>
          Calculate EMI
        </Button>
        <Button variant="outlined" onClick={resetForm}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default LoanForm;