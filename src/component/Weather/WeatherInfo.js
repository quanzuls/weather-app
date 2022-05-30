import React, { useState, useEffect } from "react";
import axios from "axios";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCloudSun, faWind } from "@fortawesome/free-solid-svg-icons";
import Forecast from "./Forecast";

const WeatherInfo = (props) => {

    const [data, setData] = useState({});
    const [country, setCountry] = useState('');
    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('.');
    const [imgDesc, setImgDesc] = useState('');
    const [speed, setSpeed] = useState(0);
    const [cloud, setCloud] = useState(0);
    const date = new Date().toLocaleString();

    useEffect(() => {
        if (props.keyword !== '') {
            displayData();
        }

    }, [props.keyword])

    const displayData = async () => {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.keyword}&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25&lang=vi`);
        if (res && res.data) {
            setData(res.data);
            setCountry(res.data.sys.country);
            setTemp(res.data.main.temp);
            setDesc(res.data.weather[0].main);
            if (res.data && res.data.wind) { setSpeed(res.data.wind.speed) }
            if (res.data && res.data.clouds) { setCloud(res.data.clouds.all) }
            setImgDesc(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
            props.setWtStatus(res.data.weather[0].main);
        }

    }

    return (

        <div className="content">
            <h1 className="name">
                <span className="city">{data.name}</span>
                <span>,</span>
                <span className="country">{country}</span>
            </h1>
            {/* <p className="time">{date}</p> */}
            <div className="temperature">
                <div className="value">{Math.round(temp)}<span><sup>o</sup>C</span></div>
            </div>
            <div className="short-desc">
                <div className="desc">{desc}</div> </div>
            <div className="more-desc">
                <div className="visibility">
                    <FontAwesomeIcon icon={faEye} />
                    <span>{data.visibility}{' (m)'}</span>
                </div>
                <div className="wind">
                    <FontAwesomeIcon icon={faWind} />
                    <span>{speed}{' (m/s)'}</span>
                </div>
                <div className="cloud">
                    <FontAwesomeIcon icon={faCloudSun} />
                    <span>{cloud}{' (%)'}</span>
                </div>
            </div>
            <Forecast
                cityName={props.keyword}
            />
        </div>




    )
}
export default WeatherInfo;