import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";


const MovieList = styled.div`
width: 100%;
font-weight: 300;
display: flex;
flex-direction: column;
}


`;
const MovieData = styled.div`
    display: flex;
    justify-content: space-between;
    margin:2vw 0;
    @media only screen and (max-width: 600px) {
        margin:3vw 0;
      }
    @media only screen and (max-width: 375px) {
        margin:8vw 0;
      }
`;
const Title = styled.h3`
font-size: 1vw;
color: #2c2c2c;
font-family: 'Noto Sans KR', sans-serif;
font-weight: 500;
margin: 0;
color: #f3f3f3;
line-height:1;
@media only screen and (max-width: 600px) {
    font-size: 2.5vw;

  }
  @media only screen and (max-width: 375px) {
    font-size: 5vw;
  }
`;
const Year = styled.h4`
margin: 0;
font-size:0.875vw; 
font-weight: 500;
color:#999;
flex: 20%;
text-align:right;
@media only screen and (max-width: 375px) {
    line-height: 5vw;
    font-size:14px;
  }
  
`;
const Img = styled.img`
width: 100%;
height:350px;
box-shadow: 0px 1px 5px 2px rgb(0 0 0 / 80%);

@media only screen and (max-width: 600px) {
    height:400px;
  }
@media only screen and (max-width: 375px) {
height: 500px;
  }
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




export default Movie;