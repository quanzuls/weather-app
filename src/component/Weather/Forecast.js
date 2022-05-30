import ForecastDay from "./ForecastDay";
import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
const Forecast = (props) => {
    const [forecastDays, setForecastDays] = useState({});
    useEffect(() => {
        if (props.cityName !== '') {
            getForecast();
        }
    }, [props.cityName])

    const getForecast = async () => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.cityName}&cnt=3&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25&lang=vi`);
        if (res && res.data) {
            setForecastDays(res.data.list);
        }

    }
    return (
        <div className="forecast-container">
            {!_.isEmpty(forecastDays) && forecastDays.length > 0 &&
                forecastDays.map((item, index) => {
                    return (
                        <div key={`forecast-day-${index}`}>
                            <ForecastDay
                                dataWeather={item}
                            />

                        </div>

                    )
                })
            }


        </div>
    )
}
export default Forecast;