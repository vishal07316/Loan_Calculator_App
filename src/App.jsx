import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import { AppProvider, AppContext } from './context/AppContext';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import Converter from './pages/Converter';
import About from './pages/About';
import NotFound from './components/NotFound';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message || 'Unknown error'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AppContext.Consumer>
          {({ themeMode }) => (
            <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
              <Router basename="/">
                <MobileNav />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/converter" component={Converter} />
                  <Route path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </Router>
            </ThemeProvider>
          )}
        </AppContext.Consumer>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;