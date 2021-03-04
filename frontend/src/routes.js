import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ToDo from './components/ToDo';

const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/todo' component={ToDo} />
            <Route path='/' render={() => <div>404 not found</div>} />
        </Switch>
    </div>
);

export default BaseRouter;