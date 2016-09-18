var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navbar = require('./Navbar')
var PropTypes = React.PropTypes;

function Home (props) {
	return (
		<div style={divStyle}>
			<h1 style={h1Style}> Enter a City and State </h1>
			<form onSubmit={props.onSubmitCity}>
    		<div className="form-group">
  				<input 
  					type="text" 
  					className="input-sm"
  					placeholder='San Francisco, California'
  					value={props.city}
  					onChange={props.onUpdateCity} >
  				</input>
				</div>
				<button type="submit" className="btn btn-success"> Get Weather</button>
			</form>
		</div>
	)
}

var divStyle = {
	padding: '400px',
	textAlign: 'center',
	verticleAlign: 'middle',
}

var h1Style = {
	fontSize: 50,
  color: 'white',
  fontWeight: 100
}

Home.propTypes = {
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired,
}

module.exports = Home;