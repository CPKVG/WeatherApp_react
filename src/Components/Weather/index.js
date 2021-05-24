import React,{useState, useEffect} from 'react'
import axios from 'axios'

const FetchWeather = () => {
    const [city, setCity] = useState([]) 
    const [cityFromBtnClick, setCityFromBtnClick] = useState('Auckland') //default set to auckland

    const [Data, setData] = useState({
        Weather:'',
        Temperature:'',
        Low:'',
        High:'',
        Pressure:'',
        Humidity:''
    })
    
    const handleClick = () =>{
        setCityFromBtnClick(city)
    }
    
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityFromBtnClick}&appid={API_key}`)
            .then(res=>{
                let weatherdata = res.data.weather[0];
                let weathermain = res.data.main;
                // console.log(res)
                setData({
                    Weather:weatherdata.description,
                    Temperature:weathermain.temp,
                    Low:weathermain.temp_min,
                    High:weathermain.temp_max,
                    Pressure:weathermain.pressure,
                    Humidity:weathermain.humidity,
                })
            })
            .catch(err=>{
                console.log(err)
            })
    },[cityFromBtnClick])
    
    return (
        <div>
            <input type = "text" value = {city} onChange ={e => setCity(e.target.value)}/>
            <button type = "Button" onClick = {handleClick}>Enter</button>

            <div>Weather: {Data.Weather}</div>
            <div>Temperature: {Math.round(Data.Temperature - 273.15)}&#8451;</div> 
            <div>Low: {Math.round(Data.Low - 273.15)}&#8451;</div>
            <div>High: {Math.round(Data.High - 273.15)}&#8451;</div>
            <div>Pressure: {Data.Pressure}hPa</div>
            <div>Humidity: {Data.Humidity}%</div>
        </div>
    )

}
export default FetchWeather