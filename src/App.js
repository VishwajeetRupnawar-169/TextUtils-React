import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");         //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);         //For alert box

  const showAlert = (message, type) => {             //Here, setAlert and showAlert are 2 different things. setAlert is a updating func of useState.
    setAlert({                                       //whereas showAlert is a function which tells how Alert works.
      msg: message,
      type: type                                     // we could keep message = message also as seen in type = type
    })
    setTimeout(() => {
      setAlert(null);                                // to set alert as null after 1.5 sec
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "TextUtils is amazing"           // setInterval is used to fire the func every 2 sec.
      }, 2000);                                           //but this is not a good user experience.
      setInterval(() => {
        document.title = "Install TextUtils now"
      }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }

  const router = createBrowserRouter([                      // Here we are using router features.
    {                                                       //Here we have added navbar in <></> b'coz we use it in router b'coz of destructuring error.
      path: "/",
      element: <><Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} /> {/*<Alert alert = {alert} />*/}<TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/></>,
    },                                                                                       //   |-->we can write alert here also for better purpose.
    {
      path: "/about",
      element: <><Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} /> <About/></>
    }
  ])


  return (
    <>
{/* <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} /> */}       {/* {mode} refers to useState in Navbar and {toggleMode} 
                                                                            refers to arrfunc in app.js and both acts as props in navbar.js.  
                                                                            Here we have commented it b'coz we use it in router b'coz of destructuring error.*/}


<RouterProvider router = {router} />            {/*here we are calling router and passing router as props */}
<Alert alert = {alert} />
<div className="container my-3">     


  {/* <TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/> */}
  {/* <About/> */}
</div>
    </>
  );
}

export default App;
