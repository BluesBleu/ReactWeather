var React = require('react');

function Navbar (props) {
  return (
    <div className="col-md-6">
    	<h1> React Weather </h1>
    	{props.children}
    </div>
  )
}

module.exports = Navbar;