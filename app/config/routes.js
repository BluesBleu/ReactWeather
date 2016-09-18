var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home')
var ForecastContainer = require('../containers/ForecastContainer');
var FutureContainer = require('../containers/FutureContainer');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='forecast/:city' component={ForecastContainer} />
			<Route path='detail/:city' component={FutureContainer} />
		</Route>
	</Router>
);

module.exports = routes;