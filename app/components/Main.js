var React = require('react');

//First route, has main container for all other html elems
var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;