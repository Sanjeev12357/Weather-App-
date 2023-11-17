import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp(){

    const [weatherInfo, setweatherInfo] = useState({
        city:"WonderLand",
        feelslike:24.84,
        temp:25.09,
        tempMin:25.23,
        tempMax:23.21,
        humidity:47,
        weather:"haze"
    });

    let updateInfo=(result)=>{
        setweatherInfo(result);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by ❤️</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}