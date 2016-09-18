var React = require('react');
var Home = require('../components/Home');
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');

var HomeContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			city: ''
		}
	},
	render: function() {
		return (
			<div>
				<Navbar
					onSubmitCity={UpdateFunctions.handleSubmitCity.bind(this)}
					onUpdateCity={UpdateFunctions.handleUpdateCity.bind(this)}
					city={this.state.city} />
				<Home 
					onSubmitCity={UpdateFunctions.handleSubmitCity.bind(this)}
					onUpdateCity={UpdateFunctions.handleUpdateCity.bind(this)}
					city={this.state.city} />
			</div>
		)
	}
});

module.exports = HomeContainer;