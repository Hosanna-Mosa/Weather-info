// import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const SerachBox = () => {
  const [value, setValue] = useState("");
 

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b010b23c8a55d6b005c9dcd8f546efec";
  
  const getWeatherInfo = async () =>{
    const response =  await fetch(`${API_URL}?q=${value}&appid=${API_KEY}`);
    const jsonResponse  = await response.json();
    // console.log(jsonResponse.main);
    let resultfinal = {
      temp : jsonResponse.main.temp,
      feels_like : jsonResponse.main.feels_like,
      humidity : jsonResponse.main.humidity,
      pressure : jsonResponse.main.pressure,
      temp_max : jsonResponse.main.temp_max,
      temp_min : jsonResponse.main.temp_min
    };
    
    
  }

  

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSumbit = (eve) => {
    eve.preventDefault();
    setValue("");
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
          label="Filled"
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
     
    </div>
  );
};

export default SerachBox;
