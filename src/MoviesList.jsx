import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './movie';

export default class Movieslist extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const API_KEY = '582976f1cd93b7243478f54d1f4fc217';
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
      const response = await fetch(URL);
      const movies = await response.json();

      this.setState({ movies: movies.results });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <StyledMovieList>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </StyledMovieList>
    );
  }
}

const StyledMovieList = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
