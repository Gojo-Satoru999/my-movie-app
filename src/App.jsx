// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const initialMovies = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller',
    posterURL: 'https://example.com/inception.jpg',
    rating: 9
  },
  {
    title: 'Interstellar',
    description: 'A journey through space and time',
    posterURL: 'https://example.com/interstellar.jpg',
    rating: 8
  }
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? movie.rating >= rating : true)
      );
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'Description of the new movie',
      posterURL: 'https://example.com/newmovie.jpg',
      rating: 7
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;