import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        typ: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#10365a';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'Text Format - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'Text Format - Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Format" aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}>
            <About />
          </Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Routes> */}
    {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
