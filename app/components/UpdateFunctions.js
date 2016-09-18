var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var update = {
	
	handleSubmitCity: function (e) {
		e.preventDefault();
		this.context.router.push({
			pathname: '/forecast/:city',
			query: {
				city: this.state.city
			}
		});
	},
	handleUpdateCity: function (event) {
		this.setState({
			city: event.target.value
		});
	},
}

module.exports = update;