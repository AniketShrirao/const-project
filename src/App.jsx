import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import theme from './themes/index';
import Loader from './components/Loader';
import FourZeroFourPage from './pages/404';

const Home = lazy(() => import('./pages/Homepage'));
const CountryDetail = lazy(() => import('./pages/CountryDetail'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/country-profile/:country"
                render={(props) => <CountryDetail {...props} />}
              />
              <Route
                path='*'
                render={(props) => <FourZeroFourPage {...props} />}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
