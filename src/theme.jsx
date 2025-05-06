import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue for buttons, AppBar, etc.
    },
    background: {
      default: '#f5f5f5', // Light gray background for the page
      paper: '#ffffff', // White background for cards, drawers, etc.
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Gray text for secondary elements
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Lighter blue for dark mode
    },
    background: {
      default: '#000000', // Pure black background for the page
      paper: '#000000', // Pure black background for components
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#cccccc', // Slightly off-white for secondary text
    },
  },
});

export { lightTheme, darkTheme };