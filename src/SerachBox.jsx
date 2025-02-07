// import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const SerachBox = ({ongetData,setLoader, setMsg}) => {
  const [value, setValue] = useState("");
  

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b010b23c8a55d6b005c9dcd8f546efec";
  
  const getWeatherInfo = async () =>{
    const response =  await fetch(`${API_URL}?q=${value}&appid=${API_KEY}&units=metric`);
    const jsonResponse  = await response.json();
    
    console.log(jsonResponse.main);
    if(jsonResponse.main){
    let resultfinal = {
      temp : jsonResponse.main.temp,
      feels_like : jsonResponse.main.feels_like,
      humidity : jsonResponse.main.humidity,
      pressure : jsonResponse.main.pressure,
      temp_max : jsonResponse.main.temp_max,
      temp_min : jsonResponse.main.temp_min,
      city : value
    };
    setLoader(false);
    ongetData(resultfinal);
    setMsg(false);
    }else{
      ongetData(null);
      setTimeout(() => {
        setLoader(false);
        setMsg(true);
      },5000);
    }
  
  }

  

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSumbit = (eve) => {
    eve.preventDefault();
    console.log(value);
    setValue("");
    ongetData({temp:null});
    setLoader(true);
    
    getWeatherInfo();
  };

  return (
    <div className="SerachBox">
      <form onSubmit={handleSumbit}>
        <Typography variant="h3" style={{ color: "#000" }} gutterBottom>
          Weather App
        </Typography>
        <TextField
          id="filled-basic"
          label="Search a City"
          variant="filled"
          value={value}
          onChange={handleInput}
        />
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          type="sumbit"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </form>
    <br/>
      <br/>
    
    </div>
  );
};

export default SerachBox;
