// import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const SerachBox = () => {
 

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
