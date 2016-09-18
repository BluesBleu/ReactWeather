var React = require('react');
var Navbar = require('./Navbar')
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home () {
	return (
		<Navbar>
			<h1> TESTING </h1>
		</Navbar>
	)
}

module.exports = Home;