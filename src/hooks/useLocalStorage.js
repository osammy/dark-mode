import React, {useState} from 'react';
const useLocalStorage = (key,initialValue) => {

    const data = localStorage.getItem(key);
    const [darkMode, setDarkmode] = useState(data || initialValue);
  
    
    const setMode = (value) => {
      setDarkmode(value);
        localStorage.setItem(key,JSON.stringify(value))
    }
  
    return [darkMode, setMode]
  }

  export default useLocalStorage;