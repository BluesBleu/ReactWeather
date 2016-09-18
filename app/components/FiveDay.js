var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utils/conversions');
var getDate = utils.getDate;

var styles = {
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

//component to build the 5 day forecastcontainer
function FiveDay (props) {

  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div style={styles.dayContainer} onClick={props.onDayClick}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
    </div>
  )
}


FiveDay.propTypes = {
  //single day to build component
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  //function when a day is clicked
  onDayClick: PropTypes.func,
}

module.exports = FiveDay;