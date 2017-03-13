import React from 'react';
import { Route } from 'react-router';

import AppControl from '../../containers/appControl/AppControl';
import UserForm from '../../containers/userForm/UserForm';
import NotFound from '../../components/notFound/NotFound';

const routes = (
    <Route path="/" component={AppControl}>
        <Route path="form" component={UserForm} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;