import {useState, useEffect} from 'react';

import './App.css';


const App = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const [result, setResult] = useState();
    
    useEffect(() => {
         let getResource = async () => {
         let res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
         let response = await res.json()
         setData(response)
      };
      getResource();
    }, [])

    const changeValue = (e) => {
        setValue(value => e.target.value)
    }

    const convertToValute = (currency) => {
        let res = (value / currency).toFixed(2);
        setResult(result => res)
    }
  
      return (
        
        <div class="app">
            <form class='input'>
                <input onChange={changeValue} type="number" placeholder="Введите сумму"/>
            </form>
            <div className="counter">{result}</div>
            <div className="controls">
                <button onClick={() => convertToValute (data.Valute.USD.Value)}>USD</button>
                <button onClick={() => convertToValute (data.Valute.EUR.Value)}>EUR</button>
                <button onClick={() => convertToValute (data.Valute.AED.Value)}>AED</button>
            </div>
        </div>
      )
  }

export default App;
