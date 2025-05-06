import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { AppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useContext(AppContext);

  return (
    <IconButton onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}>
      {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeToggle;