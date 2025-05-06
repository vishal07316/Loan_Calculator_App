import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { AppProvider, AppContext } from './context/AppContext';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ themeMode }) => (
          <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
            <Router basename="/">
              <MobileNav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </ThemeProvider>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
};

export default App;