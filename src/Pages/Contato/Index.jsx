import React from "react";

import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/auth';

export function Contato() {
    const { user } = React.useContext(AuthContext)

    return (
        <div>
            <h1>Contato</h1>

            <Link to={{
                pathname: '/'
            }}>
                Home
            </Link>

            <div>
                <img src={user?.avatar} alt="" />

                <p>{user?.name}</p>

                <p>{user?.id}</p>
            </div>
        </div>
    )
}