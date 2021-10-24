import React, { useEffect } from "react";
import { Redirect } from "react-router";

import {
    Container,
    Aside,
    ButtonLogin,
    Main,
    ContentImg,

} from './styled'

import { AuthContext } from '../../provider/auth';

import { firebase, auth } from '../../services/firebase'

import Google from '../../assets/Google.png'
import Astronauta from '../../assets/astronauta.png'
import BackAstronauta from '../../assets/back-astronauta.png'

export function Login() {
    const { user, setUser } = React.useContext(AuthContext)

    useEffect(() => {
        if (user) {
            const { uid, displayName, photoURL } = user

            if (!displayName || !photoURL) {
                new Error('O usuario não tem displayName ou photoURL')
            }

            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName,
            })
        }
    }, [])

    const handleClickButtonLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider)

        // Verifica se o user existe
        if (result.user) {
            const { uid, displayName, photoURL } = result.user

            if (!displayName || !photoURL) {
                new Error('O usuario não tem displayName ou photoURL')
            }

            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName,
            })
        }
    }

    function preventDefault(e) {
        e.preventDefault()
    }

    if (!!user) {
        return <Redirect to='/' />
    } else {
        <Redirect to='/login' />
    }

    return (
        <Container>
            <Aside>
                <ContentImg>
                    <img src={BackAstronauta} alt="Background Astronauta" id="background-img" />
                    <img src={Astronauta} alt="Astronauta" id="astronauta" />
                </ContentImg>

                <h3>Bem vindo a bordo meu amigo</h3>
                <p>apenas alguns cliques e começamos</p>
            </Aside>
            <Main>
                <h1>Bem-vindo</h1>
                <p>Faça login com o Google para acessar os conteudos</p>
                <form onSubmit={preventDefault} >
                    <ButtonLogin onClick={handleClickButtonLogin}>
                        <img src={Google} alt="Google" />
                        Google
                    </ButtonLogin>
                </form>
            </Main>
        </Container>
    );
}

