import React from 'react';
import { Route } from 'react-router';

import App from '../../containers/app/App';
import UserForm from '../../containers/userForm/UserForm';
import NotFound from '../../components/notFound/NotFound';

const routes = (
    <Route path="/" component={App}>
        <Route path="form" component={UserForm} />
        <Route path="*" component={NotFound} />
    </Route>
);

export default routes;