import React from 'react';
import _ from 'lodash';
import './_MovieTile.scss';
import AppActions from '../../actions/AppActions';

const MAX_STARS = 5;

export default class MovieTile extends React.Component {
	constructor(props, ...args) {
		super(props, ...args);
		this.state = {
			stars: _.get(props, 'movie.rating', 0)
		};
		this.retrieveRating.bind(this);
	}

	render() {
		//TODO: Update href
		return (<li className="movie-tile-container item">
				<div className="bg-img"
							style={{'backgroundImage': `url('img/${this.props.movie.cover}')`}}></div>
				<a href={'/movies/' + this.props.movie.title}>
					<div className="content">
						<h2>{this.props.movie.title}</h2>
						<div className="stars">
							{
								this.retrieveRating()
							}
						</div>
					</div>
				</a>
			</li>);
	}

	retrieveRating() {
		return _.map(_.range(MAX_STARS), (idx) => {
			return idx < this.state.stars ?
							<i key={idx} className="fa fa-star"
									data-rating={idx}
									onClick={this.updateRating.bind(this)}/>
							:
							<i key={idx} className="fa fa-star-o"
									data-rating={idx}
									onClick={this.updateRating.bind(this)}/>;
			});
	}

	updateRating(e) {
		e.preventDefault();
		let stars = parseInt(e.target.attributes['data-rating'].value) + 1;
		this.setState({stars});
		AppActions.rateMovie(this.props.movie.title, stars);
	}
}


MovieTile.defaultProps = {
	movie: {}
};

MovieTile.propTypes = {
	movie: React.PropTypes.object
};
