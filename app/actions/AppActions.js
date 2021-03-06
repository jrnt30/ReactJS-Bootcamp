import AppDispatcher from '../dispatcher/AppDispatcher';
import {
  getMovies, searchMovies
}
from '../util/api';
import {
  MOVIES_GET_SUCCESS,
  FIND_MOVIE_GET_SUCCESS,
  SORT_MOVIES_BY_KEY,
  RATE_MOVIE
}
from '../constants/AppConstants';

export default {

  fetchMovies() {
      getMovies().then((movies) => {
        AppDispatcher.dispatch({
          data: movies,
          actionType: MOVIES_GET_SUCCESS
        });
      });
    },

    searchMovie(title) {
      searchMovies(title).then((movie) => {
        AppDispatcher.dispatch({
          data: [movie],
          actionType: FIND_MOVIE_GET_SUCCESS
        });
      });
    },

    sortMovies(key) {
      AppDispatcher.dispatch({
        data: key,
        actionType: SORT_MOVIES_BY_KEY
      });
    },

    rateMovie(title, rating) {
      AppDispatcher.dispatch({
        data: {
          title, rating
        },
        actionType: RATE_MOVIE
      });
    }

};
