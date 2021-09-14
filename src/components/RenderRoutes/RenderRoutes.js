import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import ScrollToTop from '../ScrollToTop';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const RenderRoutes = ({ routes }) => (
  <>
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Route component={() => <h1>Page not found!</h1>} />
    </Switch>
    <ScrollToTop />
  </>
);

RenderRoutes.propTypes = {
  routes: PropTypes.array,
};

export default RenderRoutes;
