
import moment from "moment";

const ForecastDay = (props) => {
    const dataWeather = props.dataWeather;
    const imgDesc = `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png`;
    const date = moment.unix(dataWeather.dt).format('ddd DD');
    const today = moment().format('MM-DD');
    // console.log(date);
    // console.log(today);
    return (
        <div className="weather">

            <div className="desc">
                <img src={imgDesc} alt='' />
                <div>{date} - {dataWeather.weather[0].description}</div>
            </div>
            <div className="temp">
                {Math.round(dataWeather.temp.max)}<span><sup>o</sup>C</span> / {Math.round(dataWeather.temp.min)}<span><sup>o</sup>C</span>
            </div>
        </div>
    )
}
export default ForecastDay;