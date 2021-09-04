import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styled from "styled-components";


const imgUrl = "https://image.tmdb.org/t/p/w500"
const backUrl = "https://image.tmdb.org/t/p/original"


const Movies = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, 23.5%);
grid-column-gap: 2%;
margin-top: calc(68px + 2%);

@media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 49%);
    padding: 0 2% 0 2% ;

  }
  @media only screen and (max-width: 375px) {
      grid-template-columns: repeat(auto-fill, 100%);
      grid-column-gap: 4%;
      margin-top: calc(68px + 4%);
      padding: 0 4% 0 4% ;
  }
}
`;

const Container = styled.div`
max-width: 1080px;
margin: 0 auto;
`;

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],

  };
  getMovies = async () => {

    const { data: { results: movies } } = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=f435a5abcaf2c609381060520436d200&language=ko-KR&page=2")
    this.setState({ movies, isLoading: false })

  };
  componentDidMount() {
    setTimeout(() => {
      this.getMovies();
    }, 1000);

  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <Container>
          {isLoading ? <Loading /> : (
            <Movies>
              {
                movies.map(movie => {
                  return <Movie
                    key={movie.id}
                    id={movie.id} title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={imgUrl + movie.poster_path} overview={movie.overview} backImage={backUrl + movie.backdrop_path} genres={movie.genre_ids}
                  />
                })
              }
            </Movies>
          )}
        </Container>
      </>

    )


  }
}

export default Home;
