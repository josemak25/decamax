import React, { Component } from 'react';
import styled from 'styled-components';
import { MovieImage } from './movie';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

export default class MovieDetails extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const API_KEY = '582976f1cd93b7243478f54d1f4fc217';
      const MOVIE_ID = this.props.match.params.id;
      const URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}`;
      const response = await fetch(URL);
      const movie = await response.json();

      this.setState({ movie });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <MovieWrapper
        style={{
          backgroundImage: `url(
            ${BACKDROP_PATH}/${movie.poster_path}
          )`
        }}
      >
        <MovieInfo>
          <Overdrive id={movie.id}>
            <MovieImage
              age
              src={`${POSTER_PATH}/${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div>
            <h1 className="movie-details">{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background-size: cover;
  background-image: no-repeat;
`;

const MovieInfo = styled.div`
  background: #fff;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
