import React from 'react';
import LoanForm from '../components/LoanForm';
import AmortizationTable from '../components/AmortizationTable';
import CurrencyConverter from '../components/CurrencyConverter';

const Home = () => (
  <div>
    <LoanForm />
    <AmortizationTable />
    <CurrencyConverter />
  </div>
);

export default Home;