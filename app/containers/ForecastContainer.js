var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

//components
var Navbar = require('../components/Navbar');
var Forecast = require('../components/Forecast');
var weatherHelper = require('../utils/weatherHelper');
var Navbar = require('../components/Navbar');
var UpdateFunctions = require('../components/UpdateFunctions');

//Forecast Container that shows 5 day forecast
var ForecastContainer = React.createClass({

	//need for new search, passes data to new route
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

	//grabs 5 day forecast from API, sets proper states
	componentDidMount: function () {
	  weatherHelper.getWeatherArray(this.props.location.query.city)
	    .then(function (data) {
	    	this.setState({
	    		isLoading: false,
	    		weatherDays: data.data.list
	    	})
	    }.bind(this))
	},

	//event where a specific day is clicked, pass state into new route
	handleDayClick: function(dayInfo) {
		var setCity = this.props.location.query.city;
		this.context.router.push({
      pathname: '/detail/:city',
      state: {
        dayStats: dayInfo,
        city: setCity
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