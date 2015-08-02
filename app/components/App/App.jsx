'use strict';

import './_App.scss';

import React from 'react';
import _ from 'lodash';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import MoviesModel from '../../models/movies';
import { getMovies } from '../../util/api';

export default class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      movies: []
    };
    this.moviesModel = new MoviesModel();
  }

  componentDidMount() {
    getMovies().then((movies) => {
      this.moviesModel.movies = movies.movies;
      this.setState({movies:this.moviesModel.movies});
    });
  }

  render() {
    return (
      <div className={'app'}>
        <Header sort={this.sortMovies.bind(this)}
                search={this.searchMovies.bind(this)}
                reset={this.reset.bind(this)}/>
        <MovieList movies={this.retrieveMovies()}/>
      </div>
    );
  }

  retrieveMovies() {
    return this.state.movies || [];
  }

  reset() {
    this.setState({movies: this.moviesModel.movies});
  }

  searchMovies(key) {
    let searchResults = this.moviesModel.getBySearch(key);
    this.setState({movies: [searchResults]});
  }

  sortMovies(key) {
    let sorted = this.moviesModel.getSorted(key);
    this.setState({movies: sorted});
  }
}
