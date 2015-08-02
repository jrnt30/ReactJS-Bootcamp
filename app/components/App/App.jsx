'use strict';

import './_App.scss';

import React from 'react';
import _ from 'lodash';
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
        <Header sort={this.sortMovies.bind(this)}/>
        <MovieList movies={this.retrieveMovies()}/>
      </div>
    );
  }

  retrieveMovies() {
    return this.state.movies || [];
  }

  sortMovies(key) {
    let sorted = _.sortBy(this.state.movies, (movie) => {
      return movie[key];
    });

    this.setState({movies: sorted});
  }
}
