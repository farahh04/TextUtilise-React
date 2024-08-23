import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = '';
    document.body.classList.add(`${newTheme}-theme`);
    showAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme has been enabled`, "success");
  }

  return (
    <>
      <Navbar title="TextUtilies" aboutText="About TextUtilies" theme={theme} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route  exact path="/about" element={<About />} />
          <Route  exact path="/textform" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme} />} />
          <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" theme={theme} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
