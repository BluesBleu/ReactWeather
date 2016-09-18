var React = require('react');
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');

var DetailsContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			city: ''
		}
	},
	render: function () {
		return (
			<div>
				<Navbar
					onSubmitCity={UpdateFunctions.handleSubmitCity.bind(this)}
					onUpdateCity={UpdateFunctions.handleUpdateCity.bind(this)}
					city={this.state.city} />
			
				WOAH MAN!!!!
			</div>
		)
	}
});

module.exports = DetailsContainer;