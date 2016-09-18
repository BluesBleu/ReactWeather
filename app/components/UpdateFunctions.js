var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//functions that the navbar needs to function
var update = {

	//when user hits submit button
	handleSubmitCity: function (e) {

		e.preventDefault();
		
		//change routes, pass query object into new route
		this.context.router.push({
			pathname: '/forecast/:city',
			query: {
				city: this.state.city
			}
		});
	},

	//when user changes the input box
	handleUpdateCity: function (event) {

		//set state that calls this function
		this.setState({
			city: event.target.value
		});
	},
}

module.exports = update;