import { useState , useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SerachBox from './SerachBox';
import React from 'react';
import InfoBox from './InfoBox';
import DisplayMessage from './DisplayMessage';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
 const [data , setData] = useState(null);
 const [showMessage, setShowMessage] = useState(false);
    
  const [loader,setLoader] = useState(false);
    const message = "Hello from Props!";
  
  
  
    
  return (
    <div >
      <SerachBox ongetData = {setData} setLoader={setLoader} setMsg = {setShowMessage} />
      {data?<InfoBox details={data} setLoader={setLoader} />
      :null}
      {showMessage?<h3>No data Found</h3>:null}
      {loader?<Box sx={{ display: 'flex'  }} id="loader">
      <CircularProgress />
      </Box>:null}
  

    </div>
  )
}

export default App;
