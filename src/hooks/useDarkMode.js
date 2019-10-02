import React from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (key,initialValue) => {

    const [darkMode, setMode] = useLocalStorage(key,initialValue);
  
    const setDarkmodeUpdated = (value) => {
        setMode(value);
        document.body.classList.toggle('dark-mode')
    }
  
    return [darkMode, setDarkmodeUpdated] ;
  
  };

export default useDarkMode;
