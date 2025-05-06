import React, { useState, useEffect, useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import ErrorPage from './ErrorPage';

const CurrencyConverter = () => {
  const { emi } = useContext(AppContext);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedEMI, setConvertedEMI] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/codes'
        );
        setCurrencies(response.data.supported_codes.map((code) => code[0]));
      } catch (err) {
        setError('Failed to fetch currencies. Please try again later.');
      }
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const convertEMI = async () => {
      if (!emi || !selectedCurrency) return;
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`
        );
        const rate = response.data.conversion_rates[selectedCurrency];
        if (!rate) {
          setError(`Currency ${selectedCurrency} not supported.`);
          setConvertedEMI(null);
          return;
        }
        setConvertedEMI((emi * rate).toFixed(2));
        setError(null);
      } catch (err) {
        setError('Failed to convert EMI. Please try again later.');
        setConvertedEMI(null);
      }
    };
    convertEMI();
  }, [emi, selectedCurrency]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6">Currency Converter</Typography>
      {emi ? (
        <>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Select Currency</InputLabel>
            <Select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {convertedEMI && (
            <Typography sx={{ mt: 2 }}>
              EMI in {selectedCurrency}: {convertedEMI}
            </Typography>
          )}
        </>
      ) : (
        <Typography sx={{ mt: 2, color: 'text.secondary' }}>
          Please calculate the EMI to convert it to another currency.
        </Typography>
      )}
    </Box>
  );
};

export default CurrencyConverter;