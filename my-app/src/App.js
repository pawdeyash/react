import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [Text , setText] = useState("");

  function changeHolder(event) {
    // console.log(event.target);
    setText(event.target.value)
  }
  return (
    <div className="App">
      <form>
        <input type="text" 
        placeholder='first name'
        onChange={changeHolder}
        />
      </form>
    </div>
  );
}

export default App;

