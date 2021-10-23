import React, { useEffect, useState } from "react";

import api, { key } from "../../services/api";

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import {
    Content,
    Movies,
    Movie,

} from './styled'

export function Filmes() {
    const [popularMovie, setPopularMovie] = useState({})
    const [topRatedMovie, setTopRatedMovie] = useState({})

    useEffect(() => {
        async function getPopularMovies() {
            // Requisição para populares
            await api.get('/movie/popular', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            })
                .then(response => setPopularMovie(response.data.results))
                .catch(err => {
                    console.log(err)
                })
        }

        async function getTopRatedMovie() {
            // Requisição para populares
            await api.get('/movie/top_rated', {
                params: {
                    api_key: key,
                    language: 'pt-BR',
                    page: 1,
                }
            })
                .then(response => setTopRatedMovie(response.data.results))
                .catch(err => {
                    console.log(err)
                })
        }

        getPopularMovies()
        getTopRatedMovie()
    }, [])

    return (
        <Content>

            <h1>Filmes populares</h1>
            <Glider
                draggable
                hasArrows
                hasDots
                slidesToShow={5}
                slidesToScroll={1}
            >

                {
                    //Renderizando os dados na tela
                    Object.keys(popularMovie).map(movie => {
                        return (
                            <Movie key={popularMovie[movie].id}>
                                <img src={`https://image.tmdb.org/t/p/original/${popularMovie[movie].poster_path}`} alt="Imagem do filme" />
                                <h3>{popularMovie[movie].title}</h3>
                                <p>{popularMovie[movie].vote_average}/10</p>
                            </Movie>
                        )
                    })
                }

            </Glider>

            <h1>Filmes mais votados</h1>

            <Glider
                draggable
                hasArrows
                hasDots
                slidesToShow={5}
                slidesToScroll={1}
            >
                {
                    //Renderizando os dados na tela
                    Object.keys(topRatedMovie).map(movie => {
                        return (
                            <Movie key={topRatedMovie[movie].id}>
                                <img src={`https://image.tmdb.org/t/p/original/${topRatedMovie[movie].poster_path}`} alt="Imagem do filme" />
                                <h3>{topRatedMovie[movie].title}</h3>
                                <p>{topRatedMovie[movie].vote_average}/10</p>
                            </Movie>
                        )
                    })
                }
            </Glider>
        </Content>
    )
}