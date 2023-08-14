import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const changeBg = (word) =>
  {
    if(word==='primary')
    {
      document.body.style.backgroundColor = '#00b4d8';
      showAlert(": Primary Colour has been enabled","success");
    }
    if(word==='success')
    {
      document.body.style.backgroundColor = 'green';
    }
    if(word==='danger')
    {
      document.body.style.backgroundColor = 'red';
    }
    if(word==='warning')
    {
      document.body.style.backgroundColor = 'yellow';
    }
    if(word==='secondary')
    {
      document.body.style.backgroundColor = 'grey';
    }
    if(word==='info')
    {
      document.body.style.backgroundColor = 'cyan';
    }
  }
  const showAlert = (message, type) =>
  {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>
    {
      setAlert(null);

    },3000);

  }
  const toggleMode = () =>
  {
    if(mode==='light')
    {  
      setMode('dark')
      document.body.style.backgroundColor = '#000';
      showAlert(": Dark Mode has been enabled","success");
    }
    else
    {  
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(": Light Mode has been enabled","success");

    }

  }
  return (
    <>
      <Router>
        <Navbar mode={mode} changeBg={changeBg} toggleMode={toggleMode}></Navbar>
      <Alert alert = {alert}/>

      <Routes>   
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode}></Textform>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
