import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Components.css";
import "../Reset.css";

const MovieList = styled.div`
width: 100%;
padding: 1vw;
font-weight: 300;
display: 'flex'
flex-direction: column;
`;
const MovieData = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top:1vw;
`;
const Title = styled.h3`
font-size: 1vw;
color: #2c2c2c;
font-family: 'Noto Sans KR', sans-serif;
font-weight: 500;
margin: 0;
color: #f3f3f3
`;
const Year = styled.h4`
margin: 0;
font-size:0.875vw; 
font-weight: 500;
margin-top:0.25vw ;
color:#999;
`;
const Img = styled.img`
object-fit: cover;
max-height: 350px;
width: 100%;
`;


function Movie({ id, year, title, poster, genres, rating, backImage, overview }) {

    return (
        <Link to={{
            pathname: `/movie/${id}/`,
            state: {
                year,
                title,
                overview,
                poster,
                rating,
                backImage,
                genres

            }
        }}>

            <MovieList>
                <Img src={poster} alt={title} title={title} />
                <MovieData>
                    <Title className="movie-title">
                        {title}
                    </Title>
                    <Year className="movie-year">
                        {year.substring(0 , 4)}
                    </Year>
                </MovieData>
            </MovieList>
        </Link>

    )
}


// map key 를 넣는걸 잊지말자

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     rating: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired,

// };

export default Movie;