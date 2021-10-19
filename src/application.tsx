import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, RouteComponentProps } from "react-router-dom";
import logging from "./config/logging";
import routers from "./config/routers";
import "./application.css";
import 'typeface-roboto';

const Application: React.FunctionComponent<{}> = props => {
    useEffect(() => {
        logging.info('Loading application.')
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routers.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        )
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Application;