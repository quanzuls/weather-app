import React, { useState, useEffect } from "react";
import './Weather.scss';
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Rain from '../../assets/images/rain.png';
import Green from '../../assets/images/green.png';
import Cloud from '../../assets/images/cloud.png';
import Thunderstorm from '../../assets/images/cloud.png';

/**React hook with function component */
const Weather = () => {
    const [keyword, setKeyword] = useState('Ha noi');
    const [bg, setBg] = useState(Green);
    const css = {
        backgroundImage: `url(${bg})`
    };
    const [wtStatus, setWtStatus] = useState('');
    useEffect(() => {
        setBg(Green)
        if (wtStatus === 'Rain') {
            setBg(Rain)
        }
        if (wtStatus === 'Clouds') {
            setBg(Cloud)
        }
        if (wtStatus === 'Thunderstorm') {
            setBg(Rain)
        }
    }, [wtStatus])

    return (
        <div id="weather-container" >
            <div id="weather" style={css}>
                <Search
                    setKeyword={setKeyword}
                />
                <WeatherInfo
                    keyword={keyword}
                    setWtStatus={setWtStatus}
                />
            </div>
        </div>
    )
}
/**Class Component */
// class Weather extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             title: ""
//         }
//     }

//     async componentDidMount() {
//         let data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=lang son&units=metric&APPID=c10bb3bd22f90d636baa008b1529ee25`)
//         console.log(">>> check data", JSON.stringify(data));
//         this.setState({
//             title: data.data.name,
//         })

//     }
//     render() {
//         return (
//             <div>inside weather app name = {this.state.title}</div>
//         )


//     }
// }

export default Weather;