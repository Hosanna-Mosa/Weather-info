import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import downloadImg from "./download.jpeg"
import { useState } from "react";


export default function InfoBox(props) {
let check = 5;
  console.log("InfoBox");
  console.log();
  const data = props.details;

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={downloadImg}
          
          alt="green "
        />
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          {data.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <h3>Temperture : {data.temp}</h3>
            <h3>Feels like : {data.feels_like}</h3>
            <h3>Humidity : {data.humidity}</h3>
            <h3>Temp-min : {data.temp_min}</h3>
            <h3>Temp-max : {data.temp_max}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
