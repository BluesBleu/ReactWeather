var React = require('react');

//components
var Home = require('../components/Home');
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');

//HomeContainer that shows frontpage
var HomeContainer = React.createClass({

	//needed to pass data to new route
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	//setState variable to hold city data
	getInitialState: function () {
		return {
			city: ''
		}
	},
	render: function() {
		return (

			<div style={homeStyle}>

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

//background of homepage
var homeStyle = {
	backgroundImage: "url('app/images/pattern.svg')",
  backgroundSize: 'cover'
};

module.exports = HomeContainer;