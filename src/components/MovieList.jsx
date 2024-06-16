import React from 'react';
import MovieCard from './MovieCard';
import movies from './movies';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = () => {
  return (
    <Container>
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} sm={12} md={6} lg={4}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;