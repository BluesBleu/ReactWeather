var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Forecast (props) {
	return props.isLoading === true
	? <p> Just a moment </p>
	: <div>




		</div>
}

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	
}
module.exports = Forecast;