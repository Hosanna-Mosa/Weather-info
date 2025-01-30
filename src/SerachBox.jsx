// import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

const SerachBox = () => {
  return (
    <div className="SerachBox">
      <Typography variant="h3" style={{color:"#000"}} gutterBottom>
        Weather App
      </Typography>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <br />
      <br />
      <Button variant="contained" size="large" startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
};

export default SerachBox;
