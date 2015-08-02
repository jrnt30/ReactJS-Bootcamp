import _ from 'lodash';

export default class movies {
	//no constructor on purpose 

	get movies() {
		return _.clone(this._movies);
	}

	set movies(movies) { //only way to modify movies
						 // could have used Symbols trick as well
		this._movies = movies;
	}

	getSorted(key) {
		let movies = this.movies;
		return _.sortBy(movies, (movie) => {
	      if(key === 'rating') {
	        return parseInt(movie[key])
	      }

	      return movie[key];
	    });
	}

	getBySearch(title) {
		let movies = this.movies;
		return _.findWhere(movies, {title});
	}
}