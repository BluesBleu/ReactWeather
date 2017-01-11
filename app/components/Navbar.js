var React = require('react');
var PropTypes = React.PropTypes;

var divStyle = {
  color: 'white',
  fontSize: '50px'
}

//navbar component that all pages will have
function Navbar (props) {
  return (
    <div>
    	<nav style={{background: '#FF8000'}} className="navbar">
    		
        <div className="container-fluid">
    			
          <div className="navbar-header">
    				<h1 style={divStyle} className="navbar-brand">What4Cast</h1>
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

							<button style={{margin:17}} type="submit" className="btn btn-success"> Get Weather</button>
						
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
