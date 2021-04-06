import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Audio} from './pages/Audio';
import {CreatePage} from './pages/CreatePage';

export const useRoutes = isAuthenticated => {
if(isAuthenticated) {
    return (
        <Switch>
<Route path='/audio/:id' exact>
    <Audio />
</Route>
<Route path='/create' exact>
    <CreatePage />
</Route>
<Redirect to="/create" />
        </Switch>
    )
}

return (
    <Switch>
<Route path='/' exact>
<Audio />
</Route>
    </Switch>
)
}