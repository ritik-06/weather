import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Earth-616",
        feels_like: 898,
        temp: 11,
        temp_min: 21,
        temp_max: 47,
        humidity: 43,
        weather: "haze",
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather app by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}