import './App.css';
import ButtonCSS from './initline';
import { useState } from 'react';

function App() {

  const [data,setData] = useState([{id:'1234',cmark:false,dmark:false,rmark:false},{id:'5678',cmark:false,dmark:false,rmark:false},{id:'91011',cmark:false,dmark:false,rmark:false}])

  function update_state(id,value,item){
  
   console.log(id,value,item)
    let array_index =  data.findIndex((line) => {
      return line.id === id 
    })
    let newstate = [...data]
    newstate[array_index][item] = value
    setData(newstate)

  }

  return (
    <div className="App">
      {data.map(record => <><ButtonCSS buttoncss={record} update_state={update_state}></ButtonCSS><br/></>)}
    </div>
  );
}

export default App;
