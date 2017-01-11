import React from 'react';
import { Route } from 'react-router';

import App from '../../pages/app';
import Form from '../../pages/form';
import NotFound from '../../pages/404';

const routes = <Route path="/" component={App}>
    <Route path="form" component={Form} />
    <Route path="*" component={NotFound} />
</Route>;

export default routes;