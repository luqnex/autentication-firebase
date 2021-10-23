import styled from "styled-components";

export const Container = styled.div` 
    overflow-x: hidden;
    width: 100vw;
    background-color: #121317;

    padding-bottom: 50px;
`

export const Header = styled.header`
    width: 100vw;
    height: 11vh;

    background-color: #3949AB;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 85vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-logo {
        display: flex;
        align-items: center;
    }

    .user-logo h1 {
        font-size: 1rem;
    }

    .user-logo img {
        width: 45px;
        margin-right: 15px;
    }

    .user {
        display: flex;
        align-items: center;

        img {
            width: 45px;
            border-radius: 50px;
            margin-right: 16px;
        }

        button {
            background-color: #3949AB;
            border: none;

            transition: .3s;
        }

        button:hover {
            cursor: pointer;
            opacity: .6;
        }

        button img {
            width: 25px;
        }
    }
`