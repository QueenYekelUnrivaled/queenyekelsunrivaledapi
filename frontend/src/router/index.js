import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import getRoutes from './routes';

export default function Router({ children, history }) {
    const routes = useMemo(() => getRoutes(), []);

    return (
        <Fragment>
            <BrowserRouter history={history}>
                <Route
                    render={(routeProp) =>
                        children(
                            <Switch>
                                {routes.map((props, i) => (
                                    <Route key={i} {...props} />
                                ))}
                            </Switch>,
                            routeProp
                        )
                    }
                />
            </BrowserRouter>
        </Fragment>
    );
}

Router.propTypes = {
    children: PropTypes.func.isRequired,
};
