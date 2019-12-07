import React, {lazy, Suspense} from 'react';
import {hot} from 'react-hot-loader/root';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import pages here
const HomePage = lazy(() => import('./pages/HomePage'));
const StoryPage = lazy(() => import('./pages/StoryPage'));
const WritePage = lazy(() => import('./pages/WritePage'));

import ScrollToTop from './components/ScrollToTop.js';
import PageLoader from './components/PageLoader.js';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            exact
            path="/story/:id"
            render={props => <StoryPage {...props} />}
          />
          <Route
            exact
            path="/write"
            render={props => <WritePage {...props} />}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default hot(App);
