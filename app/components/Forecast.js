var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var DayItem = require('../components/DayItem');

function CastUI (props) {
  return (
		<div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{props.city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {props.weatherDays.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} onDayClick={props.onDayClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
	return (
		<div>
			{
				props.isLoading === true
				? <h1 style={styles.header}> Just a moment </h1>
				: 
			<CastUI
				city={props.city}
				weatherDays={props.weatherDays}
				onDayClick={props.onDayClick} />
			}
		</div>
	)
}

Forecast.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	weatherDays: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	onDayClick: PropTypes.func.isRequired
}

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  }
}

module.exports = Forecast;