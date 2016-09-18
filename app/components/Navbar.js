var React = require('react');
var PropTypes = React.PropTypes;

function Navbar (props) {
  return (
    <div>
    	<nav className="navbar navbar-inverse">
    		<div className="container-fluid">
    			<div className="navbar-header">
    				<h1 className="navbar-brand">React Weather</h1>
    			</div>
    			<ul className="navbar-form navbar-right">
    				<form onSubmit={props.onSubmitCity}>
    					<div className="form-group">
  							<input 
  								type="text" 
  								className="form-control"
  								placeholder='San Francisco, California'
  								value={props.city}
  								onChange={props.onUpdateCity}>
  							</input>
							</div>
							<button type="submit" className="btn btn-success"> Get Weather</button>
						</form>
    			</ul>
    		</div>
    	</nav>
    </div>
  )
}

Navbar.propTypes = {
	onSubmitCity: PropTypes.func.isRequired,
	onUpdateCity: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired,
}

module.exports = Navbar;