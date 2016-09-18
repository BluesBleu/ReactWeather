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
    paddingTop: 100,
    height: 230
  }
}

//Detail component for container, displays the single day weather details
function Details (props) {

  //gather strings to display
  var date = getDate(props.weatherDay['dt']);
  var icon = props.weatherDay.weather[0].icon;
  var conditions = props.weatherDay.weather[0]['description'];
  var minTemp = 'min temp: ' + props.weatherDay.temp['min'];
  var maxTemp = 'max temp: ' + props.weatherDay.temp['max'];
  var humidity = 'humidity: ' + props.weatherDay['humidity'];

  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 style={styles.subheader}>{date}</h2>
      <br/>
      <h2 style={styles.subheader}>{props.setCity}</h2>
      <h2 style={styles.subheader}>{conditions}</h2>
      <h2 style={styles.subheader}>{minTemp}</h2>
      <h2 style={styles.subheader}>{maxTemp}</h2>
      <h2 style={styles.subheader}>{humidity}</h2>
    </div>
  )
}

Details.propTypes = {
  //single day info to build strings from
  weatherDay: PropTypes.object.isRequired,
  //city to build string 
  setCity: PropTypes.string.isRequired
}

module.exports = Details;