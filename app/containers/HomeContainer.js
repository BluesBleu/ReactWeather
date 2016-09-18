var React = require('react');
var Home = require('../components/Home');
var Navbar = require('../components/Navbar');

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			city: ''
		}
	},
	handleSubmitCity: function (e) {
		e.preventDefault();
		this.context.router.push('/forecast/' + this.state.city);
	},
	handleUpdateCity: function (event) {
		this.setState({
			city: event.target.value
		});
	},
	render: function() {
		return (
			<div>
				<Navbar
					onSubmitCity={this.handleSubmitCity}
					onUpdateCity={this.handleUpdateCity}
					city={this.state.city} />
				<Home 
					onSubmitCity={this.handleSubmitCity}
					onUpdateCity={this.handleUpdateCity}
					city={this.state.city} />
			</div>
		)
	}
});

module.exports = HomeContainer;