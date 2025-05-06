import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { AppContext } from '../context/AppContext';

const LoanForm = () => {
  const { setEMI, setAmortization } = useContext(AppContext);
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(loanTenure);

    if (!P || !R || !N) return;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEMI(emi.toFixed(2));

    // Amortization Schedule
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
        balance: balance.toFixed(2),
      });
    }
    setAmortization(schedule);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">Loan EMI Calculator</Typography>
      <TextField
        label="Loan Amount"
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Annual Interest Rate (%)"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Loan Tenure (Months)"
        type="number"
        value={loanTenure}
        onChange={(e) => setLoanTenure(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={calculateEMI} sx={{ mt: 2 }}>
        Calculate EMI
      </Button>
    </Box>
  );
};

export default LoanForm;