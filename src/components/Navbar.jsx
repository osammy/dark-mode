import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {

  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode('darkMode',false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

// const useLocalStorage = (key, initialValue) => {
//   // we need state
//   // the initial value needs to be the value in local storage for given key
//   // and if it's not there, needs to be "initialValue"
//   let value = JSON.parse(localStorage.getItem(key));
//   if(!value) value = initialValue;
//   const [storedValue, setStoredValue] = useState(value);


//   // let's set the new value
//   const setValue = value => {
//     setStoredValue(value); // in state
//     localStorage.setItem(key, JSON.stringify(value)); // in ls
//   };

//   return [storedValue, setValue];
// };

export default Navbar;
