import { useState, useEffect } from 'react';
import './App.css';

const url=(path)=>{
  return(process.env.NODE_ENV==='development'?
  `http://localhost:3333${path}`: path)
};

function App() {
  const [ data, setData ] = useState({greeting:'',poem:''});
  useEffect(()=>{
    fetch(url('/api/'))
      .then(res=>{
        return res.json()
      }) .then(apiData=>{
        setData({greeting:apiData.greeting, poem:apiData.poem} )
      });
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <h1>{data.greeting}</h1> 
      <h2>{data.poem}</h2>
      </header>
    </div>
  );
}


export default App;
