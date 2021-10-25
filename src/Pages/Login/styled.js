import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    @media (max-width: 425px) {
        flex-direction: column;

        Aside {
            width: 100vw;   
        }
    }
`

export const Aside = styled.aside`
    width: 60vw;
    height: 100vh;
    background-color: #3949AB;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    h3 {
        font-size: 2rem;
        margin: 16px 0 16px 0;
    }

    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.2rem;
            text-align: center;
        }

        p {
            text-align: center;
        }
    }

    @media (max-width: 425px) {
        h3, p {
            display: none;
        }
    }
`

export const ContentImg = styled.div`
    display: flex;
    flex-direction: column;

    #astronauta {
        margin-top: -200px;
    }

    @media (max-width: 425px) {
        justify-content: center;
        align-items: center;
        
        img {
            width: 60%;
        }

        #astronauta {
            margin-top: -130px;
        }
    }
`

export const Main = styled.main`
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 10px;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 16px;
    }
    
    p {
        font-size: 1.2rem;
        margin-bottom: 30px;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 0 10px;
        h1 {
            font-size: 1.5rem;
        }
        
        p {
            font-size: 1rem;
        }
    }
    
    @media (max-width: 425px) {
        width: 100vw;
        h1 {
            font-size: 1.5rem;
        }
    
        p {
            font-size: 1rem;
        }
    }
`

export const ButtonLogin = styled.button`
    width: 208px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #518EF8;
    background-color: white;
    color: #518EF8;
    transition: .3s;

    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: gainsboro;
        cursor: pointer;
    }

    img {
        width: 25px;
        margin-right: 8px;
    }

    @media(max-width: 768px) {
        width: 150px;
    }
`