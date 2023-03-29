// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enable or not 
  const [alert, setAlert] = useState(null); // alert is a object 
  
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has benn enable", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has benn enable", "success");
    }

  }


  return (
   <>
    <Navbar title=" TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = 'Enter the text to analyze below' mode={mode}/>
    {/* <About/> */}

    </div>
       

   </>
  );
}

export default App;
