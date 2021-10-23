import React from "react";
import { Link } from 'react-router-dom'

import { Filmes } from "../../components/Filmes/index";

import { AuthContext } from '../../provider/auth';
import { firebase } from '../../services/firebase'

import Astronauta from '../../assets/astronauta.png'
import Logout from '../../assets/sair.png'

import {
    Header,
    Container,
    Content,

} from './styled'

export function Home() {
    const { user, setUser } = React.useContext(AuthContext)

    function loggout() {
        setUser(() => {
            firebase.auth().signOut()
        })
    }

    return (
        <Container>
            <Header>
                <Content>
                    <div className="user-logo">
                        <img src={Astronauta} alt="" />
                        <h1>
                            Bem-vindo {user?.name}!
                        </h1>
                    </div>

                    <div className="user">
                        <img src={user?.avatar} alt="Foto do usuario" />
                        <button onClick={loggout}>
                            <img src={Logout} alt="Logout" />
                        </button>
                    </div>
                </Content>
            </Header>
            {/* <Link to={{ pathname: '/contato' }}>Pagina de Contato</Link> */}

            <Filmes />
        </Container>
    )
}