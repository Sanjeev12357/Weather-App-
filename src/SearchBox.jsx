import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import { Button } from '@mui/material'
import "./SearchBox.css"
const SearchBox = ({updateInfo}) => {
    
    
    let[city,setcity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="9f98408b714e1037d37ded0c535506db"

    let getWeatherInfo=async()=>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse =await response.json();
      
       let result={
        city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
       }
       console.log(result);
       return result;
    };
   

    let handleChange=(event)=>{
        setcity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);

    }
  return (
    <div className='SearchBox'>
    <h3>SearchBox</h3>
    <form >
    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
    <br/>

    <Button variant='contained' type='submit' onClick={handleSubmit}>Send</Button>
    </form>
    </div>
  )
}

export default SearchBox