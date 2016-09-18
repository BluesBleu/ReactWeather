var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//components
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');
var Details = require('../components/Details');

//Container for the Details of a specific day
var DetailsContainer = React.createClass({

	//need this to pass in city for new search
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	//set state to pass onto other routes
	getInitialState: function () {
		return {
			city: '',
			dayInfo: this.props.location.state.dayStats,
			setCity: this.props.location.state.city
		}
	},
	render: function () {
		return (
			<div>
			
				<Navbar
					onSubmitCity={UpdateFunctions.handleSubmitCity.bind(this)}
					onUpdateCity={UpdateFunctions.handleUpdateCity.bind(this)}
					city={this.state.city} />
			
				<Details
					weatherDay={this.state.dayInfo}
					setCity={this.state.setCity} />
			</div>
		)
	}
});

module.exports = DetailsContainer;