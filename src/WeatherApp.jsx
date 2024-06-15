import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "WOnderland",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",    
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }



    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Aryaxn</h2>

            <SearchBox  updateInfo={updateInfo}/>    
            <InfoBox info={weatherInfo}/>
        </div>
    );
}  