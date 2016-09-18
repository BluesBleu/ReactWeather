var React = require('react');
var Navbar = require('../components/NavBar');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');

var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			isLoading: true,
			weatherDays: [],
			city: ''
		}
	},
	componentDidMount: function () {
		console.log("running once");
	  weatherHelper.getWeatherArray(this.props.location.query.city)
	    .then(function (data) {
	    	this.setState({
	    		isLoading: false,
	    		weatherDays: data.data.list
	    	})
	    }.bind(this))
	},
	handleDayClick: function(dayInfo) {
		this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        dayStats: dayInfo
      }
    })
	},
	render: function () {
		return (
			<div>	
				<Navbar
					onSubmitCity={UpdateFunctions.handleSubmitCity.bind(this)}
					onUpdateCity={UpdateFunctions.handleUpdateCity.bind(this)}
					city={this.state.city} />

				<Forecast 
					isLoading={this.state.isLoading}
					weatherDays={this.state.weatherDays}
					onDayClick={this.handleDayClick}
					city={this.state.city}
				/>
			</div>
		)
	}
});

module.exports = ForecastContainer;