import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ab35a0be8caf55da5f7da38de7609669";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&unit=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            let result={
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather:  jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    }

    let handleChange = (evt)=>{
        setCity(evt.target.value);
        setError(false);
    };
    let handleSubmit = async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    }
    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" 
                required value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
        </form>
        </div>
    )
}