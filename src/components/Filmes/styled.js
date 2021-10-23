import styled from "styled-components";

export const Content = styled.div`
    overflow-x: hidden;
    color: white;
    
    h1 {
        font-size: 1.5rem;
        text-align: center;
        margin: 30px 0;
    }

    .glider {
        display: flex;
        padding: 0 40px;
    }
`

export const Movie = styled.div`
    width: 300px;
    
    margin-left: 20px;

    img {
        width: 190px;
        min-height: 280px;
        margin-bottom: 8px;
        border-radius: 8px;
    }

    h3 {
        font-size: 1rem;
    }

    p { 
        font-size: .9rem;
    }
`