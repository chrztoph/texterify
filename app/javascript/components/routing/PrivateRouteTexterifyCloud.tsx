import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { authStore } from "../stores/AuthStore";
import { IS_TEXTERIFY_CLOUD } from "../utilities/Env";
import { Routes } from "./Routes";

const PrivateRouteTexterifyCloud = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return authStore.isAuthenticated && IS_TEXTERIFY_CLOUD ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: Routes.AUTH.LOGIN,
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        />
    );
};

export { PrivateRouteTexterifyCloud };
