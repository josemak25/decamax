import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
export default function Movie({ movie }) {
  return (
    <Link to={`/${movie.id}`}>
      <Overdrive id={movie.id}>
        <MovieImage
          src={`${POSTER_PATH}/${movie.poster_path}`}
          alt={movie.title}
        />
      </Overdrive>
    </Link>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const MovieImage = styled.img`
  box-shadow: 0 0 35px black;
  border-radius: 2px;
  cursor: pointer;
`;
