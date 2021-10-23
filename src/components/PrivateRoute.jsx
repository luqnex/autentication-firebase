import React from "react";
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from "../provider/auth";

export function PrivateRoute({ component: Component, ...rest}) {
    const { user } = React.useContext(AuthContext)
    
    return (
        <Route
            {...rest }
            render={(props) => (
                !!user ? (
                    <Component { ...props } />
                ) : (
                    // se usuario não estiver logado será redirecionado para a pagina login
                    <Redirect to='/login' />
                )
            )} />
    )
}


