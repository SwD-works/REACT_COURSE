
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
//import {
//BrowserRouter as Router,
//Routes,
//Route,
//Link}
//from "react-router-dom";

function App() {
  const [mode,setMode] =useState('light');
  const [alert,setalert] =useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
    setalert(null);
    } ,3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'MY-APP -Dark Mode';
    }
    else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
       document.title = 'MY-APP -Light Mode';
    }
  }
  return (
    <>
  {/*<Router>*/}
    <Navbar title="MY_APP" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      {/*<Routes>
        <Route path="/about" element={<About />} />*/}
        {/*<Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />*/}
      {/*</Routes>*/}
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
    </div>
  {/*</Router>*/}
  </>
);
}

export default App;
