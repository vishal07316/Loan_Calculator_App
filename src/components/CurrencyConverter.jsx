import React, { useState, useEffect, useContext } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography, CircularProgress, useTheme } from '@mui/material';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import ErrorPage from './ErrorPage';

const CurrencyConverter = () => {
  const { emi } = useContext(AppContext);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [convertedEMI, setConvertedEMI] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const API_KEY = import.meta.env.VITE_API_KEY || '';

  useEffect(() => {
    if (!API_KEY) {
      setError('API key is missing. Please set VITE_API_KEY in your environment variables.');
      return;
    }

    const fetchCurrencies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`
        );
        console.log('Fetch Currencies Response:', response.data);
        if (response.data.result === 'success') {
          setCurrencies(response.data.supported_codes.map((code) => code[0]));
          setError(null);
        } else {
          setError('Failed to fetch currencies: ' + response.data['error-type']);
        }
      } catch (err) {
        console.error('Fetch Currencies Error:', err.response?.data || err.message);
        setError('Failed to fetch currencies. Please check your API key or network connection.');
      } finally {
        setLoading(false);
      }
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (!emi || !selectedCurrency || !API_KEY) return;

    const convertEMI = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );
        console.log('Convert EMI Response:', response.data);
        if (response.data.result === 'success') {
          const rate = response.data.conversion_rates[selectedCurrency];
          if (!rate) {
            setError(`Currency ${selectedCurrency} not supported.`);
            setConvertedEMI(null);
          } else {
            setConvertedEMI((emi * rate).toFixed(2));
            setError(null);
          }
        } else {
          setError('Failed to convert EMI: ' + response.data['error-type']);
          setConvertedEMI(null);
        }
      } catch (err) {
        console.error('Convert EMI Error:', err.response?.data || err.message);
        setError('Failed to convert EMI. Please check your API key or network connection.');
        setConvertedEMI(null);
      } finally {
        setLoading(false);
      }
    };
    convertEMI();
  }, [emi, selectedCurrency]);

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <Box
      sx={{
        p: 3,
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
      <Typography variant="h6" color="text.primary">
        Currency Converter
      </Typography>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <CircularProgress sx={{ color: 'text.primary' }} />
        </Box>
      )}
      {emi ? (
        <>
          {currencies.length > 0 ? (
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel sx={{ color: 'text.secondary' }}>Select Currency</InputLabel>
              <Select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                disabled={loading}
                sx={{
                  color: 'text.primary',
                  bgcolor: 'background.paper',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'text.secondary',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'text.primary',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <Typography sx={{ mt: 2, color: 'text.secondary' }}>
              Loading currencies...
            </Typography>
          )}
          {convertedEMI && !loading && (
            <Typography sx={{ mt: 2 }} color="text.primary">
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