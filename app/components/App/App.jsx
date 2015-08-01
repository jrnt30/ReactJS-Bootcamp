'use strict';

import './_App.scss';

import React from 'react';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import { getMovies } from '../../util/api';

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    getMovies().then((movies) => {
      movies = movies.movies;
      this.setState({movies});
    });
  }

  render() {
    return (
      <div className={'app'}>
        <Header />
        <MovieList movies={this.retrieveMovies()}/>
      </div>
    );
  }

  retrieveMovies() {
    return this.state.movies || [];
  }
}
