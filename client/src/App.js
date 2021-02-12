import { useState, useEffect } from 'react';
import './App.css';

const url=(path)=>{
  return(process.env.NODE_ENV==='development'?
  `http://localhost:3333${path}`: path)
};

function App() {
  const [ data, setData ] = useState("");
  useEffect(()=>{
    fetch(url('/api/'))
      .then(res=>{
        return res.json()
      }) .then(apiData=>{
        setData(apiData.data)
      });
  },[])
  return (
    <div className="App">
      <header className="App-header">
       {data}
      </header>
    </div>
  );
}

export default App;
