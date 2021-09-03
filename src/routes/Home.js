import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

import "./Routes.css";
import "../Reset.css";
const imgUrl = "https://image.tmdb.org/t/p/w500"
const backUrl = "https://image.tmdb.org/t/p/original"



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
        <section className="container">
          {isLoading ? <div className="loader">
            <span className="loader_text">
              ...loading
            </span>
          </div> : (
            <div className="movies">
              {
                movies.map(movie => {
                  return <Movie
                    key={movie.id}
                    id={movie.id} title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={imgUrl + movie.poster_path} overview={movie.overview} backImage={backUrl + movie.backdrop_path} genres={movie.genre_ids}
                  />
                })
              }
            </div>
          )}
        </section>
      </>

    )


  }
}

export default Home;
