import React from 'react';
import { Route } from 'react-router';

import AppControl from 'containers/appControl/AppControl';
import UserForm from './form';
import NotFound from './notFound';

const routes = (
    <Route path="/" component={AppControl}>
        <Route path="form" component={UserForm} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;